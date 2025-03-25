import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "neerajwdev@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const result = await fetch(
          `${process.env.DATABASE_URL}/v1/auth/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await result.json();
        console.log(data);
        if (
          data.message === "User not found with such email" ||
          "Password is incorrect"
        ) {
          return null;
        } else {
          return {
            id: data.data.id,
            name: data.data.name,
            email: data.data.email,
            role: data.data.role,
            profileCompleted: data.data.profileCompleted,
          };
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        console.log("started")
        const result = await fetch(
          `${process.env.DATABASE_URL}/v1/user/userInfo`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              email: profile.email,
              
            })
          }
        );
        console.log("result", result)
        if (!result) {
          fetch(`${process.env.DATABASE_URL}/v1/auth/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              name: profile.name,
              email: profile.email,
            }),
          });
        }
        return true;
      }

    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.profileCompleted = user.profileCompleted;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.profileCompleted = token.profileCompleted;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

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
        console.log("credentials", credentials);
        const { email, password } = credentials;
        const result = await fetch(`http://localhost:8383/v1/auth/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        console.log("result", result);
        const data = await result.json();
        console.log("data", data);
        if (!result.ok) {
          throw new Error(data.message);
        }
        return {
          id: data.userData.id,
          name: data.userData.name,
          email: data.userData.email,
          role: data.userData.role,
          profileCompleted: data.userData.profileCompleted,
        };
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
      console.log("google auth started");
      if (account.provider === "google") {
        const { email, name } = profile;
        console.log("profile", profile);

        await fetch(`http://localhost:8383/v1/auth/signup/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password: null,
          }),
        });
        return true;
      }
      return true;
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

import { Button } from "../components/ui/button";

import Hero from "../components/custom/Hero";
import Steps from "../components/custom/steps";
import { Testimonials } from "../components/custom/Testimonials";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import myself from "../../public/images/myself.jpg";
import X from "../../public/images/X.jpg";
import linkedin from "../../public/images/linkedin.png";
import FeaturedJobs from "../components/custom/FeaturedJobs";
import Header from "../components/custom/header";

const people = [
  {
    id: 1,
    name: "Neeraj bhatt",
    designation: "Web Developer",
    image: myself,
  },
  {
    id: 2,
    name: "Linkedin",
    image: linkedin,
  },
  {
    id: 3,
    name: "X",
    image: X,
  },
];
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}

      <main className="flex-1 px-4 md:px-8">
        {/* Hero Section */}
        <Hero />

        {/* Featured Jobs Section */}
        <FeaturedJobs />

        {/* Categories Section // dont think we need this section unneccesary */}
        {/* <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="flex flex-col gap-2 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Browse by Category
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore opportunities across different industries and
                specializations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Technology",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 1420,
                },
                {
                  name: "Healthcare",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 870,
                },
                {
                  name: "Finance",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 650,
                },
                {
                  name: "Marketing",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 920,
                },
                {
                  name: "Education",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 540,
                },
                {
                  name: "Design",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 320,
                },
                {
                  name: "Customer Service",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 760,
                },
                {
                  name: "Remote",
                  icon: <Briefcase className="h-6 w-6" />,
                  count: 1250,
                },
              ].map((category, index) => (
                <Link
                  href="#"
                  key={index}
                  className="flex flex-col items-center p-6 bg-background rounded-lg border transition-all hover:shadow-md hover:border-primary text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} jobs
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section> */}
        {/* <JobsByCategory  /> */}

        {/* How It Works Section */}
        {/* <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col gap-2 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                How JobConnect Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to find your dream job or the perfect candidate
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Create Your Profile
                      </h3>
                      <p className="text-muted-foreground">
                        Sign up and build your professional profile or company
                        page to get started.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Explore Opportunities
                      </h3>
                      <p className="text-muted-foreground">
                        Browse thousands of jobs or post positions if you're an
                        employer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Apply or Hire
                      </h3>
                      <p className="text-muted-foreground">
                        Submit applications to your preferred jobs or review
                        candidates as an employer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Connect and Succeed
                      </h3>
                      <p className="text-muted-foreground">
                        Interview, get hired, or find the perfect candidate to
                        join your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="How it works"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}
        <Steps />

        {/* Testimonials Section */}

        <Testimonials />

        {/* CTA Section */}
        <section className="py-14 md:pb-32 md:pt-10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-montserrat">
                Ready to Take the Next Step?
              </h2>
              <p className="text-zinc-500 max-w-2xl mx-auto font-poppins mb-8">
                Join thousands of professionals and companies on JobConnect
                today.
              </p>

              <div className="flex flex-col font-montserrat sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="px-8 bg-blue-700 hover:bg-blue-700/90 transform transition-all duration-300 ease-in"
                >
                  Find Jobs
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 border-1 border-zinc-300 hover:bg-[#2e1c2b] hover:text-white hover:border-zinc-300 transform transition-all duration-300 ease-in"
                >
                  For Employers
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#252422] text-white py-8 border-t px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold font-montserrat">JobX</h1>
            <p className="text-gray-300 mt-2 font-inter max-w-sm">
              Connecting talent with opportunity. Your career journey starts
              here.
            </p>
          </div>

          {/* Team / Social Section */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto gap-2">
            <span className="text-gray-300 font-medium font-montserrat">
              Genius behind this :{" "}
            </span>
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </footer>
    </div>
  );
}

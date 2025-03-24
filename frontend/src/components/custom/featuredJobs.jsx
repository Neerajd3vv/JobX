import React from "react";
import { Building2 , ChevronRight , ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";

function FeaturedJobs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col text-center mb-12">
          <h2 className="text-3xl mb-2 md:text-4xl font-bold font-montserrat">Featured Jobs</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-poppins">
            Discover opportunities from leading companies across various
            industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <div
              key={job}
              className="group border rounded-lg p-6 transition-all hover:shadow-md hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded bg-muted flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">
                      Senior Product Designer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      TechCorp Inc.
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Full-time
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  $80K-120K
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  Remote
                </span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  Design
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                Join our team to create exceptional user experiences for our
                flagship products. 5+ years of experience required.
              </p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  Posted 2 days ago
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className=" hover:bg-blue-700/90 hover:text-white transform transition-all duration-300 ease-in-out" 
                >
                  Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button  size="lg" className="bg-blue-700 hover:bg-blue-700/90 font-montserrat transform transition-all duration-300 ease-in" >
            View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJobs;

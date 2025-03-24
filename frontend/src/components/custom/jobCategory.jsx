import Link from "next/link"
import { Code, HeartPulse, LineChart, Megaphone, GraduationCap, Palette, HeadphonesIcon, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function JobsByCategory() {
  const categories = [
    {
      name: "Technology",
      icon: <Code className="h-6 w-6 text-primary" />,
      count: 1420,
      trending: true,
    },
    {
      name: "Healthcare",
      icon: <HeartPulse className="h-6 w-6 text-primary" />,
      count: 870,
      trending: true,
    },
    {
      name: "Finance",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      count: 650,
      trending: false,
    },
    {
      name: "Marketing",
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      count: 920,
      trending: false,
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      count: 540,
      trending: false,
    },
    {
      name: "Design",
      icon: <Palette className="h-6 w-6 text-primary" />,
      count: 320,
      trending: false,
    },
    {
      name: "Customer Service",
      icon: <HeadphonesIcon className="h-6 w-6 text-primary" />,
      count: 760,
      trending: false,
    },
    {
      name: "Remote",
      icon: <Globe className="h-6 w-6 text-primary" />,
      count: 1250,
      trending: true,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Browse by Category</h2>
         
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              href="#"
              key={index}
              className="group flex flex-col items-center p-6 bg-background rounded-xl border border-border transition-all hover:shadow-lg hover:border-primary hover:-translate-y-1 text-center"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {category.icon}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="font-medium">{category.name}</h3>
                  {category.trending && (
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      Trending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{category.count.toLocaleString()}</span> jobs
                </p>
              </div>
              <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View jobs →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            View all categories
          </Link>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, UserPlus, Search, Briefcase, Handshake } from "lucide-react"
import stepPlaceholderOne from "../../../public/images/step_placeholder.jpg"
import stepPlaceholderTwo from "../../../public/images/step_placeholder_2.jpg"
export default function Steps() {
  const containerRef = useRef(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const steps = [
    {
      number: 1,
      icon: <UserPlus className="h-5 w-5" />,
      title: "Create Your Profile",
      description: "Sign up and build your professional profile or company page to get started.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: 2,
      icon: <Search className="h-5 w-5" />,
      title: "Explore Opportunities",
      description: "Browse thousands of jobs or post positions if you're an employer.",
      color: "from-purple-500 to-pink-600",
    },
    {
      number: 3,
      icon: <Briefcase className="h-5 w-5" />,
      title: "Apply or Hire",
      description: "Submit applications to your preferred jobs or review candidates as an employer.",
      color: "from-amber-500 to-orange-600",
    },
    {
      number: 4,
      icon: <Handshake className="h-5 w-5" />,
      title: "Connect and Succeed",
      description: "Interview, get hired, or find the perfect candidate to join your team.",
      color: "from-emerald-500 to-teal-600",
    },
  ]

  return (
    <section className=" overflow-hidden py-16 md:py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col  text-center mb-16"
        >
          <h2 className="text-3xl mb-2 font-montserrat md:text-5xl font-bold ">
            How JobX Works
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-poppins ">
            Simple steps to find your dream job or the perfect candidate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={containerRef}
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`h-14 w-14 rounded-lg font-inter bg-gradient-to-br ${step.color} text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center justify-center">
                      {/* <span className="text-xs font-medium">STEP</span> */}
                      <span className="font-semibold">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-2 font-montserrat">{step.title}</h3>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                    <p className="text-zinc-600 font-poppins">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-70"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={stepPlaceholderTwo}
                  alt="How JobConnect works"
                  width={700}
                  height={600}
                  className="rounded-2xl object-cover w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60"
                  animate={{
                    opacity: [0.6, 0.4, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}


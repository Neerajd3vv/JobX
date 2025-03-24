"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import TestDp from "../../../public/images/testDp.jpg";
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    dp: TestDp,
    title: "Engineer at Google",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    dp: TestDp,
    title: "HR at Microsoft",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    dp: TestDp,
    title: "Software Engineer at Facebook",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    dp: TestDp,
    title: "Ux Designer at Apple",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    dp: TestDp,
    title: "Remote devops engineer",
  },
];

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-16 md:py-20">
      <div className="flex flex-col gap-2 text-center mb-12">
        <h2 className="text-3xl font-montserrat md:text-4xl font-bold">
          Success Stories
        </h2>
        <p className="text-zinc-500 font-poppins max-w-2xl mx-auto">
          Hear from job seekers and employers who found success with JobConnect
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

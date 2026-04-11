"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "What is Aplico and how does it work?",
    content:
      "Aplico is a job tracker app that helps you organize your entire job search. You can add applications, track their status, manage interviews, and keep notes—all in one simple dashboard.",
  },
  {
    value: "item-2",
    trigger: "Can I track jobs from different platforms?",
    content:
      "Yes, you can track applications from any source, including job boards, company websites, or referrals. Aplico keeps everything in one place so you never lose track.",
  },
  {
    value: "item-3",
    trigger: "Is Aplico free to use?",
    content:
      "Aplico offers a free version with all the core features you need to manage your job search. Additional features may be available with a premium plan.",
  },
  {
    value: "item-4",
    trigger: "How does Aplico help me stay organized?",
    content:
      "Aplico lets you clearly see all your applications, their status, upcoming interviews, and personal notes. This helps you stay focused, reduce stress, and manage your job search more effectively.",
  },
  {
    value: "item-5",
    trigger: "Can I use Aplico on multiple devices?",
    content:
      "Yes, you can access Aplico from different devices, so you can update your job applications anytime, anywhere without losing progress.",
  },
];
export default function SectionFAQ() {
  return (
    <section id="faq" className="pb-24 sm:pb-40">
      <SectionHeader
        title="Frequently Asked Question"
        description="Answers to common question about Aplico and its features. If you have any other qustions, please contact us."
      />
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-(--breakpoint-lg) mx-auto"
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-base">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

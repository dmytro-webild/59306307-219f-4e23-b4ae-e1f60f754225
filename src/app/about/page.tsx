"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Briefcase, BarChart3, Heart } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Service Area", id: "service-area" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "SERVICES",      items: [
        { label: "General Junk Removal", href: "/" },
        { label: "Yard Waste Removal", href: "/" },
        { label: "Construction Cleanouts", href: "/" },
        { label: "Get Free Quote", href: "mailto:info@goneinahaul.com?subject=Free%20Quote%20Request" },
      ],
    },
    {
      title: "COMPANY",      items: [
        { label: "About Us", href: "/about" },
        { label: "Service Area", href: "/service-area" },
        { label: "Reviews", href: "/" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CONTACT",      items: [
        { label: "Call: (951) 755-1234", href: "tel:+19517551234" },
        { label: "Email: info@goneinahaul.com", href: "mailto:info@goneinahaul.com" },
        { label: "Hours: 6am - 6pm Daily", href: "#" },
        { label: "Service 24/7 Available", href: "#" },
      ],
    },
    {
      title: "FOLLOW US",      items: [
        { label: "Facebook", href: "https://facebook.com/goneinahaul" },
        { label: "Instagram", href: "https://instagram.com/goneinahaul" },
        { label: "Nextdoor", href: "https://nextdoor.com" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLarge"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Gone in a Haul" navItems={navItems} />
      </div>

      <div id="about-story" data-section="about-story">
        <FeatureCardNineteen
          tag="OUR STORY"
          tagIcon={Briefcase}
          title="About Gone in a Haul"
          description="Founded by local entrepreneurs who believed junk removal should be fast, honest, and affordable."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "FOUNDED 2015",              title: "A Local Business Born from Community Need",              subtitle: "Starting with one truck and a vision",              description: "Gone in a Haul was founded by local entrepreneurs who believed junk removal should be fast, honest, and affordable. We started small—just one truck and a commitment to our community. Today, we're the most trusted junk removal company in the Inland Empire, serving thousands of satisfied customers.",              imageSrc: "http://img.b2bpic.net/free-photo/people-cleaning-garbage-from-nature_23-2149121324.jpg",              imageAlt: "professional junk removal team workers"},
            {
              id: 2,
              tag: "OUR MISSION",              title: "Removing Junk, Building Community",              subtitle: "Integrity, excellence, and environmental responsibility",              description: "Our mission is simple: remove your junk quickly, responsibly, and at fair prices. We're committed to serving our local community with integrity and excellence. Every job is an opportunity to demonstrate why Gone in a Haul is the choice of Inland Empire residents.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-collects-garbage-garbage-bags-park_1157-27387.jpg?_wi=1",              imageAlt: "before after junk removal transformation"},
            {
              id: 3,
              tag: "WHY LOCAL MATTERS",              title: "Supporting the Inland Empire",              subtitle: "Community-focused service you can trust",              description: "As a locally-owned and operated business, we understand the Inland Empire community. We hire locally, support local charities, and reinvest in the neighborhoods we serve. Your junk removal supports real jobs and real families right here in our region.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-garage-sale_23-2150661450.jpg?_wi=1",              imageAlt: "garage cleared cleaned organized"},
          ]}
          buttons={[
            { text: "Get Free Quote", href: "mailto:info@goneinahaul.com?subject=Free%20Quote%20Request" },
          ]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          cardTitleClassName="text-2xl font-bold"
          cardDescriptionClassName="text-base leading-relaxed"
        />
      </div>

      <div id="team-stats" data-section="team-stats">
        <MetricCardSeven
          tag="BY THE NUMBERS"
          tagIcon={BarChart3}
          title="Growing Every Day"
          description="Our impact on the Inland Empire community speaks for itself."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "customers",              value: "5,000+",              title: "Happy Customers",              items: ["In the Inland Empire", "Since 2015", "Trusted & returning"],
            },
            {
              id: "jobs",              value: "10,000+",              title: "Jobs Completed",              items: ["Residential & commercial", "All types of junk", "On-time delivery"],
            },
            {
              id: "cities",              value: "10",              title: "Cities Served",              items: ["Full Inland Empire coverage", "Rapid response times", "Local expertise"],
            },
            {
              id: "eco",              value: "80%",              title: "Eco-Friendly",              items: ["Diverted from landfills", "Donation programs", "Recycling focus"],
            },
          ]}
          buttons={[
            { text: "Schedule Service", href: "mailto:info@goneinahaul.com?subject=Schedule%20Service" },
          ]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          valueClassName="text-3xl md:text-4xl font-bold text-primary-cta"
          metricTitleClassName="text-xl font-bold mt-2"
          featuresClassName="space-y-2 text-sm"
          featureItemClassName="flex items-center gap-2"
        />
      </div>

      <div id="testimonials-about" data-section="testimonials-about">
        <TestimonialCardTwo
          tag="CLIENT STORIES"
          tagIcon={Heart}
          title="Why People Trust Gone in a Haul"
          description="Real stories from real customers in our community."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Maria Gonzalez",              role: "Homeowner, Moreno Valley",              testimonial: "Gone in a Haul came and removed everything from my garage in just 2 hours. They were professional, courteous, and the price was amazing. This company truly cares about the community.",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg?_wi=3",              imageAlt: "Maria Gonzalez testimonial"},
            {
              id: "2",              name: "Robert Chen",              role: "Property Manager, Riverside",              testimonial: "We've used Gone in a Haul for several rental property cleanouts. Consistently reliable, fast, and they handle heavy debris without any issues. Best service in the Inland Empire.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg?_wi=3",              imageAlt: "Robert Chen testimonial"},
            {
              id: "3",              name: "Jessica Martinez",              role: "Homeowner, San Bernardino",              testimonial: "After our renovation, we had a ton of construction debris. These guys hauled everything away efficiently and left the property spotless. They're locally owned and it shows.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-kitchen-giving-you-cup-tea-taking-break-drinking-coffee-home_1258-202678.jpg?_wi=2",              imageAlt: "Jessica Martinez testimonial"},
          ]}
          buttons={[
            { text: "Read More Reviews", href: "/reviews" },
          ]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          cardClassName="rounded-lg p-6"
          nameClassName="font-bold text-lg"
          roleClassName="text-sm opacity-75"
          testimonialClassName="text-base leading-relaxed mt-3"
        />
      </div>

      <div id="footer-about" data-section="footer-about">
        <FooterBaseCard
          logoText="Gone in a Haul"
          columns={footerColumns}
          copyrightText="© 2025 Gone in a Haul. All rights reserved. Locally owned & operated. Licensed | Insured | Eco-Friendly."
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-6"
          cardClassName="rounded-lg"
          logoTextClassName="text-2xl font-extrabold"
          columnTitleClassName="font-bold text-lg mb-4"
          columnItemClassName="text-sm hover:text-primary-cta transition"
        />
      </div>
    </ThemeProvider>
  );
}

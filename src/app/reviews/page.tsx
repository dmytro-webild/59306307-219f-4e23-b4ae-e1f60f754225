"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ReviewsPage() {
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
        { label: "Reviews", href: "/reviews" },
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
        <NavbarStyleApple
          brandName="Gone in a Haul"
          navItems={navItems.map((item) => ({
            name: item.name,
            id: item.id,
          }))}
        />
      </div>

      <div id="testimonials-reviews" data-section="testimonials-reviews" className="w-full py-20">
        <TestimonialCardTwo
          tag="CUSTOMER REVIEWS"
          tagIcon={Star}
          title="What Our Customers Say"
          description="Real reviews from happy customers across the Inland Empire who trust Gone in a Haul."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Maria Gonzalez",              role: "Homeowner, Moreno Valley",              testimonial: "Gone in a Haul came and removed everything from my garage in just 2 hours. They were professional, courteous, and the price was amazing. Highly recommend!",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg?_wi=4",              imageAlt: "Maria Gonzalez testimonial",              icon: Star,
            },
            {
              id: "2",              name: "Robert Chen",              role: "Property Manager, Riverside",              testimonial: "We've used Gone in a Haul for several rental property cleanouts. Consistently reliable, fast, and they handle heavy debris without any issues. Great local service.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg?_wi=4",              imageAlt: "Robert Chen testimonial",              icon: Star,
            },
            {
              id: "3",              name: "Jessica Martinez",              role: "Homeowner, San Bernardino",              testimonial: "After our renovation, we had a ton of construction debris. These guys hauled everything away efficiently and left the property spotless. Worth every penny!",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-kitchen-giving-you-cup-tea-taking-break-drinking-coffee-home_1258-202678.jpg?_wi=3",              imageAlt: "Jessica Martinez testimonial",              icon: Star,
            },
            {
              id: "4",              name: "David Thompson",              role: "Business Owner, Corona",              testimonial: "I called for a same-day pickup and they were there within hours. Professional crew, fair pricing, and they even recycled what they could. Five stars!",              imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-gesturing-thumbup-looking-camera_23-2148204641.jpg?_wi=2",              imageAlt: "David Thompson testimonial",              icon: Star,
            },
            {
              id: "5",              name: "Linda Reyes",              role: "Homeowner, Victorville",              testimonial: "Local company with a big heart. They treated my home with respect and got the job done fast. I've already recommended them to all my neighbors.",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg?_wi=5",              imageAlt: "Linda Reyes testimonial",              icon: Star,
            },
            {
              id: "6",              name: "Michael Park",              role: "Contractor, Chino",              testimonial: "We use Gone in a Haul for all our construction cleanouts. Reliable, professional, and they always show up on time. Best junk removal company in the Inland Empire.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg?_wi=5",              imageAlt: "Michael Park testimonial",              icon: Star,
            },
          ]}
          buttons={[
            { text: "Call Now", href: "tel:+19517551234" },
          ]}
          buttonAnimation="slide-up"
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          cardClassName="rounded-lg p-6"
          nameClassName="font-bold text-lg"
          roleClassName="text-sm opacity-75"
          testimonialClassName="text-base leading-relaxed mt-3"
        />
      </div>

      <div id="before-after" data-section="before-after" className="w-full py-20">
        <FeatureCardNineteen
          tag="COMPLETED PROJECTS"
          tagIcon={Star}
          title="Before & After Gallery"
          description="See the transformation. Real jobs, real results from Gone in a Haul."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "DRIVEWAY CLEARED",              title: "Residential Driveway Cleanup",              subtitle: "Complete yard junk removal",              description: "A Moreno Valley homeowner had accumulated years of yard waste and miscellaneous items. We cleared the entire driveway and yard in a single afternoon.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-collects-garbage-garbage-bags-park_1157-27387.jpg?_wi=2",              imageAlt: "Before and after driveway cleanup",              buttons: [
                { text: "View More", href: "/reviews" },
              ],
            },
            {
              id: 2,
              tag: "GARAGE DECLUTTERED",              title: "Garage Space Transformation",              subtitle: "Storage and organization",              description: "This San Bernardino property owner wanted their garage back. We removed old furniture, broken appliances, and decades of storage clutter.",              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-garage-sale_23-2150661450.jpg?_wi=2",              imageAlt: "Garage cleared and organized",              buttons: [
                { text: "View More", href: "/reviews" },
              ],
            },
            {
              id: 3,
              tag: "CONSTRUCTION SITE",              title: "Post-Renovation Cleanout",              subtitle: "Heavy debris removal",              description: "After a major renovation project in Corona, our team hauled away tons of construction waste including drywall, lumber, and concrete debris.",              imageSrc: "http://img.b2bpic.net/free-photo/cracked-weathered-concrete-wall-texture-gray-orange-tones-showing-age-decay_84443-55485.jpg?_wi=3",              imageAlt: "Construction site cleanup",              buttons: [
                { text: "View More", href: "/reviews" },
              ],
            },
          ]}
          buttons={[
            { text: "Schedule Your Haul", href: "mailto:info@goneinahaul.com?subject=Schedule%20Service" },
          ]}
          buttonAnimation="slide-up"
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          cardTitleClassName="text-2xl font-bold"
          cardDescriptionClassName="text-base leading-relaxed"
        />
      </div>

      <div id="footer-reviews" data-section="footer-reviews">
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

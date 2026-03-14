"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Zap } from "lucide-react";

export default function ServicesPage() {
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
      title: "SERVICES",
      items: [
        { label: "General Junk Removal", href: "/services#general-junk" },
        { label: "Yard Waste Removal", href: "/services#yard-waste" },
        { label: "Construction Cleanouts", href: "/services#construction" },
        { label: "Get Free Quote", href: "/contact" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Service Area", href: "/service-area" },
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CONTACT",
      items: [
        { label: "Call: (951) 755-1234", href: "tel:+19517551234" },
        { label: "Email: info@goneinahaul.com", href: "mailto:info@goneinahaul.com" },
        { label: "Hours: 6am - 6pm Daily", href: "#" },
        { label: "Service 24/7 Available", href: "#" },
      ],
    },
    {
      title: "FOLLOW US",
      items: [
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

      <div id="services-hero" data-section="services-hero">
        <HeroCentered
          title="Junk Removal Services"
          description="Comprehensive junk removal solutions for residential and commercial clients across the Inland Empire. We handle all types of debris with professionalism and eco-friendly disposal."
          background={{ variant: "animated-grid" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/utility-vehicle-quiet-street-work-progress_169016-69895.jpg",
              alt: "Gone in a Haul junk removal truck",
            },
          ]}
          avatarText="Expert Service in Every Category"
          buttons={[
            { text: "Call Now", href: "tel:+19517551234" },
            { text: "Get Free Quote", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          marqueeItems={[
            { type: "text", text: "Same-day service available" },
            { type: "text", text: "Licensed & insured" },
            { type: "text", text: "Eco-friendly disposal" },
            { type: "text", text: "Affordable rates" },
            { type: "text", text: "Local owned & operated" },
          ]}
          marqueeSpeed={35}
          showMarqueeCard={true}
          className="w-full"
          containerClassName="min-h-screen flex items-center justify-center"
          titleClassName="text-5xl md:text-7xl font-extrabold leading-tight"
          descriptionClassName="text-lg md:text-xl max-w-2xl mx-auto"
          buttonContainerClassName="flex flex-col md:flex-row gap-4 justify-center"
          buttonClassName="px-8 py-3 rounded-lg font-semibold text-lg"
        />
      </div>

      <div id="services-detailed" data-section="services-detailed">
        <FeatureCardNineteen
          tag="OUR SERVICES"
          tagIcon={Zap} as any
          title="Complete Junk Removal Solutions"
          description="From residential clutter to heavy commercial debris, we're equipped to handle any junk removal challenge across the Inland Empire."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "GENERAL JUNK",
              title: "General Junk Removal",
              subtitle: "Household Items & Miscellaneous Debris",
              description: "From old furniture to appliances, electronics to yard items—we remove it all. Our experienced team handles every piece with care, ensuring your home or office is left spotless. One call and we handle the heavy lifting, no job too big or small.",
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg",
              imageAlt: "General junk removal service",
              buttons: [{ text: "Learn More", href: "/contact" }],
            },
            {
              id: 2,
              tag: "YARD WASTE",
              title: "Yard Waste & Debris",
              subtitle: "Landscaping & Outdoor Cleanup",
              description: "Tree branches, mulch, landscaping debris, fallen trees, and seasonal cleanup. We clear your yard fast and responsibly dispose of everything. Our crew can handle large-scale yard projects and ensure proper disposal of all organic material.",
              imageSrc: "http://img.b2bpic.net/free-photo/volunteer-with-garbage-bag-trip-nature-cleaning-environment_169016-12173.jpg",
              imageAlt: "Yard waste removal service",
              buttons: [{ text: "Learn More", href: "/contact" }],
            },
            {
              id: 3,
              tag: "CONSTRUCTION",
              title: "Construction & Renovation Cleanouts",
              subtitle: "Commercial & Residential Projects",
              description: "Drywall, concrete, bricks, lumber, and heavy construction debris. Licensed and experienced in large-scale cleanout projects. We manage construction sites efficiently, removing debris safely and keeping your project on schedule.",
              imageSrc: "http://img.b2bpic.net/free-photo/cracked-weathered-concrete-wall-texture-gray-orange-tones-showing-age-decay_84443-55485.jpg",
              imageAlt: "Construction debris removal service",
              buttons: [{ text: "Learn More", href: "/contact" }],
            },
          ]}
          buttons={[{ text: "Get Free Quote", href: "/contact" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-extrabold"
          descriptionClassName="text-lg md:text-xl mt-4"
          cardTitleClassName="text-2xl font-bold"
          cardDescriptionClassName="text-base leading-relaxed"
        />
      </div>

      <div id="services-faq" data-section="services-faq">
        <FaqDouble
          tag="SERVICE QUESTIONS"
          title="Everything You Need to Know"
          description="Detailed answers about our junk removal services and process."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What's included in general junk removal?",
              content: "General junk removal includes furniture, appliances, electronics, household items, and miscellaneous debris. We load, transport, and properly dispose of everything. Items in good condition may be donated or recycled when possible.",
            },
            {
              id: "2",
              title: "How do you handle construction debris?",
              content: "We have specialized equipment and expertise for handling heavy construction materials. Our team safely removes drywall, concrete, bricks, lumber, and other debris. We follow all safety regulations and environmental guidelines.",
            },
            {
              id: "3",
              title: "Can you remove yard waste and landscaping debris?",
              content: "Yes, we handle all types of yard waste including tree branches, mulch, leaves, grass clippings, and fallen trees. We ensure proper disposal and can coordinate with landscaping services if needed.",
            },
            {
              id: "4",
              title: "Do you provide emergency junk removal?",
              content: "Absolutely! We offer emergency same-day service in most areas. Call us immediately and we'll prioritize your request. Emergency rates may apply for after-hours service.",
            },
            {
              id: "5",
              title: "How much does it cost?",
              content: "Pricing is based on the volume and type of junk. We provide free quotes over the phone or at your location. Most jobs are charged per load or by the volume of material being removed.",
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept cash, credit cards, and checks. Payment is typically due upon completion of service. We offer transparent pricing with no hidden fees or surprise charges.",
            },
          ]}
          buttons={[{ text: "Get Free Quote Now", href: "/contact" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-extrabold"
          descriptionClassName="text-lg md:text-xl mt-4"
          faqsContainerClassName="grid md:grid-cols-2 gap-8 mt-12"
          accordionClassName="rounded-lg"
          accordionTitleClassName="font-bold text-lg"
          accordionContentClassName="text-base leading-relaxed" as any
        />
      </div>

      <div id="footer-services" data-section="footer-services">
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
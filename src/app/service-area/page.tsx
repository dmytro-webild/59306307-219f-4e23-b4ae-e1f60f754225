"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

export default function ServiceAreaPage() {
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
        { label: "General Junk Removal", href: "/" },
        { label: "Yard Waste Removal", href: "/" },
        { label: "Construction Cleanouts", href: "/" },
        { label: "Get Free Quote", href: "/contact" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Service Area", href: "/service-area" },
        { label: "Reviews", href: "/" },
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

      <div id="service-area-coverage" data-section="service-area-coverage">
        <SocialProofOne
          tag="COVERAGE AREA"
          title="Serving the Inland Empire"
          description="We proudly serve Moreno Valley, Riverside, San Bernardino, Corona, Victorville, Ontario, Chino, Chino Hills, and surrounding cities. Same-day service available throughout the region."
          names={[
            "Moreno Valley",
            "Riverside",
            "San Bernardino",
            "Corona",
            "Victorville",
            "Ontario",
            "Chino",
            "Chino Hills",
            "Fontana",
            "Rancho Cucamonga",
            "Upland",
            "Bloomington",
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
          buttons={[
            { text: "Get Free Quote Today", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-extrabold"
          descriptionClassName="text-lg md:text-xl mt-4"
          contentClassName="mt-12"
          logoTextClassName="text-lg font-semibold"
        />
      </div>

      <div id="service-area-details" data-section="service-area-details">
        <FeatureCardNineteen
          tag="LOCAL EXPERTISE"
          tagIcon="MapPin"
          title="Why We Know the Inland Empire"
          description="Every city has unique needs. We understand local regulations, neighborhood dynamics, and what makes the Inland Empire special."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "MORENO VALLEY & RIVERSIDE",
              title: "Core Service Territory",
              subtitle: "Our primary market and where it all started",
              description: "Moreno Valley and Riverside are at the heart of our service area. We have the fastest response times here and know every neighborhood. Call us first for same-day service.",
              imageSrc: "http://img.b2bpic.net/free-photo/utility-vehicle-quiet-street-work-progress_169016-69895.jpg",
              imageAlt: "junk removal truck service",
              buttons: [
                { text: "Schedule in Moreno Valley", href: "/contact" },
              ],
            },
            {
              id: 2,
              tag: "SAN BERNARDINO & CORONA",
              title: "Extended Service Territory",
              subtitle: "Professional coverage for growing communities",
              description: "We proudly serve San Bernardino and Corona with the same professional service. Our team knows these areas well and can handle projects of any size. Schedule your service today.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-united-states-america-map-red-pinpoint_23-2148232464.jpg",
              imageAlt: "map inland empire service area",
              buttons: [
                { text: "Schedule in San Bernardino", href: "/contact" },
              ],
            },
            {
              id: 3,
              tag: "VICTORVILLE TO ONTARIO",
              title: "Wide Regional Coverage",
              subtitle: "All-Inland Empire service and delivery",
              description: "From Victorville in the north to Ontario and Chino in the west, Gone in a Haul covers the entire Inland Empire. We service all these areas with same-day response when available.",
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg",
              imageAlt: "professional service team",
              buttons: [
                { text: "Service My Area", href: "/contact" },
              ],
            },
          ]}
          buttons={[
            { text: "Call Now for Same-Day Service", href: "tel:+19517551234" },
          ]}
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

      <div id="service-area-faq" data-section="service-area-faq">
        <FaqDouble
          tag="SERVICE AREA QUESTIONS"
          title="Do We Serve Your Area?"
          description="Have questions about service availability in your neighborhood? Find answers here."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your main service area?",
              content: "Our primary service area covers the entire Inland Empire including Moreno Valley, Riverside, San Bernardino, Corona, Victorville, Ontario, Chino, Chino Hills, Fontana, and Rancho Cucamonga. We also service surrounding communities. Call us to confirm service availability for your specific location.",
            },
            {
              id: "2",
              title: "Do you offer same-day service everywhere?",
              content: "Same-day service is available throughout most of our service area, with fastest response times in Moreno Valley and Riverside. During peak seasons, service may be 1-2 days in some outlying areas. Call us today to check availability for your specific location and get a quote.",
            },
            {
              id: "3",
              title: "Are there any areas you don't serve?",
              content: "We serve all of the Inland Empire and surrounding regions. If you're unsure whether your location is in our service area, simply call us at (951) 755-1234 and we'll let you know. We're always expanding our coverage.",
            },
            {
              id: "4",
              title: "What if I live outside the main service area?",
              content: "Contact us! While our primary focus is the Inland Empire, we may be able to accommodate requests outside our main service area on a case-by-case basis. Call (951) 755-1234 to discuss your needs.",
            },
            {
              id: "5",
              title: "Do you serve residential and commercial?",
              content: "Yes! We serve both residential and commercial clients throughout our service area. Whether it's a home garage cleanout or a commercial property renovation, we have the experience and equipment to handle it.",
            },
            {
              id: "6",
              title: "How can I schedule service in my area?",
              content: "Call us at (951) 755-1234 or visit our contact page to request a free quote. Tell us your location and project details, and we'll provide pricing and availability. Most customers receive same-day or next-day service confirmation.",
            },
          ]}
          buttons={[
            { text: "Check Your City", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-extrabold"
          descriptionClassName="text-lg md:text-xl mt-4"
          faqsContainerClassName="grid md:grid-cols-2 gap-8 mt-12"
          accordionClassName="rounded-lg"
          accordionTitleClassName="font-bold text-lg"
          accordionContentClassName="text-base leading-relaxed"
        />
      </div>

      <div id="footer-service-area" data-section="footer-service-area">
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
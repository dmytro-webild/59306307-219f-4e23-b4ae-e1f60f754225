"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactText from "@/components/sections/contact/ContactText";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function ContactPage() {
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
        { label: "About Us", href: "/" },
        { label: "Service Area", href: "/" },
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
        <NavbarStyleApple
          brandName="Gone in a Haul"
          navItems={navItems.map((item) => ({
            name: item.name,
            id: item.id,
          }))}
        />
      </div>

      <div id="contact-cta" data-section="contact-cta" className="w-full">
        <ContactText
          text="Ready to get your space back? Call Gone in a Haul today for a free quote."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          animationType="entrance-slide"
          buttons={[
            { text: "Call (951) 755-1234", href: "tel:+19517551234" },
            { text: "Get Free Quote", href: "/contact" },
          ]}
          className="w-full py-24"
          containerClassName="max-w-4xl mx-auto px-6"
          textClassName="text-4xl md:text-5xl font-extrabold text-center"
          buttonContainerClassName="flex flex-col md:flex-row gap-4 justify-center mt-12"
          buttonClassName="px-8 py-4 rounded-lg font-semibold text-lg"
        />
      </div>

      <div id="contact-faq" data-section="contact-faq" className="w-full py-20">
        <FaqDouble
          tag="COMMON QUESTIONS"
          title="Frequently Asked Questions"
          description="Have questions about our junk removal service? We've got answers."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How quickly can you pick up my junk?",
              content: "We offer same-day service availability in most areas. Call us for a free quote and we can often schedule pickup within 24 hours. We're fast because we know you want your space back quickly.",
            },
            {
              id: "2",
              title: "What do you charge for junk removal?",
              content: "Our pricing is transparent and based on the volume and type of junk. We provide free quotes over the phone or at your location. There are no hidden fees—what we quote is what you pay.",
            },
            {
              id: "3",
              title: "Do you recycle or donate items?",
              content: "Absolutely! We're committed to eco-friendly disposal. Items in good condition are donated to local charities. Recyclables are properly sorted and sent to recycling facilities. Only items that can't be reused or recycled go to the landfill.",
            },
            {
              id: "4",
              title: "Are you licensed and insured?",
              content: "Yes, we are fully licensed and insured. We carry comprehensive liability insurance for your protection and follow all local regulations for junk disposal and hauling.",
            },
            {
              id: "5",
              title: "What areas do you serve?",
              content: "We serve the entire Inland Empire including Moreno Valley, Riverside, San Bernardino, Corona, Victorville, Ontario, Chino, and surrounding cities. Check our service area page for your specific location.",
            },
            {
              id: "6",
              title: "Do you offer commercial junk removal?",
              content: "Yes! We handle commercial cleanouts including office furniture removal, construction debris, and large-scale hauling projects. Contact us for a custom quote on your commercial project.",
            },
          ]}
          buttons={[
            { text: "Still have questions? Call us!", href: "tel:+19517551234" },
          ]}
          buttonAnimation="slide-up"
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          titleClassName="text-4xl md:text-5xl font-extrabold"
          descriptionClassName="text-lg md:text-xl mt-4"
          faqsContainerClassName="grid md:grid-cols-2 gap-8 mt-12"
          accordionClassName="rounded-lg"
          accordionTitleClassName="font-bold text-lg"
          accordionContentClassName="text-base leading-relaxed"
          textBoxTitleClassName="text-4xl md:text-5xl font-extrabold"
          textBoxDescriptionClassName="text-lg md:text-xl mt-4"
        />
      </div>

      <div id="footer-contact" data-section="footer-contact">
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
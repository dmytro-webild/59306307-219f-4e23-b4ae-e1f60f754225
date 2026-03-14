"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Zap, Award, Star } from "lucide-react";

export default function HomePage() {
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

      <div id="hero-home" data-section="hero-home">
        <HeroCentered
          title="Fast. Reliable. Local."
          description="Junk removal done right in Moreno Valley, Riverside, San Bernardino and across the Inland Empire. Same-day service, transparent pricing, eco-friendly disposal."
          background={{ variant: "animated-grid" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/utility-vehicle-quiet-street-work-progress_169016-69895.jpg",
              alt: "Gone in a Haul junk removal truck",
            },
          ]}
          avatarText="Serving the Inland Empire since 2015"
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

      <div id="services-overview" data-section="services-overview">
        <FeatureCardNineteen
          tag="OUR SERVICES"
          tagIcon={Zap}
          title="Professional Junk Removal Services"
          description="We handle all types of junk removal across the Inland Empire. Fast, reliable, and hassle-free."
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "GENERAL JUNK",
              title: "General Junk Removal",
              subtitle: "Household Items & Miscellaneous Debris",
              description: "From old furniture to appliances, electronics to yard items—we remove it all. One call and we handle the heavy lifting.",
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-painting-car-door_23-2149714295.jpg",
              imageAlt: "General junk removal service",
              buttons: [{ text: "Learn More", href: "/services#general-junk" }],
            },
            {
              id: 2,
              tag: "YARD WASTE",
              title: "Yard Waste & Debris",
              subtitle: "Landscaping & Outdoor Cleanup",
              description: "Tree branches, mulch, landscaping debris, fallen trees. We clear your yard fast and responsibly dispose of everything.",
              imageSrc: "http://img.b2bpic.net/free-photo/volunteer-with-garbage-bag-trip-nature-cleaning-environment_169016-12173.jpg",
              imageAlt: "Yard waste removal service",
              buttons: [{ text: "Learn More", href: "/services#yard-waste" }],
            },
            {
              id: 3,
              tag: "CONSTRUCTION",
              title: "Construction & Renovation Cleanouts",
              subtitle: "Commercial & Residential Projects",
              description: "Drywall, concrete, bricks, lumber, and heavy construction debris. Licensed and experienced in large-scale cleanout projects.",
              imageSrc: "http://img.b2bpic.net/free-photo/cracked-weathered-concrete-wall-texture-gray-orange-tones-showing-age-decay_84443-55485.jpg",
              imageAlt: "Construction debris removal service",
              buttons: [{ text: "Learn More", href: "/services#construction" }],
            },
          ]}
          buttons={[{ text: "Get Free Quote", href: "/contact" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          cardTitleClassName="text-2xl font-bold"
          cardDescriptionClassName="text-base leading-relaxed"
          textBoxTitleClassName="text-4xl md:text-5xl font-extrabold"
          textBoxDescriptionClassName="text-lg md:text-xl mt-4"
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <MetricCardSeven
          tag="TRUSTED BY LOCALS"
          tagIcon={Award}
          title="Why Choose Gone in a Haul?"
          description="Local expertise, professional service, and unbeatable value. Here's what sets us apart."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "fast",
              value: "Same-Day",
              title: "Fast Service",
              items: ["Same-day quotes", "Quick scheduling", "Rapid pickup & haul"],
            },
            {
              id: "licensed",
              value: "100%",
              title: "Licensed & Insured",
              items: ["Full business licensing", "Comprehensive insurance", "Professional certification"],
            },
            {
              id: "eco",
              value: "Responsible",
              title: "Eco-Friendly",
              items: ["Proper disposal", "Recycling programs", "Environmental commitment"],
            },
            {
              id: "affordable",
              value: "Transparent",
              title: "Affordable Pricing",
              items: ["No hidden fees", "Free quotes", "Best rates guaranteed"],
            },
            {
              id: "local",
              value: "Local",
              title: "Locally Owned",
              items: ["Community focused", "Inland Empire based", "Supporting local"],
            },
          ]}
          buttons={[{ text: "Call (951) 755-1234", href: "tel:+19517551234" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          textBoxTitleClassName="text-4xl md:text-5xl font-extrabold"
          textBoxDescriptionClassName="text-lg md:text-xl mt-4"
          valueClassName="text-3xl md:text-4xl font-bold text-primary-cta"
          metricTitleClassName="text-xl font-bold mt-2"
          featuresClassName="space-y-2 text-sm"
          featureItemClassName="flex items-center gap-2"
        />
      </div>

      <div id="service-area-cities" data-section="service-area-cities">
        <SocialProofOne
          tag="COVERAGE AREA"
          title="Serving the Inland Empire"
          description="We proudly serve Moreno Valley, Riverside, San Bernardino, Corona, Victorville, Ontario, Chino, Chino Hills, and surrounding cities."
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
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          speed={40}
          showCard={true}
          buttons={[{ text: "View All Cities", href: "/service-area" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          contentClassName="mt-12"
          logoTextClassName="text-lg font-semibold"
        />
      </div>

      <div id="testimonials-home" data-section="testimonials-home">
        <TestimonialCardTwo
          tag="CUSTOMER REVIEWS"
          tagIcon={Star}
          title="What Our Customers Say"
          description="Real reviews from happy customers across the Inland Empire."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria Gonzalez",
              role: "Homeowner, Moreno Valley",
              testimonial: "Gone in a Haul came and removed everything from my garage in just 2 hours. They were professional, courteous, and the price was amazing. Highly recommend!",
              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg",
              imageAlt: "Maria Gonzalez testimonial",
              icon: Star,
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Property Manager, Riverside",
              testimonial: "We've used Gone in a Haul for several rental property cleanouts. Consistently reliable, fast, and they handle heavy debris without any issues. Great local service.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg",
              imageAlt: "Robert Chen testimonial",
              icon: Star,
            },
            {
              id: "3",
              name: "Jessica Martinez",
              role: "Homeowner, San Bernardino",
              testimonial: "After our renovation, we had a ton of construction debris. These guys hauled everything away efficiently and left the property spotless. Worth every penny!",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-kitchen-giving-you-cup-tea-taking-break-drinking-coffee-home_1258-202678.jpg",
              imageAlt: "Jessica Martinez testimonial",
              icon: Star,
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Business Owner, Corona",
              testimonial: "I called for a same-day pickup and they were there within hours. Professional crew, fair pricing, and they even recycled what they could. Five stars!",
              imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-gesturing-thumbup-looking-camera_23-2148204641.jpg",
              imageAlt: "David Thompson testimonial",
              icon: Star,
            },
            {
              id: "5",
              name: "Linda Reyes",
              role: "Homeowner, Victorville",
              testimonial: "Local company with a big heart. They treated my home with respect and got the job done fast. I've already recommended them to all my neighbors.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-female-blazer-beauty-blonde_1139-773.jpg",
              imageAlt: "Linda Reyes testimonial",
              icon: Star,
            },
            {
              id: "6",
              name: "Michael Park",
              role: "Contractor, Chino",
              testimonial: "We use Gone in a Haul for all our construction cleanouts. Reliable, professional, and they always show up on time. Best junk removal company in the Inland Empire.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg",
              imageAlt: "Michael Park testimonial",
              icon: Star,
            },
          ]}
          buttons={[{ text: "Read More Reviews", href: "/reviews" }]}
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

      <div id="faq-home" data-section="faq-home">
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
          buttons={[{ text: "Still have questions? Call us!", href: "tel:+19517551234" }]}
          buttonAnimation="slide-up"
          className="w-full py-20"
          containerClassName="max-w-7xl mx-auto px-6"
          textBoxClassName="text-center mb-16"
          faqsContainerClassName="grid md:grid-cols-2 gap-8 mt-12"
          accordionClassName="rounded-lg"
          accordionTitleClassName="font-bold text-lg"
          accordionContentClassName="text-base leading-relaxed"
        />
      </div>

      <div id="cta-final" data-section="cta-final">
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

      <div id="footer-home" data-section="footer-home">
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
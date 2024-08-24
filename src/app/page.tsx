import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
// import Team from "@/components/Team"
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shukur Web Studio - Your Digital Web Agency",
  description: "Shukur Web Studio: Your trusted digital web agency. We create stunning, functional websites tailored to your business needs. Expert design, development, and digital solutions to boost your online presence.",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Services />
      <About />
      <CallToAction />
      {/* <Pricing /> */}
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}

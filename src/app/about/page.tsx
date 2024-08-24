import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Shukur Web Studio - Your Digital Web Agency",
  description: "Shukur Web Studio: Your trusted digital web agency. We create stunning, functional websites tailored to your business needs. Expert design, development, and digital solutions to boost your online presence.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <Faq />
    </main>
  );
};

export default AboutPage;

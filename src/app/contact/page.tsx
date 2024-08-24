import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Page | Shukur Web Studio - Your Digital Web Agency",
  description: "Shukur Web Studio: Your trusted digital web agency. We create stunning, functional websites tailored to your business needs. Expert design, development, and digital solutions to boost your online presence.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" />

      <Contact />
    </>
  );
};

export default ContactPage;

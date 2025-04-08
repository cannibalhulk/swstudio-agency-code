import Breadcrumb from "@/components/Common/Breadcrumb";
import Terms_of_Service from "@/components/Terms-of-service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms of Service | Shukur Web Studio - Your Digital Web Agency",
  description: "This Terms of Service outlines the terms and contidions for using our services at Shukur Web Studio. For details about your rights and responsibilities, please read the terms carefully.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of Service" />

      <Terms_of_Service />
    </>
  );
};

export default ContactPage;
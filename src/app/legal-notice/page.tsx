import LegalNotice from '@/components/LegalNotice';
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";


export const metadata: Metadata = {
  title: 'Legal Notice | Shukur Web Studio - Your Digital Web Agency',
  description: 'This Legal Notice outlines the terms and conditions for using our services at Shukur Web Studio. For details about your rights and responsibilities, please read the terms carefully.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb pageName="Legal Notice" />
      <LegalNotice />
    </>
  )
} 
import PrivacyPolicy from '@/components/PrivacyPolicy';
import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";


export const metadata: Metadata = {
  title: 'Privacy Policy | Shukur Web Studio - Your Digital Web Agency',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" />
      <PrivacyPolicy />
    </>
  )
} 
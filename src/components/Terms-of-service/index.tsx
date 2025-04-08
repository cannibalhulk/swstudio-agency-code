import React from 'react'

function Terms_of_Service() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 dark:bg-dark-2 bg-white">
      <div className='container max-w-6xl mx-auto'>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 italic">
          Last Updated: Apr 8, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to Shukur Web Studio. These Terms of Service outline the rules and regulations for the use of our website and services. By accessing our website and utilizing our services, you agree to abide by the Terms set forth herein.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">2. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By using our services, you confirm your acceptance of these Terms of Service. If you do not agree to these Terms, you should not use our services. Your continued use of our services will signify your acceptance of any changes or amendments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">3. Services Provided</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Our digital marketing agency offers a range of services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Search Engine Optimization (SEO)</li>
            <li>Meta Ads</li>
            <li>Pay-Per-Click Advertising (PPC)</li>
            <li>Content Creation & Marketing</li>
            <li>Social Media Marketing</li>
            <li>Email Marketing</li>
            <li>Website Development and Design</li>
            <li>AI Website Chatbot Development</li>
            <li>AI Voice Assistant Development</li>
            <li>AI Automation Workflows</li>

          </ul>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            These services are tailored to help clients enhance their online presence and achieve their marketing goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Users agree to use our services in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Misuse of services, including spamming or unethical marketing practices, is strictly prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">5. Payment Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            All services rendered are subject to applicable fees. Payment terms will be specified during the agreement process, including due dates and accepted payment methods. Failure to pay in accordance with these terms may result in the suspension or termination of services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">6. Termination</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Either party may terminate this agreement at any time by providing written notice. We reserve the right to terminate services for violation of Terms or any misuse of our services without any prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">7. Disclaimers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our agency strives to provide high-quality services; however, we do not guarantee specific results. Our liability is limited to the maximum extent permitted by law, and we are not responsible for any indirect or consequential damages arising from the use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Changes will be communicated to users via email or through a notice on our website. Your continued use of our services after such changes implies your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">9. Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For any questions or concerns regarding these Terms of Service, please contact us at:
            <br />
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:hello@shukurwebstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              hello@shukurwebstudio.com
            </a>
            <br />
            <span className="font-medium">Phone:</span>{' '}
            <a href="tel:+994506202756" className="text-blue-600 dark:text-blue-400 hover:underline">
              +994 50 620 27 56
            </a>
          </p>
        </section>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Thank you for choosing Shukur Web Studio! We look forward to working with you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms_of_Service
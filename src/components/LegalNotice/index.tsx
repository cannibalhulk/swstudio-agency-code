import React from 'react'

function LegalNotice() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 dark:bg-dark-2 bg-white">
      <div className='container max-w-6xl mx-auto'>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8 italic">
          Last Updated: Apr 8, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">1. Introduction</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This Legal Notice outlines the terms and conditions under which individuals use the services provided by our digital marketing agency. It serves to inform users about our company, privacy policy, terms of use, disclaimers, and intellectual property rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">2. Company Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Name of the Business:</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Shukur Web Studio</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Contact Information:</h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
                <li>Phone Number: +994 50 620 27 56</li>
                <li>Email: hello@shukurwebstudio.com</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">3. Terms of Use</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Users accessing our website agree to abide by the following rules and guidelines:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>Use the services for lawful purposes only.</li>
            <li>Do not use the website in a way that may cause damage or impair its availability.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">4. Privacy Policy</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            We value your privacy. This section details how we collect, use, and protect user data, ensuring compliance with data protection regulations such as the GDPR.
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>User data will be collected only with consent.</li>
            <li>Data will be used solely for the purposes of providing our services.</li>
            <li>Users can request access to their data, request deletion, and object to its use.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">5. Disclaimers</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            The information provided on this website is for general informational purposes only and does not constitute professional advice. We do not accept liability for any omissions or inaccuracies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            All content and materials on this website, including trademarks and copyrights, are the property of Your Digital Marketing Agency. Unauthorized use is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">7. Links to External Sites</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our website may contain links to external sites. We are not responsible for the content, practices, or privacy policies of these websites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">8. Governing Law</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This Legal Notice is governed by the laws of the Republic of Azerbaijan. Any disputes arising will be resolved in the appropriate courts of Azerbaijan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">9. Changes to the Legal Notice</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify this Legal Notice at any time. Users will be notified of any changes via updates on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">10. Contact Information for Legal Inquiries</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            For legal questions or concerns, please contact us at:
            <br />
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:legal@shukurwebstudio.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              legal@shukurwebstudio.com
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
            This Legal Notice is in effect as of Apr 8, 2025.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalNotice
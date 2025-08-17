import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Shukur Web Studio - Web Development Insights & Tips",
  description: "Stay updated with the latest web development trends, insights, and tips from Shukur Web Studio. Expert articles on modern web technologies, design principles, and digital solutions.",
};

const BlogPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Blogs" />
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-10">
              <h1 className="mb-8 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                Coming Soon
              </h1>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                {"We're working on bringing you valuable content about web development, design trends, and digital marketing insights. Stay tuned for updates!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
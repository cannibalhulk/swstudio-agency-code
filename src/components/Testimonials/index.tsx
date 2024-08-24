import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Business Owner",
    content:
      "Incredible service! The team at SWStudio completely transformed our website and boosted our online presence. We saw a significant increase in traffic and leads within just a few months.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Ilyas Mammadli",
    designation: "Startup Founder",
    content:
      "From the initial consultation to the final delivery, SWStudio exceeded our expectations. Their attention to detail and commitment to delivering results really set them apart.",
    image: "/images/testimonials/client-02.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Marketing Director",
    content:
      "Working with SWStudio was a game-changer for us. Their marketing strategies and creative design brought our brand to life in ways we never imagined. Highly recommend them!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="Hear from Our Happy Clients"
          paragraph="Our clients’ success is our greatest achievement. "
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

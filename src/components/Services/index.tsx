import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  return (
    <section id="services-sec" className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div  className="container">
        <SectionTitle
          subtitle="SERVICES"
          title="Main Services We Do"
          paragraph="Our expert team delivers tailored digital marketing and web development solutions designed to elevate your brand, drive engagement, and achieve measurable results."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

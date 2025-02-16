"use client";
import Image from "next/image";

const services = [
  {
    icon: "assets/services/ux-ui.svg",
    title: "Software Architecture",
    description:
      "Design and conception of sophisticated software applications.",
  },
  {
    icon: "assets/services/web.svg",
    title: "Web Development",
    description: "Development of modern web applications for all devices",
  },
  {
    icon: "assets/services/ml.svg",
    title: "Machine Learning",
    description:
      "Well-versed in the latest machine learning frameworks and libraries",
  },
  {
    icon: "assets/services/app.svg",
    title: "App Development",
    description: "Creating apps in iOS and Android in Swift and Kotlin.",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((services, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={services.icon}
                  alt={services.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {services.title}
                </h3>
                <p className="text-[15px]">{services.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;

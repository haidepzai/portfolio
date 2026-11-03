"use client";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const services = [
  {
    icon: "/assets/services/ux-ui.svg",
    key: "architecture",
  },
  {
    icon: "/assets/services/web.svg",
    key: "web",
  },
  {
    icon: "/assets/services/ml.svg",
    key: "ml",
  },
  {
    icon: "/assets/services/app.svg",
    key: "app",
  },
];

const Services = () => {
  const translations = useTranslations('Services');
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
                  alt={translations(`${services.key}.title`)}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {translations(`${services.key}.title`)}
                </h3>
                <p className="text-[15px]">{translations(`${services.key}.description`)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;

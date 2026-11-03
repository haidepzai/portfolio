import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";
import { useTranslations } from 'next-intl';

const WorkItem = ({ href, category, img, title }) => {
  const translations = useTranslations('Work');
  return (
    <Link href={href} className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {translations(`categories.${category}`)}
        </Badge>
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-cover group-hover:scale-105 transition-all duration-500"
          alt={title}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        <span aria-label={translations('open', { title })} className="bg-accent text-white rounded-full w-[48px] h-[48px] shrink-0 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </span>
      </div>
    </Link>
  );
};

export default WorkItem;

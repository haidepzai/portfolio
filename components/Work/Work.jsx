import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import { useTranslations } from "next-intl";

// sample data for projects with various categories
const data = [
  {
    id: "item1",
    href: "https://yomi-lens.vercel.app",
    category: "app",
    img: "/assets/work/yomi_lens_banner.png",
  },
  {
    id: "item2",
    href: "https://manabu.study",
    category: "web",
    img: "/assets/work/manabu.png",
  },
  {
    id: "item3",
    href: "https://neo-seichi.vercel.app",
    category: "app",
    img: "/assets/work/neo-seichi.png",
  },
  {
    id: "item4",
    href: "https://omakase-go.vercel.app",
    category: "app",
    img: "/assets/work/omakase.png",
  },
  {
    id: "item5",
    href: "https://marketplace.visualstudio.com/items?itemName=SonHaiVu.smart-todo-kanban",
    category: "software",
    img: "/assets/work/smart-kanban-board.png",
  },
  {
    id: "item6",
    href: "https://gitlab.com/haidepzai/openbarber",
    category: "web",
    img: "/assets/work/openbarber.png",
  },
  {
    id: "item7",
    href: "https://gitlab.com/haidepzai/travelinked",
    category: "web",
    img: "/assets/work/travelinked.png",
  },
  {
    id: "item8",
    href: "https://gitlab.com/haidepzai/lost-in-japan",
    category: "app",
    img: "/assets/work/hanabi.png",
  },
  {
    id: "item9",
    href: "https://gitlab.com/haidepzai/finance-manager-android",
    category: "app",
    img: "/assets/work/finance.png",
  },
  {
    id: "item10",
    href: "https://gitlab.com/haidepzai/json-parser",
    category: "software",
    img: "/assets/work/json.png",
  },
  {
    id: "item11",
    href: "https://gitlab.com/haidepzai/printer-classification",
    category: "ML",
    img: "/assets/work/ai.png",
  },
  {
    id: "item12",
    href: "https://gitlab.com/haidepzai/japanisch-lernen",
    category: "app",
    img: "/assets/work/japanese.png",
  },
];

const Work = () => {
  const translations = useTranslations("Work");
  // extract unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category)),
  );

  // create tab data with "all" category and unique categories
  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  // state to manage the currently selected tab
  const [tabValue, setTabValue] = useState("all");
  // number of items to show initially
  const [visibleItems, setVisibleItems] = useState(6);

  // filter work items based on the selected tab
  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  // handle loading more items
  const loadMoreItems = () => {
    // adjust the number to control how many items are loaded at a time
    setVisibleItems((prev) => prev + 2);
  };

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text={translations("title")}
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* render tab triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                    onClick={() => setTabValue(item.category)}
                  >
                    {translations(`categories.${item.category}`)}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {/* render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem
                      {...item}
                      title={translations(`items.${item.id}.title`)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* load more button */}
            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  {translations("loadMore")}
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;

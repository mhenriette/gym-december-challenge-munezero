import React from "react";
import NewsCard from "../ui/NewsCard";
import news1 from "../../public/images/news1.webp";
import Button from "../ui/Button";

export default function News() {
  return (
    <div className="mt-12 mx-6 px-6 ">
      <div className="flex items-start ">
        {/* news */}
        <div className=" flex flex-col basis-1/2 ">
          <div>
            <h2 className="font-bold text-[2rem] text-primary">
              News from TUM
            </h2>
            <p className="mt-6 text-xl text-primary">
              News, research results and events: everything that enthuses people
              at our university.
            </p>
          </div>
          <Button link="/#" text="see all"  styles='self-start'/>
        </div>
        <div className="px-3 flex basis-1/2 gap-6 ">
          <NewsCard
            image={news1}
            pictitle="TUM in Rankings"
            subtitle="WirtschaftsWoche rankings"
            title="Germanys strongest university in business sciences"
            paragraph="
        TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue of the..."
            date="12.20.2022"
            time="12.20.2022"
          />
          <NewsCard
            image={news1}
            pictitle="TUM in Rankings"
            subtitle="WirtschaftsWoche rankings"
            title="Germanys strongest university in business sciences"
            paragraph="
        TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue of the..."
            date="12.20.2022"
            time="12.20.2022"
          />
        </div>
        
      </div>
      <div className="mt-12 ml-[476px] mr-[300px] gap-6 flex">
      <NewsCard
            image={news1}
            pictitle="TUM in Rankings"
            subtitle="WirtschaftsWoche rankings"
            title="Germanys strongest university in business sciences"
            paragraph="
        TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue of the..."
            date="12.20.2022"
            time="12.20.2022"
          />
          <NewsCard
            image={news1}
            pictitle="TUM in Rankings"
            subtitle="WirtschaftsWoche rankings"
            title="Germanys strongest university in business sciences"
            paragraph="
        TUM has retained its ranking as Germanys strongest research university in business sciences. The latest issue of the..."
            date="12.20.2022"
            time="12.20.2022"
          />


      </div>
    </div>
  );
}

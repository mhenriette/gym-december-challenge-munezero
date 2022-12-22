import React from "react";
import NewsCard from "../ui/NewsCard";
import news1 from "../../public/images/news1.webp";
import ai from '../../public/images/ai.webp';
import prize from '../../public/images/prize.webp';
import search from '../../public/images/search.webp'

import Button from "../ui/Button";

export default function News() {
  return (
    <div className="mt-12   mx-auto container ">
      <div className="flex items-start px-6 lg:mx-6 flex-col lg:flex-row mx-0 ">

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
        <div className="lg:px-3 mt-5 lg:mt-0 px-0 flex basis-1/2 gap-6 flex-col lg:flex-row">
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
            image={ai}
            pictitle="
            Artificial Intelligence 
      "
            subtitle="Robotics and AI in elderly cares"
            title="Bavarian government funding for research into geriatronics"
            paragraph="
						The Bavarian cabinets 2023 draft budget includes 4.74 million euros in funding for research on robotics and AI...
				"
            date="12.20.2022"
            time="
            Reading time 5 min.
          "
          />
        </div>
        
      </div>
      <div className="mt-12 lg:ml-[476px] mr-0 ml-0 flex-col lg:flex-row px-4 lg:mr-[300px] gap-6 flex">
      <NewsCard
            image={prize}
            pictitle="Research"
            subtitle="Germanys top research award"
            title="Leibniz Prize for Biomathematician Fabian Theis"
            paragraph="
       
					
						Mathematician, physicist and information scientist Prof. Fabian Theis has won the 2023 Gottfried Wilhelm Leibniz Prize. The...
            "
            date="12.8.2022"
            time="Reading time 2 min"
          />
          <NewsCard
            image={search}
            pictitle="
            Research
      "
            subtitle="Search for dark matter"
            title="Antihelium nuclei as messengers from the depths of the galaxy "
            paragraph="
						How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,...
            "
            date="12.13.2022"
            time="Reading time 2 min"
          />


      </div>
    </div>
  );
}

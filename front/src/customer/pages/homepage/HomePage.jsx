import React from "react";
import MainCarsousel from "../../component/homecarousal/MainCarousel";
import HomeSectionCarousel from "../../component/homesectioncarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";

function HomePage() {
  return (
    <div>
      <div>
        <MainCarsousel />
      </div>
      <div className="space-y-4 py-10  flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Product"} />
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shoes"} />
        <HomeSectionCarousel
          data={mens_kurta}
          SectionName={"women's Product"}
        />
        <HomeSectionCarousel data={mens_kurta} SectionName={"women's Shoees"} />
      </div>
      <div>other section</div>
    </div>
  );
}

export default HomePage;

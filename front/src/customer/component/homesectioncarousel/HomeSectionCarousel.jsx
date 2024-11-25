import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function HomeSectionCarousel({ data, SectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slidPrev = () => {
    activeIndex > 0 && setActiveIndex(activeIndex - 1);
    console.log(activeIndex);
  };
  const slideNext = () => {
    activeIndex < data.length - 5 && setActiveIndex(activeIndex + 1);
    console.log(activeIndex);
    console.log(data.length);
  };

  const syncActiveIndex = ({ item }) => {
    console.log("Slide Changed to:", item);
    setActiveIndex(item);
  };

  const items = data.map((item) => <HomeSectionCard product={item} />);
  return (
    <div className=" px-4 lg:px-8 ">
      <h2 className="text-2xl font-extrabold p-5">{SectionName}</h2>
      <hr />
      <div className="relative p-5 ">
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={items}
          onSlideChanged={syncActiveIndex}
          responsive={responsive}
          activeIndex={activeIndex}
          disableDotsControls
        />
        {activeIndex !== data.length - 5 && (
          <Button
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(180deg)",
            }}
            variant="contained"
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon className="bg-white text-black hover:bg-blue-800 hover:text-white hover:scale-105" />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(0deg)",
            }}
            variant="contained"
            onClick={slidPrev}
          >
            <KeyboardArrowLeftIcon className="bg-white text-black hover:bg-blue-800 hover:text-white hover:scale-105" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;

"use client";
import { useState } from "react";

const Carousel = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Hola1",
      description: "hola, hola, hola",
      image: "https://content.jdmagicbox.com/comp/nirmal/f3/9999p8734.8734.190424101256.l1f3/catalogue/heritage-fresh-nirmal-xxxwltqhxv.jpg",
    },
    {
      id: 2,
      title: "Hola2",
      description: "hola, hola, hola",
      image: "https://www.spar.co.uk/store-locator/assets/static/locator-banner-e09fbf5e.webp",
    },
    {
      id: 3,
      title: "Hola3",
      description: "hola, hola, hola",
      image: "https://thenewshop.in/images/Store-1.jpg",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleNextB = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const lastCard = updatedCards.pop();
      updatedCards.unshift(lastCard);
      return updatedCards;
    });
  };

  const handlePrevB = () => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const firstCard = updatedCards.shift();
      updatedCards.push(firstCard);
      return updatedCards;
    });
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sm:flex hidden flex-col justify-center items-center">
        <div className="relative flex justify-center items-center lg:h-screen h-[80vh] w-full">
          {cards.map((card, index) => {
            const isMiddle = index === 1;
            const isLeft = index === 0;
            const isRight = index === 2;

            return (
              <div
                key={card.id}
                className={`absolute  md:w-[30vw] h-80 lg:w-[35vw] lg:h-96 border-2 border-gray-500 shadow-xl bg-black overflow-hidden flex-shrink-0 transform transition-all duration-700 ease-in-out ${
                  isMiddle
                    ? "scale-110 z-10 opacity-100"
                    : isLeft
                    ? "scale-90 -translate-x-80 top-10 opacity-80"
                    : "scale-90 translate-x-80 top-10 opacity-80"
                }`}
              >
                <div className="w-full h-4/5 rounded-b-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="size-auto object-cover rounded-b-3xl transition-opacity duration-700 ease-in-out"
                  />
                </div>

                <div className="absolute h-1/5 w-full bg-black bg-opacity-70 p-4 transition-opacity duration-700 ease-in-out px-5">
                  <h3 className="text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className={`text-sm text-[#868E96]`}>
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-8 -mt-10 z-10">
          <div
            className="flex justify-center items-center rounded-full w-8 h-8 bg-black text-white cursor-pointer"
            onClick={handlePrevB}
          >
            &#10094;
          </div>
          <div
            className="flex justify-center items-center rounded-full w-8 h-8 bg-black text-white cursor-pointer"
            onClick={handleNextB}
          >
            &#10095;
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col items-center justify-center w-full">
        <div
          key={cards[activeIndex].id}
          className="w-[80vw] h-auto border-2 border-gray-500 shadow-xl bg-black overflow-hidden flex-shrink-0 transition-all duration-500 ease-in-out"
        >
          <img
            src={cards[activeIndex].image}
            alt={cards[activeIndex].title}
            className="w-full h-[60vw] object-cover rounded-t-3xl"
          />
          <div className="p-4 bg-black">
            <h3 className="text-xl font-bold text-white">
              {cards[activeIndex].title}
            </h3>
            <p className={`text-sm text-[#868E96]`}>
              {cards[activeIndex].description}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 mt-5 sm:mt-0 z-10">
          <div
            className="flex justify-center items-center rounded-full w-8 h-8 bg-black text-white cursor-pointer"
            onClick={handlePrev}
          >
            &#10094;
          </div>
          <div
            className="flex justify-center items-center rounded-full w-8 h-8 bg-black text-white cursor-pointer"
            onClick={handleNext}
          >
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

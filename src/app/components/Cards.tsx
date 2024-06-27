'use client';
import React from "react";
// import React, { useState, useEffect } from 'react';
import "../globals.css";
// import { getCards } from '../lib/cards';

// Static array of card data
const cardData = [
  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "Find, Book and Meet Mentors around the world. Get virtual mentorship from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },
  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },
  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },  {
    image: "/images/smilyFace.png",
    title: "App List",
    status: "Public",
    description: "t from over 1,374+ mentors from the world’s leading companies in our global community.",
    users: [
      { icon: "/images/x.png", name: "kara.siher.eth" },
      { icon: "/images/global.png", name: "kara.siher.eth" },
      { icon: "/images/w.png", name: "kara.siher.eth" },
    ],
    buttonText: "App List’s Common Ground"
  },
];

const Cards = () => {
  // const [cards, setCards] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const data = await getCards();
  //       setCards(data);
  //     } catch (error) {
  //       console.error("Error fetching cards:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCards();
  // }, []);

  return (
    <div className='md:flex md:justify-center m-5'>
      <div className="md:grid md:grid-cols-3 md:m-[4rem] gap-11 ">
        {/* {loading ? (
          <div>Loading...</div>
        ) : (
          cards.map((card, index) => (
            <div key={index}>
              <p>{card.value}</p>
              <p>{card.label}</p>
              <p>{card.category}</p>
            </div>
          ))
        )} */}
        {cardData.map((card, index) => (
          <div key={index} className="mb-5 min-w-[25vw] h-max-fit p-[25px] rounded-[12px] border-[2px] border-[#FAB7D0]">
            <div className="flex">
              <div className="w-[87px] h-[87px]">
                <img src={card.image} alt="black smilyFace" className='object-cover w-[100%] h-[100%] rounded-[6px]' />
              </div>
              <div className="mx-5">
                <p className="clash text-[#404040] font-500 text-[30px] leading-[36px]">{card.title}</p>
                <p className="text-[16px] leading-[25px] bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-3 px-4 py-1 text-center">{card.status}</p>
              </div>
            </div>
            <div>
              <p className="text-[#696969] text-[16px] leading-[20px] font-mono pt-5">
                {card.description}
              </p>
            </div>
            <div className="mt-20">
              {card.users.map((user, userIndex) => (
                <div className="flex items-center" key={userIndex}>
                  <div className="w-[20px] h-[20px] mr-2">
                    <img className="w-full h-full object-fit" src={user.icon} alt="" />
                  </div>
                  <p className="text-[#4428F2] leading-[30px] font-500 text-[16px] clash">{user.name}</p>
                </div>
              ))}
              <div className="mt-12">
                <button className="clash font-500 text-[20px] leading-[30px] text-center custom-border-gradient w-[100%] px-[16px] py-[8px]">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

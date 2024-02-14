import React from "react";
import Card from "./Card";

const Card1 = () => {
  const data = [
    {
      id: 244268,
      postDate: "22 jan 2024",
      location: "Hlaing Yangon",
      title: "Premium Condo",
      price: "110$",
      details: "2 bedrooms and 2 bathroom",
      type: "Condo",
    },
    {
      id: 8992234,
      postDate: "22 jan 2024",
      location: "Insein Yangon",
      title: "Light House Ygn",
      price: "80$",
      details: "2 bedrooms and 2 bathroom",
      type: "House",
    },
    {
      id: 3646218,
      postDate: "21 June 2023",
      location: "Kamayut",
      title: "Building",
      price: "210$",
      details: "Meeting room and Lounge",
      type: "Building",
    },
    {
      id: 245730,
      postDate: "2 Dec 2023",
      location: "ShwePyithar Yangon",
      title: "Apartment",
      price: "110$",
      details: "2 bedrooms",
      type: "Apartment",
    },
  ];
  return (
    <div className="card-wrap">
      {data.map((item) => (
        <div key={item.id}>
          <Card
            id={item.id}
            postDate={item.postDate}
            location={item.location}
            title={item.title}
            price={item.price}
            details={item.details}
            type={item.type}
          />
        </div>
      ))}

  
    </div>
  );
};

export default Card1;

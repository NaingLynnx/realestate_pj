import React from 'react'
import Card from './Card'

const Card1 = () => {
  return (
    <div className='card-wrap'>
      <Card
        id={"244268"}
        postDate={"22 jan 2024"}
        location={"Hlaing Yangon"}
        title={"Preminum Condo"}
        price={"110$"}
        details={"2 bedrooms and 2 bathroom"}
        type={"Condo"}
      />

      <Card
        id={"682349"}
        postDate={"26 May 2023"}
        location={"Hlaing Yangon"}
        title={"Light House Ygn"}
        price={"90$"}
        details={"1 bedroom1 and 1 bathroom"}
        type={"House"}
      />

      <Card
        id={"771203"}
        postDate={"28 dec 2023"}
        location={"Insein Yangon"}
        title={"Apartment"}
        price={"110$"}
        details={"2 bedrooms and 2 bathroom"}
        type={"Apartment"}
      />

      <Card
        id={"4532402"}
        postDate={"2 June 2022"}
        location={"Kamayut Yangon"}
        title={"Building Ygn"}
        price={"90$"}
        details={"Meeting rooms and longue"}
        type={"Building"}
      />
    </div>
  )
}

export default Card1

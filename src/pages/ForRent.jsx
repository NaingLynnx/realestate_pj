import React from 'react'
import Mainvisual from '../component/Mainvisual'
import Card1 from '../component/Card1'

const ForRent = () => {
  return (
    <div>
      <Mainvisual/>
      <h2 style={{textAlign :'center',fontSize :"32px", padding: "20px" ,backgroundColor : "#D4D1AE",fontFamily :"Poppins",fontWeight:600}}>Properties for Rent</h2>
      <Card1/>
    </div>
  )
}

export default ForRent
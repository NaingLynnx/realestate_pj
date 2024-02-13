import React from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import { FaTents } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

 const Helppeople = () => {
    return (
        <>

            <div className="helpppl">

                <div className="l-wrap-inner l-wrap-inner--full">

                    <h2>How do We help People?</h2>
                    <div className="card-bloc">

                        <div className="card-bloc__cards--one">
                            <div className="img-box">
                              <MdMapsHomeWork style={{fontSize :"55px"}}/>
                            </div>
                            <h3>Sell Home & Appartment</h3>
                            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                        </div>
                        <div className="card-bloc__cards--two">
                            <div className="img-box">
                               <FaTents style={{fontSize :"55px"}}/>
                            </div>
                            <h3>Sell Home & Appartment</h3>
                            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                        </div>
                        <div className="card-bloc__cards--three">
                            <div className="img-box">
                              <FaBuilding style={{fontSize :"50px" , marginTop :"5px"}}/>
                            </div>
                            <h3>Sell Home & Appartment</h3>
                            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Helppeople

import React from "react";
import "./index.css"

import AboutBrand from "../about/aboutBrands";

const Brands =()=>{
    return(
        <div>
            <div>
                <img className="brandImage" src="/brandMain.jpg" />
            </div>
            <AboutBrand />
        </div>
    )
}

export default Brands
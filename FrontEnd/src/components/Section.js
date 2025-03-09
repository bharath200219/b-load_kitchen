import React from "react";
import foodData from "../data/data.js";
import FoodCategory from "./FoodCategory.js";
const Sections = () => {
  return (
    <div>
 <FoodCategory id="briyani" title="Briyanis" items={foodData.briyanis} />
      <FoodCategory id="friedrice" title="Fried Rice" items={foodData.friedRice} />
      <FoodCategory id="noodles" title="Noodles" items={foodData.noodles} />
      <FoodCategory id="payasam" title="Payasam" items={foodData.payasam} />
      <FoodCategory id="plainrice" title="Plain Rice" items={foodData.plainRice} />
      <FoodCategory id="white-rice" title="White Rice" items={foodData.whiteRice} />
      <FoodCategory id="rasam" title="Rasam" items={foodData.rasam} />
      <FoodCategory id="gravy" title="Gravies" items={foodData.gravies} />
    </div>
   
  );
};

export default Sections;

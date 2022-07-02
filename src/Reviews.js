import { useState } from "react";
import data from "./data";
import Review from "./Review";

const Reviews = () => {
 const [index,SetIndex]= useState(0),

  return (
    <section>
        <Review key = {data[indeks]}
        />
        <div className="btn-container">
           
        </div>
    </section>
  );
}

export default Reviews
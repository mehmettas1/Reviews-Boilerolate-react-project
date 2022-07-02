import { useState } from "react";
import data from "./data";
import Review from "./Review";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Reviews = () => {
 const [index,SetIndex]= useState(0);

 const Previous = () => {
    if(index ===0){
      SetIndex(data.length-1);
    }else {
      SetIndex(index-1);
    }

 }
 const Next = () => {
  if(index ===data.length-1){
    SetIndex(0);
  }else {
    SetIndex(index+1);
  }
  
}

  return (
    <section>
        <Review key = {data[index].id}
        {...data[index]}
        />
        <div className="btn-container">
          <span className="previous" onClick={Previous} ><FaChevronLeft/></span>
          <span className="next" onClick={Next} ><FaChevronRight/></span>
           
        </div>
    </section>
  )
}

export default Reviews
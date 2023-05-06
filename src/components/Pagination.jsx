import React from 'react';
import "./navbar.css";
function Pagination({prev,next,onPrev,onNext}) {
    const handlePrev = ()=>{
	onPrev()
    };
    const handleNext =()=>{
	onNext()
    };
    return(

	<div className="pagination">

	    <button onClick={handlePrev}>Prev</button>		
	    <button onClick={handleNext}>Next</button>		
	</div>

    )
}

export default Pagination;



import React from 'react';
import "./navbar.css";

const  Characters = ({characters})=>{
    return (
	<div className="card">
	    
	    {
		characters.map((item, index) =>(
		    <div key={index} className="tarjeta">
			<img src={item.image} alt="Imagen" />
			<div className="card-info">
			    <p>{item.name}</p>	    
			    <span>{item.species}</span>
			</div>
		    </div>
		))
            }

	</div>
    );
}

export default Characters;

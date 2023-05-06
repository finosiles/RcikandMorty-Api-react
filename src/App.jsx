
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Characters from "./components/Characters.jsx";
import Pagination from "./components/Pagination.jsx";
function App() {
    const [pages, setPages]= useState({});
    const [characters, setCharacters] = useState([]);
    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fetchUrl = (url) =>{
	fetch(url)
	    .then(response => response.json())
	    .then((data)=>{
                setCharacters(data.results);
                setPages(data.info);
            });
	
    }; 
    const onPrev =() =>{
        fetchUrl(pages.prev); 
    };
    const onNext =() =>{
        fetchUrl(pages.next); 
    } ;
    
    useEffect(() =>{
	fetchUrl(initialUrl);
    },[]);


    
	return (
	    <>
		<Navbar/>
	      <Pagination prev={pages.prev} next={pages.next} onPrev={onPrev} onNext={onNext} />

		<Characters characters={characters}/>
              <Pagination prev={pages.prev} next={pages.next} onPrev={onPrev} onNext={onNext} /> 
	    </>
	);
    }

export default App

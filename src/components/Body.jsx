import React, { useEffect ,useState} from 'react'
import './body.css'
import { FaStar } from "react-icons/fa";
import { Header } from './header'
// import axios from 'axios'

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://imdb-top-100-movies.p.rapidapi.com/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <Header/>
    <div className='cards '>
        {data.map((item=>
        <div className='card '  data-aos="zoom-in">
            <img src={item.image} alt='img'/>
            <div className="txt">
            <h4>{item.title}</h4>
            <p><FaStar/> {item.rating} </p>
            <a href={item.imdb_link}>
            <button>Watch Now</button>
            </a>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}

export default Body
import React, { useEffect ,useState} from 'react'
import './body.css'
import { FaStar } from "react-icons/fa";
import { Header } from './header'

function Body() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e95b6f46cmshd41f0602f481959p1269d0jsnaa59b2e22437',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
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
    <div className='cards'>
        {data.map((item=>
        <div className='card'>
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
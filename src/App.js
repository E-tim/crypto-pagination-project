import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'
import Coin from './componenet/Coin';
import Paginate from './componenet/Paginate';

function App() {


  // useEffect(()=>{
  //   let dat = axios.get('http://localhost:8000/new')
  //   console.log(dat.x)
  // },[])

  // const apiKey = process.env.REACT_APP_APIKEY;
  // const [weatherData, setWeatherData] = useState([{}])
  // const [city, setcity] = useState('');

  // const getWeather = async (e) => {
  //   if (e.key === 'Enter') {
  //     try {
  //       let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  //       setWeatherData(res.data);
  //     } catch (error) {
  //       alert(error)
  //     }
       
  //     setcity('');
  //   }
    
  // }


  const [result, setResult] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [resPerPage, setResPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
    const getData = async()=> {
      setIsloading(true);
      let res = await axios.get('https://crypto-pagination-project.vercel.app/');
      setResult(res.data);
      setIsloading(false);
    }
    getData();
  },[])

  //  getting current page of the pagination 
  const lastPageIndex = currentPage * resPerPage;
  const firstPageIndex = lastPageIndex - resPerPage;
  const currentData = result.slice(firstPageIndex, lastPageIndex); 

  const nextPage = (next)=> {
    setCurrentPage(next);
  }
  

  return (
    <div>
      <h1 style={{color: 'white', textAlign: 'center'}} >Crypto Current Price</h1>
      {
        isLoading ? (<img className='loading-img' src='img/loading.gif' alt='cryptocurrency' />) : 
        currentData.map( res => {
          return <Coin key={res.id} res ={res} />
        } )
      }
      <Paginate resPerPage={resPerPage} totalRes={result.length} nextPage ={nextPage} />



    </div>
  );
}

export default App;

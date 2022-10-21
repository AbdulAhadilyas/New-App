import './App.css';
import { useEffect, useState } from 'react';
import Post from './component/Post';
import Navbar from './component/Navbar';
import axios from 'axios';
import moment from 'moment';


function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  // const getInput = (event) => {
  //   setQuery(event.target.value)

  // }
  // console.log(query)
  useEffect(() => {
    function getTrendingNews() {

      const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: { safeSearch: 'Off', textFormat: 'Raw' },
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': "5263ca2a81mshe3db2ce8ae8a9dbp139c2ajsn9e606ad1ce8c",
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };

      axios.request(options)
        .then(function (response) {
          // console.log(response.data);

          setData(response.data.value)

        }).catch(function (error) {
          console.error(error);
        });
    }

    getTrendingNews();

  }, [])


  const getNews = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/search',
      params: { q: query, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': "5263ca2a81mshe3db2ce8ae8a9dbp139c2ajsn9e606ad1ce8c",
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data.value);
        setData(response.data.value)
      })
      .catch(function (error) {
        setIsLoading(false)
        console.error(error);
      });
    console.log("click")
  }
  // const getinput = (event) =>{
  //   setQuery(event.target.value)
  // }
  console.log(query)

  return (
    <div >
      <Navbar />

      <div className="input">
        <div className='input-box'>
          <form onSubmit={getNews}>
            <input class="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Enter Your Topic" onChange={(event) => {
              setQuery(event.target.value)
            }} />

            <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 " type='submit'>Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>

      </div>
      <>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((val) => (<Post
                text={val.description}
                image={val?.image?.thumbnail?.contentUrl
                  .replace("&pid=News", "")
                  .replace("pid=News&", "")
                  .replace("pid=News", "")}
                link={val.url} />))
              }
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;

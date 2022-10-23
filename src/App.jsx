import './App.css';
import { useEffect, useState } from 'react';
import Post from './component/Post';
import Navbar from './component/Navbar';
import Input from './component/Input';
import axios from 'axios';
import moment from 'moment';


function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);


  const abc = (val) => {
    console.log(val)
  }
  /// Get Input 
  const inpuQurey = (val) => {
    setQuery(val)
  }
///

/// on sumbit get input
const fetchData = (event) =>{
  event.preventDefault();
  console.log(query);
}
///

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


  return (
    <div >
      <Navbar abc={abc} />
   <Input getInput={inpuQurey} submitInput={fetchData}  />
 {/* <>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((val,index) => (<Post key={index}
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
      </> */}
    </div>
  );
}

export default App;

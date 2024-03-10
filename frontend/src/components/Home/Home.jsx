import React, { useState } from 'react';
import './Home.css';
import homeback from './homeback.png'
import axios from 'axios'
import BarPlot from './BarPlot';
import PieChart from './PieChart';
import View from './View';
import Loding from '../Genral/Loading'
import Loader from '../Genral/Loading';
import UserInfo from './UserInfo'
function Home() {

  const [ytLink, setLink] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    // Call the setter function to update the state
    setLink(event.target.value);
    console.log(ytLink);
  };
  

  const handleAnalyzeClick = async () => {
    try {
      setIsLoading(true); // Set loading state to true when making the API call
      const response = await axios.post('http://127.0.0.1:5000/api/get_info', {
        video_url: ytLink,
      });
      setData(response.data);
    } catch (error) {
      console.error('Error making POST request:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after the API call is complete
    }
  };


  return (
    <div>
      {!isLoading && !data &&       <div className='home'>
        <div className="heading">
          <img className="YT" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/1280px-YouTube_dark_logo_2017.svg.png" alt="" />
          <h1>Channel Analysis</h1>
          <p>Analyze YouTube comments instantly for insights on sentiments and engagement</p>
          <div style={{ display: 'flex', marginTop: "50px" }}>
            <input type="text" placeholder='Paste Your Link here' value={ytLink} onChange={handleInputChange} />
            <button className='button' onClick={handleAnalyzeClick}>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                    <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                  </svg>
                </div>
              </div>
              <span>Analyze </span>
            </button>

          </div>
        </div>
        <img className="homelogo" src={homeback} alt="" />
      </div> }


      {isLoading &&   <Loader />   }

      
      {/* {!isLoading && data && <View data={data} />} */}
      {!isLoading && data && <UserInfo data={data} />}

    </div>
  );
}
export default Home;
import { useState } from "react";
import AnimeItem from "../../components/anime-item";
import Search from "../../components/search";
import "./styles.css";

const Homepage = () => {
  const [loadingstate, setloadingstate] = useState(false);

  const [animes, setanimes] = useState([]);

  const getdatafromsearchcomponent = (searchdata) => {
    setloadingstate(true);

    async function getanimes() {
      const apiresponse = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchdata}&limit=10`
      );
      const result = await apiresponse.json();
      const { data } = result;

      if (data && data.length > 0) {
        setloadingstate(false);
        setanimes(data);
      }
      console.log(result);
    }
    getanimes();
  };

  console.log(loadingstate, animes, "loadingstate recipes");


  return (
    <div className="homepage">
       <header>
            <a href="#top" class="logo"><i class="fa-solid fa-user-astronaut"> KAVYA</i></a>
        </header>

        <div className="webname"><i class="fa-solid fa-binoculars"> </i>  search your favourite anime here...</div>

      <Search getdatafromsearchcomponent={getdatafromsearchcomponent} />

      {loadingstate && (
        <div className="loadingmsg">loading.... please wait</div>
      )}



      <div className="itembox">
      {
       animes && animes.length>0?
       animes.map((item)=>  
       <AnimeItem 
       id={item.mal_id} 
       image={item.images.jpg.image_url} 
       title ={item.title}
       airingstatus={item.status}
       rank={item.rank}
       rating={item.rating}
       url={item.url}
       />)
       :null
       }
       </div>
<div className="social">
       <div class="icon ig">
              <i class="fa-brands fa-instagram"></i>
              <span><a href="https://www.instagram.com/kavya_cactus1424/">instagram</a></span>
        
          </div>

        
          <div class="icon lnk">
              <i class="fa-brands fa-linkedin-in"></i>
              <span><a href="https://www.linkedin.com/in/kavya-s-bba9a9251">linkedin</a></span>
              

          </div>
  

          <div class="icon git">
              <i class="fa-brands fa-github"></i>
              <span><a href="https://github.com/kavyas1404">GitHub</a></span>
          </div>
  
          <div class="icon yt">
              <i class="fa-brands fa-youtube"></i>
              <span><a href="https://www.youtube.com/@kavya.s-ug9gd/">YouTube</a></span>
           </div>


           </div>

       

       


       <div class="copyright">
              <span>© Copyright 2022 </span>
              <span>This is a Webform by <a href="https://www.linkedin.com/in/kavya-s-bba9a9251"> Kavya S </a></span>
             </div>


             e





    </div>

  );
};

export default Homepage;

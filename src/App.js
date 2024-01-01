import "./App.css";
import React, { useState } from "react";
import Left from "./component/pages/left/left";
import Right from "./component/pages/right/right";
import { useMediaQuery } from "react-responsive";

const playerInfoArray = [
  {
    name: "Ahn Jung Hwan",
    birth: "1976.01.27",
    nation: "Korea",
    position: "FW",
    imgurl: "/images/players/ahn.jpg",
    youtube: "https://www.youtube.com/embed/c4BftThiTMM?autoplay=1",
  },
  {
    name: "Steven Gerrard",
    birth: "1980.05.30",
    nation: "England",
    position: "MF",
    imgurl: "/images/players/gerrard.jpg",
    youtube:
      "https://www.youtube.com/embed/4PcYYuHeRrY?autoplay=1" /*자동재생*/,
  },

  {
    name: "David Beckham",
    birth: "1975.05.02",
    nation: "England",
    position: "MF",
    imgurl: "/images/players/beckham.jpg",
    youtube: "https://www.youtube.com/embed/lICWLTRwIwU?autoplay=1",
  },
  {
    name: "Wayne Rooney",
    birth: "1985.10.24",
    nation: "England",
    position: "FW",
    imgurl: "/images/players/rooney.jpg",
    youtube: "https://www.youtube.com/embed/KR7xBdnt2Y0?autoplay=1",
  },
  {
    name: "Park Ji-sung",
    birth: "1981.03.30",
    nation: "Korea",
    position: "MF",
    imgurl: "/images/players/park.jpg",
    youtube: "https://www.youtube.com/embed/M8mlxx8vRnw?autoplay=1",
  },
  {
    name: "Ronaldo",
    birth: "1976.09.18",
    nation: "Brazil",
    position: "FW",
    imgurl: "/images/players/ronaldo.jpg",
    youtube: "https://www.youtube.com/embed/eb7w1oqDILQ?autoplay=1",
  },
  {
    name: "Ronaldinho",
    birth: "1980.03.21",
    nation: "Brazil",
    position: "MF",
    imgurl: "/images/players/ronaldingho.jpg",
    youtube: "https://www.youtube.com/embed/GotnSpb_zME?autoplay=1",
  },
  {
    name: "Pelé",
    birth: "1940.10.23",
    nation: "Brazil",
    position: "FW",
    imgurl: "/images/players/pele.jpg",
    youtube: "https://www.youtube.com/embed/Md7PP-N0f4g?autoplay=1",
  },

  {
    name: "Son Heung-Min",
    birth: "1982.07.08",
    nation: "Korea",
    position: "FW",
    imgurl: "/images/players/son.jpg",
    youtube: "https://www.youtube.com/embed/WmigCsRtA7Y?autoplay=1",
  },
];

const logoArray = {
  England: "/images/logo/england.png",
  Korea: "/images/logo/korea.png",
  Brazil: "/images/logo/Brazil.png",
};

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:800px)",
  });

  const [name, setName] = useState("");
  const [nation, setNation] = useState("");
  const [youtube, setYoutube] = useState("");
  const [isClick, setIsClick] = useState(false);

  return (
    <div className={`wrapper ${nation} ${isMobile ? "mobileLayout " : ""}`}>
      <Left
        isMobile={isMobile}
        playerInfoArray={playerInfoArray}
        logoArray={logoArray}
        name={name}
        setName={setName}
        isClick={isClick}
        setIsClick={setIsClick}
        nation={nation}
        setNation={setNation}
        setYoutube={setYoutube}
      />
      <Right
        isMobile={isMobile}
        isClick={isClick}
        playerInfoArray={playerInfoArray}
        youtube={youtube}
        setYoutube={setYoutube}
      />
    </div>
  );
}

export default App;

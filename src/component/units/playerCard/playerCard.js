import "./playerCard.css";
import PlayerInfo from "./playerInfo/playerInfo";

export default function PlayerCard(props) {
  const onClickPlayer = (player) => {
    props.setName(player.name);
    props.setIsClick(true);
    props.setNation(player.nation);
    props.setYoutube(player.youtube);
  };

  return (
    <>
      <div
        className={`playerWrapper ${
          props.isMobile ? "mobileLayoutCardWrapper" : ""
        }`}
      >
        {props.playerInfoArray.map((el, index) => (
          <div
            key={index}
            className={`playerCard ${props.isMobile ? "mobileLayoutCard" : ""}`}
            onClick={() => onClickPlayer(el, index)}
          >
            <img src={el.imgurl} alt="" />
            <PlayerInfo
              name={el.name}
              birth={el.birth}
              nation={el.nation}
              position={el.position}
            />
          </div>
        ))}
      </div>
    </>
  );
}

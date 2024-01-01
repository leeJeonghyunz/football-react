import "./left.css";
import LeftTitle from "../../units/header/header";
import PlayerCard from "../../units/playerCard/playerCard";

export default function Left(props) {
  return (
    <div
      className={`wrapper__left ${props.isMobile ? "mobileLayoutLeft" : ""}`}
    >
      <LeftTitle
        isMobile={props.isMobile}
        logoArray={props.logoArray}
        playerInfoArray={props.playerInfoArray}
        isClick={props.isClick}
        name={props.name}
        nation={props.nation}
      ></LeftTitle>
      <PlayerCard
        isMobile={props.isMobile}
        playerInfoArray={props.playerInfoArray}
        name={props.name}
        setName={props.setName}
        isClick={props.isClick}
        setIsClick={props.setIsClick}
        nation={props.nation}
        setNation={props.setNation}
        setYoutube={props.setYoutube}
      />
    </div>
  );
}

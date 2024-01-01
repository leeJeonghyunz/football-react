import "./playerInfo.css";

export default function PlayerInfo(props) {
  return (
    <>
      <div className="infoBox">
        <p>name: {props.name}</p>
        <p>birth: {props.birth} </p>
        <p>nation: {props.nation} </p>
        <p>position: {props.position} </p>
      </div>
    </>
  );
}

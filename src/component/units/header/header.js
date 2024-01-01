import "./header.css";

export default function LeftTitle(props) {
  console.log(props.logoArray[props.nation]);
  return (
    <>
      {props.isClick ? (
        <div className="teamLogoWrapper ">
          <div className={`playerName ${props.isMobile ? "mobileFont20" : ""}`}>
            {props.name}
          </div>
          <div className={`logo ${props.isMobile ? "mobileLogo" : ""}`}>
            <img src={props.logoArray[props.nation]} alt="" />
          </div>
        </div>
      ) : (
        <div className={`clickHere ${props.isMobile ? "mobileFont" : ""}`}>
          Click Player!!
        </div>
      )}
    </>
  );
}

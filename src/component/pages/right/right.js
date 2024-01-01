import "../right/right.css";

export default function Right(props) {
  return (
    <>
      <div
        className={`wrapper__right ${
          props.isMobile ? "mobileLayoutRight" : ""
        }`}
      >
        <div
          className={`videoWrapper ${
            props.isMobile ? "mobileLayoutYoutube" : ""
          }`}
        >
          <img
            src="/images/shorts.png"
            alt="asd"
            className={`shortsImg ${props.isClick ? "hidden" : ""}`}
          />
          <iframe
            className="iFrame"
            src={props.youtube}
            title="안정환의 칩슛 축구 #안정환 #2002월드컵 #레전드 #칩슛 #축구"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

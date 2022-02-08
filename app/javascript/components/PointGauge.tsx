import * as React from 'react';
import { FC } from 'react';

interface Type {
  type: string;
  point?: number;
}

const progress_back_style =
  {
    width: "100%",
    height: "2rem",
    background: "#ccc",
    position: "relative",
  } as React.CSSProperties;

let progress_front_style =
  {
    width: "0%",
    height: "2rem",
    background: "#e31787",
    position: "absolute",
    left: "0",
    top: "0",
    transition: "0.5s ease-in-out",
    overflow: "hidden",
  } as React.CSSProperties;

const PointGauge: FC<Type> = (props)  => {
  let gauge_color = "";
  let gauge_type = "";
  if (props.type == "tanni") {
    gauge_color = "red"
    gauge_type = "単位"
  }else if (props.type == "love") {
    gauge_color = "pink"
    gauge_type　= "恋愛"
  }else if (props.type == "business") {
    gauge_color = "blue"
    gauge_type　= "就活"
  }else if (props.type == "club") {
    gauge_color = "green"
    gauge_type = "サークル"
  }

  if (props.point) {
    progress_front_style["width"] = props.point + "px"
  }

  return (
    <>
      <div className="gauge_wrapper">
          <div className="progress_back" style={progress_back_style}>
            <div className="progress_front" id={props.type + "_gauge"} style={{...progress_front_style, "backgroundColor": gauge_color}}></div>
            <div style={{"position": "absolute"}}>{gauge_type}: <span id={props.type + "_score"}>{props.point ? props.point : "0"}</span></div>
          </div>
      </div>
    </>
  );
};
export default PointGauge;

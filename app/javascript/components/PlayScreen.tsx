import * as React from 'react';
import { useRef } from 'react';
import PointGauge  from './PointGauge';
import  Canvas  from './Canvas';

const PlayScreen = ({})  => {
  const ref = useRef<any>()
  const screen_width = 400;
  const screen_height = 400;
  const style =
    {
      backgroundImage: `url("/assets/background_image.png")`,
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      width: screen_width,
    } as React.CSSProperties;
  let time_limit = 20;
  setInterval(() => {
    let score = document.getElementById("time_limit");
    time_limit -= 1
    score.innerHTML = String(time_limit);
    if (Number(score.innerHTML)==0){
      ref.current.postResult()
    }
  }, 1000);
  return (
    <div style={style}>
      <div>制限時間: <span id="time_limit">20</span></div>
      <PointGauge type="tanni"/>
      <PointGauge type="love"/>
      <PointGauge type="business"/>
      <PointGauge type="club"/>
      <Canvas
        c_ref = {ref}
        screen_width = {screen_width}
        screen_height = {screen_height}
      />
    </div>
  );
};
export default PlayScreen;

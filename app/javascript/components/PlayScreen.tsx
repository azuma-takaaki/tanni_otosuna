import * as React from 'react';
import { useRef } from 'react';
import PointGauge  from './PointGauge';
import  Canvas  from './Canvas';

const PlayScreen = ({})  => {
  const ref = useRef<any>()
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
    <>
      <div>制限時間: <span id="time_limit">20</span></div>
      <PointGauge/>
      <div className="gauge_wrapper">
        <div id="tanni_score_gauge"></div>
        単位: <span id="tanni_score">0</span>
      </div>
      <div id="love_score_gauge">恋愛: <span id="love_score">0</span></div>
      <div id="business_score_gauge">就活: <span id="business_score">0</span></div>
      <div id="club_score_gauge">友情: <span id="club_score">0</span></div>
      <Canvas
        c_ref = {ref}
      />
    </>
  );
};
export default PlayScreen;
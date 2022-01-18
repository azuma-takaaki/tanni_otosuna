import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {ScreenManeger} from './ScreenManeger';
import {Player} from './Player';
import { DropObject } from './DropObject';
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
      <div>単位: <span id="tanni_score">0</span></div >
      <div>恋愛: <span id="love_score">0</span></div>
      <div>就活: <span id="business_score">0</span></div>
      <div>友情: <span id="club_score">0</span></div>
      <Canvas
        c_ref = {ref}
      />
    </>
  );
};
export default PlayScreen;
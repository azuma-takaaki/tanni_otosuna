import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {ScreenManeger} from './ScreenManeger';
import {Player} from './Player';
import { DropObject } from './DropObject';
import  Canvas  from './Canvas';

const PlayScreen = ({})  => {
  const [count, setCount] = useState(0)
  const player = new Player({x: 0, y:0, reduction_ratio: 0.2, image_src: "/assets/player.png"});
  return (
    <>
      <div>単位: <span id="tanni_score">0</span></div >
      <div>恋愛: <span id="love_score">0</span></div>
      <div>就活: <span id="business_score">0</span></div>
      <div>友情: <span id="club_score">0</span></div>
      <Canvas
        props = {player}
      />
    </>
  );
};
export default PlayScreen;
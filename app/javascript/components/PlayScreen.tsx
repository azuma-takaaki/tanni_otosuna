import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {ScreenManeger} from './ScreenManeger';
import {Player} from './Player';
import { DropObject } from './DropObject';

const PlayScreen = ({})  => {
  const count = 0;
  let screenManeger;
  let playerX = 0;
  let playerY = 0;
  const [screenWidth, setScreenWidth] = useState<number>(400)
  const [screenHeight, setScreenHeight] = useState(600)
  const [amountPlayerMove, setAmountPlayerMove] = useState(10)
  const canvasRef = useRef(null);
  const player_image = new Image();
  player_image.src = "/assets/player.png";
  

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();

    ctx.save();

    const objects = {
      player: new Player({x: 0, y:0, image_src: "/assets/player.png"}),
      tanni: [new DropObject({x: 0, y: 0, type: "tanni"})],
      love: [new DropObject({x: 30, y: 0, type: "love"})],
      business: [new DropObject({x: 60, y: 0, type: "business"})],
      club: [new DropObject({x: 90, y: 0, type: "club"})]
    };

    screenManeger = new ScreenManeger({
      canvas: canvasRef.current,
      canvas_context: getContext(),
      objects: objects,
      fps: 30
    })

    console.log("useEffect() is called")
    screenManeger.start()
  })

  const addDropObject = (x: number, y:number, type: string) =>{
    screenManeger.objects[type].push(new DropObject({x: x, y: y, type: type}))
  }



  /*
  const handleKeyDown = (event: KeyboardEvent) => {
    const keyName = event.key;
    if (keyName == "ArrowRight"){
      movePlayer(amountPlayerMove)
      console.log("ArrowRight");
    }else if (keyName == "ArrowLeft"){
      movePlayer(-amountPlayerMove)
      console.log("ArrowLeft");
    }
  }

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    player_image.onload = () => {
        ctx.drawImage(player_image, playerX, playerY)
    };
    ctx.save();
    document.addEventListener('keydown', handleKeyDown, false)
  }, [])

  const movePlayer = (delta_x) => {
    playerX += delta_x
    const ctx: CanvasRenderingContext2D = getContext();
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    addEventListener('load', function() {
      ctx.drawImage(player_image, playerX, playerY)
    }, false);
    ctx.save();
  }
  */

  return (
    <>
      <canvas className="canvas" ref={canvasRef} width={screenWidth} height={screenHeight}/>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
          ←
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => screenManeger.start()}
      >
          →
      </button>
      <button onClick={()=> addDropObject(Math.floor( Math.random() * 100),0,"tanni")}>
        追加！！！！
      </button>
    </>
  );
};
export default PlayScreen;
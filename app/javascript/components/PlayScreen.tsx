import * as React from 'react';
import {useState, useEffect, useRef} from 'react';

document.addEventListener('keydown', (event) => {
    var keyName = event.key;

    if (event.ctrlKey) {
      console.log(`keydown:Ctrl + ${keyName}`);
    } else if (event.shiftKey) {
      console.log(`keydown:Shift + ${keyName}`);
    } else {
      console.log(`keydown:${keyName}`);
    }
  });

  document.addEventListener('keypress', (event) => {
    var keyName = event.key;

    if (event.ctrlKey) {
      console.log(`keypress:Ctrl + ${keyName}`);
    } else if (event.shiftKey) {
      console.log(`keypress:Shift + ${keyName}`);
    } else {
      console.log(`keypress:${keyName}`);
    }
  });

const PlayScreen = ({})  => {
  const [screenWidth, setScreenWidth] = useState<number>(400)
  const [screenHeight, setScreenHeight] = useState(600)
  const [playerX, setPlayerX] = useState(0)
  const [playerY, setPlayerY] = useState(0)
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    const player_image = new Image();
    player_image.src = "/assets/player.png";
    player_image.onload = () => {
        ctx.drawImage(player_image, playerX, playerY)
    };
    ctx.save();
  })

  const movePlayer = (delta_x) => {
    const ctx: CanvasRenderingContext2D = getContext();
    const player_image = new Image();
    player_image.src = "/assets/player.png";
    player_image.onload = () => {
        ctx.drawImage(player_image, playerX, playerY)
    };
    ctx.save();
    setPlayerX(playerX + delta_x)
  }

  return (
    <>
      <canvas className="canvas" ref={canvasRef} width={screenWidth} height={screenHeight}/>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick = {()=>movePlayer(-10)}
      >
          ←
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick = {()=>movePlayer(10)}
      >
          →
      </button>
    </>
  );
};
export default PlayScreen;
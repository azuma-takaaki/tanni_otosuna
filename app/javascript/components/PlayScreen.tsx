import * as React from 'react';
import {useState, useEffect, useRef} from 'react';


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
    ctx.fillRect(playerX, playerY, 100, 100);
    ctx.save();
  })
  return (
    <>
      <canvas className="canvas" ref={canvasRef} width={screenWidth} height={screenHeight}/>
    </>
  );
};
export default PlayScreen;
import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {ScreenManeger} from './ScreenManeger';
import {Player} from './Player';
import { DropObject } from './DropObject';

const Canvas = ({c_ref})  => {
  let player: any;
  const [tanniPoint, setTanniPoint] = useState(100);
  let count = 0;
  let screenManeger;
  let playerX = 0;
  let playerY = 0;
  const screen_width = 400;
  const screen_height = 600;
  const [amountPlayerMove, setAmountPlayerMove] = useState(10)
  const canvasRef = useRef(null);
  const player_image = new Image();
  player_image.src = "/assets/player.png";
  
  c_ref.current = {
		postResult: () => {
      const data = {"result":
                        {
                          "tanni_point": screenManeger.tanni_score,
                          "love_point": screenManeger.love_score,
                          "club_point": screenManeger.club_score,
                          "business_point": screenManeger.business_score
                        }
                    }
      const getCsrfToken = () => {
        const metas = document.getElementsByTagName('meta');
        const token = metas[3].getAttribute('content')
        return token
      }
      fetch('/results/create', {
        method: 'POST',
        credentials: 'same-origin',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken()
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(Object.keys(data))
        console.log(data["status"])
        location.href="/results/" + data["result_id"];
      })
    }
	}

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;

    return canvas.getContext('2d');
  };

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext();
    ctx.save();

    player = new Player({x: 0, y:0, reduction_ratio: 0.2, image_src: "/assets/player.png"});
    const objects = {
      player: player,
      tanni: [new DropObject({x: 0, y: 0, reduction_ratio: 0.2, type: "tanni"})],
      love: [],
      business: [],
      club: []
    };

    screenManeger = new ScreenManeger({
      canvas: canvasRef.current,
      canvas_context: getContext(),
      objects: objects,
      fps: 30
    })

    console.log("useEffect() is called")
    screenManeger.start()

    setInterval(() => {addDropObject(0,0,"tanni")}, 500);
  })

  const addDropObject = (x: number, y:number, type: string):any =>{
    x = Math.floor( Math.random() * screen_width)

    switch (Math.floor( Math.random() * 4)) {
      case 0:
        type = "tanni";
        break;
      case 1:
        type = "love";
        break;
      case 2:
        type = "business";
        break;
      case 3:
        type = "club";
        break;
      default:
        break;
    }
    screenManeger.objects[type].push(new DropObject({x: x, y: y, reduction_ratio: 0.2, type: type}))
  }

  return (
    <>
      <canvas className="canvas" ref={canvasRef} width={screen_width} height={screen_height}/>
    </>
  );
};
export default Canvas;
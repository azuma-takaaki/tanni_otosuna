import * as React from 'react';
import { useState, FC } from 'react';

interface Type {
  title: Array<string>;
  count: number;
}

const TitleDetail: FC<Type> = (props)  => {
  const modal_wrapper_style : { [key: string]: string } = {
    display: "inline",
    position: "fixed",
    height: "100vh",
    top: "0",
    left: "0",
    width: "100%"
  }
  const modal_background_style : { [key: string]: string } = {
    background: "rgba(0,0,0,0.8)",
    height: "100vh",
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
  }
  const modal_content_style : { [key: string]: string } = {
    background: "#fff",
    left: "50%",
    padding: "40px",
    position: "fixed",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: "60%",
  }
  const hidden_modal_style : { [key: string]: string } =  { display: "none" }
  const [style, setStyle] = useState(hidden_modal_style)
  const image_size: string = "120px";
  const modal_image_size: string = "320px";
  const infinite = 1000000000

  let image;
  let modal_image;
  let name;
  if (props.count > 0){
    image = <img src={"/assets/" + props.title["image_path"]} width={image_size} height={image_size}/>
    modal_image = <img src={"/assets/" + props.title["image_path"]} width={image_size} height={image_size}/>
    name = props.title["name"]
  }else{
    image = <img src={"/assets/no_user.png"} width={image_size} height={image_size}/>
    modal_image = <img src={"/assets/no_user.png"} width={modal_image_size} height={modal_image_size}/>
    name = "???"
  }
  return (
    <>
      <div 
        onClick={()=>{
          JSON.stringify(style)==JSON.stringify(modal_wrapper_style) ? setStyle(hidden_modal_style) : setStyle(modal_wrapper_style) 
        }
      }>{image}</div>
      <div>{name}</div>
      <div style={style}>
        <div style={modal_background_style} onClick={()=>{setStyle(hidden_modal_style)}}></div>
        <div style={modal_content_style}>
          <div>{modal_image}</div>
          <div>{name}</div>
          <div>獲得条件</div>
          <div>単位: <span>{props.title["tanni_range"][0]}〜{props.title["tanni_range"][1] == infinite ? "∞" : props.title["tanni_range"][1]}</span></div>
          <div>恋愛: <span>{props.title["love_range"][0]}〜{props.title["love_range"][1] == infinite ? "∞" : props.title["love_range"][1]}</span></div>
          <div>就活: <span>{props.title["business_range"][0]}〜{props.title["business_range"][1] == infinite ? "∞" : props.title["business_range"][1]}</span></div>
          <div>サークル: <span>{props.title["club_range"][0]}〜{props.title["club_range"][1] == infinite ? "∞" : props.title["club_range"][1]}</span></div>
        </div>
      </div>
    </>
  );
};
export default TitleDetail;

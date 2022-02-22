import * as React from 'react';
import { useState, FC } from 'react';

interface Type {
  title: Array<string>;
  count: number;
}

const TitleDetail: FC<Type> = (props)  => {
  const modal_style = {display: "none"}
  const [style, setStyle] = useState({})
  const image_size: string = "120px";
  let image;
  let name;
  if (props.count > 0){
    image = <img src={"/assets/" + props.title["image_path"]} width={image_size} height={image_size}/>
    name = props.title["name"]
  }else{
    image = <img src={"/assets/no_user.png"} width={image_size} height={image_size}/>
    name = "???"
  }
  return (
    <>
      <div 
        onClick={()=>{
          JSON.stringify(style)==JSON.stringify(modal_style) ? setStyle({}) : setStyle(modal_style)
        }
      }>{image}</div>
      <div>{name}</div>
      <div style={style}>これはモーダルです</div>
    </>
  );
};
export default TitleDetail;

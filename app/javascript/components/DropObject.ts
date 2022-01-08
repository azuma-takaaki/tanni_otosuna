import SuperObject from './Object';

export class DropObject extends SuperObject{
  public drop_speed: number;
  constructor(params){
    super(params)
    this.drop_speed = params.drop_speed ? params.drop_speed : 5;
    this.loadImage(params.type)
    .then((img: HTMLImageElement)=>{
      this.image = img;
      this.width = img.width * this.reduction_ratio;
      this.height = img.height * this.reduction_ratio;
    })
  }

  async loadImage(type){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      switch (type){
        case "tanni":
          img.src = "/assets/tanni.png";
          break;
        case "love":
          img.src = "/assets/love.png";
          break;
        case "business":
          img.src = "/assets/business.png"
          break;
        case "club":
          img.src = "/assets/club.png"
          break;
        default:
          img.src = "/assets/tanni.png";
          break;
      }
    });
  }

  update() {
    this.y += this.drop_speed;
  }
}
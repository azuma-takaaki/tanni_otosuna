export class DropObject{
  public x: number;
  public y: number;
  public image: any;
  public name: string;
  public width: number;
  public height: number;
  public reduction_ratio: number;
  public drop_speed: number;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
    this.drop_speed = params.drop_speed ? params.drop_speed : 5;
    this.reduction_ratio = params.reduction_ratio;
    this.loadImage(params.type)
    .then((img: HTMLImageElement)=>{
      this.image = img;
      this.width = img.width * this.reduction_ratio;
      this.height = img.height * this.reduction_ratio;
    })
  }

  get top() { return this.y; }
  get bottom() { return this.y + this.height; }
  get left() { return this.x; }
  get right() { return this.x + this.width; }

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
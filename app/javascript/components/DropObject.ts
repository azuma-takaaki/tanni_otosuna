export class DropObject{
  public x: number;
  public y: number;
  public image: HTMLImageElement;
  public name: string;
  public drop_speed: number;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
    this.drop_speed = params.drop_speed ? params.drop_speed : 5;
    this.image = new Image();
    switch (params.type){
      case "tanni":
        this.image.src = "/assets/tanni.png";
        break;
      case "love":
        this.image.src = "/assets/love.png";
        break;
      case "business":
        this.image.src = "/assets/business.png"
        break;
      case "club":
        this.image.src = "/assets/club.png"
        break;
      default:
        this.image.src = "/assets/tanni.png";
        break;
    }
  }

  update() {
    this.y += this.drop_speed;
  }
}


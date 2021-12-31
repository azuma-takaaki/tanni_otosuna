export class Object{
  public x: number;
  public y: number;
  public image_src: string;
  public image: HTMLImageElement;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
    this.image = new Image();
    this.image.src = params.image_src;
  }
}
export class Player{
  public x: number;
  public y: number;
  public image: HTMLImageElement;
  public name: string;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
    this.image = new Image();
    this.image.src = params.image_src;
    this.name = params.name ? params.name : "私文大学生くん";
  }
}
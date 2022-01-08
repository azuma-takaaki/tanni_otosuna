export default class Object{
  public x: number;
  public y: number;
  public image: any;
  public width: number;
  public height: number;
  public reduction_ratio: number;
  constructor(params: any){
    this.x = params.x;
    this.y = params.y;
    this.reduction_ratio = params.reduction_ratio;
  }

  get top() { return this.y; }
  get bottom() { return this.y + this.height; }
  get left() { return this.x; }
  get right() { return this.x + this.width; }
}
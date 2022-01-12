import SuperObject from './Object';

export class Player extends SuperObject{
  public name: string;
  public tanni_point: number;
  public love_point: number;
  public business_point: number;
  public club_point: number;
  constructor(params){
    super(params)
    this.tanni_point = 0;
    this.love_point = 0;
    this.business_point = 0;
    this.club_point = 0;
    this.reduction_ratio = params.reduction_ratio;
    this.loadImage(params.image_src)
    .then((img: HTMLImageElement)=>{
      this.image = img;
      this.width = img.width * this.reduction_ratio;
      this.height = img.height * this.reduction_ratio;
    })

    this.name = params.name ? params.name : "私文大学生くん";
  }

  get top() { return this.y; }
  get bottom() { return this.y + this.height; }
  get left() { return this.x; }
  get right() { return this.x + this.width; }

  async loadImage(image_url){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = image_url;
    });
  }


  update(keyboard) {
    // ここでキーボード操作により座標を変更する
    switch (keyboard) {
      case 'ArrowUp':
        this.y -= 5;
        break;
      case 'ArrowDown':
        this.y += 5;
        break;
      case 'ArrowLeft':
        this.x -= 5;
        break;
      case 'ArrowRight':
        this.x += 5;
        break;
    }
  }
}
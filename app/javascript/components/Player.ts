export class Player{
  public x: number;
  public y: number;
  public image: any;
  public name: string;
  public width: number;
  public height: number;
  public reduction_ratio: number;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
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
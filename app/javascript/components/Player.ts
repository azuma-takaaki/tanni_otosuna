export class Player{
  public x: number;
  public y: number;
  public image: any;
  public name: string;
  public width: number;
  public height: number;
  constructor(params){
    this.x = params.x;
    this.y = params.y;
    this.loadImage(params.image_src)
    .then((img)=>{
      this.image = img;
      this.width = img.width;
      this.height = img.height;
    })

    this.name = params.name ? params.name : "私文大学生くん";
  }

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
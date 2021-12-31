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
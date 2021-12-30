export class ScreenManeger {
  canvas
  fps
  ctx
  objects
  loadedAssets
  timer
  items
  keyboard
  player_image
  constructor(opt){
    this.canvas = opt.canvas;
    // 描画用コンテキスト
    this.ctx = opt.canvas.getContext('2d');
    
    // アセット（画像ファイルなど）
    this.objects = opt.objects;
    this.loadedAssets = {};
    
    // 描画速度（フレームレート）
    this.fps = opt.fps || 30;

    // 無限ループ用のtimer（start・stop時に使用）
    this.timer;

    // Canvasに描画するオブジェクトリスト
    this.items = [];

    // キーボード入力を保持する
    this.keyboard = '';
  }

  async start() {
    console.log("start() is called")
    //await this.loadAssets();
    this.timer = setInterval(() => {
      console.log("timer() is called")
      console.log(this.objects)
      console.log(this.objects.player)
      console.log(this.objects.player.image)
      console.log(this.objects.player.image.src)
      this.render();
    }, 1000 / this.fps);
  }

  /*
  async loadAssets() {
    const promises = Object.keys(this.assets).map(asset => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => { resolve }
        img.onerror = err => { reject(err); }
        img.src = this.assets[asset];
        this.loadedAssets[asset] = img;
      });
    });

    return Promise.all(promises);
  }
  */
  /**
   * Canvasをクリアし、オブジェクトを再描画する
   */
  render() {
    // Canvasをクリアする
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    this.ctx.drawImage(this.objects.player.image, Math.floor( Math.random() * 10 ), 100)
    this.items.forEach(a => {
      // オブジェクトを再描画する
      a.draw(this.ctx, this.loadedAssets);
      // オブジェクトの状態を変更する
      a.update(this.keyboard);
    })


  }
}

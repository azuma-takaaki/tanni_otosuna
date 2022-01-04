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
    this.setEventListener();
  }

  async start() {
    //await this.loadAssets();
    this.timer = setInterval(() => {
      this.render();
    }, 1000 / this.fps);
  }

  setEventListener() {
    window.addEventListener('keydown', e => { this.keyboard = e.key });
    window.addEventListener('keyup', e => { this.keyboard = '' });
  }

  update_objects(){
    for (let key in this.objects) {
      if (key == 'player'){
        const p = this.objects[key];
        const p_x = p.x;
        const p_y = this.canvas.height - p.height * p.reduction_ratio;
        const p_w = p.width * p.reduction_ratio;
        const p_h = p.height * p.reduction_ratio;
        p.update(this.keyboard);
        this.ctx.drawImage(p.image, p_x, p_y, p_w , p_h)
      }else{
        for(const obj of this.objects[key]){
          obj.update();
          this.ctx.drawImage(obj.image, obj.x, obj.y)
        }
      }
    }
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
  
    this.update_objects()
    this.items.forEach(a => {
      // オブジェクトを再描画する
      a.draw(this.ctx, this.loadedAssets);
      // オブジェクトの状態を変更する
      a.update(this.keyboard);
    })


  }
}

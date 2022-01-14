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
  tanni_score 
  love_score
  business_score
  club_score
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

    this.tanni_score = 0;
    this.love_score = 0;
    this.business_score = 0;
    this.club_score = 0;
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
        p.y = this.canvas.height - p.height;
        p.update(this.keyboard);
        this.ctx.drawImage(p.image, p.x, p.y, p.width , p.height)
      }else{
        for(let i  in this.objects[key]){
          const obj = this.objects[key][i]
          obj.update();
          this.ctx.drawImage(obj.image, obj.x, obj.y, obj.width , obj.height)
          if(this.detectRectangleCollision(this.objects["player"], obj)){
            this.add_score(key)
            this.objects[key].splice(i,1)
          }
        }
      }
    }
  }


  detectRectangleCollision(rect1, rect2) {
    const horizontal = (rect2.left < rect1.right) && (rect1.left < rect2.right);
    const vertical = (rect2.top < rect1.bottom) && (rect1.top < rect2.bottom);

    return (horizontal && vertical);
  }

  add_score(drop_object_type){
    let score = document.getElementById(drop_object_type + "_score");
    switch (drop_object_type) {
      case 'tanni':
        this.tanni_score += 1;
        score.innerHTML = this.tanni_score;
        break;
      case 'love':
        this.love_score += 1;
        score.innerHTML = this.love_score;
        break;
      case 'business':
        this.business_score += 1;
        score.innerHTML = this.business_score;
        break;
      case 'club':
        this.club_score += 1;
        score.innerHTML = this.club_score;
        break;
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

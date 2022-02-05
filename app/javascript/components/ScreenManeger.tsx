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
    this.ctx = opt.canvas.getContext('2d');
    
    this.objects = opt.objects;
    this.loadedAssets = {};
    
    this.fps = opt.fps || 30;

    this.timer;

    this.items = [];

    this.keyboard = '';
    this.setEventListener();

    this.tanni_score    = 0;
    this.love_score     = 0;
    this.business_score = 0;
    this.club_score     = 0;
  }

  async start() {
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
    let score_point = document.getElementById(drop_object_type + "_score");
    let score_gauge = document.getElementById(drop_object_type + "_gauge");
    let score_add_point = 20
    switch (drop_object_type) {
      case 'tanni':
        this.tanni_score += score_add_point;
        score_point.innerHTML = this.tanni_score;
        score_gauge.style.width = this.tanni_score + "px";
        break;
      case 'love':
        this.love_score += score_add_point;
        score_point.innerHTML = this.love_score;
        score_gauge.style.width = this.love_score + "px";
        break;
      case 'business':
        this.business_score += score_add_point;
        score_point.innerHTML = this.business_score;
        score_gauge.style.width = this.business_score + "px";
        break;
      case 'club':
        this.club_score += score_add_point;
        score_point.innerHTML = this.club_score;
        score_gauge.style.width = this.club_score + "px";
        break;
    }
  }
  
  render() {
    this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
  
    this.update_objects()
    this.items.forEach(a => {
      a.draw(this.ctx, this.loadedAssets);
      a.update(this.keyboard);
    })


  }
}

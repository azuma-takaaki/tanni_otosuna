/**
 * ゲームエンジン
 */
 export class Game {
  /**
   * ゲームインスタンスを作成する
   * @param {Object} opt オプション
   * @param {HTMLCanvasElement} opt.canvas Canvas要素
   * @param {Object} opt.assets アセット（画像ファイルなど）
   * @param {Number} opt.fps フレームレート
   */
  constructor(opt) {
    this._canvas = opt.canvas;
    // 描画用コンテキスト
    this._ctx = this._canvas.getContext('2d');
    
    // アセット（画像ファイルなど）
    this._assets = opt.assets;
    this._loadedAssets = {};
    
    // 描画速度（フレームレート）
    this._fps = opt.fps || 30;

    // 無限ループ用のtimer（start・stop時に使用）
    this._timer;

    // Canvasに描画するオブジェクトリスト
    this._items = [];

    // キーボード入力を保持する
    this._keyboard = '';
    this._setEventListener();
  }
  /**
   * ゲームを開始する
   */
  async start() {
    await this._loadAssets();
    this._timer = setInterval(() => {
      this._render();
    }, 1000 / this._fps);
  }
  /**
   * ゲームを一時停止する
   */
  stop() {
    clearInterval(this._timer);
  }
  /**
   * アセットを読み込む
   */
  async _loadAssets() {
    const promises = Object.keys(this._assets).map(asset => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => { resolve(); }
        img.onerror = err => { reject(err); }
        img.src = this._assets[asset];
        this._loadedAssets[asset] = img;
      });
    });

    return Promise.all(promises);
  }
  /**
   * Canvasをクリアし、オブジェクトを再描画する
   */
  _render() {
    // Canvasをクリアする
    this._ctx.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);

    this._items.forEach(a => {
      // オブジェクトを再描画する
      a.draw(this._ctx, this._loadedAssets);
      // オブジェクトの状態を変更する
      a.update(this._keyboard);
    })
  }
  /**
   * キーボード操作を受け付ける
   */
  _setEventListener() {
    window.addEventListener('keydown', e => { this._keyboard = e.key });
    window.addEventListener('keyup', e => { this._keyboard = '' });
  }
  /**
   * 描画リストにオブジェクトを追加する
   * @param {Object} item 描画するオブジェクトインスタンス
   */
  add(item) {
    this._items.push(item);
  }
  /**
   * 描画リストから対象のオブジェクトを削除する
   * @param {Object} item 削除したいオブジェクトのインスタンス
   */
  remove(item) {
    const idx = this._items.find(a => a === item);
    this._items.splice(idx, 1);
  }
}
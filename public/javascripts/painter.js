(function()) {
  var Painter = {
    ctx: null,
    w: 0,
    h: 0,
    bColor: null,
    bWidth: null,
    init: function() {

    },
    initBrush: function() {

    },
    initEraser: function() {

    },
    setBGColor: function(color) {

    },
    setBrushColor: function(color) {

    },
    initCanvas: function() {

    },
    clear: function() {
      this.ctx.clearRect(0, 0, this.w, this.h);
    },
    fire: function(eventName, param) {

    },
    onStartDraw: function(data) {
      this.ctx.beginPath();
      this.ctx.moveTo(data.x, data.y);

    },
    onDrawing: function(data) {
      this.ctx.lineTo(data.x, data.y);
      this.ctx.stroke();
    },
    onPaintUpdate: function(data) {

    }
  }
  Painter.init();
  window.Painter = Painter;
}())

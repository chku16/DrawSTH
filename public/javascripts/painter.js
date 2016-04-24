(function() {
  var Painter = {
    ctx: null,
    w: 0,
    h: 0,
    bColor: null,
    bWidth: null,
    init: function() {
      var can = $("#paintArea")[0];
      this.ctx = can.getContext("2d");
      this.w = can.width;
      this.h = can.height;
      this.setBGColor();
      this.setBrushColor();
      this.setBrushWidth();
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.initCanvas();
      this.initBrush();
      this.initEraser();
    },
    initBrush: function() {

    },
    initEraser: function() {

    },
    setBGColor: function(color) {

    },
    setBrushColor: function(color) {

    },
    setBrushWidth: function(width) {

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
  };
  Painter.init();
  window.Painter = Painter;
}());

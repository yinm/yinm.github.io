window.onload = function() {
  draw();
}

function draw() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  // 上
  ctx.beginPath();
  ctx.arc(100, 100, 50, 300/180 * Math.PI, 240/180 * Math.PI);
  ctx.lineWidth = 15;
  ctx.lineCap = "butt";
  ctx.stroke();

  // 右
  ctx.beginPath();
  ctx.arc(300, 100, 50, 30/180 * Math.PI, 330/180 * Math.PI);
  ctx.lineWidth = 15;
  ctx.lineCap = "butt";
  ctx.stroke();

  // 下
  ctx.beginPath();
  ctx.arc(500, 100, 50, 120/180 * Math.PI, 60/180 * Math.PI);
  ctx.lineWidth = 15;
  ctx.lineCap = "butt";
  ctx.stroke();

  // 左
  ctx.beginPath();
  ctx.arc(700, 100, 50, 210/180 * Math.PI, 150/180 * Math.PI);
  ctx.lineWidth = 15;
  ctx.lineCap = "butt";
  ctx.stroke();
}

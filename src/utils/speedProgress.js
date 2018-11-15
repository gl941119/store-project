function drawCricle(c,percent) {
  console.log(1)
  // var c = document.getElementById('canvas'),
  // var  percent = 0,
  var ctx = c.getContext('2d'),
    cx = c.width/2,   //Canvas中心点x轴坐标
    cy = c.height/2;  //Canvas中心点y轴坐标
  // console.log(c.width,percent)
// 画灰色的圆
  ctx.beginPath();
  ctx.arc(cx, cy, cx-10, 0, Math.PI*2);
  ctx.closePath();
  ctx.fillStyle = '#F6F6F6';
  ctx.fill();
  // function drawCricle(ctx, percent){
    // 画进度环
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, cx-10, Math.PI * (1.5 + 2 * percent / 100 ), Math.PI * 1.5,true);
    ctx.closePath();
    ctx.fillStyle = '#13ce66';
    ctx.fill();
    // 画内填充圆
    ctx.beginPath();
    ctx.arc(cx, cy, cx-15, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = '#eee';
    ctx.fill();

    // 填充文字
    ctx.font = "bold 20px Microsoft YaHei";
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.moveTo(cx, cy);
    ctx.fillText(percent + '%', cx, cy);
  // }
}
export default drawCricle


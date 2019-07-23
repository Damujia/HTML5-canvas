let can = document.querySelector('#can');
let ctx = can.getContext("2d");

// ctx.fillRect();//前两个参数是坐标，第二个和第三个是尺寸
//路径
ctx.rect(50, 50, 50, 50)//路径，前两个参数是坐标，第二个和第三个是尺寸
//给路径设置颜色
ctx.fillStyle = "green";
//设置描边的颜色
ctx.strokeStyle = "red";
// 填充
// ctx.fill();
//描边
ctx.stroke();
//路径初始化
ctx.beginPath();
ctx.rect(100, 100, 50, 50); 
ctx.strokeStyle = "rgb(40, 203, 206)";
ctx.stroke();


ctx.beginPath();
//设置路径开始点
ctx.moveTo(300, 50);
//从之前的点画到这里
ctx.lineTo(400, 50);
ctx.lineTo(400, 150);
ctx.lineTo(300, 150);
ctx.lineTo(300, 50);
//设置线条宽度
ctx.lineWidth = 5;
ctx.stroke();

//三角形
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(150, 200);
ctx.lineTo(100, 300);

// ctx.lineTo(50, 200);直接设置到原来的点。路径没有闭合。

//设置闭合路径的方法---把最后的电和开始的点连在一起。
ctx.closePath();

ctx.lineWidth = 5;
ctx.strokeStyle = "#f40";
ctx.stroke();

//圆形
ctx.beginPath();
// ctx.moveTo(50, 300);
ctx.arc(300, 250, 40, 0, 2 * Math.PI);//第一个参数为x坐标，第二为y坐标，第三为圆的半径，第四为圆周的起始点，第五个参数为一整个圆，不乘2就是半圆。第六个参数有两个，顺时针画，逆时针画。
ctx.fillStyle = "#228 ";
ctx.fill();
//绘制文本
ctx.beginPath();
ctx.font = "30px simsun";//设置字体，大小。
ctx.fillStyle = "red";
ctx.fillText("虚空假面", 200, 200);//第一个参数为文本，后两个为坐标。
// ctx.strokeText("风暴之灵", 200, 250);//空心的字，描边
//渐变色
ctx.beginPath();
var grd = ctx.createLinearGradient(200,0,500,0);//前两个参数是渐变色的起始坐标，后两个是结束坐标。
grd.addColorStop(0,"#f40");//第一个参数是0-1之间的值，第二个参数是颜色。
grd.addColorStop(0.4,"rgb(94, 255, 0)");
grd.addColorStop(0.6, "rgb(0, 255, 217)");
ctx.fillStyle = grd;//把设置好的渐变色给需要做渐变的对象
ctx.fillRect(200, 300, 200, 80);

//制作一个多边形
ctx.beginPath();
ctx.translate(550,150);//设置画布中心点
// ctx.rotate(Math.PI/5)//以0,0点旋转画布
ctx.moveTo(0,-100);
ctx.rotate(2*Math.PI/3);
ctx.lineTo(0,-100);/* 起始点旋转1/3圆，变成结束点。 */
ctx.rotate(2*Math.PI/3);
ctx.lineTo(0,-100);
ctx.closePath();
ctx.lineWidth=5;
ctx.fillStyle = "rgb(0, 255, 217)";
ctx.fill();

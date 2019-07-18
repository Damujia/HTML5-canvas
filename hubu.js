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
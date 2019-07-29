//封装一个画正多边形的函数
class cans {
    constructor(can) {
        can = can || {};
        
        this.rim = can.rim || 3;
        this.width = can.width || -100;
        this.thick = can.thick || 5;
        this.id = can.id || '#can'
    };
    addEvent() {
        
        let name = document.querySelector(this.id).getContext("2d");

        name.beginPath();
        name.translate(400, 200);
        name.moveTo(0, this.width);

        for (let i = 0; i < this.rim - 1; i++) {
            name.rotate(2 * Math.PI / this.rim);
            name.lineTo(0, this.width);
        }
        name.closePath();
        name.lineWidth = this.thick;
        name.fill();
    };
};
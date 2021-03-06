function Triangle(centerX, centerY, radius, color, context) {
  Shape.call(this, centerX, centerY, radius, color, context);
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.draw = function() {
    var ctx = this.context;
    ctx.beginPath();
    ctx.lineWidth = 2; //applicable
    ctx.moveTo(this.centerX, this.centerY);
    ctx.lineTo(this.centerX + this.radius, this.centerY);
    ctx.lineTo(this.centerX + this.radius / 2, this.centerY - this.radius);
    ctx.lineTo(this.centerX, this.centerY);
    this.context.strokeStyle = this.color;
    ctx.stroke();
};
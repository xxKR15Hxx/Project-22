class box {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200, 100, 50, 50, options)
    }

    display() {
        var pos = this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x, pos.y, this.width, this.height);
        World.add = (world.this.body);
    }
}
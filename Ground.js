class Ground
{
    constructor(x, y)
    {
        var options = 
        {
            isStatic:true
        }
        this.body = Bodies.rectangle(this.x, this.y, options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y);
        fill("white");
    }
};
class Player
{
    constructor(x,y)
{
    this.x = x;
    this.y = y;
    this.spt = createSprite(this.x,this.y,50,50);
    this.shapeColor = "yellow";
}
move(xdir,ydir)
{
    this.spt.x += xdir * 50;
    this.spt.y += ydir * 50;
}
}
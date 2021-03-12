class Ball
{
	constructor(x,y,radius)
	{
        var options={
          //isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.0
 }
		
        
		this.ballBody=Bodies.circle(x, y,radius,options)
		World.add(world, this.ballBody)
		
		this.image=loadImage("paper.png")

	}
	display()
	{
			var pos=this.ballBody.position;
			
            var angle = this.ballBody.angle;

			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			angleMode(RADIUS);
			imageMode(CENTER);
			fill(255);
			rotate(angle);
			circle(0,0,this.radius);
			pop()
    }
}
class Rubber{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1,
		}
	// assign options to the rubber ball
		
		this.r=r
		this.body=Bodies.circle(x, y, (r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle=this.body.angle;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);

			pop()
	}

}
class Stone{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12,
        }

       
        this.body=Bodies.rectangle(x,y,100,100)
        World.add(world,this.body)
    }
    display(){
        var stonepos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(stonepos.x,stonepos.y)
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("green");
        rect(0,0,100,100);
        pop()
    }
}

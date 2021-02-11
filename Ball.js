class Ball {
    constructor (x,y,r) {
        this.body = Bodies.circle(x,y,r/2,{restitution:1});
        World.add(world,this.body)
        this.r = r
    }
    display () {
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y , this.r,this.r)   
    }
}
class Bob  {
   constructor (x,y) {
     var options = {
         restitution : 1.0,
         friction : 0.3,
         density : 1.0
     }
      this.r = 40;   
     this.body = Bodies.circle(x,y,this.r/2,options) 
     World.add (world,this.body)
   }
   display(){
       var pos = this.body.position
       push ()
       translate(pos.x,pos.y)
       ellipseMode(RADIUS)
       ellipse (0,0,this.r,this.r)
       pop()
   }
}
class Sling {
    constructor(bodyA,pointB){
         var properties={
             bodyA:bodyA,
             pointB:pointB,
             stiffness:1,
             length:500
            }
            this.pointB = pointB;
            this.pointX = bodyA.x;
            this.pointY = bodyA.y-250
            this.sling=Constraint.create(properties);
            World.add(world,this.sling);
     }
     display(){
          if(this.sling.bodyA){
              var pointA = this.sling.bodyA.position;
              var pointB = this.pointB;
              push();
              strokeWeight(3.5);
              stroke ("white");
              line (pointA.x,pointA.y,pointB.x,pointB.y);
              pop();
           }
     }
}
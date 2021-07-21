class Pig extends BaseClass {
  constructor(x, y){
  
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    this.remove=false
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
     score=score-1
    super.display();
   }
   else{
     if(this.remove===false)
     {score=score+390
     this.remove=true}
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};
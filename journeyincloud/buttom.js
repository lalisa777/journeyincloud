class buttom{
    constructor(tempX,tempY,tempR,tempCol){
        this.x = tempX;
        this.y = tempY;
        this.r = tempR
        this.col = tempCol;
    }
   
    showw(){
        noStroke();
        fill(this.col);
        ellipse(this.x,this.y,this.r,this.r);
    }
    clicked(px,py){
        let d = dist(px,py,this.x,this.y);
        if(d<this.r){

        }
    }
}
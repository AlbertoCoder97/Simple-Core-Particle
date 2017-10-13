class Core{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.radius = 5;
        this.alpha = 100;
        this.maxRadius = 100;
        this.minRadius = 10;

        this.increase = true;
    }

    show(){
        noStroke(255);
        fill(255, this.alpha)
        ellipse(this.x,this.y,this.radius);
        fill(255, this.alpha/2);
        ellipse(this.x,this.y,this.radius+10);
        fill(209,0,0, this.alpha);
        ellipse(this.x,this.y,this.radius/5);
        fill(209,0,0, this.alpha/2);
        ellipse(this.x,this.y,this.radius/5 +5);
    }

    update(){
        if (this.increase){
            this.radius += 1;
            this.alpha += 2;
            if (this.radius >= this.maxRadius){
                this.increase = false;
            }
        }else{
            this.radius -=1;
            this.alpha -= 2;
            if (this.radius <= this.minRadius){
                this.increase = true;
            }
        }
    } 
}
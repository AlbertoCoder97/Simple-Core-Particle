class Particle{  
    constructor(x,y) {
        this.x = x;
        this.y = y;

        this.alpha = 255;
        this.radius = random(8,24);

        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);
    }
        
    finished() {
        return this.alpha < 0;
    }
        
    update() {
        this.alpha -= 5;
        this.r -= 5;
        if (this.x <= 300){
            this.x += 2;
        }else if(this.x > 300){
            this.x -= 2;
        }

        if (this.y <= 300){
            this.y += 2;
        }else if(this.y > 300){
            this.y -= 2;
        }
    }
        
    show() {
        noStroke();
        fill(this.r,this.g,this.b, this.alpha);
        ellipse(this.x, this.y, this.radius);
    }
}    
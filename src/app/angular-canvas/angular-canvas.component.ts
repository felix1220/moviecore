import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Particle } from './particle';

@Component({
  selector: 'app-angular-canvas',
  templateUrl: './angular-canvas.component.html',
  styleUrls: ['./angular-canvas.component.scss']
})
export class AngularCanvasComponent implements OnInit, OnDestroy {

  private running: boolean;
  particles: Particle[];
   canvasRef :HTMLCanvasElement;
   context:CanvasRenderingContext2D;
  //@ViewChild('canvas') canvasRef: HTMLCanvasElement;
  fps:number;
  fpsInterval:number;
  startTime: any;
  now: any;
  then: any;
  elapsed: any;
  stop: boolean;
  
  constructor() { 
    
  }

  ngOnInit() {
    this. canvasRef = <HTMLCanvasElement>document.getElementById('canvas');
    let width =  window.innerHeight * (window.innerWidth /  window.innerHeight); //document.body.clientWidth;
    //debugger;
    this.canvasRef.width = width;
    this.canvasRef.height = window.innerHeight; //document.body.clientHeight;
    this.context = this.canvasRef.getContext('2d');

    this.fps = 6;
    this.fpsInterval = 1000 / this.fps;
    //console.log(this.fpsInterval);
    this.then = Date.now();
    this.startTime = this.then;

    this.stop = false;
    this.running = true;
      this.paint();
      
  }
  ngOnDestroy() {
    this.running = false;
  }
private paint(loop = true){
     // console.log(this.stop);
     // if (stop) {
   //    return;
    //  }

  
    if (loop && this.running) {
      requestAnimationFrame(() => this.paint(loop));
    }

    this.now = Date.now();
    this.elapsed = this.now - this.then;
    // console.log(this.elapsed);
    if (this.elapsed > this.fpsInterval) {
      this.then = this.now - (this.elapsed % this.fpsInterval);
        this.particles = new Array<Particle>();
        for (let i = 0 ; i < 5000; i++) {
          this.particles.push({
            x: Math.random() * this.canvasRef.width,
            y: Math.random() * this.canvasRef.height
          });
        }
          this.showParticles();
    }

}
 private showParticles() {
      //let ctx: CanvasRenderingContext2D =this.canvasRef.getContext('2d');
      //this.canvasRef.nativeElement.getContext('2d');
        
      this.context.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);
      this.context.beginPath();
      this.particles.forEach( p => {
         this.context.rect(p.x, p.y, 2, 2);
      });
      this.context.stroke();

 }

}

console.log('ready to code? 🚀')

/************************
***** DECLARATIONS: *****
************************/
let cvs
let ctx
let gravity
let gap
let bird
let topPipe
let botPipe
let score
/************************
*****   FUNCTIONS:  *****
************************/
//function to create new sprite
let sprite = function(x,y, width,height, color1,color2) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    //linear gradient color:  variable holds gradient values
    let linear = ctx.createLinearGradient(30,0, 70,0)
    //set the colors at starting point to ending point
    linear.addColorStop(0, color1)
    linear.addColorStop(1, color2)
    this.render = function() {
        //fillStyle needs to be defined before drawing
        ctx.fillStyle = linear
        //draw the rectangle
        ctx.fillRect(this.x,this.y, this.width,this.height)
    }
}
//select <canvas> and its context
cvs = document.getElementById('game')
ctx = cvs.getContext('2d')
// gravity = 1
// gap = 
//bonus: let bird be an img
bird = new sprite(30,200, 50,50, 'yellow','orange')
topPipe = new sprite(200,0, 70,200, 'lightgreen','lightgreen')
botPipe = new sprite(200,576, 70,-200, 'lightgreen','lightgreen')
let draw = () => {
    //the bird falls by increasing y-value
    //gravity will hold increment value
    //for loop to increase gravity
    bird.render()
    topPipe.render()
    botPipe.render()
}
draw()

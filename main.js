console.log('get gravity to work 🚀')

/************************
***** DECLARATIONS: *****
************************/
let cvs
let ctx
let pipeGap
let bird
let bird1
let bird2
let topPipe
let botPipe
let ground
let score
let theme1
let theme2
/************************
***** FUNCTIONS: ********
************************/
//function to create new sprite
let sprite = function(x,y, width,height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.gravity = 1
    this.acceleration = .3
    this.render = function() {
        //fillStyle needs to be defined before drawing
        ctx.fillStyle = color
        //draw the rectangle
        ctx.fillRect(this.x,this.y, this.width,this.height)
    }
    //moves the bird to gravity
    this.newPosition = function () {
        this.gravity += this.acceleration
        this.y += this.gravity
    }
}

let updateGame = () => {
    ctx.clearRect(0,0, cvs.width,cvs.height)
}
//anything to be drawn on canvas goes in here
let draw = () => {
    ctx.fillStyle = '#00bbc4'
    console.log(cvs.width, cvs.height)
    ctx.fillRect(0,0, cvs.width,cvs.height)
    bird.render()
    bird2.render()
}
//animation handler
let loop = () => {
    draw()
    //average of AnimationFrame is 50-60fps
    requestAnimationFrame(loop)
}



//select <canvas> and its context
cvs = document.getElementById('game')
ctx = cvs.getContext('2d')
theme1 = new Image()
theme1.src = 'img/og-theme.png'
theme2 = new Image()
theme2.src = 'img/og-theme-2.png'
//bonus: let bird be an img
bird = {
    //object's key-value properties pinpointing its location
    imgX: 276,
    imgY: 112,
    width: 34,
    height: 26,
    x: 0,
    y: 0,
    w: 34,
    h: 26,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
    }
}
bird2 = {
    //object's key-value properties pinpointing its location
    imgX: 87,
    imgY: 491,
    width: 17,
    height: 12,
    x: 0,
    y: 0,
    w: 34,
    h: 26,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme2, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
    }
}



/******************
***** ARCHIVE *****
******************/
// color1,color2, num1,num2,num3,num4) {
            //     //linear gradient color:  variable holds gradient values
            //     let linear = ctx.createLinearGradient(num1,num2, num3,num4)
            //     //set the colors at starting point to ending point
            //     linear.addColorStop(0, color1)
            //     linear.addColorStop(1, color2)
            //     //fillStyle needs to be defined before drawing
            //     ctx.fillStyle = linear
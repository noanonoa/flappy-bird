console.log('get gravity to work 🚀')

/************************
***** DECLARATIONS: *****
************************/
let cvs         //  canvas
let ctx         //  context'2d'
let theme1      //  original theme
let theme2      //  original them v2
let bg          //  background
let bird        //  bird yellow
let bird1       //  bird ?color?
let bird2       //  bird blue
let pipeGap     //  gap between pipe
let pipes       //  top and bottom pipes
let ground      //  ground
let getReady    //  get ready screen
let gameOver    //  game over screen
let score       //  score counter
let gameState   //  state of game

cvs = document.getElementById('game')
ctx = cvs.getContext('2d')
theme1 = new Image()
theme1.src = 'img/og-theme.png'
theme2 = new Image()
theme2.src = 'img/og-theme-2.png'
gameState = {
    //loads game on ready screen, tick to change state of game
    current: 0,
    getReady: 0,
    //on play game state: bird flaps and flies
    play: 1,
    //game over screen: 'start' button takes player to ready screen
    gameOver: 2
}

//bonus: animate slowly
bg = {
    //object's key-value properties pinpointing its location
    imgX: 0,
    imgY: 0,
    width: 276,
    height: 228,
    //x,y coordinates of where image should be drawn on canvas
    x: 0,
    //https://stackoverflow.com/questions/7043509/this-inside-object
    //reason why 'y' cannot be defined as this.height or bg.height
    y: cvs.height - 228,
    w: 276,
    h: 228,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        //image repeat and tile to fit canvas
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x + this.width,this.y,this.w,this.h)
    }
}
// topPipe
// botPipe
// ground
ground = {
    //imgX & imgY is the x,y coordinates of image
    imgX: 276,
    imgY: 0,
    width: 224,
    height: 112,
    //x,y coordinates of where image should be drawn on canvas
    x: 0,
    y:cvs.height - 112,
    w:224,
    h:112,
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        //image repeat and tile to fit canvas
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x + this.width,this.y,this.w,this.h)
    }
}
//bonus: let bird be an img
bird = {
    //object's key-value properties pinpointing its location
    //animate bird
    imgX: 276,
    imgY: 112,
    width: 34,
    height: 26,
    //x,y coordinates of where image should be drawn on canvas
    x: 50,
    y: 160,
    w: 34,
    h: 26,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
    },
    flap: function() {
        console.log('🐦 flies')
    }
}
bird2 = {
    //object's key-value properties pinpointing its location
    imgX: 87,
    imgY: 491,
    width: 17,
    height: 12,
    //x,y coordinates of where image should be drawn on canvas
    x: 50,
    y: 160,
    w: 34,
    h: 26,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme2, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
    },
    flap: function() {
        console.log('🐦 flies')
    }
}
getReady = {
    //object's key-value properties pinpointing its location
    imgX: 0,
    imgY: 228,
    width: 174,
    height: 160,
    //x,y coordinates of where image should be drawn on canvas
    x: cvs.width/2 - 174/2,
    y: cvs.height/2 - 160,
    w: 174,
    h: 160,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        //only draw this if the game state is on get ready
        if (gameState.current == gameState.getReady) {    
            ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        }
    }
}
gameOver = {
    //object's key-value properties pinpointing its location
    imgX: 174,
    imgY: 228,
    width: 226,
    height: 202,
    //x,y coordinates of where image should be drawn on canvas
    x: cvs.width/2 - 226/2,
    y: cvs.height/2 - 160,
    w: 226,
    h:202,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        //only draw this if the game state is on game over
        if (gameState.current == gameState.gameOver) {
            ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        }
    }
}
/************************
***** FUNCTIONS: ********
************************/
//anything to be drawn on canvas goes in here
let draw = () => {
    //this clears canvas to default bg color
    ctx.fillStyle = '#00bbc4'
    console.log(cvs.width, cvs.height)
    ctx.fillRect(0,0, cvs.width,cvs.height)
    //things to draw
    bg.render()
    ground.render()
    bird.render()
    getReady.render()
    gameOver.render()
}
//animation handler
let loop = () => {
    draw()
    //average of AnimationFrame is 50-60fps
    requestAnimationFrame(loop)
}
loop()


/*************************
***** EVENT HANDLERS ***** 
*************************/
cvs.addEventListener('click', (e) => {
    //if ready screen >> go to play state
    if (gameState.current == gameState.getReady) {
        gameState.current = gameState.play
    }
    //if play state >> bird keeps flying
    if (gameState.current == gameState.play) {
        bird2.flap()
    }
    //if game over screen >> go to ready screen
    if (gameState.current == gameState.gameOver) {
        gameState.current = gameState.getReady
    }
})
document.body.addEventListener('keydown', (e) => {
    //if ready screen >> go to play state
    if (gameState.current == gameState.getReady) {
        gameState.current = gameState.play
    }
    //if play state >> bird keeps flying
    if (gameState.current == gameState.play) {
        bird2.flap()
        console.log(e.keyCode)
    }
    //if game over screen >> go to ready screen
    if (gameState.current == gameState.gameOver) {
        gameState.current = gameState.getReady
    }
})


/******************
***** ARCHIVE *****
******************/
//function to create new sprite
let sprite = function(x,y, width,height, color1,color2, num1,num2,num3,num4) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.gravity = 1
    this.acceleration = .3
    //linear gradient color:  variable holds gradient values
    let linear = ctx.createLinearGradient(num1,num2, num3,num4)
    //set the colors at starting point to ending point
    linear.addColorStop(0, color1)
    linear.addColorStop(1, color2)
    this.render = function() {
        //fillStyle needs to be defined before drawing
        ctx.fillStyle = linear
        //draw the rectangle
        ctx.fillRect(this.x,this.y, this.width,this.height)
    }
    //moves the bird to gravity
    this.newPosition = function () {
        this.gravity += this.acceleration
        this.y += this.gravity
    }
}
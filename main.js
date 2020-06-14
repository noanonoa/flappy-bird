console.log('pipes pipes pipes and MORE PIPES 🚀')

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
let frame      //  ms/frame = 17; dx/frame = 2; fps = 59;

cvs = document.getElementById('game')
ctx = cvs.getContext('2d')
theme1 = new Image()
theme1.src = 'img/og-theme.png'
theme2 = new Image()
theme2.src = 'img/og-theme-2.png'
frame = 0;
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
    dx: .2,
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        //image repeat and tile to fit canvas
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x + this.width,this.y,this.w,this.h)
        //image repeat again for continuous animation
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x + this.width*2,this.y,this.w,this.h)
        //still img on get ready frame
    },
    //animate: slowly move img on play frame by decrementing x
    position: function () {
        if (gameState.current == gameState.getReady) {
            this.x = 0
        }    
        if (gameState.current == gameState.play) {
            this.x = (this.x-this.dx) % (this.w)
        }
    }
}
// topPipe
// botPipe
pipes = {
    //object's key-value properties pinpointing its location
    //top pipe image x,y coordinate
    top: {
        imgX: 56,
        imgY: 323,
    },
    //bot pipe image x,y coordinate
    bot: {
        imgX: 84,
        imgY:323,
    },
    //pipes' values for drawing on canvas
    width: 26,
    height: 160,
    pipeGenerator: [],
    w: 55,
    h: 300,
    gap: 85,
    dx: 2,
    //y value must be -260 <= y <= -40
    minY: -260,
    maxY: -40,
    //pipes' x value needs to be width of canvas to render outside
    //pipes' y value needs to vary randomly within acceptable parameters
    //object's render function that utilizes all above values to draw image onto canvas
    render: function() {
        //draw whatever is in the pipeGenerator
        for (let i = 0; i < this.pipeGenerator.length; i++) {
            let pipe = this.pipeGenerator[i]
            let topPipe = pipe.y
            let bottomPipe = pipe.y + this.gap + this.h

            ctx.drawImage(theme2, this.top.imgX,this.top.imgY,this.width,this.height, pipe.x,topPipe,this.w,this.h)
            ctx.drawImage(theme2, this.bot.imgX,this.bot.imgY,this.width,this.height, pipe.x,bottomPipe,this.w,this.h)
        }
    },
    position: function() {
        //if game is not in session, do nothing
        if (gameState.current !== gameState.play) {
            return
        }
        //if game is in session, generate set of pipes forever
        if (gameState.current == gameState.play) {
            

            //when pipes reach this frame, generate another set
            if (frame%90 == 0) {
                console.log(frame)
                this.pipeGenerator.push(
                    {
                        //spawn off canvas
                        x: cvs.width,
                        //random y-coordinates
                        y: Math.floor((Math.random() * (this.maxY-this.minY+1)) + this.minY)
                    }
                )
            }
                
                //animate: set of pipes scroll from the right of canvas by decrementing x
            for (let i = 0; i < this.pipeGenerator.length; i++) {
                let pipes = this.pipeGenerator[i]
                pipes.x -= this.dx

                console.log(this.pipeGenerator.length)
                if(this.pipeGenerator[i].x < -this.w) {
                    this.pipeGenerator.shift()
                }
            }
        }
    }
}
//ground
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
    dx: 2,
    render: function() {
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x,this.y,this.w,this.h)
        //image repeat and tile to fit canvas
        ctx.drawImage(theme1, this.imgX,this.imgY,this.width,this.height, this.x + this.width,this.y,this.w,this.h)
    },
    //animate:  ground scrolls to the left in a continuous loop when game state is at play
    //needs to be at the same rate of pipes' scroll speed 
    position: function() {
        if (gameState.current == gameState.getReady) {
            this.x = 0
        }
        if (gameState.current == gameState.play) {
            //modulus keeps x value infinitely cycling back to zero
            this.x = (this.x-this.dx) % (this.w/2)
        }
    }
}
//bonus: let bird be an img
//original bird
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
    fly: 5.5,
    flap: function() {
        // console.log('🐦')
        //bird flies
        this.velocity = - this.fly
    },
    //gravity increments rate of velocity @ 50-60 times per sec.
    gravity: .32,
    //rate of velocity = pixels the bird will drop in a frame
    velocity: 0,
    //function checks gameState and updates bird's position
    position: function() {
        if (gameState.current == gameState.getReady) {
            this.y = 160
        } else {
            //bird falls to gravity
            this.velocity += this.gravity
            this.y += this.velocity
            //check collision with ground
            if (this.y+this.h >= cvs.height-ground.h) {
                // console.log('collision')
                this.y = cvs.height-ground.h - this.h
                //game is over
                // gameState.current = gameState.gameOver
            }
            //bird cannot fly above canvas
            if (this.y <= 0) {
                // console.log('oops!')
                this.y = 2
            }
        }
    }
}
//bird v2: blue
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
    fly: 5.8,
    flap: function() {
        // console.log('🐦🐦')
        this.velocity = - this.fly
    },
    //gravity increments rate of velocity @ 50-60 times per sec.
    gravity: .35,
    //rate of velocity = pixels the bird will drop in a frame
    velocity: 0,
    //checks gameState and updates bird's position
    position: function() {
        if (gameState.current == gameState.getReady) {
            this.y = 160
        } else {
            //bird falls to gravity
            this.velocity += this.gravity
            this.y += this.velocity
            //check collision with ground
            if (this.y+this.h >= cvs.height-ground.h) {
                // console.log('collision')
                this.y = cvs.height-ground.h - this.h
            }
            if (this.y <= 0) {
                // console.log('oops!')
                this.y = 2
            }
        }
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
    height: 158,
    //x,y coordinates of where image should be drawn on canvas
    x: cvs.width/2 - 226/2,
    y: cvs.height/2 - 160,
    w: 226,
    h:160,
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
    // console.log(cvs.width, cvs.height)
    ctx.fillRect(0,0, cvs.width,cvs.height)
    //things to draw
    bg.render()
    pipes.render()
    ground.render()
    bird.render()
    getReady.render()
    gameOver.render()

}
let update = () => {
    bird.position()
    bg.position()
    pipes.position()
    ground.position()
}
//animation handler
let loop = () => {
    draw()
    update()
    frame++
    //average of AnimationFrame is 50-60fps
    // requestAnimationFrame(loop)
}
loop()
setInterval(loop, 17)

/*************************
***** EVENT HANDLERS ***** 
*************************/
//on mouse click // tap screen
cvs.addEventListener('click', () => {
    //if ready screen >> go to play state
    if (gameState.current == gameState.getReady) {
        gameState.current = gameState.play
    }
    //if play state >> bird keeps flying
    if (gameState.current == gameState.play) {
        bird.flap()
    }
    //if game over screen >> go to ready screen
    if (gameState.current == gameState.gameOver) {
        gameState.current = gameState.getReady
    }
})
//on spacebar
document.body.addEventListener('keydown', (e) => {
    //if ready screen >> go to play state
    if (e.keyCode == 32) {
        if (gameState.current == gameState.getReady) {
            gameState.current = gameState.play
        }
        //if play state >> bird keeps flying
        if (gameState.current == gameState.play) {
            bird.flap()
        }
        //if game over screen >> go to ready screen
        if (gameState.current == gameState.gameOver) {
            gameState.current = gameState.getReady
        }
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

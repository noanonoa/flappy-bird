# FLAPPY BIRD
Flappy bird flew into an endless pipe zone (or is it?) and needs help flying through to get out.  

# ABOUT THE GAME
A simple side-scrolling game where the player controls a bird to fly between pipes without hitting them.  Flying between each set of pipes scores 1 point and hitting them or the ground ends the game.  See how long you can last.  


# WIREFRAME  
![wireframe for game screen](/img/001-wireframe.png "Game Screen")  
![wireframe for collision mechanics](/img/002-wireframe.png "Collision Mechanics")

# TECHNOLOGY
 * HTML/CSS on canvas
 * JavaScript  game logic

# ASSETS
![flappy bird theme](/img/og-theme.png)  
(src: google images)
![flappy bird theme v2](/img/og-theme-2.png)  
(src: https://www.spriters-resource.com/fullview/59894/)

# MVP
 * start the game with a 'press button'
 * bird falls default to gravity **check**
 * bird flies to 'click' (might be better for mobile capabilities)
 * pipes spawn top and bottom (rectangles) and scroll to the left
 * track score
 * end game on collision

# STRETCH GOALS
 * animate bird
 * add sounds for scoring, flying, and collision
 * a customized theme
 * game is animated while waiting for player to start game
 * night time / day time
 * add a running time to display
 * make the game web responsive

# GAMEPLAN
---
## HTML
 - [X] container for gaming screen
 - [X] game title
 - [X] game screen `<canvas>`

## CSS
 - [X] *centered* game title
 - [X] *centered* game screen

## JavaScript
### Pieces I need
 - [X] specify canvas size
 - [X] draw bird 
      - [X] bonus: image)
 - [ ] top pipe (bonus: [ ] image)
 - [ ] constant gap between pipes
 - [ ] bottom pipe (bonus: [ ] image)
 - [ ] score tracker
 - [X] bonus: background image
 - [ ] bonus: ground image
 - [ ] bonus: sounds on flying, collision, and scoring
### Functions I need
 - [ ] start game
    - [ ] start on 'click' (mobile compatible)
    - [ ] spawn set of pipes with constant gap
      - [ ] if statement triggering at x-coordinate
 - [ ] bird's movement
    - [ ] gravity: bird's y-coordinate increases to fall
    - [ ] flying: bird's y-coordinate decreases to fly on 'click'
        - [ ] eventListener 'click'
        - [ ] bonus: flying sound
        - [ ] animation object / array of images to flip through
    - [ ] bonus: rotate bird upward each time it flies (smells like a challenge)
 - [X] a drawing function to animate game
   - [X] place images and loop
    - [ ] pipes' x-coordinates decrease to scroll left
        - [ ] increment score by 1 upon passing pipe
        - [ ] bonus: sound on passing pipe
    - [ ] pipes' y-coordinates are generated randomly
    - [X] bonus: draw background
    - [X] draw bird
 - [ ] Game Over
    - [ ] collision with pipes
    - [ ] collision with floor
    - [ ] cut screen ?
    - [ ] restart game on 'click' start button
        - [ ] display top score
        - [ ] display current score
        - [ ] reset score on start game


# ADDITIONAL TECHNOLOGY
 * scratch (maybe?)

### FORESHADOWING CHALLENGES
 * pipe spawning 
 * transition animation
 * x/y position

# FINAL THOUGHTS
*any progress/working comments*
> working with generated images of rectangles `fillRect()` was proving to be more work than actually drawing canvas images from a sprite image source.  This meant working with images from the beginning would just make things simpler in the long run.

> array of the pipes
> use pipeGap to create set of pipes but in a random spot
> var randomNumber = function() howtallthepipeis 
> pipes = [what am i gonna put in it];   where in my code am i adding the array indeces
> using pipes[] array to access it while in the draw() function and rendering them
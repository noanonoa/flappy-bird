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
 * start the game with a 'press button' **check**
 * bird falls default to gravity **check**
 * bird flies to 'click' (might be better for mobile capabilities) **check**
 * pipes spawn top and bottom and scroll to the left  **check**
 * track score
 * end game on collision **check**

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
 - [X] top pipe (bonus: [X] image)
 - [X] constant gap between pipes
 - [X] bottom pipe (bonus: [X] image)
 - [ ] score tracker
 - [X] ready screen: game state 0
 - [X] game over screen
 - [X] bonus: background image
 - [X] bonus: ground image
 - [ ] bonus: sounds on flying, collision, and scoring
### Functions I need
 - [X] start game: game state 1
    - [X] start on 'click' (mobile compatible)
    - [X] spawn set of pipes with constant gap
      - [X] if statement triggering at x-coordinate
 - [X] bird's movement
    - [X] gravity: bird's y-coordinate increases to fall  
     * velocity's value is increased via gravity constant
     * bird's position function updates via velocity's value
    - [X] flying: bird's y-coordinate decreases to fly on 'click'
        - [X] eventListener 'click' (also enabled 'spacebar')
        - [ ] bonus: flying sound
        - [ ] animation object / array of images to flip through
    - [ ] bonus: rotate bird upward each time it flies (smells like a challenge)
 - [X] a drawing function to animate game
   - [X] place images and loop
    - [X] pipes' x-coordinates decrease to scroll left
        - [ ] increment score by 1 upon passing pipe
        - [ ] bonus: sound on passing pipe
    - [ ] pipes' y-coordinates are generated randomly
    - [X] bonus: draw background
    - [X] draw bird
 - [X] Game Over: game state 2
    - [ ] collision with pipes
    - [X] collision with floor and canvas ceiling
    - [X] cut screen
    - [X] restart game on 'click' start button
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
> incrementing gravity to increase velocity was crucial to the feel of the game.  It made the bird falling feel natural and is an important concept to learn.  Flapping, or flying, meant setting the velocity to fly key-value which doesn't translate well when reading code.  

>Infinite pipe spawning has been a road block for me.  Animating canvas images seem even more challenging.

> array of the pipes
> use pipeGap to create set of pipes but in a random spot
> var randomNumber = function() howtallthepipeis 
> pipes = [what am i gonna put in it];   where in my code am i adding the array indeces
> using pipes[] array to access it while in the draw() function and rendering them
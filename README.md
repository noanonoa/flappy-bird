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
 * Flappy Bird (Google Images) ??? - TBD
 * Pipes (Google Images) ??? - TBD

# MVP
 * start the game with a 'press button'
 * bird falls default to gravity
 * bird flies to keydown ‘spacebar’
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
 - [X] bird (bonus: [ ] image)
 - [ ] top pipe (bonus: [ ] image)
 - [ ] constant gap between pipes
 - [ ] bottom pipe (bonus: [ ] image)
 - [ ] score tracker
 - [ ] bonus: background image
 - [ ] bonus: sounds on flying, collision, and scoring
### Functions I need
 - [ ] start game
    - [ ] start on keyDown
    - [ ] spawn pipes on intervals, constant gap
 - [ ] bird's movement
    - [ ] gravity: bird's y-coordinate increases to fall
    - [ ] flying: bird's y-coordinate decreases to fly on keydown
        - [ ] eventListener keydown seems relevant
        - [ ] bonus: flying sound
    - [ ] bonus: rotate bird upward each time it flies (smells like a challenge)
 - [ ] a drawing function to animate game
    - [ ] pipes' x-coordinates decrease to scroll left
        - [ ] increment score by 1 upon passing pipe
        - [ ] bonus: sound on passing pipe
    - [ ] pipes' y-coordinates are generated randomly
    - [ ] bonus: draw background
    - [X] draw bird
 - [ ] Game Over
    - [ ] collision with pipes
    - [ ] collision with floor
    - [ ] cut screen ?
    - [ ] restart game on keydown
        - [ ] display top score
        - [ ] reset score on start game


# ADDITIONAL TECHNOLOGY
 * scratch (maybe?)

### FORESHADOWING CHALLENGES
 * pipe spawning 
 * transition animation
 * x/y position

# FINAL THOUGHTS
*any progress/working comments*
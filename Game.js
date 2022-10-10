import Grid from './Grid.js';
import Snake from './Snake.js';
import * as Constants from './constants.js'

export default class Game {

    constructor() {
        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        // setting the "CSS" width and height
        this.canvas.style.width = Constants.WIDTH * Constants.CELLSIZE + 'px';
        this.canvas.style.height = Constants.HEIGHT * Constants.CELLSIZE + 'px';

        // setting the "attributes" width and height
        this.canvas.width = Constants.WIDTH * Constants.CELLSIZE;
        this.canvas.height = Constants.HEIGHT * Constants.CELLSIZE;

       
        this.configuration = {
            level: 0,
            speed: Constants.SPEED,
            width: Constants.WIDTH * Constants.CELLSIZE,
            height: Constants.HEIGHT * Constants.CELLSIZE,
            nbCellsX: Constants.WIDTH,
            nbCellsY: Constants.HEIGHT,
            cellSize: Constants.CELLSIZE,
            color: Constants.COLORS[0]
        };

        this.snake = new Snake( this );
        this.grid = new Grid( this );

        this.running = false;
        this.nextMove = 0;
    };

    start() {
        this.running = true;
        requestAnimationFrame( this.loop );
    };

    stop() {
        this.running = false;
    }

    // loop gets executed every time the screen refreshes 60 times/seconds
    loop = ( time ) => {
        if( this.running ) {
            requestAnimationFrame( this.loop );

            // we make suer to execute this block only at the game speed (once every 200 ms to start with)
            if( time >= this.nextMove ) {
                this.nextMove = time + this.configuration.speed;
                //console.log(new Date() );

                this.snake.move();

                switch( this.checkState()) {
                    case -1:
                        alert( 'Game Over' );
                        break;
                    default:
                        this.paint();
                }
                this.paint();
            }
        }
    }

    checkState() {
        const cell = this.snake.head;

        if( this.isOutside( cell ) || this.snake.ateItself()) {
            return -1;
        }
        return 1;
    }

    isOutside() {
        const {
            nbCellsX,
            nbCellsY
        } = this.configuration;

        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    paint() {
        const {
            width,
            height,
            color
        } = this.configuration;

        const ctx = this.canvas.getContext( '2d' );

        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);

        this.grid.paint(ctx);
        this.snake.paint(ctx);
    }
};
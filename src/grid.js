import React from "react";
import "./grid.css";

class GridCell extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {"buttonState": "cellUnselected"};     // Initialize state to unselected
        this.handleClick = this.handleClick.bind(this);     // Bind handleClick to this so that "this" works properly within handleClick
    }
    render()
    {
        return (
            <button class={this.state.buttonState} onClick={this.handleClick}></button>
        );
    }
    handleClick()
    {
        if (this.state.buttonState !== "cellUnselected" || this.props.isFinished())
        {
            return;
        }
        let turn = this.props.getTurn();
        this.setState({
            "buttonState": turn === 0 ? "cellRed" : "cellYellow"
        });
        this.props.takeTurn(this.props.pos);
    }
}

class Grid extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // Select random player to go first
        let firstTurn = Math.round(Math.random());
        
        // Initialize game state
        this.state = {
            "status": firstTurn === 0 ? "Current turn: Red" : "Current turn: Yellow",
            "currentTurn": firstTurn,
            "totalTurns": 0,
            "finished": false,
            "board": [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0]
            ]};
        
        // Bind all functions so that "this" works properly when they are called
        this.getTurn = this.getTurn.bind(this);
        this.isFinished = this.isFinished.bind(this);
        this.takeTurn = this.takeTurn.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
        this.setBoardPosition = this.setBoardPosition.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }
    render()
    {
        return (
            <div id="game">
                <table id="grid">
                    <tr>
                        <td><GridCell pos = {[0, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 0]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                    <tr>
                        <td><GridCell pos = {[0, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 1]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                    <tr>
                        <td><GridCell pos = {[0, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 2]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                    <tr>
                        <td><GridCell pos = {[0, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 3]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                    <tr>
                        <td><GridCell pos = {[0, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 4]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                    <tr>
                        <td><GridCell pos = {[0, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[1, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[2, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[3, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[4, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[5, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                        <td><GridCell pos = {[6, 5]} takeTurn={this.takeTurn} getTurn={this.getTurn} isFinished={this.isFinished}></GridCell></td>
                    </tr>
                </table>
                <h3 id="status-indicator">{this.state.status}</h3>
            </div>
        );
    }

    /*
        Takes a 2-element array representing the last position clicked
        Updates the board and checks for wins or draws.
    */
    takeTurn(pos)
    {
        // Temp variable
        let status = "";
        let nextTurn = this.state.currentTurn;
        let newTotalTurns = this.state.totalTurns + 1;        

        // Update the board for win checking
        this.setBoardPosition(pos[0], pos[1], this.state.currentTurn + 1);

        // Check for win conditions
        let win = this.checkWin();

        // Check if the board is full (draw condition)
        let draw = newTotalTurns === 42;

        // If a win is found, set the status message to display the winner
        if (win)
        {
            status = `Game over! ${this.state.currentTurn === 0 ? "Red" : "Yellow"} wins!\nRefresh the page to play again.`;
        }
        // If a draw is found, set the status message to show a draw
        else if (draw)
        {
            status = "Game over! It's a draw!\nRefresh the page to play again."
        }
        // If no wins or draws are found, then proceed to the next turn normally
        else
        {
            nextTurn = this.nextTurn();
            status = `Current turn: ${nextTurn === 0 ? "Red" : "Yellow"}`;
        }
        // Set the game state with the updated status message and game finish flag
        this.setState({
            "status": status,
            "currentTurn": nextTurn,
            "totalTurns": newTotalTurns,
            "finished": win || draw,
            "board": this.state.board
        });
    }

    // Sets the current turn to the other player and increments the total turns by 1
    nextTurn()
    {
        return this.state.currentTurn === 0 ? 1 : 0;
    }

    // Returns the current turn value. Used by the grid cells to determine what color they should be when clicked.
    getTurn()
    {
        return this.state.currentTurn;
    }

    // Returns true if the game is finished. Used by the grid cells to determine whether they can be clicked.
    isFinished()
    {
        return this.state.finished;
    }
    
    /*
        Takes an x and y position and a value
        Sets the corresponding position on the board to the specified value
        0 = none, 1 = red, 2 = yellow
        x is left to right, y is top down, both start at 0
    */
    setBoardPosition(x, y, value)
    {
        let tempBoard = this.state.board;
        tempBoard[y][x] = value;

        this.setState({
            "status": this.state.status,
            "currentTurn": this.state.currentTurn,
            "finished": false,
            "board": tempBoard
        })
    }

    checkWin()
    {
        let board = this.state.board;

        // Check for horizontal wins
        // Iterate over every row
        for (let row = 0; row < 6; row++)
        {
            //Iterate over the first four columns (since a horizontal chain of four cannot start in one of the last three columns)
            for (let col = 0; col < 4; col++)
            {
                // If the cell is zero then we can continue since it's an empty cell
                if (board[row][col] === 0)
                {
                    continue;
                }
                // Otherwise we check whether this cell matches the next three cells in the row, returning true if they match
                else
                {
                    let color = board[row][col];
                    if (this.match(
                        color,
                        board[row][col + 1],
                        board[row][col + 2],
                        board[row][col + 3]
                    ))
                    {
                        console.log(`Horizontal win starting at (${row}, ${col})`);
                        return true;
                    }
                    continue;
                }

            }
        }

        // Check vertical wins
        // Iterate over the top three rows (since a vertical win cannot start in the bottom three rows)
        for (let row = 0; row < 3; row++)
        {
            //Iterate over all columns
            for (let col = 0; col < 7; col++)
            {
                // If the cell is zero then we can continue since it's an empty cell
                if (board[row][col] === 0)
                {
                    continue;
                }
                // Otherwise we check whether this cell matches the next three cells in the column, returning true if they match
                else
                {
                    let color = board[row][col];
                    if (this.match(
                        color,
                        board[row + 1][col],
                        board[row + 2][col],
                        board[row + 3][col]
                    ))
                    {
                        console.log(`Vertical win starting at (${row}, ${col})`);
                        return true;
                    }
                    continue;
                }

            }
        }

        // Return false if no wins were found
        return false;
    }

    // Returns true if the four arguments are equal
    match(a, b, c, d)
    {
        return (
            a === b &&
            a === c &&
            a === d &&
            a !== undefined
        );
    }
}

export default Grid;
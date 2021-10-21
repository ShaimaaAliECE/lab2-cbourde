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
        if (this.state.buttonState !== "cellUnselected")
        {
            return;
        }
        let turn = this.props.getTurn();
        this.setState({
            "buttonState": turn === 0 ? "cellRed" : "cellYellow"
        });
        this.props.nextTurn();
    }
}

class Grid extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {"currentTurn": 0};
        this.getTurn = this.getTurn.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
    }
    render()
    {
        return (
            <table id="grid">
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
                <tr>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                    <td><GridCell nextTurn={this.nextTurn} getTurn={this.getTurn}></GridCell></td>
                </tr>
            </table>
        );
    }
    nextTurn()
    {
        this.setState({
            "currentTurn": this.state.currentTurn === 0 ? 1 : 0
        });
    }
    getTurn()
    {
        return this.state.currentTurn;
    }
}

export default Grid;
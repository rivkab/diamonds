import React, { Component } from 'react';
import "./AddDiamondForm.css"

const shapes = ["Round", "Pear", "Emerald", "Princess", "Oval"];
const colors = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
const clarities = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "Sl1", "Sl2", "I1", "I2", "I3"];

export default class AddDiamondForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shape: shapes[0],
            size: 0,
            color: colors[0],
            clarity: clarities[0],
            price: 0,
            listPrice: 0,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //send state to backend
        console.log("ADDING:"+JSON.stringify(this.state));
        fetch('http://localhost:5000/api/diamond', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {this.props.refresh();})
        .catch(e => console.log(e));
        
        
    }

    getSelect(name, currValue, values) {
        return (
            <select name={name} value={currValue} onChange={this.handleInputChange}>
                {values.map((x, i) => <option key={i} value={x}>{x}</option>)}
            </select>
        )
    }

    render() {
        return (
            <div className="AddDiamondForm_container">
                <h3 className="AddDiamondForm_title">Add a diamond:</h3>
                <form onSubmit={this.handleSubmit} className="AddDiamondForm_form">
                    <label>Shape: {this.getSelect("shape", this.state.shape, shapes)}</label>
                    <label>   Size:
                        <input
                            name="size"
                            type="number"
                            step="0.01"
                            min="0"
                            value={this.state.size}
                            onChange={this.handleInputChange} />
                    </label>
                    <label> Color: {this.getSelect("color", this.state.color, colors)}</label>
                    <label> Clarity: {this.getSelect("clarity", this.state.clarity, clarities)}</label>
                    <label> Price: $
                        <input
                            name="price"
                            type="number"
                            step="0.01"
                            min="0"
                            value={this.state.price}
                            onChange={this.handleInputChange} />
                    </label>
                    <label> List Price: $
                        <input
                            name="listPrice"
                            type="number"
                            value={this.state.listPrice}
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
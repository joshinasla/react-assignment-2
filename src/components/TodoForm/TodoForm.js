import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickHandler = (event) => {
    event.preventDefault();
    this.props.onClick({
      //id: index,
      text: this.state.text,
    });
    console.log(this.state.text);
  };
  render() {
    return (
      <div>
        <form>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="What do you want to add?"
          />
          <button onClick={this.clickHandler}>ADD</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

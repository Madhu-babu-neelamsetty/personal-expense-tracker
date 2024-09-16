import "./styles.css";
import { Component } from "react";

class App extends Component {
  state = {
    desc: "",
    amount: "",
    date: "",
  };

  onAdd = (event) => {
    event.preventDefault();
    const { desc, amount, date } = this.state;
    const add = {
      desc: desc,
      amount: amount,
      date: date,
    };

    this.setState({ ...prevState, add, desc: "", amount: "", date: "" });
  };

  changeDesc = (event) => {
    this.setState({ desc: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeDate = (event) => {
    this.setState({ date: event.target.value });
  };
  render() {
    const { desc, amount, date } = this.state;
    return (
      <div className="App">
        <h1 className="heading">Personal Expenses Tracker</h1>
        <form className="container" onSubmit={this.onAdd}>
          <label>Description: </label>
          <input
            type="text"
            className="input-dimen"
            onChange={this.changeDesc}
            value={desc}
          />{" "}
          <br />
          <label>Amount: </label>
          <input
            type="text"
            className="input-dimen"
            onChange={this.changeAmount}
            value={amount}
          />{" "}
          <br />
          <label>Date: </label>
          <input
            type="date"
            className="input-dimen"
            onChange={this.changeDate}
            value={date}
          />{" "}
          <br />
          <button className="add-button" type="button">
            Add
          </button>
        </form>
        <div className="container1">
          <p>Description: {desc}</p>
          <p>Amount: {amount}</p>
          <p>Date: {date}</p>
        </div>
      </div>
    );
  }
}

export default App;

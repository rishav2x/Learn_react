import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rishav2x");
    const json = await data.json();
    console.group(json);
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: rishavkumar2x</h4>
      </div>
    );
  }
}

export default UserClass;

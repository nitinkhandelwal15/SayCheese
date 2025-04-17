import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //  console.log(props);
    //   console.log("child constructor");
    this.state = {
      count0: 0,
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    //  console.log("Child mounted");
    const data = await fetch("https://api.github.com/users/nitinkhandelwal15");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // componentWillUnmount() {
  //   console.log("component unmount was called");
  // }

  render() {
    const { count0, count2 } = this.state;
    //  const { name, location } = this.props;
    console.log(this.state.userInfo);
    const { name, location, avatar_url, html_url } = this.state.userInfo;

    return (
      <div className="py-10 user-card">
        <img className="w-15 cursor-pointer" src={avatar_url} />
        <h2>Name : {name}</h2>
        <h2>location : {location}</h2>
        <h3>Component type : class based</h3>
        {/* <h4>Count = {count0}</h4>
        <button
          onClick={() => {
            this.setState({
              count0: this.state.count0 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h4>Contact : @nitin</h4>
      </div>
    );
  }
}

export default UserClass;

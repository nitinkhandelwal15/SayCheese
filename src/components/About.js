import User from "./User";
import UserClass from "./UserClass";
import { Component, PureComponent } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //  console.log("Parent Constructor");
  }

  componentDidMount() {
    //  console.log("Parent mounted");
  }

  render() {
    return (
      <div>
        <h1>This is About us page</h1>
        <h2>its wonderful that you wanna know about us</h2>
        <User name={"Nitin Khandelwal - functionBased"} />
        <UserClass name={"Nitin Khandelwal - classBased"} location={"jaipur"} />
      </div>
    );
  }
}

export default About;

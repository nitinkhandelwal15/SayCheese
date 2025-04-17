import User from "./User";
import UserClass from "./UserClass";
import { Component, PureComponent } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User :{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>This is About us page</h1>
        <h2>its wonderful that you wanna know about us</h2>
        <User name={"Nitin Khandelwal - functionBased"} />
        <UserClass name={"Nitin Khandelwal - classBased"} location={"jaipur"} />
      </div>
    );
  }
}

export default About;

import React from "react";

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
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component unmount was called");
  }

  render() {
    const { count0, count2 } = this.state;
    //  const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
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

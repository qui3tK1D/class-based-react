import React, { Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  render() {
    const userList = (
      <ul>
        {this.props.users.map((cur) => (
          <User key={cur.id} name={cur.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && userList}
      </div>
    );
  }
}

// const Users = function () {
//   const [showUsers, setShowUsers] = useState(true);
//   const userList = (
//     <ul>
//       {DUMMY_USERS.map((cur) => (
//         <User key={cur.id} name={cur.name} />
//       ))}
//     </ul>
//   );

//   const toggleUsersHandler = function () {
//     setShowUsers((prevState) => !prevState);
//   };

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && userList}
//     </div>
//   );
// };

export default Users;

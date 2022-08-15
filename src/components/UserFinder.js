import React, { Component } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    console.log("Mount");
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("updated");
      this.setState({
        filteredUsers: this.context.users.filter((cur) =>
          cur.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  searchChangeHandler = function (e) {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

export default UserFinder;

import React, { Component } from "react";

class ArrayOfobject extends Component {
  state = {
    users: [
      {id:1, name: "test1", email: "test1@test.com" },
      {id:2, name: "test2", email: "test2@test.com" },
      {id:3, name: "test3", email: "test3@test.com" },
      {id:4, name: "test4", email: "test4@test.com" },
      {id:5,name: "test5", email: "test5@test.com" },
      {id:6,name: "test6", email: "test6@test.com" },
    ],
  };

  render() {
    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email Id</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ArrayOfobject;

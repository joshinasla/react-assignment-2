import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // curDay: new Date().toLocaleDateString("default", { day: "long" }),
      curMonth: new Date().toLocaleDateString("default", { month: "long" }),

      //   curDate: new Date().toLocaleDateString("default"),
    };
  }

  render() {
    return (
      <div>
        <div className="header clearfix">
          <div className="date">
            {/* <p>{this.state.curDay}</p>
              <p>{this.state.curDate}</p> */}
            <p id="month">{this.state.curMonth}</p>
          </div>
          <div className="remaining-class">Tasks</div>
        </div>
      </div>
    );
  }
}

export default Header;

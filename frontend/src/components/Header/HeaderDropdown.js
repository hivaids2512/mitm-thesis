import React, { Component } from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  NavItem,
  NavLink
} from 'reactstrap';


class HeaderDropdown extends Component {

  constructor(props) {
    super(props);
    //Bind function
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'img/avatars/user.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>{this.referenceData ? this.referenceData.firstName + ' ' + this.referenceData.lastName : 'Guest'}</strong></DropdownItem>
          <DropdownItem onClick={this.moveToProfile}><i className="fa fa-user"></i> Profile</DropdownItem>
          <DropdownItem onClick={this.logOut}><i className="fa fa-lock"></i> Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const { attributes } = this.props;
    return (
      this.dropAccnt()
    );
  }
}

export default HeaderDropdown;

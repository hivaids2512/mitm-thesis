import React, { Component } from 'react';
import {
  Button, Popover, PopoverHeader, PopoverBody, Table, Badge
} from 'reactstrap';

class BalancePopover extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <span>
        <Button size="sm" color="primary" className="mr-1" id={'Popover-' + this.props.id} onClick={this.toggle}>
          {this.props.buttonText}
        </Button>
        <Popover placement={this.props.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>{this.props.title}</PopoverHeader>
          <PopoverBody>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Address</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.balances.map(function (balance, index) {
                    return <tr key={index}>
                      <td><Badge color="secondary">{balance.ticker}</Badge></td>
                      <td>{balance.address}</td> 
                      <td>{balance.amount}</td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </PopoverBody>
        </Popover>
      </span>
    );
  }
}

export default BalancePopover;

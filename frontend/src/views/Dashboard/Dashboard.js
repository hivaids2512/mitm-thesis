require('babel-polyfill');
import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2'; import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import logService from '../../services/Log/Log';
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;
var chartSeries1 = [
  {
    field: 'info',
    name: 'Info',
    color: 'blue',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'warn',
    name: 'Warning',
    color: '#ff7f0e',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'error',
    name: 'Error',
    color: 'red',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'normal',
    name: 'Normal',
    color: 'green',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  }
];

var chartSeries2 = [
  {
    field: 'warn',
    name: 'Warning',
    color: '#ff7f0e',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'error',
    name: 'Error',
    color: 'red',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  }
];

var chartSeries3 = [
  {
    field: 'warn',
    name: 'Warning',
    color: '#ff7f0e',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'error',
    name: 'Error',
    color: 'red',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  }
];

var chartSeries4 = [
  {
    field: 'warn',
    name: 'Warning',
    color: '#ff7f0e',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  },
  {
    field: 'error',
    name: 'Error',
    color: 'red',
    style: {
      "stroke-width": 2,
      "stroke-opacity": .2,
      "fill-opacity": .2
    }
  }
];

var x = function (d) {
  return d.index;
}

var data1 = [
  {
    "warn": 20.72,
    "info": 39,
    "error": 33,
    "normal": 22
  },
]

var data2 = [
  {
    "warn": 14,
    "info": 22,
    "error": 11,
    "normal": 22
  },
]

var data3 = [
  {
    "warn": 8,
    "info": 9,
    "error": 11,
    "normal": 17
  },
]

var data4 = [
  {
    "warn": 1,
    "info": 2,
    "error": 3,
    "normal": 27
  },
]

// var index1 = 31;

var from = -20;
var from2 = -20;
var from3 = -20;
var from4 = -20;

var index = 31;
var index2 = 31;
var index3 = 31;
var index4 = 31;

var dataReturn1 = 0;
var dataReturn2 = 0;
var dataReturn3 = 0;
var dataReturn4 = 0;
var rawLogs = '';
var textarea = document.getElementById('textarea-input');

for (var i = 0; i < 30; i++) {
  data1.push({
    info: Math.random() * 40,
    index: i++,
    warning: Math.random() * 40,
    error: Math.random() * 40,
    normal: Math.random() * 40
  });
  data2.push({
    info: Math.random() * 20,
    index: i++,
    warning: Math.random() * 20,
    error: Math.random() * 20,
    normal: Math.random() * 20
  })
  data3.push({
    info: Math.random() * 10,
    index: i++,
    warning: Math.random() * 10,
    error: Math.random() * 10,
    normal: Math.random() * 10
  })
  data4.push({
    info: Math.random() * 10,
    index: i++,
    warning: Math.random() * 10,
    error: Math.random() * 10,
    normal: Math.random() * 10
  })
}

class Dashboard extends Component {

  constructor(props) {
    super(props);
    // this.data = [5, 10, 5, 20, 8, 15, 2, 4, 7, 9, 4, 3, 2, 7, 9, 0, 2];
    // this.data1 = [1, 2, 3, 4, 2, 2, 3, 1, 3, 4, 2, 4, 5, 4, 3, 2, 2];
    this.pushData = this.pushData.bind(this);
    this.pushData();
    this.state = {
      isLoading: true
    }
  }

  async pushData() {
    var self = this;
    setInterval(async function () {
      // self.data.splice(0, 1)
      // self.data1.splice(0, 1)
      from = from + 20;
      index = index + 1;
      logService.getLogData({ from: from, index: index }).then(result => {
        if (result.data) {
          data1.splice(0, 1);
          dataReturn1 = result.data.data;
          data1.push(dataReturn1);
        }
      });

      from2 = from2 + 20;
      index2 = index2 + 1;
      logService.getFilteredLogData({ from: from2, index: index2 }).then(result => {
        if (result.data) {
          data2.splice(0, 1);
          dataReturn2 = result.data.data;
          data2.push(dataReturn2)
        }
      });

      from3 = from3 + 20;
      index3 = index3 + 1;
      logService.getPrediction({ from: from3, index: index3, alg: 'tree' }).then(result => {
        if (result.data) {
          data3.splice(0, 1);
          dataReturn3 = result.data.data;
          if (dataReturn2.warn == 0) {
            dataReturn3.warn = 0;
          }
          if (dataReturn2.error == 0) {
            dataReturn3.error = 0;
          }
          data3.push(dataReturn3)
        }
      });

      from4 = from4 + 20;
      index4 = index4 + 1;
      logService.getPrediction({ from: from4, index: index4, alg: 'forest' }).then(result => {
        if (result.data) {
          data4.splice(0, 1);
          dataReturn4 = result.data.data;
          if (dataReturn2.warn == 0) {
            dataReturn4.warn = 0;
          }
          if (dataReturn2.error == 0) {
            dataReturn4.error = 0;
          }
          data4.push(dataReturn4)
        }
      });
      
      logService.getRawLogData({ from: from4, index: index4, }).then(result => {
        if (result.data) {
          result.data.data.forEach(log => {
            rawLogs = rawLogs + log + '\n';
          });
          textarea.scrollTop = textarea.scrollHeight;
        }
      });

      //self.data = self.data.concat(Array.from({ length: 1 }, () => Math.floor(Math.random() * 400)));
      //self.data1 = self.data1.concat(Array.from({ length: 1 }, () => Math.floor(Math.random() * 5)));
      self.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div className="animated fadeIn">
        {/* <Row>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Balance
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Sparklines preserveAspectRatio="xMidYMid meet" x="100" y="50" data={this.data}>
                      <SparklinesLine color="blue" />
                      <SparklinesSpots />
                    </Sparklines>
                  </Col><Col md="6">
                    <Sparklines preserveAspectRatio="xMidYMid meet" x="100" y="50" data={this.data}>
                      <SparklinesLine color="red" />
                      <SparklinesSpots />
                    </Sparklines>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Balance
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Sparklines preserveAspectRatio="xMidYMid meet" x="100" y="20" data={this.data1}>
                      <SparklinesLine color="blue" />
                      <SparklinesSpots />
                    </Sparklines>
                  </Col><Col md="6">
                    <Sparklines preserveAspectRatio="xMidYMid meet" x="100" y="20" data={this.data1}>
                      <SparklinesLine color="red" />
                      <SparklinesSpots />
                    </Sparklines>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row> */}
        <Row>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Current logs
              </CardHeader>
              <CardBody>
                <LineChart
                  width={600}
                  height={300}
                  data={data1}
                  chartSeries={chartSeries1}
                  x={x}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Filtered logs
              </CardHeader>
              <CardBody>
                <LineChart
                  width={600}
                  height={300}
                  data={data2}
                  chartSeries={chartSeries2}
                  x={x}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Applied Decision tree
              </CardHeader>
              <CardBody>
                <LineChart
                  width={600}
                  height={300}
                  data={data3}
                  chartSeries={chartSeries3}
                  x={x}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Applied Random forest
              </CardHeader>
              <CardBody>
                <LineChart
                  width={600}
                  height={300}
                  data={data4}
                  chartSeries={chartSeries4}
                  x={x}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Raw logs
              </CardHeader>
              <CardBody>
              <Input value={rawLogs} type="textarea" name="textarea-input" id="textarea-input" rows="10"
                             placeholder="Content..."/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

export default Dashboard;

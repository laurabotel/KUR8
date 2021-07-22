import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT MODULE from node_modules
import 'zingchart/modules-es6/zingchart-maps.min.js';
import 'zingchart/modules-es6/zingchart-maps-usa.min.js';

class QueryCpuRangeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'area',
        plot: {
          stacked: true,
          marker:{
            visible:false
          }
        },
        title: {
          text: 'The average amount of CPU time spent in system mode, per second, over the last minute (in seconds)'
        },
        "scale-x":{  
          // "values": this.props.cpuRangeChart[0].ycpurange,  
          zooming: true
        },
        "scale-y":{  
          // format: '%v \n bytes',
          item: {
            'font-size':8
          },
        },
        series: [
          {values: this.props.cpuRangeChart[0].ycpurange},
          {values: this.props.cpuRangeChart[1].ycpurange},
          {values: this.props.cpuRangeChart[2].ycpurange},          
          {values: this.props.cpuRangeChart[3].ycpurange},
          {values: this.props.cpuRangeChart[4].ycpurange},
          {values: this.props.cpuRangeChart[5].ycpurange},
          {values: this.props.cpuRangeChart[6].ycpurange},
          {values: this.props.cpuRangeChart[7].ycpurange},
          {values: this.props.cpuRangeChart[8].ycpurange},
        ],
      },
    };
  }
  render() {
    console.log('cpuRangeChart', this.props.cpuRangeChart);

    return (
      <div>
        <ZingChart id="querycpurangechart" data={this.state.config} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cpuRangeChart: state.metricsReducer.cpuRangeChart,
  }),
  null
)(QueryCpuRangeChart);
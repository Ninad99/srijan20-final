
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [3, 5, 2, 1, 5],
    backgroundColor: [
      '#29b6f6',
      '#00e676',
      '#ffee58',
      '#1a237e',
      '#e91e63',
      '#ab47bc'
    ],
    borderColor: [
      '#29b6f6',
      '#00e676',
      '#ffee58',
      '#1a237e',
      '#e91e63',
      '#ab47bc'
    ]
  }],
  labels: [
    'Coding',
    'Robotics',
    'Quiz',
    'Gaming',
    'Misc'
  ],
};


const DoughnutChart = () => {

  return (  
    <Doughnut data={data} legend={{
      position: 'right', 
      labels: {
        fontSize: 10,
        fontColor: '#00ebff',
        fontFamily: 'Jura'
      }
    }} />
  )
}

export default DoughnutChart;
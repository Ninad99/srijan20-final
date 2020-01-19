
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      17,
      14,
      20
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB',
      '#FFCE56'
    ]
  }],
  labels: [
    'Coding Event',
    'Robotic Events',
    'Management Events',
    'Gaming Events',
    'Misc Events',
    'Special Attractions'
  ],
};


const Chart = () => {

  return (  
    <Doughnut data={data} legend={{
      position: 'right', 
      labels: {
        fontSize: 10
      }
    }} />
  )
}

export default Chart
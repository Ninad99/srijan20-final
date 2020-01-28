
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
      '#29b6f6aa',
      '#66bb6aaa',
      '#ffee58aa',
      '#ff5722aa',
      '#ab47bcaa',
      '#f44336aa'
    ],
    borderColor: [
      '#29b6f6aa',
      '#66bb6aaa',
      '#ffee58aa',
      '#ff5722aa',
      '#ab47bcaa',
      '#f44336aa'
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
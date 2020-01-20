
import React from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      17,
      14
    ],
    borderColor: [
      '#00ebff',
      '#ffae00',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ]
  }],
  labels: [
    'Event Participation',
    'Workshop Participation',
    'Interests in Talks/Special Attraction',
    'Merchandise Shopping',
    'Online Engagement'
  ]
};

const options ={
    angleLines:{
      display: 'true',
      color: 'white'
  }
};



const Chart = () => {

  return (
    <Polar data={data} options={options} legend={{
        position: 'right', 
        labels: {
          fontSize: 10
        }
      }} />
  )
}

export default Chart
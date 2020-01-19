
import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      17,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Event Participation',
    'Workshop Participation',
    'Interests in Talks/Special Attraction',
    'Merchandise Shopping',
    'Online Engagement'
  ],
};


const Chart = () => {

  return (
    <div>
    <Polar data={data} />
  </div>
  )
}

export default Chart
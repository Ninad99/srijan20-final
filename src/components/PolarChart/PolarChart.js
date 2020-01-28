
import React from 'react';
import { Polar } from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [11, 16, 7, 17, 14],
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
    'Event Participation',
    'Workshop Participation',
    'Interests in Talks/Special Attraction',
    'Merchandise Shopping',
    'Online Engagement'
  ]
};

const options ={
  //   angleLines:{
  //     display: 'true',
  //     color: 'white'
  // }
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
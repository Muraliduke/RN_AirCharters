import React from 'react'
import { View, Text } from 'react-native';
import style from '../../screens/styles'


const address = ['House of Aikaa Ventures',

  '7th Floor Bhaggyam Lakeshore',
  
  '200 Feet Radial Road',
  
  'Chennai , TN - India.',
  
  'fly@airchartersindia.in',
  
  '+91-9611242402 / +91-9566296848'
]

export default function Address() {
    return (
        <View>
            <View style={style.container}><Text style={{fontWeight: 'bold',margin: 10}}>Air Charters India</Text></View>
            
            <View style={style.container}>
              {
                address.map((data, i)=> <View style={{margin: 10}}><Text key={i}>{data}</Text></View>)
              }
            </View>
        </View>
    )
}

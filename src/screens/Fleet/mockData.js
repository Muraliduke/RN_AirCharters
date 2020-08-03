import { Image } from 'react-native';
import Img from '../../components/ImageWithBlockText';
import React from 'react';
import style from '../styles'

import fleet1 from '../../assets/fleet_1.jpg';
import fleet2 from '../../assets/fleet_2.jpg';
import fleet3 from '../../assets/fleet_3.jpg';
import fleet4 from '../../assets/fleet_4.jpg';
import fleet5 from '../../assets/fleet_5.jpg';

const img = (capText ,src, caption) =>(
<Img caption={caption} captionText={capText}>
    <Image
        style={style.imgStyle}
        source={src}
    /> 
</Img>)


const fleetData = [{
    imgDetails : img('Cessna Citation', fleet1, 'lowerBtm'),
    seating: '7 pax.',
    range: '5900 kms.',
    speed: '950 kmph'
},
{
    imgDetails : img('Kingair C90', fleet2),
    seating: '7 pax.',
    range: '1250 kms.',
    speed: '500 kmph'
},
{
    imgDetails : img('Gulfstream G150', fleet3),
    seating: '7 pax.',
    range: '5600 kms.',
    speed: '860 kmph'
},
{
    imgDetails : img('Hawker 900Xp', fleet4),
    seating: '8 pax.',
    range: '4800 kms.',
    speed: '850 kmph'
},
{
    imgDetails : img('As 350 Eurocopter', fleet5),
    seating: '6 pax.',
    range: '630 kms.',
    speed: '280 kmph'
}
]


export default fleetData
import {  View } from 'react-native'
import { COLOR } from '../../enums/StyleGuide'

export default function HorizantalLine(props) {
  const {color,style } = props
  return (
     <View style={[ {flex: 1, height: 1, backgroundColor: color ? color : COLOR.lineColor}, style ]} />
  )
}

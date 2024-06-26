import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const COLOR = {
  white: '#ffffff',
  black: '#000000',
  dark_blue: '#5A6FD9',
  yellow: '#FFC000',
  fb_blue: '#1877F2',
  border_button: '#D0D5DD',
  lineColor: '#B0B0B0',
  grey: "#EDEDED",
  neutral_grey: "rgba(245,245,245,1)",
  neutral_grey_2: "#757575",
  service_name: "#545454",
  placeholder_color: "#7E7E7E",
  horizantal_line: "#E3E3E3",
  modal_background_color: "rgba(0,0,0,0.4)",
  red: '#DC2804',
  green: '#07794C',
  light_red: '#F2ADA5',
  light_green: '#89CCA9',
  light_grey: '#B0B0B0',
  black33: "#333333",
  black26: "#262626",
  danger: "#B32306",
  success: "#07794C",
  dangerLight: '#FDF3F2',
  dark_green: "#07794C",
  tabBarInavtive: "#262626",
  _757575: "#757575",
  EDEDED: "#EDEDED",
  E3E3E3: "#E3E3E3",
  _232323: "#232323",
  _545454: "#545454",
  _FFF5D6: "#FFF5D6",
  DC2804: "#DC2804",
  DF3F2: "#FDF3F2",
  FFE69B: '#FFE69B',
  FFF7E1: '#FFF7E1',

};

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const FONT = {
  Satoshi_Bold: "Satoshi-Bold",
  Satoshi_Medium: "Satoshi-Medium",
  Satoshi_Regular: "Satoshi-Regular",
}

const TEXT_STYLE = {
  text_regular: {

    fontStyle: "normal",
    fontSize: 14,


    fontFamily: FONT.Satoshi_Medium
  },
  text_bold: {

    fontStyle: "normal",

    fontSize: 14,

    fontFamily: FONT.Satoshi_Bold
  },
  title_regular: {

    fontStyle: "normal",
    fontSize: 24,


    fontFamily: FONT.Satoshi_Medium

  },
  title_bold: {

    fontStyle: "normal",
    fontSize: 24,


    fontFamily: FONT.Satoshi_Bold
  },
  button_regular: {
    fontStyle: "normal",
    fontSize: 16,

    fontFamily: FONT.Satoshi_Medium
  },


}

export {
  FONT, COLOR, TEXT_STYLE, width, height, wp, hp
}
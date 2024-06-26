import { CommonActions } from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Linking,
  View
} from 'react-native';
import { COLOR } from '../enums/StyleGuide';


export const IsEmptyString = str => {
  return str == '' || !str;
};

export const resetAndGo = (navigation, routeName, routeParams) => {
  if (navigation && !IsEmptyString(routeName)) {
      navigation.dispatch(
          CommonActions.reset({
              index: 0,
              routes: [
                  {
                      name: routeName,
                      params: routeParams ? routeParams : {},
                  },
              ],
          }),
      );
  }
}


export default {

    isEmptyString(str) {
        return str == '' || !str;
      },
    
      isEmptyArray(arr) {
        return arr == '' || !arr || arr.length == 0;
      },

      isValidEmail(num) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(num);
      },

      isPhoneValid(str) {
        var re = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
        return re.test(str);
      },

      getValidNumber(num) {
        let modNum = 0;
        if (!isNaN(num) && num != '' && num) {
          let fn = parseFloat(num);
          if (fn > 0) {
            modNum = +fn.toFixed(2);
          }
        }
        return modNum;
      },

      openLink(url) {
        if (url) {
          Linking.canOpenURL(url)
            .then(supported => {
              if (!supported) {
                console.log("Can't handle url: " + url);
              } else {
                return Linking.openURL(url);
              }
            })
            .catch(err => console.error('An error occurred', err));
        }
      },

      renderLoadingView(color, size) {
        return (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
            <ActivityIndicator
                size={size == undefined ? 'large' : size}
                color={color == undefined ? COLOR.orange : color}
            />
          </View>
        );
      }

      


}
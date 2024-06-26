import { View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR, wp, hp } from '../../enums/StyleGuide'
import RoundedInput from '../../components/Inputs/RoundedInput'
import HorizantalLine from '../../components/widgets/HorizantalLine'
import TextLabel from '../../components/widgets/TextLabel'
import { Call, Message, BackArrow, DownArrow, UpArrow } from '../../assets/svg'
import CustomButton from '../../components/widgets/CustomButton'
import ListContainer from '../../components/widgets/ListContainer'
import { EXPERTS } from '../../assets/Data/Dummies'
import ExpertItem from '../../components/ExpertItem'
import { SCREEN } from '../../enums/AppEnums'

const seeMore = 'See more'
const seeLess = 'See less'

export default function SearchSearch(props) {
  const [show, setShow] = useState(seeMore);
  const searchResults = () => {
    props.navigation.navigate(SCREEN.SEARCHRESULTS)
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>

      <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'row' }}>

        <BackArrow width={wp(7)} height={hp(8)} style={{ marginStart: 20, marginEnd: 12 }}
          onPress={() => props.navigation.goBack()}
        />


        <RoundedInput
          onClick={() => { }}
          placeholder='Search astrologers, Love, Career'
          containerStyles={{ backgroundColor: COLOR.neutral_grey, width: wp(80) }}
          inputStyles={{ paddingStart: 20, paddingEnd: 20, }}

        />

      </View>

      <View style={{ height: 1 }}>
        <HorizantalLine
          color={COLOR.horizantal_line} />
      </View>


      <ScrollView>
        <TextLabel
          text='Top services'
          // textBold={true}
          textColor={COLOR.black}
          style={{ fontSize: 16, marginStart: 20, marginTop: 20, }}
        />

        <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 15 }}>
          <CustomButton
            text={'Call'}
            backgroundColor={COLOR.white}
            textColor={COLOR.black}
            isNoBorder={true}
            svgIcon={<Call width={wp(4)} height={wp(4)} />}
            style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, width: wp(30) }}
            onClick={() => props.navigation.navigate(SCREEN.INCOMINGCALL)}
          />

          <CustomButton
            text={'Chat'}
            backgroundColor={COLOR.white}
            textColor={COLOR.black}
            isNoBorder={true}
            svgIcon={<Message width={wp(4)} height={wp(4)} />}
            style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, marginStart: 10, width: wp(30) }}
            onClick={() => props.navigation.navigate(SCREEN.CHATINFO)}
          />
        </View>

        <View style={{ height: hp(0.5) }}>
          <HorizantalLine
            color={COLOR.neutral_grey} />
        </View>

        <TextLabel
          text='Recent Searches'
          // textBold={true}
          textColor={COLOR.black}
          style={{ fontSize: 16, marginStart: 20, marginTop: 10, }}
        />

        <View>


          <ScrollView style={{ marginHorizontal: 20, marginTop: 15, flexDirection: 'row' }}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} >


            <CustomButton
              text={'Atul Khatri'}
              backgroundColor={COLOR.white}
              textColor={COLOR.black}
              isNoBorder={true}
              style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, width: wp(30) }}
              onClick={() => { }}
            />

            <CustomButton
              text={'Astro Vishal'}
              backgroundColor={COLOR.white}
              textColor={COLOR.black}
              isNoBorder={true}
              style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, width: wp(30), marginStart: 5 }}
              onClick={() => { }}
            />

            <CustomButton
              text={'Astro Tarun'}
              backgroundColor={COLOR.white}
              textColor={COLOR.black}
              isNoBorder={true}
              style={{ height: hp(5.2), backgroundColor: COLOR.neutral_grey, width: wp(30), marginStart: 5 }}
              onClick={() => { }}
            />

          </ScrollView>
          {show === seeLess &&
            <>
              {/* Top Astrologers */}
              <ListContainer
                title={"Top Astrologers"}
                onClick={searchResults}
              >
                {
                  EXPERTS.map((item, index) => (
                    <ExpertItem item={item} key={index} />
                  ))
                }
              </ListContainer>
              {/* END */}


              {/* Vedic Expert */}
              {/* <ListContainer
                title={"Vedic Expert"}
                onClick={() => { }}
              >
                {
                  EXPERTS.map((item, index) => (
                    <ExpertItem item={item} key={index} />
                  ))
                }
              </ListContainer> */}
              {/* END */}
            </>
          }
          <View style={{ alignItems: 'center', marginVertical: hp(1) }}>

            <TouchableOpacity
              onPress={() => { show === seeMore ? setShow(seeLess) : setShow(seeMore) }}
              style={{
                height: hp(4.8), width: wp(30),
                borderRadius: hp(3), flexDirection: 'row', borderWidth: 1, borderColor: COLOR.light_red,
                backgroundColor: COLOR.FFE69B, alignItems: 'center', justifyContent: 'center',
              }}
            >
              <TextLabel
                text={show}
                textColor={COLOR.black}
                style={{ fontSize: 15 }}
              />
              <View style={{ marginStart: 5 }}>
                {show === seeLess ?
                  <UpArrow width={wp(3)} height={wp(3)} />
                  :
                  <DownArrow width={wp(3)} height={wp(3)} />
                }
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
    </View>
  )
}
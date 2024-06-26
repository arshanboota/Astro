import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import AppHeader from '../../components/Headers/AppHeader'
import RoundedInput from '../../components/Inputs/RoundedInput'
import { Search } from '../../assets/svg'
import { COLOR, hp, width, wp } from '../../enums/StyleGuide'
import { EXPERTS, SERVICES } from '../../assets/Data/Dummies'
import ServieItem from '../../components/ServieItem'
import Carousel, { Pagination } from 'react-native-snap-carousel-v4';
import HomeCarouselItem from '../../components/HomeCarouselItem'
import ListContainer from '../../components/widgets/ListContainer'
import ExpertItem from '../../components/ExpertItem'
import RoundedButton from '../../components/widgets/RoundedButton'
import { SCREEN } from '../../enums/AppEnums'
import Transaction from '../../components/PopUp/Transaction'
import SortAndFilter from '../../components/PopUp/SortAndFilter'

export default function HomeScreen(props) {
  const _carousel = useRef()
  const [activeSlide, setactiveSlide] = useState(0)
  const [visible, setVisible] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const searchEvent = () => {
    props.navigation.navigate(SCREEN.SEARCH)
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        {/* HEADER */}
        <AppHeader title={"Good Afternoon!"} navigation={props.navigation} />
        {/* END */}

        {/* SEARCH INPUT */}
        <RoundedInput
          icon={<Search width={hp(2.9)} height={hp(2.9)} style={{ left: 5 }} />}
          onClick={searchEvent}
        />
        {/* END */}

        {/* SERVICES LIST */}
        <View style={styles.listContainer}>
          {
            SERVICES.map((item, index) => (
              <ServieItem item={item} key={index} onpress={() => props.navigation.navigate(item.route)} />
            ))
          }
        </View>
        {/* END */}

        {/* CAROUSEL */}
        <View style={styles.carouselconetainer}>
          <Image
            source={require("../../assets/images/home/Background.png")}
            style={styles.bgcImage}

          />
          <View style={styles.carousel}>
            <Carousel
              ref={_carousel}
              data={SERVICES}
              renderItem={({ item, index }) => <HomeCarouselItem item={item} onclose={setShowFilters} index={index} />}
              sliderWidth={width}
              itemWidth={width * 0.9}
              onSnapToItem={(index) => setactiveSlide(index)}
            />
          </View>
          {/* PAGINATION */}
          <View style={styles.absoluteBottom}>
            <Pagination
              dotsLength={SERVICES.length}
              activeDotIndex={activeSlide}
              dotStyle={styles.activeDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
          </View>
          {/* END */}
        </View>
        {/* END */}

        {/* Top Astrologers */}
        <ListContainer
          title={"Top Astrologers"}
          onClick={() => { }}
        >
          {
            EXPERTS.map((item, index) => (
              <ExpertItem item={item} key={index} />
            ))
          }
        </ListContainer>
        {/* END */}

        {/* Vedic Expert */}
        <ListContainer
          title={"Vedic Expert"}
          onClick={() => { }}
        >
          {
            EXPERTS.map((item, index) => (
              <ExpertItem item={item} key={index} />
            ))
          }
        </ListContainer>
        {/* END */}

        {/* Vasu Expert */}
        <ListContainer
          title={"Vasu Expert"}
          onClick={() => { }}
        >
          {
            EXPERTS.map((item, index) => (<ExpertItem item={item} key={index} />))
          }
        </ListContainer>
        {/* END */}

        {/* Tarut Expert */}
        <ListContainer
          onClick={() => { }}
          title={"Tarut Expert"}
        >
          {
            EXPERTS.map((item, index) => (
              <ExpertItem item={item} key={index} />
            ))
          }
        </ListContainer>
        {/* END */}

        <ImageBackground
          source={require('../../assets/images/home/Gradient.png')}
          style={styles.imageBackground}
        >
          <Image
            source={require("../../assets/images/home/HoroIcons.png")}
            style={{ width: width, maxWidth: 400 }}
            resizeMode="contain"
          />
          <View style={styles.imageBGContainer}>
            <Text style={styles.idea}>Out of Idea?</Text>
            <Text style={styles.body}>Connect with a wide range of Premium Astrologers with our platform in no time.</Text>
            <RoundedButton
              style={{ backgroundColor: COLOR.black }}
              textStyles={styles.textBtn}
              title={"Explore"}
            />
          </View>
        </ImageBackground>


        {/* REFERAL */}
        <View style={styles.referalContainer}>
          <View>
            <Text style={[styles.idea, styles.referal]}>Refer and get free call</Text>
            <Text style={styles.reward}>Invite and get ₹100</Text>
          </View>
          <Image
            source={require("../../assets/images/home/Referal.png")}
            style={{ width: wp(45), height: wp(45) }}
            resizeMode="contain"
          />
        </View>
        {/* END */}

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          <Image
            source={require("../../assets/images/home/Fish.png")}
            style={{ width: wp(45), height: wp(40) }}
            resizeMode="contain"
          />
          <Text style={[styles.idea, { fontSize: hp(2.4) }]}>Here’s a tip for the day!</Text>
          <Text style={[styles.reward, styles.footer]}>Rudraksha beads emit different frequencies and attract different energies as per their Mukhi.</Text>
        </View>
        {/* END */}
      </ScrollView>
      {/* <EndChat visible={visible} onclose={setVisible}/> */}
      {/* <RateChat visible={visible} onclose={setVisible}/> */}
      {/* <Balance visible={visible} onclose={setVisible}/> */}
      {/* <Transaction visible={visible} onclose={setVisible} status={true}/> */}
      {/* <Transaction visible={visible} onclose={setVisible} status={false}/> */}
      <SortAndFilter visible={showFilters} onclose={setShowFilters} />
    </SafeAreaView>
  )
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "../enums/AppEnums";
import LoginScreen from "../screens/Auth/LoginScreen";
import OtpScreen from "../screens/Auth/OtpScreen";
import LanguagesScreen from "../screens/Language/LanguagesScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SplashScreen from "../screens/Splash/SplashScreen";
import SearchSearch from "../screens/Home/SearchScreen";
import SearchResults from "../screens/Home/SearchResults";
import AstroProfile from "../screens/Profile/AstroProfile";
import ChatInfo from "../screens/Chat/ChatInfo";
import History from "../screens/History/History";
import Horoscope from "../screens/Horoscope/Horoscope";
import IncomingCall from "../screens/Chat/IncomingCall";
import ChatScreen from "../screens/Chat/ChatScreen";
import MyWallet from "../screens/Wallet/MyWallet";
import TabNavigator from "./TabNavigator";
import TopUp from "../screens/Wallet/TopUp";
import PaymentInformation from "../screens/payment/PaymentInformation";
import Kundlli from "../screens/Kundlli/Kundlli";
import NewKundlli from "../screens/Kundlli/NewKundlli";
import KundlliDetails from "../screens/Kundlli/KundlliDetails";
import Tarot from "../screens/Tarot/Tarot";
import Love from "../screens/Love/Love";
import Career from "../screens/Career/Career";
import MatchMaking from "../screens/MatchMaking/MatchMaking";
import AddDetails from "../screens/MatchMaking/AddDetails";
import SelectKundlli from "../screens/MatchMaking/SelectKundlli";
import Compatibility from "../screens/MatchMaking/Compatibility";
import Help from "../screens/Help/Help";
import Terms from "../screens/Help/Terms";
import PrivacyPolicy from "../screens/Help/PrivacyPolicy";
import PersonalDetails from "../screens/Help/PersonalDetails";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} />
        <Stack.Screen name={"TABS"} component={TabNavigator} />
        <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN.OTP} component={OtpScreen} />
        <Stack.Screen name={SCREEN.LANGUAGES} component={LanguagesScreen} />
        <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN.SEARCH} component={SearchSearch} />
        <Stack.Screen name={SCREEN.SEARCHRESULTS} component={SearchResults} />
        <Stack.Screen name={SCREEN.ASTROPROFILE} component={AstroProfile} />
        <Stack.Screen name={SCREEN.CHATINFO} component={ChatInfo} />
        <Stack.Screen name={SCREEN.CAHTSCREEN} component={ChatScreen} />
        <Stack.Screen name={SCREEN.INCOMINGCALL} component={IncomingCall} />
        <Stack.Screen name={SCREEN.MYWALLET} component={MyWallet} />
        <Stack.Screen name={SCREEN.TOPUP} component={TopUp} />
        <Stack.Screen name={SCREEN.PAYMENT_INFO} component={PaymentInformation} />
        <Stack.Screen name={SCREEN.History} component={History} />
        <Stack.Screen name={SCREEN.Horoscope} component={Horoscope} />

        <Stack.Screen name={SCREEN.Kundlli} component={Kundlli} />
        <Stack.Screen name={SCREEN.NewKundlli} component={NewKundlli} />
        <Stack.Screen name={SCREEN.KundlliDetails} component={KundlliDetails} />
        <Stack.Screen name={SCREEN.MATCHMAKING} component={MatchMaking} />
        <Stack.Screen name={SCREEN.ADDDETAILS} component={AddDetails} />
        <Stack.Screen name={SCREEN.SELECTKUNDLLI} component={SelectKundlli} />
        <Stack.Screen name={SCREEN.COMPATIBILITY} component={Compatibility} />

        <Stack.Screen name={SCREEN.TAROT} component={Tarot} />
        <Stack.Screen name={SCREEN.LOVE} component={Love} />
        <Stack.Screen name={SCREEN.CAREER} component={Career} />

        <Stack.Screen name={SCREEN.HELP} component={Help} />
        <Stack.Screen name={SCREEN.TERMS} component={Terms} />
        <Stack.Screen name={SCREEN.PERSONALDETAILS} component={PersonalDetails} />
        <Stack.Screen name={SCREEN.POLICY} component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { MainStackNavigator };

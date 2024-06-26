import { SCREEN } from '../../enums/AppEnums'

const SERVICES = [
    {
        id: 1,
        name: "Tarot Card",
        image: require('../images/home/TarotCard.png'),
        text:"Finding right partner?",
        cover:require("../../assets/images/home/Cover1.png"),
        route:SCREEN.TAROT,
    },
    {
        id: 2,
        name: "Kundali",
        image: require('../images/home/Kundali.png'),
        text:"Finding right partner?",
        cover:require("../../assets/images/home/Cover2.png"),
        route:SCREEN.Kundlli,
    },
    {
        id: 3,
        name: "Horoscope",
        image: require('../images/home/Horoscope.png'),
        text:"Finding right partner?",
        cover:require("../../assets/images/home/Cover1.png"),
        route:SCREEN.Horoscope,
    },
    {
        id: 4,
        name: "Love",
        image: require('../images/home/Love.png'),
        text:"Finding right partner?",
        cover:require("../../assets/images/home/Cover2.png"),
        route:SCREEN.LOVE,
    }, {
        id: 5,
        name: "Career",
        image: require('../images/home/Career.png'),
        text:"Doubt about career?",
        cover:require("../../assets/images/home/Cover1.png"),
        route:SCREEN.CAREER,
    },
    {
        id: 6,
        name: "All services",
        image: require('../images/home/More.png'),
        text:"Finding right partner?",
        cover:require("../../assets/images/home/Cover2.png"),
        route:SCREEN.MATCHMAKING,
    },
]

const EXPERTS = [
    {
        id: 1,
        image : require('../images/home/TarotCard.png'),
        profileImage : require('../images/SearchResults/user_img.png'),
        name : "Asro Shukla"
    },
    {
        id: 2,
        image : require('../images/home/TarotCard.png'),
        profileImage : require('../images/SearchResults/user_img.png'),
        name : "Asro Tarun"
    },
    {
        id: 3,
        image : require('../images/home/TarotCard.png'),
        profileImage : require('../images/SearchResults/user_img.png'),
        name : "Asro Shukla"
    },
    {
        id: 4,
        image : require('../images/home/TarotCard.png'),
        profileImage : require('../images/SearchResults/user_img.png'),
        name : "Asro Tarun"
    },
]


export {
    SERVICES,
    EXPERTS
}
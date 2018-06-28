import * as types from "../constants/ActionTypes";

const initialState = {
  info: {
    fullName: "",
    phone: "",
    email: "",
    reEmail: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    heard: ""
  },
  skills: {
    primarySkill: "Design Reseach",
    otherSkill: [],
    workPlace: []
  },
  porfolio: {
    portLink: "",
    moreInfo: ""
  },
  nav: {
    skillsNav: true,
    porfolioNav: true
  }
};

const myReducer = (defaultState = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_INFO:
      const {
        fullName,
        phone,
        email,
        reEmail,
        address,
        state,
        city,
        country,
        zip,
        heard
      } = action.data;
      const info = {
        fullName: fullName,
        phone: phone,
        email: email,
        reEmail: reEmail,
        address: address,
        city: city,
        state: state,
        country: country,
        zip: zip,
        heard: heard
      };
      let nav = {
        skillsNav: false,
        porfolioNav: true
      };
      return { ...defaultState, info: info, nav: nav };
    case types.SUBMIT_SKILLS:
      const { primarySkill, otherSkill, workPlace } = action.data;
      const skills = {
        primarySkill: primarySkill,
        otherSkill: otherSkill,
        workPlace: workPlace
      };
      nav = {
        skillsNav: false,
        porfolioNav: false
      };
      return { ...defaultState, skills: skills, nav: nav };
    case types.SUBMIT_PORTFOLIO:
      const { portLink, moreInfo } = action.data;
      const portfolio = {
        portLink: portLink,
        moreInfo: moreInfo
      };
      return { ...defaultState, porfolio: portfolio };
    default:
      return defaultState;
  }
};

export default myReducer;

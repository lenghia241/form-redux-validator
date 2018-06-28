import * as types from "../constants/ActionTypes";

export const submitInfo = data => {
  return {
    type: types.SUBMIT_INFO,
    data
  };
};

export const submitSkills = data => {
  return {
    type: types.SUBMIT_SKILLS,
    data
  };
};

export const submitPortfolio = data => {
  return {
    type: types.SUBMIT_PORTFOLIO,
    data
  };
};

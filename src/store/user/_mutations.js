export default {
  // -----------------------------------------------------------------------------------------------
  // ## All user.
  // -----------------------------------------------------------------------------------------------
  setGetAllUsers(state, payload) {
    state.allUsers = payload;
  },
  setGetAllUsersPending(state, payload) {
    state.allUsersPending = payload;
  },
  setGetAllUsersDone(state) {
    state.allUsersDone = !state.allUsersDone;
  },
  setGetAllUsersFail(state) {
    state.allUsersFail = !state.allUsersFail;
  },
  setGetAllUsersFailMsg(state, payload) {
    state.allUsersFailMsg = payload;
  },

  // -----------------------------------------------------------------------------------------------
  // ## User detail.
  // -----------------------------------------------------------------------------------------------
  setGetUserDetail(state, payload) {
    state.userDetail = payload;
  },
  setGetUserDetailPending(state, payload) {
    state.userDetailPending = payload;
  },
  setGetUserDetailDone(state) {
    state.userDetailDone = !state.userDetailDone;
  },
  setGetUserDetailFail(state) {
    state.userDetailFail = !state.userDetailFail;
  },
  setGetUserDetailFailMsg(state, payload) {
    state.userDetailFailMsg = payload;
  },
};

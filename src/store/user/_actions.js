// ## Service Inc.
import UserService from '@/services/User';

export default {

  // -----------------------------------------------------------------------------------------------
  // ## Get user.
  // -----------------------------------------------------------------------------------------------
  getAllUsers({ commit }) {
    commit('setGetAllUsersPending', true);

    UserService
      .get()
      .then((response) => {
        commit('setGetAllUsers', response.data);
        commit('setGetAllUsersDone');
      })
      .catch(() => {
        commit('setGetAllUsersFail');
        commit('setGetAllUsersFailMsg', '');
      })
      .then(() => {
        commit('setGetAllUsersPending', false);
      });
  },

  // -----------------------------------------------------------------------------------------------
  // ## Get user detail.
  // -----------------------------------------------------------------------------------------------
  getUserDetail({ commit }, data) {
    commit('setGetUserDetailPending', true);

    UserService
      .getDetail(data)
      .then((response) => {
        commit('setGetUserDetail', response.data);
        commit('setGetUserDetailDone');
      })
      .catch(() => {
        commit('setGetUserDetailFail');
        commit('setGetUserDetailFailMsg', '');
      })
      .then(() => {
        commit('setGetUserDetailPending', false);
      });
  },
};

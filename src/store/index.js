import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedAvatar: 'nft1.jpeg',
  },
  mutations: {
    setAvatar(state, avatar) {
      state.selectedAvatar = avatar;
    },
  },
  actions: {},
  modules: {},
});

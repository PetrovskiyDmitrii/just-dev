import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import nameList from './nameList/nameList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        nameList
    },
    strict: true,
    plugins: [createPersistedState()]
});
import { 
    UPDATE_CURRENT_STATE, 
    UPDATE_NAME_LIST, 
    UPDATE_DATA_ID, 
    UPDATE_CURRENT_ID,
    UPDATE_ACTIVE_STATE,
    RESET_ALL
} from './../mutations-types';

const state = {
    nameList: Array(),
    currentState: Array(),
    activeState: null,
    dataId: 0,
    currentId: 0,
};

const getters = {
    getNameList: state => state.nameList,
    getCurrentState: state => state.currentState,
    getActiveState: state => state.activeState,
    getDataId: state => state.dataId,
    getCurrentId: state => state.currentId,
};

const mutations = {
    [UPDATE_CURRENT_STATE](state, payload) {
        state.currentState = payload;
    },

    [UPDATE_NAME_LIST](state, payload) {
        state.nameList.push(payload);
    },

    [UPDATE_DATA_ID](state) {
        state.dataId++;
    },

    [UPDATE_CURRENT_ID](state, payload) {
        state.currentId = payload;
    },

    [UPDATE_ACTIVE_STATE](state, payload) {
        state.activeState = payload;
    },

    [RESET_ALL](state) {
        state.nameList = Array();
        state.currentState = Array();
        state.activeState = null;
        state.dataId = 0;
        state.currentId = 0;
    }
};

const actions = {
    update({ commit, getters, dispatch }, { name }) {
        const currentPosition = getters.getCurrentState.indexOf(getters.getCurrentId);
        const cloneArray = getters.getCurrentState.slice(0, currentPosition + 1);
        const data = {id: getters.getDataId, name: name};

        commit('UPDATE_NAME_LIST', data);

        cloneArray.push(getters.getDataId);

        commit('UPDATE_DATA_ID');
        commit('UPDATE_CURRENT_STATE', cloneArray);
        commit('UPDATE_CURRENT_ID', data.id);

        dispatch('getLastItem');
    },

    getLastItem({ commit, getters }) {
        const arrayLength = getters.getCurrentState.length;
        const lastItem = getters.getCurrentState[arrayLength - 1];
        const outputItem = getters.getNameList.find(item => item.id == lastItem);

        commit('UPDATE_ACTIVE_STATE', outputItem);
    },

    moveToState({ commit, getters }, id) {
        const outputItem = getters.getNameList.find(item => item.id == id);

        commit('UPDATE_ACTIVE_STATE', outputItem);
        commit('UPDATE_CURRENT_ID', id);
    },

    resetAll({ commit }) {
        commit('RESET_ALL');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
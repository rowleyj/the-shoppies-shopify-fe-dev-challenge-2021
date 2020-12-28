const getDefaultState = () => {
	return {
		snackbar: false,
		snackText: ''
	}
}

export const state = getDefaultState;

export const mutations = {
	SET_SNACKBAR(state, val){
		state.snackbar = val;
	},
	SET_SNACKTEXT(state, val){
		state.snackText = val
	}
}

export const getters = {
	snackbar: state => {
		return state.snackbar
	},
	snackText: state => {
		return state.snackText
	},
}

export const actions = {
	setSnackbar({commit}, {text}){
		commit('SET_SNACKBAR', true);
		commit('SET_SNACKTEXT', text);
	}
}
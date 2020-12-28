const getDefaultState = () => {
	return {
		movies: [],
		nominations: [],
		awaitingSearchResponse: false
	}
}

export const state = getDefaultState;

export const mutations = {
	ADD_MOVIES(state, movies){
		// reset movies array
		state.movies.splice(0)
		if(movies && movies.length){
			movies.forEach(movie => {
				state.movies.push(movie);
			});
		}
	},
	ADD_NOMINATION(state,nomination){
		state.nominations.push(nomination);
	},
	PULL_NOMINAITON(state, nomination){
		let index = state.nominations.findIndex(movie => movie.imdbID === nomination.imdbID);
		console.log('index', index);
		state.nominations.splice(index,1);
	},
	SET_AWAITING_SEARCH_RESPONSE(state, val){
		state.awaitingSearchResponse = val;
	}
}

export const getters = {
	movies: state => {
		return state.movies
	},
	nominations: state => {
		return state.nominations;
	},
	awaitingSearchResponse: state => {
		return state.awaitingSearchResponse;
	}
}

export const actions = {
	async searchMoviesByTitle({state, commit}, {title}){
		commit('SET_AWAITING_SEARCH_RESPONSE', true);
		this.$axios.get('http://www.omdbapi.com/', {params: {apikey: process.env.OMDB_API_KEY, type: 'movie', s: title}}).then((res) =>{
			console.log(res.data);
			if(res.data.Response){
				commit('ADD_MOVIES', res.data.Search);
			}   
			commit('SET_AWAITING_SEARCH_RESPONSE', false);

		}).catch((err)  =>{
			commit('SET_AWAITING_SEARCH_RESPONSE', false);
			console.error(err);
		})
	},
	// check for max nomination size is at event trigger
	async nominateMovie({commit}, {movie}){
		commit('ADD_NOMINATION', movie);
	},
	async removeNomination({commit}, {movie}){
		commit('PULL_NOMINAITON', movie);
	}
}
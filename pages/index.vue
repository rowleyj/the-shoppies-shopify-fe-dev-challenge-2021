<template>
	<v-container>
		<v-row
			v-show="nominations.length > 4"
			justify="center"
		>
			<v-col
				cols="12"
				sm="10"
				md="10"
			>
				<completion-banner />
			</v-col>
		</v-row>
		<v-row
			justify="center"
			align="center"
		>
			<v-col
				cols="12"
				sm="10"
				md="10"
			>
				<search-card />
			</v-col>
		</v-row>
		
		<v-row
			justify="center"
		>
			<v-col
				cols="12"
				sm="5"
				md="5"
			>
				<results-card />
			</v-col>
			<v-col
				cols="12"
				sm="5"
				md="5"
			>
				<nominations-card />
			</v-col>
		</v-row>
		<global-snackbar />
	</v-container>
</template>

<script>
import SearchCard from '@/components/searchCard'
import ResultsCard from '@/components/resultsCard'
import NominationsCard from '@/components/nominationsCard'
import GlobalSnackbar from '~/components/globalSnackbar.vue'

export default {
	computed: {
		nominations(){
			return this.$store.getters['movies/nominations']
		}
	},
	components: {
		SearchCard,
		ResultsCard,
		NominationsCard,
		GlobalSnackbar
	},
	mounted(){
		let nominations = this.$cookies.get('nominations');
		console.log('cookies', nominations);
		// only initialize if not already initialized
		if(nominations && nominations.length && !this.nominations.length){
			nominations.forEach(nomination => this.$store.dispatch('movies/nominateMovie', {movie: nomination}))
		}
	}
}
</script>

<template>
	<v-toolbar
		color="primary"
		dark
		shaped
		height="75"
	>
		<v-row
			align="baseline"
		>
			<v-col cols="12">
				<v-form
					ref="form"
					v-model="valid"
					@submit.prevent=""
				>
					<v-text-field
						v-model="searchText"
						dense
						:rules="searchRules"
						append-icon="mdi-magnify"
						label="Search Movies By Title"
						clearable
						@blur="search()"
						@keyup.enter="search()"
						@click:append="search()"
					/>
				</v-form>
			</v-col>
		</v-row>
	</v-toolbar>
</template>

<script>
export default {
	data(){
		return{
			searchText: '',
			searchRules: [
				v => !!v || 'Please enter a title to search',
				v => v.length >= 2 || 'Please enter more than 2 characters to search', // aim to reduce API keys due to 1000 max daily
			],
			valid: false
		}
	},
	methods:{
		search(){
			this.$refs.form.validate()
			if(this.valid){
				console.log('valid input')
				this.$store.dispatch('movies/searchMoviesByTitle', {title: this.searchText})
			}
		}
	}
}
</script>
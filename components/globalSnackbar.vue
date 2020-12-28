<template>
	<v-snackbar
		v-model="snackbar"
		bottom
		right
		shaped
		timeout="2500"
	>
		{{ snackText }}

		<template #action="{ attrs }">
			<v-btn
				color="primary"
				text
				v-bind="attrs"
				@click="snackbar = false"
			>
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {
	computed: {
		snackbar: {
			get(){
				return this.$store.getters['snackbar/snackbar']
			},
			set(val){
				this.$store.commit('snackbar/SET_SNACKBAR', val);
			}
		},
		snackText(){
			return this.$store.getters['snackbar/snackText']
		}
	}
}
</script>
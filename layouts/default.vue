<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			dark
		>
			<v-icon
				color="yellow accent-3"
				large
				left
			>
				mdi-trophy-award
			</v-icon>
			<v-toolbar-title v-text="title" />
		</v-app-bar>
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<v-footer
			app
		/>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			title: 'The Shoppies'
		}
	}
}
</script>

<template>
	<v-card>
		<v-toolbar
			flat
			color="primary"
			dense
			dark
		>
			<v-toolbar-title>
				{{ title }}
			</v-toolbar-title>
			<v-spacer />
			<slot name="iconButton" />
		</v-toolbar>
		<slot name="loading" />
		<v-card-text>
			<slot name="body">
				empty
			</slot>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {type: String, default: null},
	}
}
</script>
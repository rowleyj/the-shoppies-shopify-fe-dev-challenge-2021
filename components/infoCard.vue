<template>
	<v-card width="250">
		<v-card-title>{{ title }}</v-card-title>
		<v-card-subtitle>{{ year }}</v-card-subtitle>
		<v-card-text>
			<v-img
				v-if="src && src != 'N/A'"
				:src="src"
				height="200"
				contain
			/>
			<span v-else>
				No Poster Available
			</span>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props:{
		title: {
			type: String,
			default: null
		},
		src: {
			type: String,
			default: null
		},
		year: {
			type: String,
			default: null
		}
	}
}
</script>
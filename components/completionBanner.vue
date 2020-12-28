<template>
	<v-hover
		v-slot="{ hover }"
	>
		<v-toolbar
			:elevation="hover ? 16 : 5"
			outlined
		>
			<v-row
				justify="center"
				align="center"
			>
				<v-icon
					v-if="!$vuetify.breakpoint.mobile"
					color="yellow accent-3"
					large
				>
					mdi-trophy-award
				</v-icon>
				<v-icon
					color="yellow accent-3"
					:large="!$vuetify.breakpoint.mobile"
				>
					mdi-trophy-award
				</v-icon>
				<v-icon
					color="yellow accent-3"
					:large="!$vuetify.breakpoint.mobile"

					left
				>
					mdi-trophy-award
				</v-icon>
				<v-toolbar-title v-if="!$vuetify.breakpoint.mobile">
					Thank You For Your Nominations! Tune In To See The Winners! 
				</v-toolbar-title>
				<span v-else>Nominations Complete!</span>
				<v-icon
					right
					color="yellow accent-3"
					:large="!$vuetify.breakpoint.mobile"
				>
					mdi-trophy-award
				</v-icon><v-icon
					color="yellow accent-3"
					:large="!$vuetify.breakpoint.mobile"
				>
					mdi-trophy-award
				</v-icon>
				<v-icon
					v-if="!$vuetify.breakpoint.mobile"
					large
					color="yellow accent-3"
				>
					mdi-trophy-award
				</v-icon>
			</v-row>
		</v-toolbar>
	</v-hover>
</template>
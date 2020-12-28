<template>
	<div>
		<card-title-and-body
			title="Nominations"
		>
			<template #iconButton>
				<v-btn
					icon
					@click="infoDialog = true"
				>
					<v-icon>mdi-information</v-icon>
				</v-btn>
			</template>
			<template #body="">			
				<v-simple-table>
					<template #default>
						<tbody>
							<tr
								v-for="(item, index) in nominations"
								:key="index"
							>
								<td>
									{{ item.Title }} <span v-if="item.Year">({{ item.Year }})</span>
								</td>
								<td class="text-right">
									<v-btn
										icon
										@click="removeNomination(item)"
									>
										<v-icon>mdi-minus</v-icon>
									</v-btn>
								</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
				<div v-if="nominations.length > 0">
					<v-divider />
					<v-container>
						<v-row
							justify="center"
							align="center"
						>
							<v-btn
								color="primary"
								text
								class="mt-2"
								@click="saveNominations()"
							>
								Save Nominations
							</v-btn>
						</v-row>
					</v-container>
				</div>
			</template>
		</card-title-and-body>
		<v-dialog
			v-model="infoDialog"
			width="500"
		>
			<v-card>
				<v-card-title>
					How To Nominate Movies For The Shoppies
					<v-spacer />
					<v-btn
						icon
						@click="infoDialog = false"
					>
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text>
					<p>
						To nominate a movie, you can simply search for a movie by it's title then select nominate.
					</p>
					Rules:
					<ul>
						<li>5 Nominations Required</li>
					</ul>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	computed: {
		nominations(){
			return this.$store.getters['movies/nominations']
		}
	},
	data(){
		return{
			infoDialog: false,
		}
	},
	methods: {
		removeNomination(item){
			this.$store.dispatch('movies/removeNomination', {movie: item})
			this.$store.dispatch('snackbar/setSnackbar', {text: item.Title+' Removed From Nominations'})
			// update cookies as required
			let nominations = this.$cookies.get('nominations');
			if(nominations.length){
				this.setNominationCookies();

			}
		},
		/*
        *   This function saves nominations to the cookies
        *   On initial page mount, cookies will be read and nominations will 
        *   be re-initialized
        */
		saveNominations(){
			this.setNominationCookies();
			this.$store.dispatch('snackbar/setSnackbar', {text: 'Nominations Saved'})
		},
		setNominationCookies(){
			this.$cookies.set('nominations', this.nominations, {
				path: '/',
				maxAge: 60 * 60 * 24 * 7
			})
		}
	}
}
</script>


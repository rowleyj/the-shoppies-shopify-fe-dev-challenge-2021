<template>
	<card-title-and-body
		title="Search Results"
	>
		<template #loading>
			<v-progress-linear
				v-show="awaitingSearchResponse"
				color="secondary"
				height="4"
				indeterminate
			/>
		</template>
		<template #body>
			<v-simple-table>
				<template #default>
					<tbody>
						<tr
							v-for="(item, index) in results"
							:key="index"
						>
							<td>
								<v-row>
									<v-col cols="8">
										<v-menu
											:open-on-hover="!$vuetify.breakpoint.mobile"
											:open-on-click="$vuetify.breakpoint.mobile"
											offset-x
											left
											transition="fab-transition"
										>
											<template #activator="{on, attrs}">
												<v-btn
													text
													small
													v-bind="attrs"
													v-on="on"
												>
													{{ item.Title.length > maxTextLength ? item.Title.substring(0,maxTextLength)+'...' : item.Title }} <span v-if="item.Year">({{ item.Year }})</span>
												</v-btn>
											</template>
											<info-card 
												:title="item.Title"
												:src="item.Poster"
												:year="item.Year"
											/>
										</v-menu>
									</v-col>
									<v-col cols="4">
										<v-btn
											v-if="ableToNominate(item)"
											small
											text
											color="primary"
											@click="nominate(item)"
										>
											Nominate
										</v-btn>
									</v-col>
								</v-row>
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</template>
	</card-title-and-body>
</template>

<script>
export default {
	computed: {
		maxTextLength(){
			return this.$vuetify.breakpoint.mobile ? 10 : 17;
		},
		results(){
			return this.$store.getters['movies/movies']
		},
		nominations(){
			return this.$store.getters['movies/nominations']
		},
		awaitingSearchResponse(){
			return this.$store.getters['movies/awaitingSearchResponse']
		},
	},
	methods:{
		nominate(item){
			this.$store.dispatch('movies/nominateMovie', {movie: item});
			this.$store.dispatch('snackbar/setSnackbar', {text: item.Title+' Added To Nominations'})        
			// update cookies as required
			let nominations = this.$cookies.get('nominations');
			if(nominations.length){
				this.setNominationCookies();
			}    
		},
		ableToNominate(item){
			if(this.nominations.length > 4){
				return false;
			}else{
				// check if object is present in array
				// use imdbID - NOT USING REFERENCE
				let index = this.nominations.findIndex(ele => ele.imdbID === item.imdbID);
				if(index > -1){
					return false;
				}else{
					return true;
				}
                
			}
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
<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" :src="topbarImage()" />

		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>


         <AppProfile />
	</div>
    <Toast/>
</template>

<script>
import AppProfile from './AppProfile.vue';
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);

        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
		topbarImage() {
			return this.$appState.darkTheme ? '/images/mexico-tourism-board-mexico-city-text-logo.jpg' : '/images/mexico-tourism-board-mexico-city-text-logo.jpg';
		}
    },
	computed: {
		darkTheme() {
			return this.$appState.darkTheme;
		}
	},

    components: {

        'AppProfile': AppProfile,

    }
}
</script>

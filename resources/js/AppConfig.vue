<template>

</template>

<script>
	export default {
		props: {
			layoutMode: {
				type: String,
				default: null
			},
			layoutColorMode: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				active: false,
				d_layoutMode: this.layoutMode,
				d_layoutColorMode: this.layoutColorMode,
				scale: 16,
				scales: [12,13,14,15,16]
			}
		},

	}
</script>

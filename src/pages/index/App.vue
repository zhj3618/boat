<template>
    <div class="app">
        <image class="img" :src="src" />
        <hello />
    </div>
</template>

<script>
	import Hello from 'c/Hello'
	import {toast} from '../../common/modal'

	export default {
		name: 'app',
		mounted(){
			toast( 'app mounted')
		},
		data () {
			return {
				src: "https://img.alicdn.com/tfs/TB1ggbThqagSKJjy0FcXXcZeVXa-334-82.png"
			}
		},
		components: {
			Hello
		}
	}
</script>

<style scoped>
    .app {
        align-items: center;
        padding-top: 200px;
    }
    .img {
        width: 334px;
        height: 82px;
    }
</style>

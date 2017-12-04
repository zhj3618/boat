<template>
    <div class="hello">
        <div class="text-wrap">
            <text ref="gzh" class="greeting">{{greeting.zh}}</text>
            <text ref="gcn" class="greeting">{{greeting.cn}}</text>
        </div>
    </div>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		name: 'hello',
		data () {
			return {
				greeting: {
					cn: 'Hello BOAT ~',
					zh: '你好，轻舟 ～'
				},
				aniFlag: 1
			}
		},
		mounted() {
			this.toggleAni();
		},
		methods: {
			toggleAni() {
				const gzh = this.$refs.gzh;
				const gcn = this.$refs.gcn;
				this.aniFlag *= -1;
				const enterStyle = {
					"-webkit-transform": "rotateY(0) scale(1)",
					"transform": "rotateY(0) scale(1)",
					"opacity": 1
				};
				const leaveStyle = {
					"-webkit-transform": "rotateY(90deg) scale(0)",
					"transform": "rotateY(90deg) scale(0)",
					"opacity": 0
				};

				animation.transition(gzh, {
					styles: this.aniFlag < 0 ? leaveStyle : enterStyle,
					duration: 500,
					timingFunction: 'ease-in-out',
					needLayout: false
				});
				animation.transition(gcn, {
					styles: this.aniFlag > 0 ? leaveStyle : enterStyle,
					duration: 500,
					timingFunction: 'ease-in-out',
					needLayout: false
				});

				setTimeout(this.toggleAni, 3000);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        align-items: center;
        width: 750px;
        margin-top: 12px;
    }

    .text-wrap{
        margin-top: 40px;
        height: 40px;
        overflow: hidden;
        -webkit-transform-style:preserve-3d;
        transform-style:preserve-3d;
        position: relative;
        text-align: center;
        width: 750px;
    }

    .greeting {
        -webkit-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        font-size: 30px;
        height: 40px;
        line-height: 40px;
        width: 750px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>

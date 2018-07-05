<template>
<div class="hello">
    <!-- 图片 -->
    <span>我的第一个vue cli2.x小项目demo</span>
    <div id="bag" v-bind:class='{burst:ended}'></div>
    <!-- 进度情况 -->
    <div id="bag-health">
        <div v-bind:style="{width:health+'%'}"></div>
        <span>我的容忍度：{{health}}</span>
    </div>
    <!-- 控制按钮 -->
    <div id="controls">
        <button v-on:click='punch' v-show='!ended'> 使劲敲</button>
        <button v-on:click='restart'>重新开始</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            health: 100, //敲击生命值，控制进度条宽度
            ended: false //判断是否游戏结束
        }
    },
    methods: {
        //使劲敲函数
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) { //判断生命值是否为0，是则游戏结束
                this.ended = true;
            }
        },
        //游戏重新开始
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  
<!--scoped的意思是这里的样式只对当前页面有效不会影响其他页面，还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less-->
<style scoped>
#bag {
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(../assets/bag.png) center no-repeat;
    background-size: 80%;
}

/* 注意这里不能有空格，有空格表示内嵌的元素标签 */

#bag.burst {
    background-image: url(../assets/bag-burst.png);
}

#bag-health {
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
}

#bag-health div {
    height: 20px;
    background: crimson;
}

#controls {
    width: 200px;
    margin: 0 auto;
}

#controls button {
    margin-left: 20px;
}
</style>

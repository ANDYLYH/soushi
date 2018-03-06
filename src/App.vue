<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      activeName: 'first'
    }
  },
  computed:{
    ...mapGetters([
      "home"
    ])
  },
  methods:{
    handleClick(tab, event) {
        
      }
  }
}
</script>
<style>
/*样式重置  公共样式*/
  @import './css/reset.css';
</style>

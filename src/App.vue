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
import foot from '@/components/common/footer.vue'
export default {
  name: 'app',
  data(){
    return {
      activeName: 'first',
      name:this._name
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
  },
}
</script>
<style>
/*样式重置  公共样式*/
  @import './css/reset.css';
</style>

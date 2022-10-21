<template>
  <ul class="nav nav-tabs" id="nav">
      <li 
        class="nav-item"
        v-for="(val, i) in navigation"
        :key="i"
      >
      <router-link v-if="val === 'users'" to="/" v-on:click="$store.state.filterValue = val" class="nav-link" :class="activeClass(val)">{{val}}</router-link>
      <router-link v-else :to="'/'+val" v-on:click="$store.state.filterValue = val" class="nav-link" :class="activeClass(val)">{{ val }}</router-link>
    </li>
  </ul>
</template>
<style scoped>
  #nav div {
    padding: 0 10px
  }
</style>
<script>
import store from "@/api/data"
export default {
  name: 'Navigation',
  component: {},
  data() {
    return {
      navigation: Object.keys(store).filter(key => ["users", "transactions"].includes(key))
    }
  },
  methods: {
    activeClass: function (...names) {
      for (let name of names) {
        if (name == this.$route.name) {
          return 'active';
        }
      }
    } 
  }
}
</script>
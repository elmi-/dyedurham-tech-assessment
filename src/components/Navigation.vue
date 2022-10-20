<template>
  <nav id="nav">
      <div 
        v-for="(val, i) in navigation"
        :key="i"
      >
      <router-link v-if="val === 'users'" to="/" :key="$route.fullPath">{{val}}</router-link>
      <router-link v-else :to="val" :key="$route.fullPath">{{ val }}</router-link>
    </div>
  </nav>
</template>
<style scoped>
  #nav {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
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
}
</script>
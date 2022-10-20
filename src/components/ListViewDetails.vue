<template>
  <h1>Details</h1>
  <div 
    v-for="d in getDataByID($route.params.id)" 
    :key="d.id"
  >
    {{ d.name }}
  </div>
</template> 
<script>
  import { mapGetters } from "vuex"
  export default {
    name: "ListViewDetails",
    props: {
      user: Object
    },
    computed: {
      ...mapGetters(["getDataByID"])
  }
} 
</script>
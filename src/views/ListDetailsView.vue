<template>
  <h1>Details</h1>
  <div 
    v-for="d in getDataByID($store.state.detailsValue, $store.state.filterValue)" 
    :key="d.id"
  >
    {{ d.id }}
    {{ d.name }}
    {{ d.email }}
    {{ d.firm }}
  </div>
</template> 
<script>
  import { mapGetters } from "vuex"

  export default {
    name: "ListDetailsView",
    data() {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters(["getDataByID"])
  }
} 
</script>
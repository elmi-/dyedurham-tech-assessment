<template>
  <h1>Details</h1>
  {{ getDataByID($store.state.detailsValue, $store.state.filterValue) }}
</template>
<script>
  import { mapGetters } from "vuex"
  export default {
    name: "ListViewDetails",
    computed: {
      ...mapGetters([
        'data',
        'filteredData',
        'getDataByID'
    ])
  },
  props: {
      data: Object
    },
  } 
</script>
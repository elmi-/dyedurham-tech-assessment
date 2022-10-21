<template v-cloack>
  <table class="table table-striped table-hover">
    <ListItem :data="filteredData($store.state.filterValue)" :keys="filteredData($store.state.filterValue)" />
  </table>
</template>
<script>
  import ListItem from "@/components/ListItem"
  import { mapGetters } from "vuex"

  export default {
    name: "List",
    components: {
      ListItem
    }, 
    computed: {
      ...mapGetters([
        'data',
        'filteredData'
    ])
  }
}
</script>
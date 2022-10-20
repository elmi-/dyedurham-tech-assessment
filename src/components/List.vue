<template v-cloack>
  <table>
    <thead>
      <th>ID</th>
    </thead>
    <ListItem :data="data" />
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
        'data'
    ])
  }
}
</script>
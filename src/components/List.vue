<template v-cloack>
  <table>
    <thead>
      <th>ID</th>
    </thead>
    <ListItem :data="data" />
  </table>
</template>
<script>
  import ListItem from "@/components/ListItem";
  import store from "@/api/data"

  export default {
    name: "List",
    components: {
      ListItem
    }, 
    data() {
      return {
        data: store,
      }
    }
  }
</script>
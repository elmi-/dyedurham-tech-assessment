<template>
  <tr  
    v-for="(d, i) in data[$store.state.filterValue]"
    :key="i"
    :data="d"
  >
    <td>
      <router-link :to="{ name: 'details', params: { id: d.id } }" v-on:click="$store.state.detailsValue = d.id">{{ d.name }}</router-link>
    </td>
    <td>
      {{ d.email }}
    </td>
    <td>
      {{ d.firm }}
    </td>
    <!-- transactions columns, if transactions selected -->
    <!-- using v-show for Transcations data because it's less expensive than mounting an enitre component dedicated to the columns -->
    <td v-show="$store.state.filterValue === 'transactions'">
      <router-link :to="{ name: 'details', params: { id: d.id } }">{{ d.product }}</router-link>
    </td>
    <td v-show="$store.state.filterValue === 'transactions'">
      {{ d.user }}
    </td>
    <td v-show="$store.state.filterValue === 'transactions'">
      {{ d.total }}
    </td>
  </tr>
</template>
<script>
  export default {
    name: "ListItem",
    props: {
      data: Object,
    },
  } 
</script>
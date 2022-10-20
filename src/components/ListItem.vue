<template>
  <tr  
    v-for="(d, i) in data['users']"
    :key="i"
    :data="d"
  >
    <td>
      <router-link :to="{ name: 'details', params: { id: d.id } }">{{ d.name }}</router-link>
    </td>
    <td>
      {{ d.email }}
    </td>
    <td>
      {{ d.firm }}
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
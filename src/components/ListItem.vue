<template>
    <template
      v-for="(value, key, index) in data.data.slice(0, 1)"
      :key="index"
    >
    <th
    v-for="(v, k, i) in value"
      :key="i"
    >
      {{ k }}
    </th>
    </template>
    <tbody>
        <tr 
          v-for="(value, key, index) in data.data" 
          :key="index"
        >
          <td 
            v-for="(v, k, i) in value" 
            :key="i"
            class="text-left"
          >
          <span v-show="k === 'total'">$</span>{{ v }}
          <router-link 
            :to="{ name: 'details', params: { id: value.id } }" 
            v-on:click="$store.state.detailsValue = value.id"
            v-show="k == 'name' || k == 'product'"
            class="details-icon"
          >
            <font-awesome-icon icon="fa-sharp fa-solid fa-circle-info" />
          </router-link>
          </td>
        </tr>
    </tbody>
</template>
<script>
  export default {
    name: "ListItem",
    props: {
      data: Object,
      keys: Object
    },
  } 
</script>
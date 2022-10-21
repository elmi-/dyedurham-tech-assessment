<template>
  <thead>
    <th 
      scope="col"
      v-for="(value, key, index) in Object.keys(data.data)"
      :key="index"
      :data="value"
    >
      {{ Object.keys(data.data[key])[key + 1] }}
    </th>
  </thead>
    <tbody>
        <tr v-for="(valueRow, keyRow, indexRow) in data.data" :key="indexRow">
            <td 
              v-for="(valueColumn, keyColumn, indexColumn) in Object.keys(data.data)" 
              :key="indexColumn"
              class="text-left"
            >

              <span v-show="Object.keys(data.data[keyRow])[keyColumn + 1] === 'total'">$</span>{{ valueRow[Object.keys(data.data[keyRow])[keyColumn + 1]] }}
              <router-link 
                :to="{ name: 'details', params: { id: valueRow.id } }" 
                v-on:click="$store.state.detailsValue = valueRow[Object.keys(data.data[keyRow])[keyColumn]]"
                v-show="Object.keys(data.data[keyRow])[keyColumn + 1] == 'name' || Object.keys(data.data[keyRow])[keyColumn + 1] == 'product'"
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
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
            >
              {{ valueRow[Object.keys(data.data[keyRow])[keyColumn + 1]] }}
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
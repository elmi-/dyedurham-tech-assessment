<template>
  <h4>{{ $store.state.filterValue }} details</h4>
  <section
    v-for="(value, key, index) in getDataByID($store.state.detailsValue, $store.state.filterValue)"
    :key="index"
  >
    <article
    v-for="(v, k, i) in value"
    :key="i"
    >
      <strong>{{ k }}</strong>: <span v-show="k === 'total'">$</span>
      <span 
        v-show="k =='firm'"
        v-for="(firm, key, index) in getUserFirm(v)"
        :key="index"
      >
        {{ firm }}:
      </span>{{ v }}
  </article>
  </section>
</template>
<script>
  import { mapGetters } from "vuex"
  export default {
    name: "ListViewDetails",
    computed: {
      ...mapGetters([
        'data',
        'filteredData',
        'getDataByID',
        'getUserFirm'
    ])
  },
  props: {
      data: Object
    },
  } 
</script>
<template>
  <h1>Details</h1>
  {{ $route.params.id }}
</template>
<script>
  export default {
    name: "ListViewDetails",
    props: {
      user: Object
    }
  } 
</script>
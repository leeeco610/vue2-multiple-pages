<template>
  <div>
    <DemoTable></DemoTable>
    <DataShow></DataShow>
  </div>
</template>

<script>
  import DemoTable from './DemoTable.vue'
  import DataShow from './DataShow.vue'

  export default {
    name: 'demoIndex',
    components:{
      DemoTable,
      DataShow
    },
    data(){
      return this.$store.state
    }
  }
</script>

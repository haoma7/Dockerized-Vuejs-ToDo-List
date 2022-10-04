<template>
  <ul>
    <learning-resource
      v-for="res in this.fullList"
      :id = 'res.id'
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      :deleteResource="deleteResource"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['fullList','deleteResource'],
  components: {
    LearningResource
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
<template>
    <the-header title="To-Do List"></the-header>   <!--the header (TheHeader.vue) for the to-do list, the title is a prop for the header custom control element-->  
    <the-resources></the-resources> <!--TheResources.vue--> 
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
    components:{
        TheResources,
        TheHeader
    }, // need to export the components that have been imported above
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}


</style>

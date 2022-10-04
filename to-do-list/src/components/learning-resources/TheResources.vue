<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >To-do</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add new activity</base-button
    >
  </base-card>
  <p v-if="isLoading"><base-card>Loading...</base-card></p>
  <keep-alive v-else>
    <component :is="selectedTab" v-bind="currentProperties"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  inject:['FirebaseLink'],
  provide() {    // provide and inject
    return {
      resources: this.storedResources, // make the stored data available to any child element
      addResource: this.addResource,
      deleteResource:this.removeResource
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources', // selectedTab determines the dynamic component in line 8
      storedResources: 5,         // This is the "database" of the to-do list
      isLoading: false

    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab == 'stored-resources' ? null : 'flat';
    },

    addResButtonMode() {
      return this.selectedTab == 'add-resources' ? null : 'flat';
    },

    currentProperties: function() {
    if (this.selectedTab === 'stored-resources') {
      return { fullList:this.storedResources, deleteResource:this.removeResource}
    }
    else{
      return {updateResource:this.updateResource, addResource: this.addResource}
    }
  },

  },


  methods: {

    setSelectedTab(tab) {
      this.selectedTab = tab;
    },


    updateResource()

    { 
      this.isLoading = true; //flag variable to indicate the isloading status

      fetch(this.FirebaseLink+'/toDoList.json').then(
        (response) => {
          if (response.ok){
            return response.json();
          }
        }
      ).then(

        (data) => {
          const results = [];
          for (const id in data){
            results.push({
              id:id,
              title:data[id].title,
              description: data[id].description,
              link:data[id].link,

            })
          }
          this.storedResources = results;

        }
      ).then(
        () => {
          this.isLoading=false;
        }
      ).catch((error) =>{
         console.log("Fetching data runs into error!");
         console.log(error)
      })},

      addResource(enteredTitle, enteredDescription){

        fetch(this.FirebaseLink+'/toDoList.json',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          title:enteredTitle,
          description:enteredDescription,
        })
      }).then(() =>{
        this.updateResource();
        this.selectedTab = 'stored-resources';
      })
      },


     removeResource(resId){



        fetch(this.FirebaseLink+'/toDoList/'+resId+'.json',{

        method:'DELETE',

        }).then(() =>{

        this.updateResource();
      })
      },



  },

mounted(){

  this.updateResource();
}
};
</script>

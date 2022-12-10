<template>
  <div>
    <search-bar 
    :root="'#document'" 
    :highlightClass="'myHighLight'" 
    :selectedClass="'selected-highlight'" 
    v-model:hidden="showSearchBar"/>
    <button @click="searchClick()">搜索按钮</button>
    <div id="document">
      <document/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Document from './Document.vue'

export default defineComponent({
  name: 'App',
  components: {
    Document,
  },
  data(){
    return{
      showSearchBar:false
    }
  },
  methods:{
    searchClick(){
      
      this.showSearchBar = !this.showSearchBar
      console.log("切换showSearchBar",this.showSearchBar);
    }
  }
});
</script>

<style>
.myHighLight{
  background-color: yellow;
}
.selected-highlight{
  background-color: yellowgreen;
}
</style>

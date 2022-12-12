import { createApp } from 'vue'
import App from './App.vue'
//import SearchBar from '../src/index'
import SearchBar from '../lib/search-bar-vue3.umd.js'
//import SearchBar from '../lib/index'
createApp(App).use(SearchBar).mount('#app')

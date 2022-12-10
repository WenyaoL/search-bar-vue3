import { App } from "vue";
import SearchBar from './components/searchBar.vue'

const install = (app:App)=>{
    app.component("SearchBar",SearchBar)
}

export default {install,SearchBar}

export {install,SearchBar}
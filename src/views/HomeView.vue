<template>
    <div class="home">
        <div>
            <Search @search-item="searchItem" :status="status"/>
            <Item/>
        </div>
    </div>
</template>

<script>
import Search from '../components/Home/Search.vue'
import Item from '../components/Home/Item.vue'
import {mapState} from 'vuex'

export default {
    name:'Home',
    components:{
        Search,
        Item
    },
    data:()=>({
        searching: "",
        status: "",
    }),
    methods:{
        ...mapState(['searching']),

        searchItem(searching){
            if(searching.length<3 && searching.length !==0){
            this.status = `Loading...` 
          }else if(searching.length>=3){
            this.status = `Mencari : ${searching}` 
          }else{
            this.status = ""
          }
        },
    }
    
}
</script>
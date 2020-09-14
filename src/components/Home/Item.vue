<template>
  <div class="mt-5">
    <div class="selected-item flex flex-wrap">
      <div
        v-for="product in data"
        class="w-1/3 p-2 mx-auto"
        style="min-width:200px"
        :key="product.id"
        :list="list"
        :click="click">
        <div class="flex">
          <div class="title">
            <span :title="product.title">{{ trim(product.title) }}</span>
          </div>
        </div>
        <div>
          <img v-bind:src="product.thumbnailUrl" class="img-box"/>
        </div>
        <div class="flex p-4">
          <div>
            <span>{{product.price | currency}}</span>
          </div>
          <button 
              class="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1  border rounded-full"
              @click="$emit('click', post)">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:'Item',
  created(){

  },
  computed:{
    ...mapState(['data'])
  },
  methods: {
    trim: function(words, count = 15, seperator = "...") {
      if (words.length > count) words = words.slice(0, count) + seperator;
      return words;
    },
  },
};
</script>
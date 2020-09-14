<template>
    <div class="content float-left w-8/12 align-middle">
        <div v-for="product in data" :key="product.id" class="m-6 flex">
          <img v-bind:src="product.thumbnailUrl" alt="logo">
          <div class="mx-3">
            <h2 class="text-2xl post-title font-bold mb-4">{{ product.title }}</h2>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'cart',
    components: {
    },
   computed: {
        ...mapState(['data'])
    },
}
</script>
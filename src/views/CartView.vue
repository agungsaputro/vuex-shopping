<template>
    <div class="cart">
        <div class="flex">
            <cart/>
            <Checkout/>
        </div>
    </div>
</template>

<script>
import cart from '@/components/Cart/Cart.vue'
import Checkout from '@/components/Cart/CartCheckOut.vue'
export default {
    name: 'Cart',
    components: {
        cart,
        Checkout
    },
}
</script>
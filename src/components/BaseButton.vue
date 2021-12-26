<template>
    <styled-button :class="{'disabled-btn' : requestLoading}" @click="$emit('request-loading')">Pay dues</styled-button>
</template>


<script>
import {StyledButton} from '../styled-components/index'

export default {
    props: {
        requestLoading: Boolean
    },
    data() {
        return {

        }
    },
    components: {
        StyledButton
    }
    
}
</script>

<style scoped>
.disabled-btn {
	opacity: 0.5;
	pointer-events: none;
}
</style>
<template>
    <styled-button @click="clickHandler">Pay dues</styled-button>
</template>


<script>
import axios from 'axios'
import {StyledButton} from '../styled-components/index'

export default {
    props: {
        userId: Number
    },
    data() {
        return {

        }
    },
    methods: {
        clickHandler() {
            this.$emit('request-loading')
            axios.post(`/mark-paid/${this.userId}`)
            .then(res => {
                console.log(res.data)
                // this.$emit('request-success', )
                setTimeout(() => {
                    //refresh table 
                }, 3000);
            })
            .catch(err => {
                console.log(err.response)
            })
        }
    },
    components: {
        StyledButton
    }
    
}
</script>
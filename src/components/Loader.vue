<template>
    <preloader-wrapper>
        <loading-indicator />
    </preloader-wrapper>
</template>

<script>
import {PreloaderWrapper} from '../styled-components/index'
import LoadingIndicator from './LoadingIndicator.vue'

export default {

    components: {
        PreloaderWrapper,
        LoadingIndicator
    }
}
</script>
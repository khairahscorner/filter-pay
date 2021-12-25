<template>
    <div class="wrapper">
        <search-wrapper>
            <div class="search-box">
                <SearchIcon />
                <input 
                    placeholder="Search Users by Name, Email or Date"
                    type="text"
                    v-model="searchValue"
                />    
            </div>
        </search-wrapper>
    </div>
</template>

<script>
import SearchIcon from './icons/SearchIcon.vue'
import {SearchWrapper} from '../styled-components/index'

export default {
    data() {
        return {
            searchValue: ""
        }
    },
    components: {
        SearchIcon,
        SearchWrapper
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
}
</style>
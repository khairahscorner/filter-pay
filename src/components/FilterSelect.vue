<template>
    <div class="filter-wrapper">
        <div class="filter">
            <select-wrapper>
                <div class="custom-select">
                    <div class="select-header" @click="isOpen=!isOpen">
                        <div class="select-icon">
                            <filter-icon />
                        </div>
                        Filter
                    </div>
                    <div v-if="isOpen">
                        <div class="options">
                            <div class="sort-group">
                                <p>sort by:</p>
                                <radio-buttons :options="options" :defaultOption="selectedOption" @option-selected="sortBySelected" />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </select-wrapper>
        </div>
                
    </div>
</template>

<script>
import {SelectWrapper} from '../styled-components/index'
import FilterIcon from './icons/FilterIcon.vue'
import RadioButtons from '../components/RadioButtons.vue'

export default {
    data() {
        return {
            isOpen: false,
            selectedOption: 'none',
            options: [
                {label: 'Default', val: 'none'},
                {label: 'First Name', val: 'fname'},
                {label: 'Last Name', val: 'lname'},
                {label: 'Email', val: 'email'},
            ]
        }
    },
    methods: {
        sortBySelected(sortVal) {
            console.log(sortVal)
            this.selectedOption = sortVal
            this.isOpen = false
        },
        closeSelect (e) {
            if (!this.$el.contains(e.target)) {
                this.isOpen = false
            }
        }
    },
    mounted () {
        document.addEventListener('click', this.closeSelect)
    },
    beforeDestroy () {
        document.removeEventListener('click',this.closeSelect)
    },
    components: {
        SelectWrapper,
        FilterIcon,
        RadioButtons
    }
}
</script>

<style scoped>
.filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.filter {
    margin-right: 10px;
    box-sizing: border-box;
    border-radius: 7px;
}

</style>
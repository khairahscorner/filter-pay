<template>
  <div>
    <pre-loader v-if="loading" />
    <main v-else>
      <page-header>
        <h1 class="head-text">Table header</h1>
        <div class="tab-nav">
          <div class="tabs-group">
            <div
              class="tab"
              @click="activeTab = 'all'"
              :style="activeTab == 'all' ? activeStyle : null"
            >
              All
            </div>
            <div
              class="tab"
              @click="activeTab = 'paid'"
              :style="activeTab == 'paid' ? activeStyle : null"
            >
              Paid
            </div>
            <div
              class="tab"
              @click="activeTab = 'unpaid'"
              :style="activeTab == 'unpaid' ? activeStyle : null"
            >
              Unpaid
            </div>
            <div
              class="tab"
              @click="activeTab = 'overdue'"
              :style="activeTab == 'overdue' ? activeStyle : null"
            >
              Overdue
            </div>
          </div>
          <div class="nav-right">
            Total payable amount: 
            <span id="amount">900</span>
            <span id='currency'> USD</span>
          </div>
        </div>

      </page-header>
      <card-wrapper>
        <div class="heading">
          <div class="group">
            <filter-select />
            <search-box />
          </div>
          <base-button :userId="userId" />
        </div>
      </card-wrapper>
    </main>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import PreLoader from '../components/Loader.vue';
import FilterSelect from '../components/FilterSelect.vue';
import SearchBox from '../components/SearchBox.vue';
import {PageHeader, CardWrapper} from '../styled-components/index'
import {black_primary} from '../utils/color.json'
// import allMixins from '../mixins';

export default {
  name: 'DataTable',
  // mixins: [allMixins],
  data() {
    return {
      loading: true,
      userId: 0,
      activeTab: 'all',
      activeStyle: {
        fontWeight: 500,
        color: black_primary,
        borderBottom: `2px solid ${black_primary}`,
      }
    }
  },
  created() {
    setTimeout(()=> {
      this.loading = false
    }, 1000)
  },
  methods: {
    switchTab(payload) {
      //filter out users based on new val
      console.log(payload)
    }
  },
  watch: {
    activeTab(newVal) {
      this.switchTab(newVal)
    }
  },
  components: {
    PreLoader,
    BaseButton,
    PageHeader,
    CardWrapper,
    FilterSelect,
    SearchBox,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
main {
  background-color: #F2F0F9;
  padding: 100px 50px 100px;
  /* height: 100vh; */
}


/* @media screen (max-width:1024px) {
  main {
    padding: 50px
  }
} */
</style>

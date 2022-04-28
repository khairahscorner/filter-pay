<template>
  <div>
    <pre-loader v-if="loading" />
    <main-wrapper v-else>
      <page-header>
        <h1 class="head-text">Filter Pay</h1>
        <div class="tab-nav">
          <div class="text-14 tabs-group">
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
            <span id="amount">{{ totalAmount / 100 }}</span>
            <span id="currency"> USD</span>
          </div>
        </div>
      </page-header>
      <div class="nav-mobile">
        Total payable amount:
        <span id="amount">{{ totalAmount / 100 }}</span>
        <span id="currency"> USD</span>
      </div>
      <card-wrapper>
        <div class="heading">
          <div class="group">
            <filter-select
              :selectedFilter="selectedFilter"
              @sort-data="sortTable"
            />
            <search-box @perform-search="performSearch" />
          </div>
          <base-button
            @request-loading="markUserAsPaid"
            :disabled="requestDetails.loading"
          />
        </div>
        <table-card
          :tableError="tableError"
          :usersData="currentTableData"
          :requestDetails="requestDetails"
          :currentCheckIndex="currentCheckIndex"
          @checked-user="saveCheckedUser"
        >
          <pagination-wrapper>
            <div class="rows">
              <div class="text-12">
                Rows per page: {{ currentTableData.length }}
              </div>
              <img src="../assets/icons/caret.svg" alt="caret" />
            </div>
            <div class="row-numbers text-12">
              1-{{ currentTableData.length }} of {{ currentTableData.length }}
            </div>
            <div class="pagination-btn">
              <arrow-icon />
            </div>
            <div class="pagination-btn">
              <arrow-icon class="next" />
            </div>
          </pagination-wrapper>
        </table-card>
      </card-wrapper>
    </main-wrapper>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import PreLoader from "../components/Loader.vue";
import FilterSelect from "../components/FilterSelect.vue";
import SearchBox from "../components/SearchBox.vue";
import TableCard from "../components/TableCard.vue";
import ArrowIcon from "../components/icons/ArrowIcon.vue";
//styled components
import {
  PageHeader,
  CardWrapper,
  MainWrapper,
  PaginationWrapper,
} from "../styled-components/index";

import { black_primary } from "../utils/color.json";
import allMixins from "../mixins";
import { mockData } from '../mock';

export default {
  name: "DataTable",
  components: {
    PreLoader,
    BaseButton,
    FilterSelect,
    SearchBox,
    ArrowIcon,
    TableCard,
    PageHeader,
    CardWrapper,
    MainWrapper,
    PaginationWrapper,
  },
  mixins: [allMixins],
  data() {
    return {
      loading: false,
      usersData: [],
      totalAmount: 0,
      checkedUser: null, //details of user in checked row
      currentCheckIndex: null, //index of row with its checkbox clicked
      tableError: false,
      requestDetails: {
        loading: false,
        response: null,
      },
      activeTab: "all",
      activeStyle: {
        fontWeight: 500,
        color: black_primary,
        borderBottom: `2px solid ${black_primary}`,
      },
      currentTableData: [],
      filteredByTabTableData: [],
      tableMeta: null,
      selectedFilter: "none",
    };
  },
  watch: {
    activeTab(newVal) {
      this.switchTab(newVal);
    },
  },
  created() {
    this.loading = true;
    this.getData();
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.totalAmount = 0; //reset total amount
          this.currentCheckIndex = null; //reset checked user index
          this.usersData = mockData;
          //if mark user paid request occured
          if (this.requestDetails.loading) {
            this.switchTab(this.activeTab);
          }
          //if first time loading the table
          else {
            this.currentTableData = mockData;
            this.filteredByTabTableData = mockData;
          }
          // calculate payable amount
          mockData.forEach((user) => {
            if (
              user.paymentStatus == "unpaid" ||
              user.paymentStatus == "overdue"
            ) {
              this.totalAmount += user.amountInCents;
            }
          });
          //pagination
          this.tableMeta = this.setTableMeta(mockData);
          setTimeout(() => {
            this.loading = false;
            this.requestDetails.loading = false;
          }, 1000);
      }, 1000);
    },
    saveCheckedUser(checkIndex, payload) {
      this.checkedUser = payload;
      this.currentCheckIndex = checkIndex;
    },
    markUserAsPaid() {
      if (this.checkedUser && this.checkedUser.paymentStatus === "unpaid") {
        //perform request only if payment status is unpaid
        this.requestDetails.loading = true;
        this.requestDetails.response = "Performing request...";
        setTimeout(() => {
            this.checkedUser = null;
            this.requestDetails.response = "Successful! Now Reloading Data... (Note: No action takes place)";
            this.getData();
          }, 1000);
      }
    },
    //uses mixin method sortByValue
    sortTable(val) {
      this.selectedFilter = val;
      let arrToSort = [...this.filteredByTabTableData]; //copy arr to be sorted
      //replace data in table with default data
      if (val == "none") {
        this.currentTableData = this.filteredByTabTableData;
      } else {
        this.currentTableData = this.sortByValue(val, arrToSort);
      }
    },

    //uses mixin method filterBySearch
    performSearch(val) {
      this.currentTableData = this.filterBySearch(
        val,
        this.filteredByTabTableData
      );
    },

    //uses mixin method filterByTab
    switchTab(val) {
      this.selectedFilter = "none"; //clear selected filter
      this.currentCheckIndex = null; //clear checked user
      //filter out users based on new val
      let tabResults = this.filterByTab(val, this.usersData);
      this.filteredByTabTableData = tabResults;
      this.currentTableData = tabResults;
    },
  }
};
</script>
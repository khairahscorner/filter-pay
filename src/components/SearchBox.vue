<template>
  <div class="wrapper">
    <search-wrapper>
      <div class="search-box">
        <SearchIcon />
        <input
          @keyup="$emit('perform-search', searchValue)"
          placeholder="Search Users by Name, Email or Payment Date"
          type="text"
          v-model="searchValue"
        />
      </div>
    </search-wrapper>
  </div>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";
import { SearchWrapper } from "../styled-components/index";

export default {
  components: {
    SearchIcon,
    SearchWrapper,
  },
  data() {
    return {
      searchValue: "",
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .wrapper {
    width: 100%;
  }
}
</style>

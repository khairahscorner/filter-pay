<template>
  <loading-wrapper>
    <div class="wrapper">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="details" v-if="response">{{ response }}</div>
  </loading-wrapper>
</template>

<script>
import { LoadingWrapper } from "../styled-components/index";

export default {
  components: {
    LoadingWrapper,
  },
  props: {
    response: String,
  },
};
</script>

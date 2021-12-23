<template>
  <div>
    <Preloader v-if="loading" />
    <main v-else>

    </main>
  </div>
</template>

<script>
import Preloader from '../styled-components/preloader';
// import allMixins from '../mixins';

export default {
  name: 'DataTable',
  // mixins: [allMixins],
  data() {
    return {
      loading: false
    }
  },
  methods: {

  },
  components: {
    Preloader
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  background-color: #F2F0F9;
  height: 100vh;
}
</style>

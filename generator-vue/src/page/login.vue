<template>
  <div class="page-login">
    <div class="content">
      <img class="ta-logo-img" src="../../static/logo.jpg" alt="logo">
      <p class="nameExprie">[找你所需]</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { MockLogin } from '@/api';

export default {
    data() {
        return {
        };
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.content{
  width 200px;
  padding 40px 0;
  margin 0 auto
}
</style>

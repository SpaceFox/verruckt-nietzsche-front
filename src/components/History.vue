<template>
  <v-row>
    <v-col v-for="item in reversedHistory" :key="item.requestId" class="d-flex child-flex" cols="3">
      <Result
        :situation="item.situation"
        :message="item.goodEvil.message"
        :color="item.goodEvil.color"
        :request-id="item.requestId"
        :historyMode="true"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import Result from '@/components/Result.vue';

export default {
  name: 'History',
  components: { Result },
  computed: {
    reversedHistory() {
      return this.history.slice().reverse();
    },
    ...mapState(['history']),
  },
};
</script>

<style scoped>

</style>

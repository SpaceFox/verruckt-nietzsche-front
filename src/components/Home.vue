<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="4">
        <Presentation/>
      </v-col>
      <v-col cols="12" md="4" lg="8" xl="8">
        <v-container>
          <v-row>
            <v-col>
              <Ask/>
            </v-col>
          </v-row>
          <v-row v-if="resultVisible">
            <v-col>
              <Result
                :situation="currentMorale.situation"
                :message="currentMorale.goodEvil.message"
                :color="currentMorale.goodEvil.color"
                :request-id="currentMorale.requestId"
                :historyMode="false"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row><v-col>Previous responses</v-col></v-row>
    <history/>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { isEmpty } from 'lodash';
import Presentation from '@/components/Presentation.vue';
import Ask from '@/components/Ask.vue';
import Result from '@/components/Result.vue';
import History from '@/components/History.vue';

export default {
  name: 'Home',
  components: {
    History, Result, Ask, Presentation,
  },
  computed: {
    ...mapState(['currentMorale']),
    resultVisible() {
      return !isEmpty(this.currentMorale);
    },
  },
};
</script>

<style scoped>

</style>

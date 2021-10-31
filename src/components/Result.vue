<template>
  <v-card class="mx-auto">
    <v-card-subtitle>Nietzsche thinks:</v-card-subtitle>
    <v-card-title>
      <span style="font-weight: normal;">"{{ situation }}" is</span>
      <strong :style="style">&nbsp;{{ message }}</strong>.
    </v-card-title>
    <v-card-actions v-if="buttonsAvailable">
      <v-spacer/>
      <div v-if="answered && !agreeLoading && !disagreeLoading">Thanks!</div>
      <v-btn
        text
        @click="agree(true)"
        :disabled="answered || disagreeLoading"
        :loading="agreeLoading"
      >
        I agree
      </v-btn>
      <v-btn
        text
        @click="agree(false)"
        :disabled="answered || agreeLoading"
        :loading="disagreeLoading"
      >
        This is madness
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { postOpinion } from '@/api';

export default {
  name: 'Result',
  data: () => ({
    answered: false,
    agreeLoading: false,
    disagreeLoading: false,
  }),
  props: {
    situation: String,
    message: String,
    color: String,
    requestId: String,
    historyMode: Boolean,
  },
  computed: {
    style() {
      return { color: this.color };
    },
    buttonsAvailable() {
      return !this.historyMode && this.requestId !== null;
    },
  },
  methods: {
    async agree(correct) {
      if (correct) {
        this.agreeLoading = true;
      } else {
        this.disagreeLoading = true;
      }
      await postOpinion(correct, this.requestId);
      this.agreeLoading = false;
      this.disagreeLoading = false;
      this.answered = true;
    },
  },
  watch: {
    requestId() {
      this.answered = false;
      this.agreeLoading = false;
      this.disagreeLoading = false;
    },
  },
};
</script>

<style scoped>

</style>

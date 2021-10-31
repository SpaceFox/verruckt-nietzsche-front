<template>
  <v-form
    ref="askForm"
    v-model="valid"
    onSubmit="return false;"
    @submit="askForMorale(situation)">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="situation"
              :rules="situationRules"
              label="Input a situation to Nietzsche to ponder:"
              required
            ></v-text-field>
          </v-col>
        </v-row>

      </v-container>
      <v-card-actions>
        <v-btn
          text
          @click="reset"
        >
          Clear
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="askForMorale(situation)"
          :disabled="!valid"
          :loading="loading"
          color="primary"
          depressed
        >
          Do morale philosophy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Ask',
  data: () => ({
    situation: '',
    situationRules: [
      (v) => !!v || 'Situation is required',
    ],
    valid: false,
  }),
  computed: {
    ...mapState(['loading']),
  },
  methods: {
    ...mapActions(['askForMorale']),
    reset() {
      this.$refs.askForm.reset();
    },
  },
};
</script>

<style scoped>

</style>

<template>
  <v-card>
    <v-img
      :src="require('../assets/logo.jpg')"
      height="200"
      max-width="200"
    />
    <v-card-title>Ask Nietzsche</v-card-title>
    <v-card-text>
      <div>Friedrich Nietzche worked on moral philosophy and about "good" and "evil" concepts.</div>
      <div>
        <strong>"Ask Nietzsche" is an experimental moral AI that tries to sort good from
          evil.</strong>
      </div>
      <div>It uses state-of-the-art AI technologies, as used in most AI-based start-up enterprises
        guarantee without any <code>if</code> statements and deep refinements to ensure excellent
        performances.
      </div>
      <div>Unfortunately, the 3rd of January 1889, Friedrich Nietzsche suffered a mental breakdown
        and goes beyond sanity (<em>verrückt</em> in German). Due to its madness, he was not always
        available to distinguishes good and evil…</div>
      <div>It may be possible some advices form "Ask Nietzsche" comes from the sad end of its life.
      You may report them with appropriate provided buttons.</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Presentation',
};
</script>

<style scoped>

</style>

<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-title>Vuetify</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text>Developer</v-btn>

      <v-btn class="mr-3" text>Help</v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn class="mr-4 ml-5" color="primary">
        <v-icon left icon="mdi-handshake-outline"></v-icon>

        <span>John Leider</span>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardCoreAppBar",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    notifications: [
      "Mike John Responded to your email",
      "You have 5 new tasks",
      "You're now friends with Andrew",
      "Another Notification",
      "Another one",
    ],
  }),
  computed: {},
  methods: {},
});
</script>
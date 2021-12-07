<template>
  <div>
    <div></div>
    <div>
      <v-form v-model="valid">
        <v-container>
          <h2>Log In</h2>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="submit"> submit </v-btn>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },

  methods: {
    ...mapActions("auth", ["login", "logout"]),

    async submit() {
      try {
        const user = { email: this.email, password: this.password };
        await this.login(user);
        this.message = "";

        this.$router.push({ path: "/" });
      } catch (err) {
        this.message = err.response.data.error;
      }
    },
  },

  created() {
    this.logout();
  },
};
</script>

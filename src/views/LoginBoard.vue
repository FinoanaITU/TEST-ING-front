<template>
  <v-app class='login-loginBoard'>
      <!-- <v-card
        class="mx-auto my-auto"
        width="500"
      >
        <v-card-title class="text-uppercase blue--text justify-center">
            <span class="font-weight-light">Compta</span>
            <span>KITI</span>
        </v-card-title>
        <v-card-text>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                login
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card> -->
    <div class="page-loginBoard">
    <div class="container-loginBoard">
        <div class="left-loginBoard">
        <div class="login-loginBoard">Login</div>
        <div class="eula-loginBoard">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
        </div>
        <div class="right-loginBoard">
        <!-- <svg viewBox="0 0 320 300">
            <defs>
            <linearGradient
                            inkscape:collect="always"
                            id="linearGradient"
                            x1="13"
                            y1="193.49992"
                            x2="307"
                            y2="193.49992"
                            gradientUnits="userSpaceOnUse">
                <stop
                    style="stop-color:#ff00ff;"
                    offset="0"
                    id="stop876" />
                <stop
                    style="stop-color:#ff0000;"
                    offset="1"
                    id="stop878" />
            </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
        </svg> -->
        <div class="form-loginBoard">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="white--text"
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                color="white"
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                color="white"
                ></v-text-field>

                <v-checkbox
                v-model="checkbox"
                label="remeber me"
                color="white"
                ></v-checkbox>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                login
                </v-btn>
            </v-form>
        </div>
        </div>
    </div>
    </div>
  </v-app>
</template>

<script>
export default {
    name : "loginBoard",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        // v => !!v || 'Name is required',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        // v => !!v || 'E-mail is required',
        // v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<style>
/* #app.login {
  background: url('../assets/leone-venter-VieM9BdZKFo-unsplash.jpg')
    no-repeat center center fixed;
  background-size: cover;
} */
/* @import url('https://rsms.me/inter/inter-ui.css');
::selection {
  background: #2D2F36;
} */
html, body {margin: 0; height: 100%; overflow: hidden}
.login-loginBoard::-webkit-selection {
  background: #2D2F36;
}
.login-loginBoard::-moz-selection {
  background: #2D2F36;
}
::-webkit-scrollbar {
    display: none;
}
/* body {
  background: white;
  font-family: 'Inter UI', sans-serif;
  margin: 0;
  padding: 20px;
} */
.page-loginBoard {
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  position: absolute;
  place-content: center;
  width: calc(100% - 40px);
}
@media (max-width: 767px) {
  .page-loginBoard {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
.container-loginBoard {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
@media (max-width: 767px) {
  .container-loginBoard {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left-loginBoard {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left-loginBoard {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login-loginBoard {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula-loginBoard {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right-loginBoard {
  background: #2fa4e9;
  box-shadow: 0px 0px 40px 16px rgba(0,0,0,0.22);
  color: #F1F1F2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right-loginBoard {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
.form-loginBoard {
  margin: 40px;
  position: absolute;
}
</style>
<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar style="background-color: #00c851; height: 8vh">
      <q-btn dense flat round icon="menu" @click="toggleDrawer" />

      <q-toolbar-title>MathRecon</q-toolbar-title>
      <q-btn dense flat round icon="search" @click="toggleDialog" />
      <q-btn dense flat round icon="dashboard" @click="trigger" />
      <q-btn dense flat round icon="more_vert" @click="show" />
    </q-toolbar>
  </q-header>
</template>
<script>
import { QSpinnerGears } from "quasar";
import { mapState } from "vuex";
export default {
  name: "toolbar",
  data() {
    return {
      left: false,
      chosen: undefined
    };
  },
  computed: {
    ...mapState("app", ["drawer", "loading", "dialog", "maximizedToggle"]),
    loading: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.$store.commit("app/setLoading", val);
      }
    },
    dialog: {
      get() {
        return this.$store.state.app.dialog;
      },
      set(val) {
        this.$store.commit("app/setdialog", val);
      }
    },
    maximizedToggle: {
      get() {
        return this.$store.state.app.maximizedToggle;
      },
      set(val) {
        this.$store.commit("app/setMaximizedToggle", val);
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("app/setDrawer", !this.$store.state.app.drawer);
    },
    toggleDialog() {
      this.$store.commit("app/setDialog", !this.$store.state.app.dialog);
    },
    trigger() {
      const bar = this.$refs.bar;

      bar.start();

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop();
        }
      }, Math.random() * 3000 + 1000);
    },
    showLoading() {
      /* This is for Codepen (using UMD) to work */
      const spinner =
        typeof QSpinnerGears !== "undefined"
          ? QSpinnerGears
          : Quasar.components.QSpinnerGears; // eslint-disable-line
      /* End of Codepen workaround */

      this.timer = setTimeout(() => {
        this.$q.loading.show({
          spinner,
          spinnerColor: "red",
          messageColor: "black",
          backgroundColor: "green-6",
          message: "working..."
        });
      }, 2000);
    },
    show(grid) {
      this.$q
        .bottomSheet({
          dark: false,
          message: "Manage Your Account",
          grid,
          actions: [
            {
              label: "Notes",
              icon: "mdi-book-open-variant",
              id: "notes",
              color: "positive"
            },
            {
              label: "Videos",
              icon: "mdi-library-video",
              id: "videos",
              color: "positive"
            },
            {
              label: "Practice Questions",
              icon: "mdi-account-question",
              id: "practice-questions",
              color: "positive"
            },
            {
              label: "Get Tutor",
              icon: "mdi-account-tie",
              id: "get-tutor",
              color: "positive"
            },
            {},
            {
              label: "Like us on facebook",
              icon: "mdi-facebook",
              color: "primary",
              id: "like-us-on-facebook"
            },
            {
              label: "Follow us on instagram",
              icon: "mdi-instagram",
              color: "primary",
              id: "follow-us-on-instagram"
            },
            {
              label: "Follow us on twitter",
              icon: "mdi-twitter",
              color: "primary",
              id: "follow-us-on-twitter"
            },
            {},
            {
              label: "Donate",
              icon: "mdi-gift",
              color: "red-6",
              id: "Donate"
            }
          ]
        })
        .onOk(action => {
          this.chosen = action;
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  }
};
</script>
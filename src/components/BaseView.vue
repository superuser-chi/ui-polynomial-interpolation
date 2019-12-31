<template>
  <q-page-container>
    <router-view>
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </router-view>
     <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" @click="toggleDialog"  close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section>
          {{ message }}
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page-container>
</template>

<script>
import { QSpinnerGears } from "quasar";
import { mapState } from "vuex";
export default {
  name: "baseView",
  data() {
    return {
      visible: true
    };
  },
    computed: {
    ...mapState("app", ["drawer", "loading", "dialog", "maximizedToggle"]),
      message: {
      get() {
        return this.$store.state.app.message;
      },
      set(val) {
        this.$store.commit("app/setMessage", val);
      }
    },
     dialog: {
      get() {
        return this.$store.state.app.dialog;
      },
      set(val) {
        this.$store.commit("app/setDialog", val);
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
  components: {
    QSpinnerGears
  },
  methods: {
    toggleDialog() {
      this.$store.commit("app/setDialog", !this.$store.state.app.dialog);
    },
  },
  metaInfo() {
    return {
      title: "LU Decomposition"
    };
  }
};
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
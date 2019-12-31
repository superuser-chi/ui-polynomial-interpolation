import Vue from "vue";

import "./styles/quasar.sass";
import "quasar/dist/quasar.ie.polyfills";
import iconSet from "quasar/icon-set/mdi-v4.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import {
  Quasar,
  BottomSheet,
  ClosePopup,
  Loading,
  QAjaxBar,
  QInnerLoading,
  QCard,
  QCardSection,
  QCardActions,
  QDialog,
  QStepper,
  QStep,
  QStepperNavigation,

} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    /* not needed if importStrategy is not 'manual' */
    QDialog
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
    ClosePopup
  },
  plugins: {
    BottomSheet,
    Loading,
    QAjaxBar,
    QCard,
    QCardSection,
    QCardActions,
    QInnerLoading,
    QStepper,
    QStep,
    QStepperNavigation
  },
  iconSet: iconSet
});

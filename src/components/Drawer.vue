<template>
  <q-drawer v-model="drawer" side="left" overlay bordered>
    <!-- drawer content -->
    <div class="q-pa-md" style="max-width: 350px">
      <q-list>
        <q-expansion-item
          expand-icon-toggle
          expand-separator
          icon="perm_identity"
          label="Account settings"
          caption="Mavuso Gift Ntokozo"
        >
          <q-card>
            <q-card-section>
              <q-btn
                outline
                rounded
                color="primary"
                @click.native="card = !card"
                label="Go to account settings"
              />
              <q-dialog v-model="card">
                <q-card>
                  <q-img src="https://avatars1.githubusercontent.com/u/52362276?s=460&v=4" />

                  <q-card-section>
                    <q-btn
                      fab
                      color="primary"
                      icon="mdi-pencil-box"
                      class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%);"
                    />

                    <div class="row no-wrap items-center">
                      <div class="col text-h6 ellipsis">Mavuso Gift Ntokozo</div>
                    </div>
                  </q-card-section>

                  <q-card-section>
                    <div class="q-pa-md">
                      <q-form class="q-gutter-md">
                        <q-input
                          label="Your name"
                          hint="Name and surname"
                          :dense="false"
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-account-outline" />
                          </template>
                          <template v-slot:append>
                            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                          </template>

                          <template v-slot:hint>Field hint</template>
                        </q-input>
                        <q-input
                          label="Your Email"
                          hint="contact email"
                          :dense="false"
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-email" />
                          </template>
                          <template v-slot:append>
                            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                          </template>

                          <template v-slot:hint>Field hint</template>
                        </q-input>
                        <q-input
                          label="Your phone number"
                          hint="contact phone number"
                          :dense="false"
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                        >
                          <template v-slot:prepend>
                            <q-icon name="mdi-cellphone" />
                          </template>
                          <template v-slot:append>
                            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                          </template>

                          <template v-slot:hint>Field hint</template>
                        </q-input>

                        <div>
                          <q-btn label="Submit" type="submit" color="primary" />
                          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                      </q-form>
                    </div>
                  </q-card-section>

                  <q-separator />
                </q-card>
              </q-dialog>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-icon-toggle
          expand-separator
          icon="mdi-comment-text-outline"
          label="Feedback"
          caption="Please inform of of your experience"
        >
          <q-card>
            <q-card-section>
              <q-btn outline round color="primary" icon="mdi-file-document-edit">
                <q-tooltip content-class="bg-accent">leave us a message</q-tooltip>
              </q-btn>
              <q-btn outline round color="primary" icon="mdi-facebook">
                <q-tooltip content-class="bg-accent">write on our wall</q-tooltip>
              </q-btn>
              <q-btn outline round color="primary" icon="mdi-twitter">
                <q-tooltip content-class="bg-accent">tweet about us</q-tooltip>
              </q-btn>
              <q-btn outline round color="primary" icon="mdi-instagram">
                <q-tooltip content-class="bg-accent">comment on our page</q-tooltip>
              </q-btn>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item expand-icon-toggle expand-separator icon="build" label="settings">
          <q-card>
            <q-card-section>
              <div class="q-pa-md">
                <q-list>
                  <q-item-label header>User Controls</q-item-label>

                  <q-item clickable v-ripple>
                    <q-item-section>
                      <q-item-label>Password</q-item-label>
                      <q-item-label caption>
                        Require password for purchase or use
                        password to restrict purchase
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator spaced />
                  <q-item-label header>General</q-item-label>

                  <q-item tag="label" v-ripple>
                    <q-item-section side top>
                      <q-checkbox v-model="check1" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>Notifications</q-item-label>
                      <q-item-label
                        caption
                      >Notify me about updates to apps or games that I downloaded</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item tag="label" v-ripple>
                    <q-item-section side top>
                      <q-checkbox v-model="check2" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>Sound</q-item-label>
                      <q-item-label caption>Auto-update apps at anytime. Data charges may apply</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item tag="label" v-ripple>
                    <q-item-section side top>
                      <q-checkbox v-model="check3" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>Auto-add widgets</q-item-label>
                      <q-item-label caption>Automatically add home screen widgets</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator spaced />
                  <q-item-label header>Notifications</q-item-label>

                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Update Notification</q-item-label>
                      <q-item-label caption>Allow update notification</q-item-label>
                    </q-item-section>
                    <q-item-section side top>
                      <q-toggle color="green" v-model="notif2" val="friend" />
                    </q-item-section>
                  </q-item>

                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Apps notification</q-item-label>
                      <q-item-label caption>Notify me about new apps</q-item-label>
                    </q-item-section>
                    <q-item-section side top>
                      <q-toggle color="red" v-model="notif3" val="picture" />
                    </q-item-section>
                  </q-item>

                  <q-separator spaced />
                  <q-item-label header>Other settings</q-item-label>

                  <q-item>
                    <q-item-section side>
                      <q-icon color="teal" name="volume_down" />
                    </q-item-section>
                    <q-item-section>
                      <q-slider v-model="volume" :min="0" :max="10" label color="teal" />
                    </q-item-section>
                    <q-item-section side>
                      <q-icon color="teal" name="volume_up" />
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section side>
                      <q-icon color="deep-orange" name="brightness_medium" />
                    </q-item-section>
                    <q-item-section>
                      <q-slider v-model="brightness" :min="0" :max="10" label color="deep-orange" />
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section side>
                      <q-icon color="primary" name="mic" />
                    </q-item-section>
                    <q-item-section>
                      <q-slider v-model="mic" :min="0" :max="50" label />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item
        v-for="link in links"
        :key="link.title"
        clickable
        tag="a"
        target="_blank"
        :href="link.to"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.title }}</q-item-label>
          <q-item-label caption>{{ link.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "drawer",

  data() {
    return {
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8,
      card: false,
      stars: 3,
      links: [
        {
          to: "/dashboard",
          icon: "code",
          title: "Dashboard",
          caption: "The dashboard"
        },
        {
          to: "/user-profile",
          icon: "code",
          caption: "User Profile",
          title: "Profile"
        },
        {
          to: "https://limits.surge.sh.surge.sh",
          icon: "school",
          title: "Limits",
          caption: "A calculus limits "
        },
        {
          to: "https://polynomialinterpolation.surge.sh",
          icon: "school",
          title: "Polynomial Interpolation",
          caption: "Learn different techniques of interpolation"
        },
        {
          to: "https://numericalintergration.surge.sh",
          icon: "school",
          title: "Numerical Integration",
          caption: "Learn numerical integration"
        }
      ]
    };
  },
  computed: {
    ...mapState("app", ["drawer", "clipped", "color"]),
    drawer: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.$store.commit("app/setDrawer", val);
      }
    }
  }
};
</script>
<style scoped>
.q-btn {
  margin: 0 0.5em;
}
</style>
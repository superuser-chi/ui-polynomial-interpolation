<template>
  <div class="fixed-center text-center">
    <p>
      <img :src="iconUrl" style="width:30vw;max-width:150px;" />
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn color="secondary" style="width:200px;" to="/" label="Go back" />
  </div>
</template>

<script>
export default {
  name: "Error404",
    computed: {
    iconUrl() {
      return require("@/assets/isolated-monochrome-black.svg");
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  }
};
</script>

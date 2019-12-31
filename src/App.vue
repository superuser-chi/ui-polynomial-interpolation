<template>
  <div class="q-pa-md">
    <base-layout />
  </div>
</template>

<script>
import baseLayout from "@/layouts/BaseLayout";
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";
export default {
  name: "LayoutDefault",

  components: {
    baseLayout
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  },
  mounted() {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: false },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: true }
      ]
    });
  }
};
</script>

<style lang="scss">
// SASS mixin duplicating rucksack's cool cool solution on creating responsive font sizes.
//
// The calculation is:
// min-size + (min-size - max-size) * ( (100vw - min-width) / ( max-width - min-width) )
//
@mixin font-responsive($fmin, $fdiff, $breakmin, $breakdiff) {
  font-size: calc(
    #{$fmin} + #{$fdiff} * ((100vw - #{$breakmin}) / #{$breakdiff})
  );
  @media (max-width: $breakmin) {
    font-size: $fmin;
  }
  @media (min-width: round($breakmin + $breakmax)) {
    font-size: round($fmin + $fdiff);
  }
}

$font-base-min: 14px;
$font-base-max: 6;
$breakmin: 420px;
$breakmax: 348;

// with variables
// In this example the font size will fluctuate between 14px - 20px between 420px and 768px
//
html {
  @include font-responsive(
    $font-base-min,
    $font-base-max,
    $breakmin,
    $breakmax
  );
}

// without variables
// In this example the font size will fluctuate between 30px - 36px between 420px and 768px
h1 {
  @include font-responsive(30px, 6, 420px, 348);
}
h2 {
  @include font-responsive(24px, 6, 420px, 348);
}

p {
  @include font-responsive(16px, 6, 420px, 348);
}
</style>

<template>
  <component
    :is="svgComponent"
    :class="iconClass"
    :style="iconStyle"
  ></component>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    iconClass: {
      type: String,
      default: "icon",
    },
    iconStyle: {
      type: String,
      default: "",
    },
  },

  computed: {
    svgComponent() {
      let { src } = this;

      if (src) return () => import(`./../assets/${src}.svg`);
      else return null;
    },
  },
};
</script>

<style lang="scss">
svg.icon {
  height: 100px;
  width: 100px;

  &.fill-green {
    fill: #2cb988;
  }
}
</style>

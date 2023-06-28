<template>
  <div class="GiphyCard">
    <img :src="gif.smallUrl" :alt="gif.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GiphyCard',
  props: {
    gif: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.GiphyCard {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
  }
}
</style>

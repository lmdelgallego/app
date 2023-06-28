<template>
  <div class="GiphyApp">
    <div class="GiphyApp__form">
      <label for="search">Search
      <input
        type="text"
        name="search"
        id="search"
        v-model="query"
        placeholder="Enter search term"
      />
      </label>
    </div>
    <div class="GiphyApp__list">
      <GiphyList :query="query" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GiphyList from '@/modules/giphy/ui/GiphyList.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    GiphyList,
  },
  setup() {
    const query = ref('Hello');

    return {
      query,
    };
  },
});
</script>

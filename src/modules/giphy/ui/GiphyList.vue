<template>
  <div class="giphyList">
    <h1>GiphyList</h1>
    <p>{{ query }}</p>
    <div class="giphyList__list">
      <div class="giphyList__list_item"
        v-for="(gif, index) in gifs" :key="index"
        :data-testId="`gifItem_${gif.id}`"
        @click="() => showModal(gif)"
        @keypress="() => showModal(gif)"
        >
        <GiphyCard :gif="gif" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import GiphyCard from './GiphyCard.vue';
import useGiphyList from './GiphyList.composable';
import { Giphy } from '../domain/giphy.type';

export default defineComponent({
  name: 'GiphyList',
  components: {
    GiphyCard,
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const {
      gifs,
      loadGifs,
    } = useGiphyList();

    loadGifs(props.query);

    const showModal = (gif: Giphy) => {
      console.log('ShowModal', { gif });
    };

    watch(() => props.query, (query) => {
      const delay = 500;
      let timer;
      clearTimeout(timer);
      timer = setTimeout(() => {
        loadGifs(query);
      }, delay);
    });

    return {
      gifs,
      showModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.giphyList{
  width: 100%;
  .giphyList__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .giphyList__list_item{
      width: 25%;
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>

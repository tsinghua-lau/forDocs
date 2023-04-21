<template>
  <div class="link-content">
    <a
      class="my-link"
      rel="noreferrer"
      target="_blank"
      v-for="item in links"
      :key="item.title"
      :href="item.link"
      :aria-controls="item.info || item.title"
    >
      <span class="img">
        <img :src="item.icon || '/public/empty.png'" :alt="item.name" />
      </span>
      <span class="info">
        <span class="title">{{ item.title }}</span>
        <div class="desc" v-if="item.info">{{ item.info }}</div>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type ILink = {
  title: string
  link: string
  info?: string
  icon?: string
}

const props = defineProps<{
  links?: ILink[]
}>()
</script>

<style scoped lang="scss">
.link-content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .my-link {
    position: relative;
    z-index: 12;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    padding: 10px 12px;
    margin-top: 12px;

    &::before,
    &::after {
      visibility: hidden;
      opacity: 0;
      transform: translate3d(0, 0, 0);
      transition: all 0.3s ease 0.2s;
      box-sizing: border-box;
    }
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: #30363d transparent transparent transparent;
      left: calc(50% - #{8px});
      top: 0px;
      transform: translateX(0%) translateY(-2px);
    }

    &::after {
      font-size: 12px;
      color: #f4f4f5;
      content: attr(aria-controls);
      position: absolute;
      padding: 6px 10px;
      z-index: -1;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%) translateY(-2px);
      background: #30363d;
      border-radius: 4px;
      width: auto;
      line-height: 1.5;
    }

    &:hover::before,
    &:hover::after {
      visibility: visible;
      opacity: 1;
    }

    &:nth-child(2n - 1) {
      margin-right: 0px;
    }

    &:hover {
      opacity: 0.7;
      box-shadow: 0px 0px 10px #ccc;
    }

    .img {
      display: flex;
      width: 48px;
      height: 36px;
      align-items: center;
      justify-content: center;

      img {
        max-width: 36px;
        height: 36px;
        // object-fit: cover;
        margin-right: 12px;
      }
    }

    .info {
      display: flex;
      flex: 1;
      width: 0;
      flex-direction: column;
      justify-content: center;

      .title {
        line-height: 22px;
      }

      .desc {
        line-height: 18px;
        color: #999;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}

@media (min-width: 640px) {
  .link-content {
    .my-link {
      width: calc(50% - 6px);

      &:nth-child(2n - 1) {
        margin-right: 12px;
      }

      &:last-child {
        margin-right: 0px;
      }
    }
  }
}

.dark {
  .my-link {
    background-color: #282c34;

    &:hover {
      opacity: 0.7;
      box-shadow: 0px 0px 10px #1a1a1a;
    }
  }
}
</style>

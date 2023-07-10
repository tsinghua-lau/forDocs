<script setup lang="ts">
interface navItem {
  id: string | number;
  text: string;
  desc?: string;
  link: string;
  icon?: string;
}

defineProps<{
  navData: navItem[];
}>();
</script>

<template>
  <div class="box">
    <section class="section-c" v-for="navItem in navData" :key="navItem.id">
      <a :href="navItem.link" rel="noreferrer" target="_blank" class="group">
        <section>
          <span class="text">
            <span
              class="icon"
              :style="{
                backgroundImage: `url(${navItem.icon})`,
                backgroundRepeat: 'no-repeat',
              }"
            ></span>
            {{ navItem.text }}
          </span>
          <span class="desc">
            {{ navItem.desc ?? navItem.text }}
          </span>
        </section>
      </a>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .section-c {
    border: 0.5px solid rgba(82, 82, 89, 0.68);
    border-radius: 10px;
    padding: 25px;
    width: 48%;
    transition: all 0.3s ease-in-out;
    .icon {
      display: inline-block;
      vertical-align: sub;
      background-size: contain;
      width: 20px;
      height: 20px;
    }
    &:hover{
     transform:translateY(-5px);
      .text {
        color: var(--vp-c-primary);
      }
    }
  }
  .text {
    display: block;
    color: var(--vp-c-text-1);
  }
  .desc {
    display: block;
    color: var(--vp-c-text-2);
  }
}
</style>

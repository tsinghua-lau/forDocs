<script setup>
  import {tutorialUi,tutorialVue,conMaterial,CSS,Toll,Ai} from './index.ts'
  import NavCard from '../public/components/NavCard.vue'
</script>

## Ai相关
<ClientOnly>
<NavCard :navData=Ai />
</ClientOnly> 

## CSS相关

<ClientOnly>
<NavCard :navData=CSS />
</ClientOnly> 


## Ui组件库

<ClientOnly>
<NavCard :navData=tutorialUi />
</ClientOnly>

## 构建工具

<ClientOnly>
<NavCard :navData=tutorialVue />
</ClientOnly>

## 图标素材

<ClientOnly>
<NavCard :navData=conMaterial />
</ClientOnly>

## 小工具集合

<ClientOnly>
<NavCard :navData=Toll />
</ClientOnly>

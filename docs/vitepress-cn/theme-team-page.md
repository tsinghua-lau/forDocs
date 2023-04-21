---
title: VitePress`Team Page`(Team Page) - VitePress中文文档
description: VitePress中文文档之团队页面(Team Page)
tags: 
  - VitePress中文文档,VitePress团队页面,VitePress Team Page
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress团队页面,VitePress Team Page
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://github.com/kiaking.png',
    name: 'Kia King Ishii',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' }
    ]
  }
]
</script>

# Team Page

如果你想介绍你的团队，你可以使用`Team components`来构建`Team Page`。有两种使用这些组件的方法。一种是将其嵌入`Doc Page`，另一种是创建一个完整的`Team Page`。

## 在页面中显示团队成员

你可以使用从`vitepress/theme`暴露出来的`<VPTeamMembers>`组件，在任何页面上显示团队成员的名单。

```html
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>
# Our Team
Say hello to our awesome team.
<VPTeamMembers size="small" :members="members" />
```

上述内容将显示一个团队成员的卡片式元素。它应该显示类似于下面的内容。

<VPTeamMembers size="small" :members="members" />

`<VPTeamMembers>`组件有两种不同的`size`，`small`和`medium`。虽然它取决于你的偏好，但通常`small`在文档页中使用时应该更合适。此外，你可以为每个成员添加更多的属性，如添加 "description "或 "sponsor "按钮。在[`<VPTeamMembers>`](#VPTeamMembers)中了解更多信息。

在文档页中嵌入团队成员对于小规模的团队来说是很好的，因为有专门的完整的团队页面可能太多，或者介绍部分成员作为文档背景的参考。

如果你有大量的成员，或者只是想有更多的空间来显示团队成员，考虑创建一个完整的团队页面。

## 创建一个完整的 Team Page

你也可以创建一个完整的`Team Page`，而不是在`Doc Page`上添加团队成员，这与你创建[自定义首页](/vitepress-cn/theme-home-page)的方式相似。

要创建一个`Team Page`，首先，创建一个新的`.md`文件。文件名并不重要，但这里让我们称之为`team.md`。在这个文件中，设置`frontmatter`选项`layout: page`，然后你可以使用`Team Page`组件组成你的页面结构。

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
```

当创建一个完整的`Team Page`时，记得用`<VPTeamPage>`组件来包裹所有的组件。这个组件将确保所有嵌套的团队相关组件得到适当的布局结构，如间距。

`<VPPageTitle>`组件添加了页面标题部分。标题是`<h1>`标题。使用`#title`和`#lead`插槽来记录关于你的团队。

`<VPMembers>`的工作原理与在文档页中使用时相同。它将显示成员的列表。

### 团队成员的分组

你可以在团队页面上添加分组。例如，你可能有不同类型的团队成员，如核心团队成员和社区合作伙伴。你可以将这些成员划分为几个部分，以便更好地解释每个小组的角色。

要做到这一点，在我们之前创建的`team.md`文件中添加`<VPTeamPageSection>`组件。

```html
---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
const coreMembers = [...]
const partners = [...]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```

`<VPTeamPageSection>`组件可以有`#title`和`#lead`插槽，类似于`VPTeamPageTitle`组件，还有`#members`插槽用于显示团队成员。

记住要在`#members`插槽中放入`<VPTeamMembers>`组件。

## `<VPTeamMembers>`

`<VPTeamMembers>`组件显示给定的成员列表。

```html
<VPTeamMembers
  size="medium"
  :members="[
    { avatar: '...', name: '...' },
    { avatar: '...', name: '...' },
    ...
  ]"
/>
```

```ts
interface Props {
  // Size of each members. Defaults to `medium`.
  size?: 'small' | 'meidum'
  // List of members to display.
  members: TeamMember[]
}
interface TeamMember {
  // Avatar image for the member.
  avatar: string
  // Name of the member.
  name: string
  // Title to be shown below member's name.
  // e.g. Developer, Software Engineer, etc.
  title?: string
  // Organization that the member belongs.
  org?: string
  // URL for the organization.
  orgLink?: string
  // Description for the member.
  desc?: string
  // Social links. e.g. GitHub, Twitter, etc. You may pass in
  // the Social Links object here.
  // See: https://vitepress.vuejs.org/config/theme-configs.html#sociallinks
  links?: SocialLink[]
  // URL for the sponsor page for the member.
  sponsor?: string
}
```

## `<VPTeamPage>`

创建一个完整的`Team Page`时的根组件。它只接受一个插槽。它将为所有传入的团队相关组件提供样式。

## `<VPTeamPageTitle>`

添加页面的 "标题 "部分。最好在`<VPTeamPage>`的最开始使用。它接受`#title`和`#lead`插槽。

```html
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
```

## `<VPTeamPageSection>`

在`Team Page`中创建一个分组。它接受`#title`, `#lead`, and `#members`插槽。你可以在`<VPTeamPage>`中添加任意多的分组。

```html
<VPTeamPage>
  ...
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>Lorem ipsum...</template>
    <template #members>
      <VPTeamMembers :members="data" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
```
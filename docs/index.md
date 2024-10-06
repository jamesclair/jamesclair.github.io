---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: home

hero:
  name: "Tech Docs and Blog"
  tagline: "Curiosity is the spark that ignites the flames of change."
features:
  - title: Building a Scalable, Reliable, and Cost-Effective Real-Time Event Processing Pipeline
    details: In this post, I'll break down the components of a simplified real-time event processing pipeline and how they work together to deliver the reliability and scalability businesses need.
    link: "/EventProcessingServiceArchitecure"
  - title: A Deep Dive Into OL* Databases and Data Mesh
    details: In this article, we’ll explore what OLAP and OLTP databases are, how they differ, and reflect on my own experience working with these technologies.
    link: "/OLAP_OLEP_OLTP_And_DataMeshes"
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>


<br><br>
<h1>All Blog Posts</h1>
<ul>
  <template v-for="post in posts">
    <li v-if="post.frontmatter.title != 'home'"><a :href="'/blog' + post.url">{{ post.frontmatter.title }}</a></li>
  </template>
</ul>

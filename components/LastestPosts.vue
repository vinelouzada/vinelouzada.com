<template>
  <section class="latest-posts-section">
    <div class="container">
      <div class="section-header reveal">
        <div>
          <span class="section-tag">Blog</span>
          <h2>Últimos <em>Posts</em></h2>
          <p class="section-subtitle">
            Artigos sobre programação, arquitetura de software e tecnologias.
          </p>
        </div>
        <a href="/posts" class="see-all">
          Ver todos →
        </a>
      </div>
      <ul class="posts-grid reveal">
        <li v-for="post in posts" :key="post.id">
          <CardPost
            :slug="post.slug"
            :title="post.title"
            :date="post.date"
            :abstract="post.abstract"
            :banner="post.banner"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import CardPost from './CardPost.vue';

const posts = await queryContent("posts").sort({'id': -1}).limit(3).find();
</script>

<style scoped>
.latest-posts-section {
  width: 100%;
  padding: 100px 0;
  background: var(--bg-primary);
}

h2 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.see-all {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s;
  white-space: nowrap;
}

.see-all:hover {
  color: var(--accent-secondary);
}

.posts-grid {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 750px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .posts-grid {
    justify-content: center;
  }
}
</style>

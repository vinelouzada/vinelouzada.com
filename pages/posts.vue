<template>
  <main>
    <section class="posts-hero">
      <div class="posts-hero-bg"></div>
      <div class="dots-bg"></div>
      <div class="posts-hero-content">
        <span class="section-tag">Blog</span>
        <h1>Posts</h1>
        <p>Artigos sobre programação, arquitetura de software e tecnologias.</p>
      </div>
    </section>
    <section class="posts-list-section">
      <div class="container">
        <ul class="posts-grid">
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
  </main>
</template>

<script setup>
import CardPost from '~/components/CardPost.vue';

const posts = await queryContent('posts').sort({'id': -1}).find();

useHead({
    title: `Posts • vinelouzada`
})
</script>

<style scoped>
.posts-hero {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px 80px;
  overflow: hidden;
}

.posts-hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 40%, #1a1145 0%, var(--bg-primary) 100%);
}

.dots-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(139, 92, 246, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}

.posts-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
}

.posts-hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 12px 0 16px;
  background: linear-gradient(135deg, var(--text-primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.posts-hero-content p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.posts-list-section {
  width: 100%;
  padding: 60px 0 100px;
}

.posts-grid {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 750px) {
  .posts-grid {
    justify-content: center;
  }
}
</style>

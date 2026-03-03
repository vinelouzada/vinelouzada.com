<template>
  <main>
    <section class="post-hero">
      <div class="post-hero-bg"></div>
      <div class="post-hero-content">
        <span class="section-tag">Artigo</span>
        <h1>{{ post.title }}</h1>
        <p class="post-meta">{{ formatDate(post.date) }}</p>
      </div>
    </section>
    <section class="post-content-section">
      <div class="post-banner" v-if="post.banner">
        <img :src="`/assets/img/${post.banner}`" :alt="post.title">
      </div>
      <article class="post-article">
        <ContentRendererMarkdown :value="post" />
      </article>
    </section>
  </main>
</template>

<script setup>
import moment from 'moment';

const route = useRoute()
const post = await queryContent('posts').where({'slug': { $eq: route.params.slug }}).findOne();

const formatDate = (date) => {
  moment.locale('pt-br');
  return moment(date).format("LL");
};

useHead({
    title: `${post.title} • vinelouzada`
})

useSeoMeta({
  title: `${post.title}`,
  ogTitle: `${post.title}`,
  description: `${post.description}`,
  ogDescription: `${post.description}`,
  ogImage: `/assets/img/${post.banner}`
})
</script>

<style>
.post-hero {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 24px 60px;
  overflow: hidden;
}

.post-hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 50% at 50% 40%, #1a1145 0%, var(--bg-primary) 100%);
}

.post-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
}

.post-hero-content h1 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 12px 0 16px;
  line-height: 1.2;
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-muted);
}

.post-content-section {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px 100px;
}

.post-banner {
  width: 100%;
  height: 300px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 40px;
}

.post-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-article {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
}

.post-article p {
  margin-bottom: 1.2em;
  color: var(--text-secondary);
}

.post-article h2,
.post-article h3,
.post-article h4 {
  color: var(--text-primary);
  margin-top: 2em;
  margin-bottom: 0.8em;
}

.post-article h2 {
  font-size: 1.6rem;
}

.post-article h3 {
  font-size: 1.3rem;
}

.post-article a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.post-article a:hover {
  color: var(--accent-secondary);
}

.post-article strong {
  color: var(--text-primary);
  font-weight: 600;
}

.post-article code {
  font-family: var(--font-mono);
  font-size: 0.88em;
  background: rgba(139, 92, 246, 0.1);
  color: var(--accent);
  padding: 2px 8px;
  border-radius: 4px;
}

.post-article pre {
  background: #0d1117;
  padding: 20px;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid var(--border);
}

.post-article pre code {
  background: none;
  padding: 0;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.post-article blockquote {
  border-left: 3px solid var(--accent);
  padding: 16px 20px;
  margin: 24px 0;
  background: var(--bg-card);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
  color: var(--text-secondary);
}

.post-article blockquote p {
  margin: 0;
}

.post-article ul,
.post-article ol {
  padding-left: 1.5em;
  margin-bottom: 1.2em;
}

.post-article li {
  margin-bottom: 0.5em;
}

.post-article img {
  max-width: 100%;
  border-radius: var(--radius-sm);
  margin: 16px 0;
}

@media (max-width: 750px) {
  .post-content-section {
    padding: 0 16px 60px;
  }

  .post-banner {
    height: 200px;
  }
}
</style>

<template>
  <a :href="'/post/' + slug" class="card-link">
    <section class="card-box">
      <div class="card-image">
        <img :src="`/assets/img/${banner}`" alt="Imagem de capa">
      </div>
      <div class="card-body">
        <p class="date-article">{{ formatDate(date) }}</p>
        <h3 class="title-article">{{ title }}</h3>
        <p class="about-article">{{ abstract }}</p>
      </div>
    </section>
  </a>
</template>

<script>
import moment from 'moment';

export default {
    name: 'CardPost',
    props: {
        banner: String,
        title: String,
        date: String,
        abstract: String,
        slug: String
    },
    methods: {
        formatDate(date){
            moment.locale('pt-br');
            return moment(date).format("LL");
        }
    }
}
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-box {
  display: flex;
  flex-direction: column;
  width: 300px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card-box:hover {
  transform: translateY(-6px);
  border-color: var(--border-accent);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.1);
}

.card-image {
  overflow: hidden;
  height: 180px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-box:hover .card-image img {
  transform: scale(1.05);
}

.card-body {
  padding: 20px;
}

.title-article {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 8px;
}

.about-article {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.date-article {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}
</style>

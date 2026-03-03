<template>
    <Header />
      <NuxtPage />
    <Footer />
</template>

<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


useSeoMeta({
  title: 'vinelouzada',
  ogTitle: 'vinelouzada',
  description: 'Aprenda sobre programação e tecnologias relacionadas.',
  ogDescription: 'Aprenda sobre programação e tecnologias relacionadas.',
  ogImage: '/assets/img/banner.jpg/'
});


</script>

<style>
@import url("public/assets/css/reset.css");

:root {
  --bg-primary: #0B0D17;
  --bg-secondary: #111827;
  --bg-tertiary: #0F1729;
  --bg-card: rgba(255, 255, 255, 0.04);
  --bg-card-hover: rgba(255, 255, 255, 0.08);

  --accent: #8B5CF6;
  --accent-secondary: #06B6D4;
  --accent-glow: rgba(139, 92, 246, 0.3);

  --text-primary: #E2E8F0;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;

  --border: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(139, 92, 246, 0.3);

  --font-body: 'Inter', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
  margin: 0;
  padding: 0;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 65%;
  max-width: 1000px;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--text-primary);
  line-height: 1.1;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
  margin-top: 8px;
  font-size: 0.95rem;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.revealed {
  opacity: 1;
  transform: none;
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-latest-articles{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: var(--accent-secondary);
}

::selection {
  background: var(--accent);
  color: white;
}

@media (max-width: 750px) {
  .content {
    width: 90%;
  }
}
</style>

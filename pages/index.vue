<template>
  <main>
    <Banner />

    <LastestPosts />

    <ExperienceTimeline />

    <section class="projects-section">
      <div class="projects-container">
        <div class="reveal">
          <span class="section-tag">Portfólio</span>
          <h2>Projetos</h2>
          <p class="section-subtitle">
            Alguns projetos que desenvolvi ao longo da minha trajetória.
          </p>
        </div>
        <div class="projects-grid reveal">
          <CardProject
            :title="'Removedor de ruídos periódicos em imagens'"
            :description="'Aplicação que utiliza a Transformada de Fourier e Filtro Rejeita Notch Butterworth para remover ruídos periódicos de imagens.'"
            :url="'https://github.com/vinelouzada/filtro-rejeita-faixa-butterworth/blob/main/Trabalho_Pr%C3%A1tico_PDS.ipynb'"
            :image="'/assets/img/seiya.png'"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Banner from '~/components/Banner.vue';
import LastestPosts from '~/components/LastestPosts.vue';
import ExperienceTimeline from '~/components/ExperienceTimeline.vue';
import CardProject from '~/components/CardProject.vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<style>
.projects-section {
  width: 100%;
  padding: 100px 24px;
  background: var(--bg-tertiary);
}

.projects-container {
  max-width: 1000px;
  margin: 0 auto;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 40px;
}

.projects-section h2 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>

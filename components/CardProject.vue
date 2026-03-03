<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="image" :alt="title">
    </div>
    <div class="project-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a class="project-link" :href="url" target="_blank">
        Confira o projeto →
      </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardProject',
    props: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        url: { type: String, required: true },
        image: { type: String, required: true }
    }
}
</script>

<style scoped>
.project-card {
  display: flex;
  gap: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  max-width: 700px;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
  box-shadow: 0 12px 40px rgba(139, 92, 246, 0.08);
}

.project-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.project-image img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius-sm);
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-body h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.project-body p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.project-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent);
  text-decoration: none;
  padding: 10px 20px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 6px;
  transition: all 0.3s;
  width: fit-content;
}

.project-link:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

@media (max-width: 600px) {
  .project-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .project-body {
    align-items: center;
  }

  .project-image img {
    width: 120px;
    height: 120px;
  }
}
</style>

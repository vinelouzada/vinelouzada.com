<template>
  <section id="experiencia" class="experience-section">
    <div class="container">
      <div class="reveal">
        <span class="section-tag">Trajetória</span>
        <h2>Experiência <em>Profissional</em></h2>
        <p class="section-subtitle">
          Mais de 5 anos desenvolvendo software, criando conteúdo educacional e construindo soluções escaláveis.
        </p>
      </div>

      <div class="timeline reveal">
        <div
          v-for="(item, index) in experiences"
          :key="index"
          class="tl-item"
        >
          <div class="tl-marker">
            <div class="tl-dot" :class="{ active: item.current }"></div>
            <div class="tl-line" v-if="index < experiences.length - 1"></div>
          </div>
          <div class="tl-content">
            <div class="tl-header">
              <div>
                <h3>{{ item.role }}</h3>
                <span class="tl-company">{{ item.company }}</span>
              </div>
              <span class="tl-period">{{ item.period }}</span>
            </div>
            <p class="tl-description">{{ item.description }}</p>
            <div class="tl-techs" v-if="item.techs.length">
              <span v-for="tech in item.techs" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="education-section reveal">
        <span class="section-tag">Formação</span>
        <h2>Educação</h2>
        <div class="education-grid">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="edu-card"
          >
            <div class="edu-degree">{{ edu.degree }}</div>
            <h3>{{ edu.field }}</h3>
            <span class="edu-institution">{{ edu.institution }}</span>
            <span class="edu-period">{{ edu.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Software Engineer',
    company: 'Cayena',
    period: 'Nov 2025 — Presente',
    current: true,
    description: 'Desenvolvimento e manutenção de soluções de software para a plataforma',
    techs: ['Java', 'Spring Boot', 'AWS', 'Microserviços']
  },
  {
    role: 'Desenvolvedor Back-end Java',
    company: 'Alura',
    period: 'Mai 2024 — Nov 2025',
    current: false,
    description: 'Responsável pelo desenvolvimento e manutenção da Alura Start, plataforma educacional com milhões de usuários. APIs, integrações AWS (SQS, S3, SNS, Lambda), testes automatizados e code reviews.',
    techs: ['Java', 'Spring Boot', 'AWS', 'JUnit', 'Mockito', 'Jenkins', 'Datadog']
  },
  {
    role: 'Instrutor Back-end Java e PHP',
    company: 'Alura',
    period: 'Ago 2023 — Mai 2024',
    current: false,
    description: 'Produção de cursos, artigos e atividades para a plataforma cobrindo Java e PHP. Condução de grupos de estudo e consultoria no fórum de dúvidas.',
    techs: ['Java', 'PHP', 'Laravel', 'Produção de conteúdo']
  },
  {
    role: 'Estagiário Back-end PHP',
    company: 'Alura',
    period: 'Abr 2022 — Ago 2023',
    current: false,
    description: 'Gravação de cursos, consultoria ao fórum, produção de artigos sobre tecnologia, condução de grupos de estudo de PHP e participação em cerimônias SCRUM.',
    techs: ['PHP', 'Laravel', 'Symfony', 'PHPUnit']
  },
  {
    role: 'Desenvolvedor PHP Full Stack',
    company: 'UFPA',
    period: 'Nov 2020 — Jun 2023',
    current: false,
    description: 'Desenvolvimento de plataforma para Agricultura Familiar das regiões de Belém, Breu Branco, Cametá e Tucuruí. Implementação com arquitetura MVC, padrões Repository, DTO e deploy automatizado.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'MVC', 'GitHub Actions']
  }
];

const education = [
  {
    degree: 'Mestrado',
    field: 'Computação Aplicada',
    institution: 'Universidade Federal do Pará',
    period: '2025 — 2027'
  },
  {
    degree: 'Pós-graduação',
    field: 'Software Architecture',
    institution: 'FIAP',
    period: '2025 — 2026'
  },
  {
    degree: 'Bacharelado',
    field: 'Engenharia de Computação',
    institution: 'Universidade Federal do Pará',
    period: '2018 — 2023'
  }
];
</script>

<style scoped>
.experience-section {
  width: 100%;
  padding: 100px 0;
  background: var(--bg-secondary);
}

h2 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.timeline {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
}

.tl-item {
  display: flex;
  gap: 24px;
}

.tl-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20px;
}

.tl-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--text-muted);
  flex-shrink: 0;
  margin-top: 4px;
  transition: all 0.3s;
}

.tl-dot.active {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
}

.tl-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, var(--border-accent), var(--border));
  min-height: 20px;
}

.tl-content {
  padding-bottom: 40px;
  flex: 1;
}

.tl-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
}

.tl-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.tl-company {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent);
}

.tl-period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
}

.tl-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 14px;
}

.tl-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-secondary);
  background: rgba(6, 182, 212, 0.08);
  border: 1px solid rgba(6, 182, 212, 0.2);
  padding: 4px 12px;
  border-radius: 4px;
  letter-spacing: 0.3px;
}

/* Education */
.education-section {
  margin-top: 80px;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.edu-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 28px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.edu-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-accent);
}

.edu-degree {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.edu-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.edu-institution {
  display: block;
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

@media (max-width: 750px) {
  .tl-header {
    flex-direction: column;
    gap: 4px;
  }

  .tl-item {
    gap: 16px;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>

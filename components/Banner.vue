<template>
  <section class="hero">
    <div class="hero-bg-gradient"></div>
    <div class="dots-bg"></div>
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="hero-content">
      <div class="tag">Software Engineer</div>
      <h1>
        Olá, eu sou o<br>
        <em>Vinícius</em> Louzada Valente
      </h1>
      <p class="hero-sub">
        Engenheiro de Computação, Desenvolvedor Back-end e Designer.<br>
        Escrevendo sobre código, arquitetura e tecnologia.
      </p>
      <div class="hero-stats">
        <div class="stat">
          <strong>5+</strong>
          <span>anos de experiência</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <strong>Java</strong>
          <span>Spring Boot · AWS</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <strong>2x</strong>
          <span>AWS Certified</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 40%, #1a1145 0%, #0B0D17 100%);
}

.dots-bg {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--accent), transparent 70%);
  right: -100px;
  top: 20%;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--accent-secondary), transparent 70%);
  left: -80px;
  bottom: 15%;
  animation: float 10s ease-in-out infinite reverse;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  text-align: center;
}

.tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.25);
  padding: 8px 20px;
  border-radius: 4px;
  margin-bottom: 32px;
  animation: fadeDown 0.8s ease both;
}

.hero h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.05;
  margin-bottom: 20px;
  animation: fadeDown 0.8s 0.15s ease both;
}

.hero h1 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 300;
  margin-bottom: 48px;
  line-height: 1.7;
  animation: fadeDown 0.8s 0.3s ease both;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 20px 32px;
  animation: fadeDown 0.8s 0.45s ease both;
}

.stat {
  text-align: center;
}

.stat strong {
  display: block;
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
}

.stat span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--border);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@media (max-width: 750px) {
  .hero-content {
    width: 90%;
  }
  .hero-stats {
    flex-direction: column;
    gap: 16px;
    padding: 20px 24px;
  }
  .stat-divider {
    width: 40px;
    height: 1px;
  }
}
</style>

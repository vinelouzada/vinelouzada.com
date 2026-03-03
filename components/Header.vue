<template>
    <header :class="{ scrolled: isScrolled }">
        <div class="container-header">
            <div class="logo"><a href="/">vinelouzada</a></div>
            <nav class="nav" :class="{ active: menuOpen }">
                <ul class="nav-list">
                    <li><a href="/">Início</a></li>
                    <li><a href="/posts">Posts</a></li>
                    <li><a href="/#experiencia">Experiência</a></li>
                    <li class="social-links">
                        <a href="https://github.com/vinelouzada" target="_blank" aria-label="GitHub"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                        <a href="https://www.behance.net/vinelouzada" target="_blank" aria-label="Behance"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M8.228 15.01h-2.228v-2.01h2.261c1.878 0 2.003 2.01-.033 2.01zm6.758-2.677h3.018c-.117-1.715-2.73-1.977-3.018 0zm-6.804-3.333h-2.182v2h2.389c1.673 0 1.937-2-.207-2zm15.818-4v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-10 3h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.528-2.95-3.583-2.95-2.094 0-3.352 1.34-3.352 3.947 0 2.631 1.367 3.783 3.416 3.783s3.106-1.135 3.4-2h-2.111c-.736.855-2.893.521-2.767-1.353h5.06c.01-.634-.012-1.089-.063-1.427z"/></svg></a>
                        <a href="https://www.linkedin.com/in/vinelouzada/" target="_blank" aria-label="LinkedIn"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    </li>
                </ul>
            </nav>
            <button class="hamburger" @click="toggleMenu" :class="{ active: menuOpen }"></button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 20px 24px;
  transition: all 0.4s ease;
  font-family: var(--font-mono);
}

header.scrolled {
  padding: 12px 24px;
  background: rgba(11, 13, 23, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}

.logo a {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.logo a:hover {
  color: var(--accent);
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
}

.nav-list a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  transition: color 0.3s;
}

.nav-list a:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 12px;
  border-left: 1px solid var(--border);
}

.social-links a {
  color: var(--text-muted);
}

.social-links a:hover {
  color: var(--accent);
}

.hamburger {
  display: none;
  border: none;
  background: none;
  border-top: 2px solid var(--text-primary);
  cursor: pointer;
  width: 28px;
  padding: 0;
  z-index: 101;
}

.hamburger::after,
.hamburger::before {
  content: "";
  display: block;
  height: 2px;
  background: var(--text-primary);
  margin-top: 6px;
  transition: 0.3s;
}

@media (max-width: 750px) {
  .hamburger {
    display: block;
  }

  .nav-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(11, 13, 23, 0.97);
    backdrop-filter: blur(20px);
    clip-path: circle(100px at 90% -15%);
    transition: 1s ease-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    pointer-events: none;
  }

  .nav-list a {
    font-size: 1.2rem;
    opacity: 0;
  }

  .social-links {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid var(--border);
    padding-top: 24px;
    gap: 24px;
  }

  .social-links a svg {
    width: 32px;
    height: 32px;
  }

  .nav-list li:nth-child(1) a { transition: 0.5s 0.2s; }
  .nav-list li:nth-child(2) a { transition: 0.5s 0.4s; }
  .nav-list li:nth-child(3) a { transition: 0.5s 0.6s; }
  .nav-list li:nth-child(4) a { transition: 0.6s 0.8s; }

  .nav.active .nav-list {
    clip-path: circle(1500px at 90% -15%);
    pointer-events: all;
  }

  .nav.active .nav-list a {
    opacity: 1;
  }

  .hamburger.active {
    border-top-color: transparent;
  }

  .hamburger.active::before {
    transform: rotate(135deg);
  }

  .hamburger.active::after {
    transform: rotate(-135deg);
    top: -8px;
    position: relative;
  }
}
</style>

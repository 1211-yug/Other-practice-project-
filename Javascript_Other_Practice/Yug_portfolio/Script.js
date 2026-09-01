
// Preloader
window.addEventListener('load', () => setTimeout(() => document.getElementById('preloader').classList.add('hide'), 600));

// Theme
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'light') { document.documentElement.classList.add('light'); themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; }
themeToggle.onclick = () => {
  document.documentElement.classList.toggle('light');
  const isLight = document.documentElement.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
};

// Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.onclick = () => navLinks.classList.toggle('open');
document.querySelectorAll('.nav-links a').forEach(a => a.onclick = () => navLinks.classList.remove('open'));

// Header scroll + active
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 18);
  backToTop.classList.toggle('show', scrollY > 600);
  let cur = ''; document.querySelectorAll('section').forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});
backToTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

// Typing - ONLY 2 words as requested
const words = ["Full Stack Developer", "Freelancer Available"];
let wi = 0, ci = 0, del = false;
const typingEl = document.getElementById('typing');
function typeLoop() {
  const w = words[wi];
  if (!del) { typingEl.textContent = w.slice(0, ci + 1); ci++; if (ci === w.length) { del = true; setTimeout(typeLoop, 1500); return; } }
  else { typingEl.textContent = w.slice(0, ci - 1); ci--; if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
  setTimeout(typeLoop, del ? 50 : 95);
}
typeLoop();

// Reveal + skills + counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.querySelectorAll('.skill').forEach(s => {
        const p = s.dataset.p; s.querySelector('.fill').style.width = p + '%';
      });
      e.target.querySelectorAll('.counter').forEach(c => {
        if (c.dataset.done) return; c.dataset.done = 1;
        const target = +c.dataset.target; let cur = 0; const step = Math.ceil(target / 60);
        const int = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(int); } c.textContent = cur + (target > 20 ? '+' : ''); }, 20);
      });
    }
  }, { threshold: 0.15 });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal,.skill-cat,.about-text,.cinfo,.stats').forEach(el => observer.observe(el));

// Tilt
document.querySelectorAll('.pcard,.avatar-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    card.style.transform = `perspective(800px) rotateY(${x / 18}deg) rotateX(${-y / 18}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});

// Particles background - mast animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
resize(); window.addEventListener('resize', resize);
for (let i = 0; i < 70; i++) { particles.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 2 + 0.5, dx: (Math.random() - 0.5) * 0.6, dy: (Math.random() - 0.5) * 0.6, alpha: Math.random() * 0.5 + 0.2 }); }
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(108,99,255,${p.alpha})`; ctx.fill();
    // connect
    particles.slice(i + 1).forEach(p2 => {
      const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
      if (dist < 120) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = `rgba(0,217,255,${0.15 * (1 - dist / 120)})`; ctx.lineWidth = 0.6; ctx.stroke(); }
    });
  });
  requestAnimationFrame(draw);
}
draw();

// Contact
const form = document.getElementById('contactForm');
const fmsg = document.getElementById('fmsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  if (!fd.get('name') || !fd.get('email') || !fd.get('subject') || !fd.get('message')) { fmsg.textContent = 'Please fill all fields.'; fmsg.className = 'fmsg err'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.get('email'))) { fmsg.textContent = 'Enter valid email.'; fmsg.className = 'fmsg err'; return; }
  const bt = form.querySelector('.bt'); const bl = form.querySelector('.bl');
  bt.classList.add('hidden'); bl.classList.remove('hidden');
  setTimeout(() => { bt.classList.remove('hidden'); bl.classList.add('hidden'); fmsg.textContent = 'Message sent! I will reply soon.'; fmsg.className = 'fmsg ok'; form.reset(); }, 1300);
});

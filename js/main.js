// =========================================================
// Vanessa Battung — Portfolio Main JS
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader && preloader.classList.add('hide'), 300);
  });
  // Fallback in case load event already fired
  setTimeout(() => preloader && preloader.classList.add('hide'), 1800);

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Active nav link on scroll (setup) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');
  function updateActiveNav() {
    let current = sections[0]?.id;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // Back to top button
    if (window.scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');

    // Active nav link based on section in view
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  /* ---------- Typed role animation ---------- */
  const roles = [
    'Full Stack Developer',
    'ReactJS & Blazor Developer',
    'ASP.NET Core Specialist',
    'RESTful API Builder',
    'Freelance Web Developer'
  ];
  const typedEl = document.getElementById('typed-role');
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    if (!typedEl) return;
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 40 : 70);
  }
  typeLoop();

  /* ---------- Cursor glow (desktop decorative) ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  /* ---------- Freelance inquiry form submission ---------- */
  const form = document.getElementById('freelanceForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  if (form) {
    // form.addEventListener('submit', async (e) => {
    //   e.preventDefault();

    //   const payload = {
    //     name: document.getElementById('clientName').value.trim(),
    //     email: document.getElementById('clientEmail').value.trim(),
    //     project_type: document.getElementById('projectType').value,
    //     budget: document.getElementById('budget').value,
    //     message: document.getElementById('message').value.trim(),
    //     status: 'New'
    //   };

    //   if (!payload.name || !payload.email || !payload.project_type || !payload.budget || !payload.message) {
    //     showStatus('Please fill in all fields.', 'error');
    //     return;
    //   }

    //   setLoading(true);

    //   try {
    //     const res = await fetch('tables/freelance_inquiries', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(payload)
    //     });

    //     if (!res.ok) throw new Error('Request failed');

    //     await res.json();
    //     showStatus('🎉 Thank you! Your project inquiry has been sent. Vanessa will reach out to you soon.', 'success');
    //     form.reset();
    //   } catch (err) {
    //     console.error(err);
    //     showStatus('Something went wrong while sending your inquiry. Please try again or email directly.', 'error');
    //   } finally {
    //     setLoading(false);
    //   }
    // });

    form.addEventListener("submit", async (e) => {

      e.preventDefault();

      setLoading(true);

      const formData = new FormData(form);

      try {

        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {

          showStatus(
            "🎉 Thank you! Your inquiry has been sent successfully. I'll get back to you soon.",
            "success"
          );

          form.reset();

        } else {

          showStatus(
            "Unable to send your inquiry. Please try again.",
            "error"
          );

        }

      } catch (error) {

        console.error(error);

        showStatus(
          "Something went wrong. Please try again later.",
          "error"
        );

      } finally {

        setLoading(false);

      }

    });
  }

  function setLoading(isLoading) {
    if (isLoading) {
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending...';
    } else {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Send Project Inquiry';
    }
  }

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = 'form-status ' + type;
    if (type === 'success') {
      setTimeout(() => { formStatus.textContent = ''; formStatus.className = 'form-status'; }, 8000);
    }
  }

});

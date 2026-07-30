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
    "Computer Programmer",
    'Full Stack Developer',
    "Software Developer",
    'ReactJS & Blazor Dev',
    'ASP.NET Core Specialist',
    'RESTful API Builder',
    'Freelance Web Dev'
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

  /* ---------- Feedback ---------- */
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackStatus = document.getElementById('feedbackStatus');
  const feedbackList = document.getElementById('feedbackList');

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(feedbackForm);
      const feedbackText = formData.get("feedbackMessage");
      const visitorEmail = formData.get("visitorEmail");

      try {
        const response = await fetch(feedbackForm.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          feedbackStatus.textContent = "🎉 Thank you! Your feedback has been sent.";
          feedbackStatus.className = "form-status success";

          const feedbackItem = document.createElement('div');
          feedbackItem.className = 'feedback-item';
          feedbackItem.innerHTML = `<strong>${visitorEmail}</strong><br>${feedbackText}`;
          feedbackList.appendChild(feedbackItem);

          await saveFeedback(visitorEmail, feedbackText);

          feedbackForm.reset();

          setTimeout(() => {
            feedbackStatus.textContent = "";
            feedbackStatus.className = "form-status";
          }, 8000);
        } else {
          feedbackStatus.textContent = "⚠️ Unable to send feedback. Please try again.";
          feedbackStatus.className = "form-status error";
        }
      } catch (error) {
        console.error(error);
        feedbackStatus.textContent = "❌ Something went wrong. Please try again later.";
        feedbackStatus.className = "form-status error";
      }
    });
  }

  /* ---------- Supabase Save Feedback ---------- */
  async function saveFeedback(email, message) {
    const { error } = await supabaseClient
      .from("feedback")
      .insert([{ email, message }]);

    if (error) {
      console.error("Error saving feedback:", error);
    } else {
      console.log("Feedback saved successfully!");
    }
  }

  /* ---------- Supabase Load Feedback ---------- */
  let currentPage = 0;
  const pageSize = 5;
  let totalPages = 0;

  async function loadFeedback(page = 0) {
    const start = page * pageSize;
    const end = start + pageSize - 1;

    const { data, error, count } = await supabaseClient
      .from("feedback")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(start, end);

    if (!error && data) {
      feedbackList.innerHTML = "";
      data.forEach(item => {
        const feedbackItem = document.createElement("div");
        feedbackItem.className = "feedback-item";
        feedbackItem.innerHTML = `<strong>${item.email}</strong><br>${item.message}`;
        feedbackList.appendChild(feedbackItem);
      });

      totalPages = Math.ceil(count / pageSize);
      renderPagination();
    }
  }

  function renderPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "◀ Previous";
    prevBtn.disabled = currentPage === 0;
    prevBtn.onclick = () => {
      if (currentPage > 0) {
        currentPage--;
        loadFeedback(currentPage);
      }
    };
    pagination.appendChild(prevBtn);

    for (let i = 0; i < totalPages && i < 5; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i + 1;
      pageBtn.className = (i === currentPage) ? "active" : "";
      pageBtn.onclick = () => {
        currentPage = i;
        loadFeedback(currentPage);
      };
      pagination.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ▶";
    nextBtn.disabled = currentPage >= totalPages - 1;
    nextBtn.onclick = () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        loadFeedback(currentPage);
      }
    };
    pagination.appendChild(nextBtn);
  }

  // ✅ Call inside DOMContentLoaded
  loadFeedback();
});


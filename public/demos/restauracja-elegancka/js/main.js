/* VELORA site interactions */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initLang() {
    const lang = window.NOVA_getLang();
    window.NOVA_applyLang(lang);

    $$("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.NOVA_setLang(btn.getAttribute("data-lang"));
        closeMobileNav();
      });
    });
  }

  function isHomePath() {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return path === "/" || path === "/index.html" || path.endsWith("/index.html") ||
      path.endsWith("/restauracja-elegancka");
  }

  function pathTargetsHome(path) {
    if (!path || path === "#" || path === "./" || path === ".") return true;
    const clean = path.replace(/\/+$/, "") || "/";
    return (
      clean === "/" ||
      clean === "/index.html" ||
      clean === "index.html" ||
      clean === "./index.html"
    );
  }

  function initSmoothAnchors() {
    $$('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href") || "";
        const hashIndex = href.indexOf("#");
        if (hashIndex === -1) return;

        const path = href.slice(0, hashIndex);
        const hash = href.slice(hashIndex);
        if (!hash || hash === "#") return;

        if (path && !pathTargetsHome(path)) return;
        if (path && pathTargetsHome(path) && !isHomePath()) return;

        const target = $(hash);
        if (!target) return;
        event.preventDefault();
        closeMobileNav();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        const pretty =
          hash === "#strona-glowna" || hash === "#"
            ? "/"
            : `/${hash}`;
        history.replaceState(null, "", pretty);
      });
    });
  }

  function closeMobileNav() {
    const panel = $(".mobile-nav");
    const toggle = $(".nav-toggle");
    document.body.classList.remove("nav-open");
    panel?.setAttribute("aria-hidden", "true");
    toggle?.setAttribute("aria-expanded", "false");
  }

  function initMobileNav() {
    const toggle = $(".nav-toggle");
    const panel = $(".mobile-nav");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      panel.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMobileNav());
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  function initSlides() {
    $$(".slide-num").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".slide-num").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  }

  function t(key) {
    const lang = window.NOVA_getLang();
    return (window.NOVA_I18N[lang] && window.NOVA_I18N[lang][key]) || key;
  }

  function initReservationForm() {
    const form = $("#reservation-form");
    if (!form) return;

    const success = $("#reservation-success");
    const errorBox = $("#reservation-error");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      errorBox.hidden = true;
      success.hidden = true;

      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const date = form.date.value;
      const time = form.time.value;
      const guests = form.guests.value;

      if (!name || !phone || !email || !date || !time || !guests) {
        errorBox.textContent = t("form.error.required");
        errorBox.hidden = false;
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorBox.textContent = t("form.error.email");
        errorBox.hidden = false;
        return;
      }

      if (!/^[\d\s+\-()]{7,}$/.test(phone)) {
        errorBox.textContent = t("form.error.phone");
        errorBox.hidden = false;
        return;
      }

      form.hidden = true;
      success.hidden = false;
      success.textContent = t("form.success");
      form.reset();
    });

    document.addEventListener("nova:lang", () => {
      if (!success.hidden) success.textContent = t("form.success");
    });
  }

  function initLightbox() {
    const items = $$("[data-lightbox]");
    if (!items.length) return;

    let overlay = $(".lightbox");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.setAttribute("hidden", "");
      overlay.innerHTML = `
        <button type="button" class="lightbox-close" data-i18n-aria="gallery.close" aria-label="Close">×</button>
        <img class="lightbox-img" alt="" />
      `;
      document.body.appendChild(overlay);
    }

    const img = overlay.querySelector(".lightbox-img");
    const closeBtn = overlay.querySelector(".lightbox-close");

    function open(src, alt) {
      img.src = src;
      img.alt = alt || "";
      overlay.hidden = false;
      document.body.classList.add("lightbox-open");
    }

    function close() {
      overlay.hidden = true;
      document.body.classList.remove("lightbox-open");
      img.src = "";
    }

    items.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const src = el.getAttribute("data-lightbox") || el.querySelector("img")?.src;
        const alt = el.querySelector("img")?.alt || "";
        if (src) open(src, alt);
      });
    });

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function initHeaderScroll() {
    const header = $(".site-header");
    if (!header) return;

    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initHeroEntrance() {
    const hero = $("#strona-glowna");
    if (!hero) return;

    $$(".hero-reveal", hero).forEach((el) => {
      const delay = el.getAttribute("data-hero-delay") || "0";
      el.style.setProperty("--hero-delay", delay);
    });

    document.documentElement.classList.add("motion-ready");

    if (reduceMotion) {
      hero.classList.add("is-hero-ready");
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        hero.classList.add("is-hero-ready");
      });
    });
  }

  function markReveal(el, delayMs) {
    if (!el || el.classList.contains("reveal-item")) return;
    el.classList.add("reveal-item");
    if (delayMs) el.style.setProperty("--reveal-delay", `${delayMs}ms`);
  }

  function initScrollReveals() {
    document.documentElement.classList.add("motion-ready");

    const copyBlocks = $$([
      "main .label",
      "main h2.heading-serif",
      "main .link-arrow",
      ".kuchnia-copy > div",
      ".kuchnia-highlights",
      ".season-copy > p:not(.label)",
      ".evening-copy > div",
      ".evening-tags",
      ".about-copy > div",
      ".about-quote",
      ".about-chef-inline",
      ".onas-intro > p:not(.label)",
      ".occasions-lead",
      ".occasions-list .occasion-item",
      ".events-copy > p:not(.label)",
      ".selected-menu-intro",
      ".selected-menu-subtext",
      ".info-intro > h2",
      ".info-item",
      ".nova-map",
      ".reservation-copy > p:not(.label)",
      ".reserve-form",
      ".contact-details > div",
      ".page-hero h1",
      ".page-hero p",
      ".gallery-masonry > *",
    ].join(", "));

    copyBlocks.forEach((el) => markReveal(el, 0));

    $$(".about-point").forEach((el, i) => markReveal(el, i * 100));
    $$(".review-item").forEach((el, i) => markReveal(el, i * 120));
    $$(".review-stars").forEach((el, i) => markReveal(el, 80 + i * 40));
    $$(".menu-item").forEach((el, i) => markReveal(el, Math.min(i * 45, 270)));

    const items = $$(".reveal-item");
    if (!items.length) return;

    if (reduceMotion) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const reveal = (el) => {
      if (el.classList.contains("is-in")) return;
      el.classList.add("is-in");
      io.unobserve(el);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );

    const flushVisible = () => {
      const viewH = window.innerHeight || 800;
      items.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        if (el.getBoundingClientRect().top < viewH * 0.92) reveal(el);
      });
    };

    items.forEach((el) => io.observe(el));
    flushVisible();
    window.addEventListener("scroll", flushVisible, { passive: true });
    window.addEventListener("resize", flushVisible, { passive: true });
  }

  function initImageMotion() {
    const figures = $$(".image-motion");
    if (!figures.length || reduceMotion) return;

    let ticking = false;

    function update() {
      ticking = false;
      const viewH = window.innerHeight || 1;

      figures.forEach((fig) => {
        const img = fig.querySelector("img");
        if (!img) return;

        const rect = fig.getBoundingClientRect();
        const total = viewH + rect.height;
        if (total <= 0) return;

        const progress = (viewH - rect.top) / total;
        const clamped = Math.max(0, Math.min(1, progress));
        const y = (0.5 - clamped) * 16;
        img.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.03)`;
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initSmoothAnchors();
    initMobileNav();
    initSlides();
    initReservationForm();
    initLightbox();
    initHeaderScroll();
    initHeroEntrance();
    initScrollReveals();
    initImageMotion();

    if (window.location.hash) {
      const target = $(window.location.hash);
      if (target) {
        setTimeout(
          () => target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }),
          50
        );
      }
    }
  });
})();

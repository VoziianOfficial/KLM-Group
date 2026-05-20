"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/index.js.");
        return;
    }

    document.addEventListener("DOMContentLoaded", initIndexPage);

    function initIndexPage() {
        if (!document.body.classList.contains("index-page")) return;

        renderIndexServices();
        initServicePreview();
        initHeroParallax();
        initRevealEffects();
    }

    

    function renderIndexServices() {
        const list = document.querySelector("[data-index-services-list]");
        const preview = document.querySelector("[data-index-service-preview]");

        if (list && !list.children.length) {
            list.innerHTML = config.services
                .map((service, index) => {
                    return `
            <button 
              class="service-tab ${index === 0 ? "is-active" : ""}" 
              type="button"
              data-service-tab
              data-service-id="${escapeAttribute(service.id)}"
              aria-label="Preview ${escapeAttribute(service.title)}"
            >
              <span class="service-tab__number">${escapeHtml(service.number)}</span>

              <span class="service-tab__content">
                <span class="service-tab__title">${escapeHtml(service.title)}</span>
                <span class="service-tab__text">${escapeHtml(service.summary)}</span>
              </span>

              <span class="service-tab__arrow" aria-hidden="true">→</span>
            </button>
          `;
                })
                .join("");
        }

        if (preview && !preview.children.length) {
            updateServicePreview(config.services[0], preview);
        }
    }

    function initServicePreview() {
        const tabs = Array.from(document.querySelectorAll("[data-service-tab]"));
        const preview = document.querySelector("[data-index-service-preview]");

        if (!tabs.length || !preview) return;

        tabs.forEach((tab) => {
            const serviceId = tab.getAttribute("data-service-id");
            const service = config.services.find((item) => item.id === serviceId);

            if (!service) return;

            tab.addEventListener("mouseenter", () => {
                setActiveService(tab, tabs, service, preview);
            });

            tab.addEventListener("focus", () => {
                setActiveService(tab, tabs, service, preview);
            });

            tab.addEventListener("click", () => {
                window.location.href = service.href;
            });

            tab.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.location.href = service.href;
                }
            });
        });
    }

    function setActiveService(activeTab, tabs, service, preview) {
        tabs.forEach((tab) => {
            const isActive = tab === activeTab;
            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-pressed", String(isActive));
        });

        updateServicePreview(service, preview);
    }

    function updateServicePreview(service, preview) {
        if (!service || !preview) return;

        preview.innerHTML = `
      <div class="services-preview__image">
        <img 
          src="${escapeAttribute(service.image)}" 
          alt="${escapeAttribute(service.title)} service preview by KLM Group"
          loading="lazy"
        >
      </div>

      <div class="services-preview__overlay" aria-hidden="true"></div>

      <div class="services-preview__content">
        <span class="badge services-preview__badge">
          ${escapeHtml(service.number)} / ${escapeHtml(service.shortTitle)}
        </span>

        <h3 class="services-preview__title">
          ${escapeHtml(service.title)}
        </h3>

        <p class="services-preview__text">
          ${escapeHtml(service.summary)}
        </p>

        <a class="link-arrow services-preview__link" href="${escapeAttribute(service.href)}">
          Learn More
        </a>
      </div>
    `;
    }

    

    function initHeroParallax() {
        const hero = document.querySelector(".home-hero");
        const visual = document.querySelector(".home-hero__visual");
        const signal = document.querySelector(".home-hero__signal");
        const floatingCard = document.querySelector(".home-hero__floating-card");

        if (!hero || prefersReducedMotion()) return;

        let ticking = false;

        const update = () => {
            const rect = hero.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const progress = clamp(1 - rect.top / viewportHeight, 0, 1);

            if (visual) {
                visual.style.transform = `translateY(${progress * -14}px)`;
            }

            if (signal) {
                signal.style.transform = `translateY(${progress * 18}px)`;
            }

            if (floatingCard) {
                floatingCard.style.transform = `translateY(${progress * -10}px)`;
            }

            ticking = false;
        };

        const requestUpdate = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(update);
        };

        update();

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
    }

    

    function initRevealEffects() {
        const revealItems = document.querySelectorAll(
            ".home-hero__content, .home-hero__visual, .stats-strip__item, .about-section__visual, .about-section__content, .service-tab, .services-preview, .process-card, .approach-card, .contact-section__info, .contact-form-card"
        );

        if (!revealItems.length || prefersReducedMotion()) {
            revealItems.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        revealItems.forEach((item) => {
            item.classList.add("reveal-item");
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.08
            }
        );

        revealItems.forEach((item) => observer.observe(item));

        injectRevealStyles();
    }

    function injectRevealStyles() {
        if (document.querySelector("#indexRevealStyles")) return;

        const style = document.createElement("style");
        style.id = "indexRevealStyles";
        style.textContent = `
      .reveal-item {
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 680ms cubic-bezier(0.16, 1, 0.3, 1),
          transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .reveal-item.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;

        document.head.appendChild(style);
    }

    

    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function escapeHtml(value) {
        return String(value || "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function escapeAttribute(value) {
        return escapeHtml(value);
    }
})();

(function () {
    document.addEventListener("DOMContentLoaded", initServicesSwitch);

    function initServicesSwitch() {
        const list = document.querySelector("[data-services-switch-list]");
        const preview = document.querySelector("[data-services-switch-preview]");
        const config = window.SITE_CONFIG;

        if (!list || !preview || !config || !Array.isArray(config.services)) return;

        const services = config.services;

        list.innerHTML = services
            .map((service, index) => {
                return `
                    <button 
                        class="services-switch__tab${index === 0 ? " is-active" : ""}" 
                        type="button"
                        data-service-index="${index}"
                        aria-pressed="${index === 0 ? "true" : "false"}"
                    >
                        <span class="services-switch__number">${String(index + 1).padStart(2, "0")}</span>

                        <span class="services-switch__tab-content">
                            <span class="services-switch__tab-title">${escapeHtml(service.title || service.shortTitle || "")}</span>
                            <span class="services-switch__tab-text">${escapeHtml(service.summary || service.cardText || service.shortText || "")}</span>
                        </span>

                        <span class="services-switch__tab-arrow" aria-hidden="true">↗</span>
                    </button>
                `;
            })
            .join("");

        renderPreview(services[0]);

        list.addEventListener("click", (event) => {
            const button = event.target.closest("[data-service-index]");
            if (!button) return;

            const index = Number(button.dataset.serviceIndex);
            const service = services[index];

            if (!service) return;

            list.querySelectorAll(".services-switch__tab").forEach((tab) => {
                tab.classList.remove("is-active");
                tab.setAttribute("aria-pressed", "false");
            });

            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");

            renderPreview(service);
        });

        function renderPreview(service) {
            const image = getServiceImage(service);
            const href = service.href || "#";

            preview.setAttribute("href", href);
            preview.setAttribute("aria-label", `Open ${service.title || "service"} page`);

            preview.innerHTML = `
                <span class="services-switch__preview-image">
                    <img src="${escapeAttribute(image)}" alt="" loading="lazy">
                </span>

                <strong class="services-switch__preview-title">
                    ${escapeHtml(service.title || "")}
                </strong>

                <span class="services-switch__preview-badge">
                    <strong>${escapeHtml(getBadgeText(service))}</strong>
                    <span aria-hidden="true"></span>
                </span>
            `;
        }

        function getServiceImage(service) {
            return (
                service.image ||
                service.previewImage ||
                service.cardImage ||
                service.heroImage ||
                "./assets/images/service-web-design.jpg"
            );
        }

        function getBadgeText(service) {
            const id = String(service.id || "").toLowerCase();

            if (id.includes("google")) return "ROI Focused Campaigns";
            if (id.includes("seo")) return "Search Visibility Growth";
            if (id.includes("social")) return "Audience Building";
            if (id.includes("web")) return "Conversion Ready Design";
            if (id.includes("conversion")) return "Better User Actions";
            if (id.includes("local")) return "Local Search Presence";

            return "Growth Focused Strategy";
        }

        function escapeHtml(value) {
            return String(value || "")
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")
                .replaceAll("'", "&#039;");
        }

        function escapeAttribute(value) {
            return escapeHtml(value);
        }
    }
})();

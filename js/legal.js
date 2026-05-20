"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/legal.js.");
        return;
    }

    document.addEventListener("DOMContentLoaded", initLegalPage);

    function initLegalPage() {
        if (!document.body.classList.contains("legal-page")) return;

        injectLegalBusinessData();
        markActiveLegalLinks();
        initLegalAnchorScroll();
        initLegalRevealEffects();
        updateLegalDates();
    }

    /* ================================
       Business Data
    ================================ */

    function injectLegalBusinessData() {
        setText("[data-legal-company]", config.companyName);
        setText("[data-legal-domain]", config.domain);
        setText("[data-legal-email]", config.email.value);
        setText("[data-legal-address]", config.address.full);

        document.querySelectorAll("[data-legal-email-link]").forEach((link) => {
            link.href = config.email.href;
            link.textContent = config.email.value;
        });

        document.querySelectorAll("[data-legal-domain-link]").forEach((link) => {
            link.href = `https://${config.domain}`;
            link.textContent = config.domain;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        });
    }

    /* ================================
       Active Legal Links
    ================================ */

    function markActiveLegalLinks() {
        const currentPage = getCurrentPage();

        document.querySelectorAll(".legal-nav__link, .site-footer__link, .site-footer__mini-link").forEach((link) => {
            const href = link.getAttribute("href");

            if (!href) return;

            const linkPage = href.split("#")[0];

            if (linkPage === currentPage) {
                link.classList.add("is-active");
                link.setAttribute("aria-current", "page");
            }
        });
    }

    /* ================================
       Smooth Legal Anchor Scroll
    ================================ */

    function initLegalAnchorScroll() {
        document.querySelectorAll('.legal-document a[href^="#"], .legal-nav a[href^="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");

                if (!href || href === "#") return;

                const target = document.querySelector(href);

                if (!target) return;

                event.preventDefault();

                const header = document.querySelector(".site-header");
                const offset = header ? header.offsetHeight + 18 : 18;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetTop,
                    behavior: prefersReducedMotion() ? "auto" : "smooth"
                });

                history.pushState(null, "", href);
            });
        });
    }

    /* ================================
       Reveal Effects
    ================================ */

    function initLegalRevealEffects() {
        const revealItems = document.querySelectorAll(
            ".legal-hero__content, .legal-nav, .legal-document, .legal-section, .legal-contact-card"
        );

        if (!revealItems.length || prefersReducedMotion()) {
            revealItems.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        revealItems.forEach((item) => {
            item.classList.add("legal-reveal-item");
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
        if (document.querySelector("#legalRevealStyles")) return;

        const style = document.createElement("style");
        style.id = "legalRevealStyles";
        style.textContent = `
      .legal-reveal-item {
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 680ms cubic-bezier(0.16, 1, 0.3, 1),
          transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .legal-reveal-item.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;

        document.head.appendChild(style);
    }

    /* ================================
       Dates
    ================================ */

    function updateLegalDates() {
        const year = new Date().getFullYear();
        const readableDate = "May 20, 2026";

        setText("[data-current-year]", year);
        setText("[data-effective-date]", readableDate);
        setText("[data-last-updated]", readableDate);
    }

    /* ================================
       Helpers
    ================================ */

    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf("/") + 1);

        return page || "index.html";
    }

    function setText(selector, value) {
        if (typeof value === "undefined" || value === null) return;

        document.querySelectorAll(selector).forEach((element) => {
            element.textContent = value;
        });
    }

    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
})();
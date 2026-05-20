"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/mobile-menu.js.");
        return;
    }

    let previousFocusedElement = null;
    let closeTimer = null;

    window.initMobileMenu = initMobileMenu;

    function initMobileMenu() {
        const menu = getOrCreateMobileMenu();

        if (!menu) return;

        renderMobileMenu(menu);
        setupInitialState(menu);
        bindMobileMenuEvents(menu);
    }

    function getOrCreateMobileMenu() {
        let menu = document.querySelector("#mobileMenu");

        if (!menu) {
            menu = document.createElement("aside");
            menu.id = "mobileMenu";
            menu.setAttribute("data-mobile-menu", "");
            document.body.appendChild(menu);
        }

        menu.classList.add("mobile-menu");

        return menu;
    }

    function renderMobileMenu(menu) {
        menu.innerHTML = `
      <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div class="mobile-menu__top">
          <a class="mobile-menu__logo" href="index.html#home" aria-label="${escapeHtml(config.companyName)} home" data-mobile-menu-link>
            <span class="mobile-menu__logo-mark" aria-hidden="true">
              <img 
                src="${escapeAttribute(config.assets.logo.symbol)}" 
                alt="" 
                onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
              >
              <span class="mobile-menu__generated-mark" hidden></span>
            </span>

            <span class="mobile-menu__logo-text">
              <span class="mobile-menu__logo-name">${escapeHtml(config.companyName)}</span>
              <span class="mobile-menu__logo-label">${escapeHtml(config.brand.descriptor)}</span>
            </span>
          </a>

          <button 
            class="mobile-menu__close" 
            type="button" 
            aria-label="Close mobile menu" 
            data-mobile-menu-close
          >
            <span class="mobile-menu__close-icon" aria-hidden="true"></span>
          </button>
        </div>

        <div class="mobile-menu__body">
          <div class="mobile-menu__layout">
            <div>
              <section class="mobile-menu__section" aria-labelledby="mobileMenuNavigationTitle">
                <h2 class="mobile-menu__section-title" id="mobileMenuNavigationTitle">
                  Navigation
                </h2>

                <nav class="mobile-menu__nav" aria-label="Mobile primary navigation">
                  ${renderNavigationLinks()}
                </nav>
              </section>
            </div>

            <div>
              <section class="mobile-menu__section" aria-labelledby="mobileMenuServicesTitle">
                <h2 class="mobile-menu__section-title" id="mobileMenuServicesTitle">
                  Services
                </h2>

                <div class="mobile-menu__services">
                  ${renderServiceLinks()}
                </div>
              </section>

              <section class="mobile-menu__section" aria-labelledby="mobileMenuContactTitle">
                <h2 class="mobile-menu__section-title" id="mobileMenuContactTitle">
                  Contacts
                </h2>

                <div class="mobile-menu__contact-card">
                  <div class="mobile-menu__contact-list">
                    <a class="mobile-menu__contact-link" href="${escapeAttribute(config.email.href)}">
                      <span class="mobile-menu__contact-icon" aria-hidden="true">
                        <img 
                          src="${escapeAttribute(config.assets.icons.email)}" 
                          alt="" 
                          onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                        >
                        <span class="mobile-menu__contact-fallback" hidden></span>
                      </span>
                      <span>${escapeHtml(config.email.value)}</span>
                    </a>

                    ${renderPhoneContact()}

                    <div class="mobile-menu__contact-text">
                      <span class="mobile-menu__contact-icon" aria-hidden="true">
                        <img 
                          src="${escapeAttribute(config.assets.icons.location)}" 
                          alt="" 
                          onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                        >
                        <span class="mobile-menu__contact-fallback" hidden></span>
                      </span>
                      <span>${escapeHtml(config.address.full)}</span>
                    </div>
                  </div>

                  <a class="btn btn-primary mobile-menu__cta" href="index.html#contact" data-mobile-menu-link>
                    Get Free Consultation
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div class="mobile-menu__bottom">
          <p class="mobile-menu__bottom-text">
            ${escapeHtml(config.brand.tagline)}
          </p>

          <span class="mobile-menu__bottom-domain">
            ${escapeHtml(config.domain)}
          </span>
        </div>
      </div>
    `;
    }

    function renderNavigationLinks() {
        return config.navigation
            .map((item) => {
                return `
          <a class="mobile-menu__nav-link" href="${escapeAttribute(item.href)}" data-mobile-menu-link>
            ${escapeHtml(item.label)}
          </a>
        `;
            })
            .join("");
    }

    function renderServiceLinks() {
        return config.services
            .map((service) => {
                return `
          <a class="mobile-menu__service-link" href="${escapeAttribute(service.href)}" data-mobile-menu-link>
            <span class="mobile-menu__service-icon" aria-hidden="true">
              <img 
                src="${escapeAttribute(service.icon)}" 
                alt="" 
                onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
              >
              <span class="mobile-menu__service-fallback" hidden></span>
            </span>

            <span class="mobile-menu__service-content">
              <span class="mobile-menu__service-number">${escapeHtml(service.number)}</span>
              <span class="mobile-menu__service-title">${escapeHtml(service.title)}</span>
            </span>
          </a>
        `;
            })
            .join("");
    }

    function renderPhoneContact() {
        if (!config.phone || !config.phone.number || !config.phone.href) {
            return "";
        }

        return `
      <a class="mobile-menu__contact-link" href="${escapeAttribute(config.phone.href)}">
        <span class="mobile-menu__contact-icon" aria-hidden="true">
          <img 
            src="${escapeAttribute(config.assets.icons.phone)}" 
            alt="" 
            onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
          >
          <span class="mobile-menu__contact-fallback" hidden></span>
        </span>
        <span>${escapeHtml(config.phone.number)}</span>
      </a>
    `;
    }

    function setupInitialState(menu) {
        menu.setAttribute("aria-hidden", "true");

        if ("inert" in menu) {
            menu.inert = true;
        }

        markActiveMobileLinks(menu);
    }

    function bindMobileMenuEvents(menu) {
        const openButtons = document.querySelectorAll("[data-mobile-menu-open]");
        const closeButton = menu.querySelector("[data-mobile-menu-close]");
        const menuLinks = menu.querySelectorAll("[data-mobile-menu-link]");

        openButtons.forEach((button) => {
            button.addEventListener("click", () => {
                openMobileMenu(menu, button);
            });
        });

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                closeMobileMenu(menu);
            });
        }

        menuLinks.forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenu(menu);
            });
        });

        menu.addEventListener("click", (event) => {
            if (event.target === menu) {
                closeMobileMenu(menu);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menu.classList.contains("is-open")) {
                closeMobileMenu(menu);
            }

            if (event.key === "Tab" && menu.classList.contains("is-open")) {
                trapFocus(event, menu);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1200 && menu.classList.contains("is-open")) {
                closeMobileMenu(menu, {
                    restoreFocus: false
                });
            }
        });
    }

    function openMobileMenu(menu, triggerButton) {
        clearTimeout(closeTimer);

        previousFocusedElement = document.activeElement;

        menu.setAttribute("aria-hidden", "false");

        if ("inert" in menu) {
            menu.inert = false;
        }

        document.body.classList.add("menu-open");

        document.querySelectorAll("[data-mobile-menu-open]").forEach((button) => {
            button.setAttribute("aria-expanded", "true");
        });

        requestAnimationFrame(() => {
            menu.classList.add("is-open");

            const closeButton = menu.querySelector("[data-mobile-menu-close]");
            if (closeButton) closeButton.focus();
        });

        if (triggerButton) {
            triggerButton.setAttribute("aria-expanded", "true");
        }
    }

    function closeMobileMenu(menu, options = {}) {
        const shouldRestoreFocus = options.restoreFocus !== false;

        if (!menu.classList.contains("is-open")) return;

        menu.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        document.querySelectorAll("[data-mobile-menu-open]").forEach((button) => {
            button.setAttribute("aria-expanded", "false");
        });

        if (shouldRestoreFocus && previousFocusedElement && typeof previousFocusedElement.focus === "function") {
            previousFocusedElement.focus({ preventScroll: true });
        }

        closeTimer = window.setTimeout(() => {
            menu.setAttribute("aria-hidden", "true");

            if ("inert" in menu) {
                menu.inert = true;
            }
        }, 420);
    }

    function trapFocus(event, menu) {
        const focusableElements = getFocusableElements(menu);

        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    function getFocusableElements(container) {
        const selectors = [
            "a[href]",
            "button:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            '[tabindex]:not([tabindex="-1"])'
        ];

        return Array.from(container.querySelectorAll(selectors.join(","))).filter((element) => {
            return !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden");
        });
    }

    function markActiveMobileLinks(menu) {
        const currentPage = getCurrentPage();

        menu.querySelectorAll("a[href]").forEach((link) => {
            const href = link.getAttribute("href");

            if (!href) return;

            const linkPage = href.split("#")[0] || "index.html";

            if (linkPage === currentPage) {
                link.classList.add("is-active");
            }
        });
    }

    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf("/") + 1);

        return page || "index.html";
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
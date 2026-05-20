"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/header.js.");
        return;
    }

    window.initHeader = initHeader;

    function initHeader() {
        const header = getOrCreateHeader();

        if (!header) return;

        renderHeader(header);
        initHeaderDropdown(header);
        markActiveHeaderLinks(header);
    }

    function getOrCreateHeader() {
        let header = document.querySelector("[data-site-header]");

        if (!header) {
            header = document.createElement("header");
            header.setAttribute("data-site-header", "");
            document.body.prepend(header);
        }

        header.classList.add("site-header");

        return header;
    }

    function renderHeader(header) {
        header.innerHTML = `
      <div class="site-header__inner">
        <a class="site-logo site-logo--image" href="index.html#home" aria-label="${escapeHtml(config.companyName)} home">
  <img
    class="site-logo__image"
    src="${escapeAttribute(config.assets.logo.full)}"
    alt="${escapeAttribute(config.companyName)} logo"
  >
</a>

        <nav class="site-nav" aria-label="Primary navigation">
          <ul class="site-nav__list">
            ${renderMainNavigation()}
          </ul>
        </nav>

        <div class="site-header__actions">
          <a class="btn btn-primary site-header__cta" href="index.html#contact">
            Get Free Consultation
          </a>

          <button 
            class="mobile-menu-toggle" 
            type="button" 
            aria-label="Open mobile menu" 
            aria-controls="mobileMenu"
            aria-expanded="false"
            data-mobile-menu-open
          >
            <span class="mobile-menu-toggle__lines" aria-hidden="true">
              <span class="mobile-menu-toggle__line"></span>
              <span class="mobile-menu-toggle__line"></span>
            </span>
          </button>
        </div>
      </div>
    `;
    }

    function renderMainNavigation() {
        const navigation = config.navigation || [];

        return navigation
            .map((item) => {
                if (item.label === "Services") {
                    return `
            <li class="site-nav__item site-nav__item--has-dropdown">
              <button 
                class="site-nav__dropdown-button" 
                type="button" 
                aria-expanded="false" 
                aria-controls="servicesDropdown"
                data-services-dropdown-button
              >
                Services
              </button>

              <div class="site-dropdown" id="servicesDropdown" data-services-dropdown>
                <div class="site-dropdown__grid">
                  ${renderServiceDropdownLinks()}
                </div>
              </div>
            </li>
          `;
                }

                return `
          <li class="site-nav__item">
            <a class="site-nav__link" href="${escapeAttribute(item.href)}">
              ${escapeHtml(item.label)}
            </a>
          </li>
        `;
            })
            .join("");
    }

    function renderServiceDropdownLinks() {
        return config.services
            .map((service) => {
                return `
          <a class="site-dropdown__link" href="${escapeAttribute(service.href)}">
            <span class="site-dropdown__icon" aria-hidden="true">
              <img 
                src="${escapeAttribute(service.icon)}" 
                alt="" 
                onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
              >
              <span class="site-dropdown__fallback-icon" hidden></span>
            </span>

            <span class="site-dropdown__content">
              <span class="site-dropdown__title">${escapeHtml(service.title)}</span>
              <span class="site-dropdown__text">${escapeHtml(service.summary)}</span>
            </span>

            <span class="site-dropdown__arrow" aria-hidden="true">→</span>
          </a>
        `;
            })
            .join("");
    }

    function initHeaderDropdown(header) {
        const dropdownButton = header.querySelector("[data-services-dropdown-button]");
        const dropdown = header.querySelector("[data-services-dropdown]");

        if (!dropdownButton || !dropdown) return;

        dropdownButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen = dropdown.classList.contains("is-open");

            if (isOpen) {
                closeDropdown(dropdownButton, dropdown);
            } else {
                openDropdown(dropdownButton, dropdown);
            }
        });

        dropdownButton.addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openDropdown(dropdownButton, dropdown);

                const firstLink = dropdown.querySelector("a");
                if (firstLink) firstLink.focus();
            }
        });

        dropdown.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeDropdown(dropdownButton, dropdown);
                dropdownButton.focus();
            }
        });

        document.addEventListener("click", (event) => {
            if (!header.contains(event.target)) {
                closeDropdown(dropdownButton, dropdown);
            }
        });

        window.addEventListener("resize", () => {
            closeDropdown(dropdownButton, dropdown);
        });
    }

    function openDropdown(button, dropdown) {
        dropdown.classList.add("is-open");
        button.classList.add("is-active");
        button.setAttribute("aria-expanded", "true");
    }

    function closeDropdown(button, dropdown) {
        dropdown.classList.remove("is-open");
        button.classList.remove("is-active");
        button.setAttribute("aria-expanded", "false");
    }

    function markActiveHeaderLinks(header) {
        const currentPage = getCurrentPage();
        const isServicePage = config.services.some((service) => service.href === currentPage);

        header.querySelectorAll("a[href]").forEach((link) => {
            const href = link.getAttribute("href");

            if (!href) return;

            const linkPage = href.split("#")[0] || "index.html";
            const linkHash = href.includes("#") ? `#${href.split("#")[1]}` : "";

            if (linkPage === currentPage) {
                link.classList.add("is-active");
            }

            if (currentPage === "index.html" && window.location.hash && linkHash === window.location.hash) {
                link.classList.add("is-active");
            }
        });

        if (isServicePage) {
            const servicesButton = header.querySelector("[data-services-dropdown-button]");
            if (servicesButton) servicesButton.classList.add("is-active");
        }
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

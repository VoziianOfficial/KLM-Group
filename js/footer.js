"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/footer.js.");
        return;
    }

    window.initFooter = initFooter;

    function initFooter() {
        const footer = getOrCreateFooter();

        if (!footer) return;

        renderFooter(footer);
        markActiveFooterLinks(footer);
    }

    function getOrCreateFooter() {
        let footer = document.querySelector("[data-site-footer]");

        if (!footer) {
            footer = document.createElement("footer");
            footer.setAttribute("data-site-footer", "");
            document.body.appendChild(footer);
        }

        footer.classList.add("site-footer");

        return footer;
    }

    function renderFooter(footer) {
        footer.innerHTML = `
      <div class="site-footer__inner">
        <div class="site-footer__panel">
          <div class="site-footer__top">
            <div class="site-footer__brand">
              <a class="site-footer__logo" href="index.html#home" aria-label="${escapeHtml(config.companyName)} home">
                <span class="site-footer__logo-mark" aria-hidden="true">
                  <img 
                    src="${escapeAttribute(config.assets.logo.symbol)}" 
                    alt="" 
                    onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                  >
                  <span class="site-footer__generated-mark" hidden></span>
                </span>

                <span class="site-footer__logo-text">
                  <span class="site-footer__logo-name">${escapeHtml(config.companyName)}</span>
                  <span class="site-footer__logo-label">${escapeHtml(config.brand.descriptor)}</span>
                </span>
              </a>

              <p class="site-footer__description">
                ${escapeHtml(config.footer.description)}
              </p>

              <div class="site-footer__contact-list">
                <a class="site-footer__contact-link" href="${escapeAttribute(config.email.href)}">
                  <span class="site-footer__contact-icon" aria-hidden="true">
                    <img 
                      src="${escapeAttribute(config.assets.icons.email)}" 
                      alt="" 
                      onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                    >
                    <span class="site-footer__contact-fallback" hidden></span>
                  </span>
                  <span>${escapeHtml(config.email.value)}</span>
                </a>

                ${renderPhoneContact()}

                <div class="site-footer__contact-text">
                  <span class="site-footer__contact-icon" aria-hidden="true">
                    <img 
                      src="${escapeAttribute(config.assets.icons.location)}" 
                      alt="" 
                      onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
                    >
                    <span class="site-footer__contact-fallback" hidden></span>
                  </span>
                  <span>${escapeHtml(config.address.full)}</span>
                </div>
              </div>
            </div>

            <div class="site-footer__links">
              <div class="site-footer__column">
                <h2 class="site-footer__column-title">Navigation</h2>
                <ul class="site-footer__list">
                  ${renderNavigationLinks()}
                </ul>
              </div>

              <div class="site-footer__column">
                <h2 class="site-footer__column-title">Services</h2>
                <ul class="site-footer__list">
                  ${renderServiceLinks()}
                </ul>
              </div>

              <div class="site-footer__column">
                <h2 class="site-footer__column-title">Legal</h2>
                <ul class="site-footer__list">
                  ${renderLegalLinks()}
                </ul>
              </div>
            </div>
          </div>

          <div class="site-footer__middle">
            <p class="site-footer__disclaimer">
              ${escapeHtml(config.disclaimer)}
            </p>

            <a 
              class="site-footer__domain" 
              href="https://${escapeAttribute(config.domain)}" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ${escapeHtml(config.domain)}
            </a>
          </div>

          <div class="site-footer__bottom">
            <p class="site-footer__copyright">
              ${escapeHtml(config.footer.copyright)}
            </p>

            <div class="site-footer__mini-links">
              ${renderMiniLegalLinks()}
            </div>
          </div>
        </div>
      </div>
    `;
    }

    function renderPhoneContact() {
        if (!config.phone || !config.phone.number || !config.phone.href) {
            return "";
        }

        return `
      <a class="site-footer__contact-link" href="${escapeAttribute(config.phone.href)}">
        <span class="site-footer__contact-icon" aria-hidden="true">
          <img 
            src="${escapeAttribute(config.assets.icons.phone)}" 
            alt="" 
            onerror="this.hidden=true; this.nextElementSibling.hidden=false;"
          >
          <span class="site-footer__contact-fallback" hidden></span>
        </span>
        <span>${escapeHtml(config.phone.number)}</span>
      </a>
    `;
    }

    function renderNavigationLinks() {
        return config.navigation
            .map((item) => {
                return `
          <li>
            <a class="site-footer__link" href="${escapeAttribute(item.href)}">
              ${escapeHtml(item.label)}
            </a>
          </li>
        `;
            })
            .join("");
    }

    function renderServiceLinks() {
        return config.services
            .map((service) => {
                return `
          <li>
            <a class="site-footer__link" href="${escapeAttribute(service.href)}">
              ${escapeHtml(service.title)}
            </a>
          </li>
        `;
            })
            .join("");
    }

    function renderLegalLinks() {
        return config.legalLinks
            .map((item) => {
                return `
          <li>
            <a class="site-footer__link" href="${escapeAttribute(item.href)}">
              ${escapeHtml(item.label)}
            </a>
          </li>
        `;
            })
            .join("");
    }

    function renderMiniLegalLinks() {
        return config.legalLinks
            .map((item) => {
                return `
          <a class="site-footer__mini-link" href="${escapeAttribute(item.href)}">
            ${escapeHtml(item.label)}
          </a>
        `;
            })
            .join("");
    }

    function markActiveFooterLinks(footer) {
        const currentPage = getCurrentPage();

        footer.querySelectorAll("a[href]").forEach((link) => {
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
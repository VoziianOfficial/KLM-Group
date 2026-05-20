"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/cookie-banner.js.");
        return;
    }

    window.initCookieBanner = initCookieBanner;

    function initCookieBanner() {
        const banner = getOrCreateCookieBanner();

        if (!banner) return;

        renderCookieBanner(banner);
        bindCookieBannerEvents(banner);
        showBannerIfNeeded(banner);
    }

    function getOrCreateCookieBanner() {
        let banner = document.querySelector("[data-policy-banner]");

        if (!banner) {
            banner = document.createElement("div");
            banner.setAttribute("data-policy-banner", "");
            document.body.appendChild(banner);
        }

        banner.classList.add("policy-banner");

        return banner;
    }

    function renderCookieBanner(banner) {
        const privacyLink = getLegalLink("privacy");
        const cookieLink = getLegalLink("cookie");
        const termsLink = getLegalLink("terms");

        banner.innerHTML = `
      <div class="policy-banner__inner" role="dialog" aria-live="polite" aria-label="Cookie and policy confirmation">
        <div class="policy-banner__content">
          <h2 class="policy-banner__title">
            ${escapeHtml(config.cookieBanner.title)}
          </h2>

          <p class="policy-banner__text">
            ${escapeHtml(config.cookieBanner.text)}
          </p>

          <div class="policy-banner__links" aria-label="Policy links">
            ${renderPolicyLink(privacyLink)}
            ${renderPolicyLink(cookieLink)}
            ${renderPolicyLink(termsLink)}
          </div>
        </div>

        <div class="policy-banner__actions">
          <button 
            class="policy-banner__button policy-banner__button--decline" 
            type="button" 
            data-policy-decline
          >
            ${escapeHtml(config.cookieBanner.declineText)}
          </button>

          <button 
            class="policy-banner__button policy-banner__button--accept" 
            type="button" 
            data-policy-accept
          >
            ${escapeHtml(config.cookieBanner.acceptText)}
          </button>
        </div>
      </div>
    `;
    }

    function renderPolicyLink(link) {
        if (!link) return "";

        return `
      <a class="policy-banner__link" href="${escapeAttribute(link.href)}">
        ${escapeHtml(link.label)}
      </a>
    `;
    }

    function bindCookieBannerEvents(banner) {
        const acceptButton = banner.querySelector("[data-policy-accept]");
        const declineButton = banner.querySelector("[data-policy-decline]");

        if (acceptButton) {
            acceptButton.addEventListener("click", () => {
                savePolicyChoice("accepted");
                hideCookieBanner(banner);
            });
        }

        if (declineButton) {
            declineButton.addEventListener("click", () => {
                savePolicyChoice("declined");
                hideCookieBanner(banner);
            });
        }
    }

    function showBannerIfNeeded(banner) {
        const savedChoice = getSavedPolicyChoice();

        if (savedChoice) {
            banner.classList.remove("is-visible");
            banner.setAttribute("aria-hidden", "true");
            return;
        }

        window.setTimeout(() => {
            banner.classList.add("is-visible");
            banner.setAttribute("aria-hidden", "false");
        }, 500);
    }

    function hideCookieBanner(banner) {
        banner.classList.remove("is-visible");
        banner.setAttribute("aria-hidden", "true");
    }

    function savePolicyChoice(choice) {
        try {
            localStorage.setItem(config.cookieBanner.storageKey, choice);
            localStorage.setItem(`${config.cookieBanner.storageKey}Date`, new Date().toISOString());
        } catch (error) {
            console.warn("Unable to save cookie banner choice:", error);
        }
    }

    function getSavedPolicyChoice() {
        try {
            return localStorage.getItem(config.cookieBanner.storageKey);
        } catch (error) {
            console.warn("Unable to read cookie banner choice:", error);
            return null;
        }
    }

    function getLegalLink(type) {
        if (!Array.isArray(config.legalLinks)) return null;

        return config.legalLinks.find((link) => {
            return link.href.toLowerCase().includes(type);
        });
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
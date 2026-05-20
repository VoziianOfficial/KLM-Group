"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/main.js.");
        return;
    }

    document.addEventListener("DOMContentLoaded", initSite);

    function initSite() {
        applyPageMeta();
        injectGlobalContent();
        injectContactLinks();
        injectLegalLinks();
        injectServiceOptions();

        initHeaderScroll();
        initSmoothAnchorScroll();
        initFaqAccordions();
        initForms();
        initActiveLinks();
        preventEmptyLinks();

        document.documentElement.classList.add("site-ready");

        if (typeof window.initHeader === "function") {
            window.initHeader();
        }

        if (typeof window.initFooter === "function") {
            window.initFooter();
        }

        if (typeof window.initMobileMenu === "function") {
            window.initMobileMenu();
        }

        if (typeof window.initCookieBanner === "function") {
            window.initCookieBanner();
        }
    }

    /* ================================
       Page Meta
    ================================ */

    function applyPageMeta() {
        const page = getCurrentPage();
        const meta = config.pageMeta && config.pageMeta[page];

        if (!meta) return;

        if (meta.title) {
            document.title = meta.title;
        }

        let descriptionTag = document.querySelector('meta[name="description"]');

        if (!descriptionTag) {
            descriptionTag = document.createElement("meta");
            descriptionTag.setAttribute("name", "description");
            document.head.appendChild(descriptionTag);
        }

        if (meta.description) {
            descriptionTag.setAttribute("content", meta.description);
        }

        applyOpenGraph(meta);
    }

    function applyOpenGraph(meta) {
        const ogData = {
            "og:title": meta.title || config.companyName,
            "og:description": meta.description || config.brand.tagline,
            "og:type": "website",
            "og:site_name": config.companyName
        };

        Object.entries(ogData).forEach(([property, content]) => {
            if (!content) return;

            let tag = document.querySelector(`meta[property="${property}"]`);

            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        });
    }

    /* ================================
       Global Content Injection
    ================================ */

    function injectGlobalContent() {
        setText("[data-company-name]", config.companyName);
        setText("[data-brand-short-name]", config.brand.shortName);
        setText("[data-brand-descriptor]", config.brand.descriptor);
        setText("[data-brand-tagline]", config.brand.tagline);
        setText("[data-domain]", config.domain);
        setText("[data-footer-description]", config.footer.description);
        setText("[data-footer-copyright]", config.footer.copyright);
        setText("[data-disclaimer]", config.disclaimer);

        setText("[data-email-text]", config.email.value);
        setText("[data-email-label]", config.email.label);
        injectAddressText();

        if (config.phone && config.phone.number) {
            setText("[data-phone-text]", config.phone.number);
            setText("[data-phone-label]", config.phone.label || "Call us");
        } else {
            hideElements("[data-phone-optional]");
            setText("[data-phone-text]", "");
        }

        setAttributes("[data-domain-link]", {
            href: `https://${config.domain}`,
            target: "_blank",
            rel: "noopener noreferrer"
        });

        setAttributes("[data-email-link]", {
            href: config.email.href,
            "aria-label": `Email ${config.companyName}`
        });

        if (config.phone && config.phone.href) {
            setAttributes("[data-phone-link]", {
                href: config.phone.href,
                "aria-label": `Call ${config.companyName}`
            });
        }
    }

    function injectAddressText() {
        const fullAddress = config.address && config.address.full ? config.address.full : "";
        const shortAddress = getShortAddress(config.address);

        document.querySelectorAll("[data-address-text]").forEach((element) => {
            const useShort = Boolean(element.closest(".contact-section--compact"));
            element.textContent = useShort ? shortAddress : fullAddress;
        });
    }

    function getShortAddress(address) {
        if (!address) return "";

        const street = String(address.street || "").trim();
        const city = String(address.city || "").trim();
        const cityShort = getPrimaryCityName(city);

        if (street && cityShort) return `${street}, ${cityShort}`;
        if (street) return street;
        if (cityShort) return cityShort;

        return String(address.full || "").trim();
    }

    function getPrimaryCityName(city) {
        if (!city) return "";

        const separators = ["–", "-"];
        let result = city;

        separators.forEach((sep) => {
            if (result.includes(sep)) {
                result = result.split(sep)[0];
            }
        });

        return result.replace(/[,\\s]+$/g, "").trim();
    }

    function injectContactLinks() {
        document.querySelectorAll("[data-contact-email]").forEach((element) => {
            element.textContent = config.email.value;

            if (element.tagName.toLowerCase() === "a") {
                element.href = config.email.href;
                element.setAttribute("aria-label", `Email ${config.companyName}`);
            }
        });

        document.querySelectorAll("[data-contact-address]").forEach((element) => {
            element.textContent = config.address.full;
        });

        document.querySelectorAll("[data-contact-phone]").forEach((element) => {
            if (config.phone && config.phone.number) {
                element.textContent = config.phone.number;

                if (element.tagName.toLowerCase() === "a" && config.phone.href) {
                    element.href = config.phone.href;
                }
            } else {
                const wrapper = element.closest("[data-phone-optional]");
                if (wrapper) wrapper.hidden = true;
            }
        });
    }

    function injectLegalLinks() {
        const privacyLink = config.legalLinks.find((item) =>
            item.href.includes("privacy")
        );
        const cookieLink = config.legalLinks.find((item) =>
            item.href.includes("cookie")
        );
        const termsLink = config.legalLinks.find((item) =>
            item.href.includes("terms")
        );

        setLegalLink("[data-privacy-link]", privacyLink);
        setLegalLink("[data-cookie-link]", cookieLink);
        setLegalLink("[data-terms-link]", termsLink);
    }

    function setLegalLink(selector, linkData) {
        if (!linkData) return;

        document.querySelectorAll(selector).forEach((element) => {
            element.href = linkData.href;

            if (!element.textContent.trim()) {
                element.textContent = linkData.label;
            }
        });
    }

    function injectServiceOptions() {
        document.querySelectorAll("[data-service-select]").forEach((select) => {
            const currentValue = select.getAttribute("data-selected-service") || "";
            const placeholder = select.getAttribute("data-placeholder") || "Select a service";

            select.innerHTML = "";

            const placeholderOption = document.createElement("option");
            placeholderOption.value = "";
            placeholderOption.textContent = placeholder;
            placeholderOption.disabled = true;
            placeholderOption.selected = !currentValue;
            select.appendChild(placeholderOption);

            config.services.forEach((service) => {
                const option = document.createElement("option");
                option.value = service.title;
                option.textContent = service.title;

                if (currentValue && currentValue === service.title) {
                    option.selected = true;
                }

                select.appendChild(option);
            });
        });
    }

    /* ================================
       Header Scroll
    ================================ */

    function initHeaderScroll() {
        const header = document.querySelector("[data-site-header], .site-header");

        if (!header) return;

        const updateHeader = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
        };

        updateHeader();

        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    /* ================================
       Smooth Anchors
    ================================ */

    function initSmoothAnchorScroll() {
        document.querySelectorAll('a[href*="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const href = link.getAttribute("href");

                if (!href || href === "#") return;

                const url = new URL(href, window.location.href);

                if (url.pathname !== window.location.pathname) return;

                const target = document.querySelector(url.hash);

                if (!target) return;

                event.preventDefault();

                const headerOffset = getHeaderOffset();
                const targetTop =
                    target.getBoundingClientRect().top + window.scrollY - headerOffset;

                window.scrollTo({
                    top: targetTop,
                    behavior: prefersReducedMotion() ? "auto" : "smooth"
                });

                history.pushState(null, "", url.hash);
            });
        });
    }

    function getHeaderOffset() {
        const header = document.querySelector("[data-site-header], .site-header");

        if (!header) return 0;

        return header.offsetHeight + 14;
    }

    /* ================================
       FAQ Accordions
    ================================ */

    function initFaqAccordions() {
        document.querySelectorAll("[data-faq]").forEach((faqList) => {
            const items = faqList.querySelectorAll("[data-faq-item]");

            items.forEach((item) => {
                const button = item.querySelector("[data-faq-button]");
                const answer = item.querySelector("[data-faq-answer]");

                if (!button || !answer) return;

                const answerId =
                    answer.id || `faq-answer-${Math.random().toString(36).slice(2)}`;

                answer.id = answerId;
                button.setAttribute("aria-controls", answerId);
                button.setAttribute("aria-expanded", "false");
                answer.setAttribute("role", "region");
                answer.setAttribute("aria-hidden", "true");

                button.addEventListener("click", () => {
                    const isOpen = item.classList.contains("is-open");

                    if (faqList.hasAttribute("data-faq-single")) {
                        items.forEach((otherItem) => {
                            if (otherItem === item) return;
                            closeFaqItem(otherItem);
                        });
                    }

                    if (isOpen) {
                        closeFaqItem(item);
                    } else {
                        openFaqItem(item);
                    }
                });
            });
        });
    }

    function openFaqItem(item) {
        const button = item.querySelector("[data-faq-button]");
        const answer = item.querySelector("[data-faq-answer]");

        item.classList.add("is-open");

        if (button) {
            button.setAttribute("aria-expanded", "true");
        }

        if (answer) {
            answer.setAttribute("aria-hidden", "false");
        }
    }

    function closeFaqItem(item) {
        const button = item.querySelector("[data-faq-button]");
        const answer = item.querySelector("[data-faq-answer]");

        item.classList.remove("is-open");

        if (button) {
            button.setAttribute("aria-expanded", "false");
        }

        if (answer) {
            answer.setAttribute("aria-hidden", "true");
        }
    }

    /* ================================
       Forms
    ================================ */

    function initForms() {
        document.querySelectorAll("[data-contact-form]").forEach((form) => {
            form.setAttribute("novalidate", "true");

            const fields = getFormFields(form);
            const message = form.querySelector("[data-form-message]");

            Object.values(fields).forEach((field) => {
                if (!field) return;

                const eventName =
                    field.type === "checkbox" || field.tagName.toLowerCase() === "select"
                        ? "change"
                        : "input";

                field.addEventListener(eventName, () => {
                    validateField(field);
                });
            });

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                const isValid = validateForm(form);

                if (!isValid) {
                    showFormMessage(
                        message,
                        config.forms.errorMessage,
                        "error"
                    );

                    const firstInvalid = form.querySelector(".has-error input, .has-error textarea, .has-error select");

                    if (firstInvalid) {
                        firstInvalid.focus({ preventScroll: false });
                    }

                    return;
                }

                showFormMessage(
                    message,
                    config.forms.successMessage,
                    "success"
                );

                form.reset();

                form.querySelectorAll(".has-error").forEach((fieldWrapper) => {
                    fieldWrapper.classList.remove("has-error");
                });

                form.querySelectorAll("[data-error]").forEach((error) => {
                    error.textContent = "";
                });
            });
        });
    }

    function getFormFields(form) {
        return {
            fullName: form.querySelector('[name="fullName"]'),
            email: form.querySelector('[name="email"]'),
            phone: form.querySelector('[name="phone"]'),
            service: form.querySelector('[name="service"]'),
            message: form.querySelector('[name="message"]'),
            policy: form.querySelector('[name="policy"]')
        };
    }

    function validateForm(form) {
        const fields = getFormFields(form);

        const validationResults = [
            validateField(fields.fullName),
            validateField(fields.email),
            validateField(fields.phone),
            validateField(fields.service),
            validateField(fields.message),
            validateField(fields.policy)
        ];

        return validationResults.every(Boolean);
    }

    function validateField(field) {
        if (!field) return true;

        const wrapper = field.closest("[data-field]");
        const error = wrapper ? wrapper.querySelector("[data-error]") : null;
        const value = field.value ? field.value.trim() : "";

        let message = "";

        if (field.hasAttribute("required")) {
            if (field.type === "checkbox" && !field.checked) {
                message = "Please confirm that you agree to the website policies.";
            } else if (!value && field.type !== "checkbox") {
                message = "This field is required.";
            }
        }

        if (!message && field.type === "email" && value && !isValidEmail(value)) {
            message = "Please enter a valid email address.";
        }

        if (!message && field.name === "phone" && value && !isValidPhone(value)) {
            message = "Please enter a valid phone number.";
        }

        if (wrapper) {
            wrapper.classList.toggle("has-error", Boolean(message));
        }

        if (error) {
            error.textContent = message;
        }

        return !message;
    }

    function showFormMessage(messageElement, text, type) {
        if (!messageElement) return;

        messageElement.textContent = text;
        messageElement.classList.remove("success", "error");
        messageElement.classList.add("is-visible", type);
        messageElement.setAttribute("role", type === "error" ? "alert" : "status");
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPhone(value) {
        return /^[+()\-\s\d]{6,24}$/.test(value);
    }

    /* ================================
       Active Links
    ================================ */

    function initActiveLinks() {
        const currentPage = getCurrentPage();
        const currentHash = window.location.hash;

        document.querySelectorAll("a[href]").forEach((link) => {
            const href = link.getAttribute("href");

            if (!href) return;

            const normalizedHref = href.split("#")[0] || "index.html";
            const linkHash = href.includes("#") ? `#${href.split("#")[1]}` : "";

            const isSamePage = normalizedHref === currentPage;
            const isIndexAnchor =
                currentPage === "index.html" &&
                normalizedHref === "index.html" &&
                currentHash &&
                linkHash === currentHash;

            const isServicePage =
                config.services.some((service) => service.href === currentPage) &&
                normalizedHref === currentPage;

            const isLegalPage =
                config.legalLinks.some((legal) => legal.href === currentPage) &&
                normalizedHref === currentPage;

            if (isSamePage || isIndexAnchor || isServicePage || isLegalPage) {
                link.classList.add("is-active");
            }
        });

        updateAnchorActiveOnScroll();
    }

    function updateAnchorActiveOnScroll() {
        const sections = document.querySelectorAll("section[id]");
        const anchorLinks = document.querySelectorAll('a[href^="index.html#"], a[href^="#"]');

        if (!sections.length || !anchorLinks.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const id = entry.target.id;

                    anchorLinks.forEach((link) => {
                        const href = link.getAttribute("href");

                        if (!href || !href.includes("#")) return;

                        const hash = href.slice(href.indexOf("#"));

                        if (hash === `#${id}`) {
                            link.classList.add("is-active");
                        } else if (href.startsWith("index.html#") || href.startsWith("#")) {
                            link.classList.remove("is-active");
                        }
                    });
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => observer.observe(section));
    }

    /* ================================
       Link Safety
    ================================ */

    function preventEmptyLinks() {
        document.querySelectorAll('a[href="#"], a:not([href])').forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
            });

            link.setAttribute("aria-disabled", "true");
        });
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

    function setAttributes(selector, attributes) {
        document.querySelectorAll(selector).forEach((element) => {
            Object.entries(attributes).forEach(([name, value]) => {
                if (value === null || typeof value === "undefined") return;
                element.setAttribute(name, value);
            });
        });
    }

    function hideElements(selector) {
        document.querySelectorAll(selector).forEach((element) => {
            element.hidden = true;
        });
    }

    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    window.KLM = {
        config,
        getCurrentPage,
        validateForm,
        injectGlobalContent
    };
})();

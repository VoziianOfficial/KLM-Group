"use strict";

window.SITE_CONFIG = {
    companyName: "KLM Group",

    brand: {
        shortName: "KLM Group",
        descriptor: "Digital Marketing Agency",
        tagline:
            "KLM Group helps businesses improve visibility, attract qualified traffic, and turn digital attention into measurable business growth.",
        logoAlt: "KLM Group digital marketing agency logo"
    },

    domain: "klmgroupads.com",

    email: {
        value: "support@klmgroupads.com",
        href: "mailto:support@klmgroupads.com",
        label: "Email us"
    },

    phone: {
        number: "",
        href: "",
        label: "Call us"
    },

    address: {
        full: "Radvanská 1, Bratislava – mestská časť Staré Mesto, 811 01, Slovakia",
        street: "Radvanská 1",
        city: "Bratislava – mestská časť Staré Mesto",
        zip: "811 01",
        country: "Slovakia"
    },

    assets: {
        logo: {
            full: "./assets/icons/logo-klm-group.svg",
            symbol: "./assets/icons/logo-klm-symbol.svg"
        },

        images: {
            hero: "./assets/images/hero-klm-agency.png",
            about: "./assets/images/about-strategy.jpg",
            contact: "./assets/images/contact-klm-group.png"
        },

        icons: {
            email: "./assets/icons/icon-email.svg",
            phone: "./assets/icons/icon-phone.svg",
            location: "./assets/icons/icon-location.svg",
            check: "./assets/icons/icon-check.svg",
            arrow: "./assets/icons/icon-arrow.svg"
        }
    },

    navigation: [
        {
            label: "Home",
            href: "index.html#home"
        },
        {
            label: "About",
            href: "index.html#about"
        },
        {
            label: "Services",
            href: "index.html#services"
        },
        {
            label: "Process",
            href: "index.html#process"
        },
        {
            label: "Our Approach",
            href: "index.html#approach"
        },
        {
            label: "Contact",
            href: "index.html#contact"
        }
    ],

    services: [
        {
            id: "google-ads",
            number: "01",
            title: "Google Ads",
            shortTitle: "Google Ads",
            href: "google-ads.html",
            icon: "./assets/icons/icon-google-ads.png",
            image: "./assets/images/service-google-ads.jpg",
            heroImage: "./assets/images/google-ads-hero.png",
            pageTitle: "Google Ads Management",
            metaTitle: "Google Ads Management | KLM Group",
            metaDescription:
                "KLM Group creates and manages Google Ads campaigns designed for clearer structure, search intent targeting, tracking, and ongoing optimization.",
            summary:
                "Paid search campaigns structured around intent, budget clarity, conversion tracking, and ongoing optimization.",
            heroHeadline: "Google Ads Campaigns Built For Clearer Performance",
            heroIntro:
                "KLM Group creates and manages Google Ads campaigns designed to help businesses reach high-intent audiences, structure budgets more clearly, and improve conversion paths through continuous optimization.",
            ctaText: "Ready to build a cleaner Google Ads structure?"
        },
        {
            id: "seo-optimization",
            number: "02",
            title: "SEO Optimization",
            shortTitle: "SEO",
            href: "seo-optimization.html",
            icon: "./assets/icons/icon-seo.png",
            image: "./assets/images/service-seo-optimization.jpg",
            heroImage: "./assets/images/seo-optimization-hero.png",
            pageTitle: "SEO Optimization",
            metaTitle: "SEO Optimization | KLM Group",
            metaDescription:
                "KLM Group helps businesses improve organic search visibility through technical SEO, keyword research, content structure, and on-page optimization.",
            summary:
                "Organic visibility improvements through technical clarity, content structure, keyword planning, and on-page refinement.",
            heroHeadline: "SEO Built For Search Visibility And Long-Term Growth",
            heroIntro:
                "KLM Group helps businesses improve search visibility through technical SEO, content structure, keyword planning, and on-page optimization.",
            ctaText: "Ready to strengthen your search visibility?"
        },
        {
            id: "social-media-marketing",
            number: "03",
            title: "Social Media Marketing",
            shortTitle: "Social Media",
            href: "social-media-marketing.html",
            icon: "./assets/icons/icon-social-media.png",
            image: "./assets/images/service-social-media-marketing.png",
            heroImage: "./assets/images/social-media-marketing-hero.png",
            pageTitle: "Social Media Marketing",
            metaTitle: "Social Media Marketing | KLM Group",
            metaDescription:
                "KLM Group helps businesses build stronger social media presence through content planning, creative direction, campaign structure, and audience-focused messaging.",
            summary:
                "Strategic social content, creative direction, campaign messaging, and audience communication.",
            heroHeadline: "Social Media Marketing With Strategy Behind Every Post",
            heroIntro:
                "KLM Group helps businesses build stronger social media presence through content planning, campaign structure, creative direction, and audience-focused messaging.",
            ctaText: "Ready to make your social presence more strategic?"
        },
        {
            id: "web-design",
            number: "04",
            title: "Web Design",
            shortTitle: "Web Design",
            href: "web-design.html",
            icon: "./assets/icons/icon-web-design.png",
            image: "./assets/images/service-web-design.png",
            heroImage: "./assets/images/web-design-hero.png",
            pageTitle: "Web Design",
            metaTitle: "Web Design | KLM Group",
            metaDescription:
                "KLM Group designs modern websites with clear structure, responsive layouts, conversion-focused UX, and strong visual direction.",
            summary:
                "Modern websites with clean visuals, responsive structure, strong messaging, and conversion-focused user journeys.",
            heroHeadline: "Web Design Built To Look Sharp And Convert Better",
            heroIntro:
                "KLM Group designs modern websites that combine clean visuals, clear structure, strong messaging, and conversion-focused user journeys.",
            ctaText: "Ready to make your website work harder?"
        },
        {
            id: "conversion-boost",
            number: "05",
            title: "Conversion Boost",
            shortTitle: "Conversion",
            href: "conversion-boost.html",
            icon: "./assets/icons/icon-conversion.png",
            image: "./assets/images/service-conversion-boost.jpg",
            heroImage: "./assets/images/conversion-boost-hero.png",
            pageTitle: "Conversion Boost",
            metaTitle: "Conversion Boost | KLM Group",
            metaDescription:
                "KLM Group helps improve digital journeys through landing page improvements, CTA structure, form optimization, funnel clarity, and conversion-focused testing ideas.",
            summary:
                "Landing page, CTA, form, funnel, and message improvements designed to make digital journeys clearer.",
            heroHeadline: "Conversion Optimization For Stronger Digital Journeys",
            heroIntro:
                "KLM Group helps businesses improve how users move from interest to action through landing page improvements, clearer messaging, form optimization, and conversion-focused testing.",
            ctaText: "Ready to improve the path from visit to action?"
        },
        {
            id: "local-seo",
            number: "06",
            title: "Local SEO",
            shortTitle: "Local SEO",
            href: "local-seo.html",
            icon: "./assets/icons/icon-local-seo.png",
            image: "./assets/images/service-local-seo.png",
            heroImage: "./assets/images/local-seo-hero.png",
            pageTitle: "Local SEO",
            metaTitle: "Local SEO | KLM Group",
            metaDescription:
                "KLM Group helps local businesses improve online visibility through local search optimization, business profile guidance, location-focused content, and search presence structure.",
            summary:
                "Local search visibility, business profile guidance, local keyword planning, and location-focused content strategy.",
            heroHeadline:
                "Local SEO For Businesses That Need Stronger Local Visibility",
            heroIntro:
                "KLM Group helps local businesses improve online visibility through local search optimization, business profile improvements, location-focused content, and search presence structure.",
            ctaText: "Ready to strengthen your local search presence?"
        }
    ],

    legalLinks: [
        {
            label: "Privacy Policy",
            href: "privacy-policy.html"
        },
        {
            label: "Cookie Policy",
            href: "cookie-policy.html"
        },
        {
            label: "Terms of Service",
            href: "terms-of-service.html"
        }
    ],

    footer: {
        description:
            "KLM Group is a digital marketing and advertising agency helping businesses grow through paid ads, SEO, social media marketing, web design, and conversion-focused digital strategy.",
        copyright:
            "© 2026 KLM Group. All rights reserved."
    },

    disclaimer:
        "Marketing results may vary based on industry, competition, budget, website quality, offer strength, market conditions, and campaign history. KLM Group does not guarantee specific rankings, traffic volume, leads, sales, or revenue outcomes.",

    cookieBanner: {
        storageKey: "klmGroupPolicyChoice",
        title: "Policy Confirmation",
        text:
            "We use cookies and similar technologies to improve the website experience, understand site performance, and support marketing-related functionality. You can accept or decline non-essential cookies.",
        acceptText: "Accept",
        declineText: "Decline"
    },

    forms: {
        serviceOptions: [
            "Google Ads",
            "SEO Optimization",
            "Social Media Marketing",
            "Web Design",
            "Conversion Boost",
            "Local SEO"
        ],
        successMessage:
            "Thank you. Your request has been received and KLM Group will review your message.",
        errorMessage:
            "Please complete all required fields correctly before sending your request.",
        policyText:
            "I agree to the Privacy Policy, Cookie Policy, and Terms of Service."
    },

    pageMeta: {
        "index.html": {
            title: "KLM Group | Digital Marketing & Advertising Agency",
            description:
                "KLM Group is a digital marketing and advertising agency helping businesses grow through Google Ads, SEO, social media marketing, web design, and conversion-focused digital strategy."
        },
        "google-ads.html": {
            title: "Google Ads Management | KLM Group",
            description:
                "KLM Group creates and manages Google Ads campaigns designed for clearer structure, search intent targeting, tracking, and ongoing optimization."
        },
        "seo-optimization.html": {
            title: "SEO Optimization | KLM Group",
            description:
                "KLM Group helps businesses improve organic search visibility through technical SEO, keyword research, content structure, and on-page optimization."
        },
        "social-media-marketing.html": {
            title: "Social Media Marketing | KLM Group",
            description:
                "KLM Group helps businesses build stronger social media presence through content planning, creative direction, campaign structure, and audience-focused messaging."
        },
        "web-design.html": {
            title: "Web Design | KLM Group",
            description:
                "KLM Group designs modern websites with clear structure, responsive layouts, conversion-focused UX, and strong visual direction."
        },
        "conversion-boost.html": {
            title: "Conversion Boost | KLM Group",
            description:
                "KLM Group helps improve digital journeys through landing page improvements, CTA structure, form optimization, funnel clarity, and conversion-focused testing ideas."
        },
        "local-seo.html": {
            title: "Local SEO | KLM Group",
            description:
                "KLM Group helps local businesses improve online visibility through local search optimization, business profile guidance, location-focused content, and search presence structure."
        },
        "privacy-policy.html": {
            title: "Privacy Policy | KLM Group",
            description:
                "Read the KLM Group Privacy Policy for information about how website form data, cookies, analytics, and communications may be handled."
        },
        "cookie-policy.html": {
            title: "Cookie Policy | KLM Group",
            description:
                "Read the KLM Group Cookie Policy to understand how cookies and similar technologies may be used on this website."
        },
        "terms-of-service.html": {
            title: "Terms of Service | KLM Group",
            description:
                "Read the KLM Group Terms of Service for information about website use, marketing service limitations, and result disclaimers."
        }
    }
};

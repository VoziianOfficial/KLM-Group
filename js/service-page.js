"use strict";

(function () {
    const config = window.SITE_CONFIG;

    if (!config) {
        console.error("SITE_CONFIG is missing. Make sure ./js/config.js loads before ./js/service-page.js.");
        return;
    }

    const SERVICE_PAGE_CONTENT = {
        "google-ads": {
            category: "Paid Search",
            badge: "Google Ads Management",
            floatingLabel: "Campaign Structure",
            floatingTitle: "Intent-led ads",
            floatingText: "Search campaigns built around keywords, budget clarity, tracking, and ongoing optimization.",
            overviewLead:
                "Google Ads works best when campaign structure, search intent, ad copy, budget control, and conversion tracking are aligned from the beginning.",
            overviewCopy:
                "KLM Group creates and manages Google Ads campaigns designed to help businesses reach people actively searching for relevant products or services. The focus is on clean account structure, clear campaign logic, practical tracking, and ongoing optimization based on performance data.",
            overviewText:
                "Paid search can move quickly, but it still needs a careful structure. We help businesses organize campaigns, keywords, ads, budgets, and landing page paths so performance is easier to understand and improve.",
            metrics: [
                {
                    value: "01",
                    label: "Search intent and keyword planning"
                },
                {
                    value: "02",
                    label: "Campaign and budget structure"
                },
                {
                    value: "03",
                    label: "Tracking, reporting, and optimization"
                }
            ],
            whatWeDo: [
                {
                    title: "Search Campaign Setup",
                    text: "We structure campaigns around business goals, service categories, audience intent, and clear account organization."
                },
                {
                    title: "Keyword Planning",
                    text: "We research and organize keywords to support relevant search demand and reduce unnecessary traffic waste."
                },
                {
                    title: "Ad Copy Structure",
                    text: "We write and refine ad messaging to connect search intent with the business offer and next-step action."
                },
                {
                    title: "Budget And Bidding Strategy",
                    text: "We help shape budget allocation and bidding logic so campaigns are easier to monitor and adjust."
                },
                {
                    title: "Conversion Tracking",
                    text: "We review or support tracking setup so key actions can be measured more clearly."
                },
                {
                    title: "Performance Optimization",
                    text: "We review search terms, campaign data, landing pages, and conversion signals to guide improvements."
                }
            ],
            whyTitle: "Why Google Ads Matters",
            whyText:
                "Paid search can place your business in front of people who are already looking for related products or services. Strong structure, clean tracking, and ongoing optimization help campaigns become easier to measure and improve without relying on guesswork.",
            valueLabel: "Paid Search Value",
            valueNumber: "6",
            valueText:
                "Core campaign areas can be organized and optimized across keywords, ads, budgets, landing pages, tracking, and reporting.",
            workSteps: [
                {
                    title: "Discovery & Account Review",
                    text: "We review the business goals, offer, audience, market, current campaigns, and available tracking."
                },
                {
                    title: "Campaign Structure",
                    text: "We organize campaigns, ad groups, keywords, negative keywords, budgets, and conversion paths."
                },
                {
                    title: "Launch & Tracking",
                    text: "We prepare ads, align landing pages, check tracking signals, and support campaign launch."
                },
                {
                    title: "Optimization & Reporting",
                    text: "We review campaign data, search terms, conversion activity, and budget use to guide refinements."
                }
            ],
            outcomes: [
                {
                    title: "Campaign Clarity",
                    text: "Cleaner account organization makes performance easier to review."
                },
                {
                    title: "Qualified Traffic",
                    text: "Keyword and intent planning can support more relevant visitor flow."
                },
                {
                    title: "Search Intent Targeting",
                    text: "Ads can be aligned with what people are actively searching for."
                },
                {
                    title: "Budget Control",
                    text: "Structured campaigns make spend easier to monitor and adjust."
                },
                {
                    title: "Conversion Tracking",
                    text: "Key actions can become easier to measure and compare."
                },
                {
                    title: "Reporting Visibility",
                    text: "Performance data becomes easier to understand and discuss."
                }
            ],
            faqs: [
                {
                    question: "How quickly can Google Ads start bringing traffic?",
                    answer:
                        "Google Ads can begin sending traffic after campaigns are approved and launched. The quality and value of that traffic depends on setup, search demand, budget, competition, ad relevance, and landing page quality."
                },
                {
                    question: "Do you guarantee leads or sales?",
                    answer:
                        "No. Marketing outcomes are not guaranteed. Leads, sales, revenue, and conversion volume depend on many factors, including market conditions, budget, offer strength, website quality, competition, and campaign history."
                },
                {
                    question: "Can you improve an existing Google Ads account?",
                    answer:
                        "Yes. KLM Group can review existing campaign structure, keywords, search terms, ads, conversion tracking, budget distribution, and landing page alignment to identify improvement opportunities."
                },
                {
                    question: "Do you provide reports?",
                    answer:
                        "Yes. Reporting can focus on campaign structure, traffic quality, conversions, cost patterns, search terms, and optimization decisions so performance is easier to review."
                }
            ],
            ctaTitle: "Ready to build a cleaner Google Ads structure?",
            ctaText:
                "Tell KLM Group about your goals, budget, and current campaigns so we can help shape the next step with clearer paid search strategy."
        },

        "seo-optimization": {
            category: "Organic Search",
            badge: "SEO Optimization",
            floatingLabel: "Search Visibility",
            floatingTitle: "Structured SEO",
            floatingText: "Technical clarity, keyword planning, on-page structure, and search performance monitoring.",
            overviewLead:
                "SEO becomes stronger when technical foundations, content structure, keyword relevance, and internal page signals work together.",
            overviewCopy:
                "KLM Group helps businesses improve search visibility through technical SEO review, keyword planning, on-page optimization, content structure, internal linking, and search performance monitoring. The goal is to make the website easier for users and search engines to understand.",
            overviewText:
                "Organic growth takes structure and consistency. We focus on improving page clarity, content relevance, technical health, and internal pathways so search visibility can be built over time.",
            metrics: [
                {
                    value: "01",
                    label: "Technical SEO and site clarity"
                },
                {
                    value: "02",
                    label: "Keyword and content structure"
                },
                {
                    value: "03",
                    label: "Monitoring and ongoing refinement"
                }
            ],
            whatWeDo: [
                {
                    title: "Technical SEO Review",
                    text: "We review crawlability, page basics, metadata, indexing signals, mobile usability, and technical clarity."
                },
                {
                    title: "Keyword Research",
                    text: "We identify relevant search themes that connect business services with user demand."
                },
                {
                    title: "On-Page Optimization",
                    text: "We improve titles, descriptions, headings, content hierarchy, internal signals, and page relevance."
                },
                {
                    title: "Content Structure",
                    text: "We help organize website content so key topics are easier to understand and navigate."
                },
                {
                    title: "Internal Linking",
                    text: "We plan internal links to support stronger page relationships and clearer user journeys."
                },
                {
                    title: "Search Performance Monitoring",
                    text: "We review search data and page performance to guide future improvements."
                }
            ],
            whyTitle: "Why SEO Matters",
            whyText:
                "SEO helps businesses become easier to discover when people search for relevant products, services, and information. Strong SEO is built through structure, clarity, content quality, technical consistency, and patient improvement over time.",
            valueLabel: "SEO Value",
            valueNumber: "SEO",
            valueText:
                "Search visibility improves through technical clarity, content relevance, internal structure, and regular performance review.",
            workSteps: [
                {
                    title: "Audit & Baseline",
                    text: "We review current pages, technical signals, content structure, rankings, and search visibility."
                },
                {
                    title: "Research & Planning",
                    text: "We map keyword themes, content opportunities, page priorities, and internal linking needs."
                },
                {
                    title: "Optimization Support",
                    text: "We refine page elements, content structure, metadata, headings, and internal signals."
                },
                {
                    title: "Monitoring & Reporting",
                    text: "We review search performance and identify new opportunities for ongoing SEO improvement."
                }
            ],
            outcomes: [
                {
                    title: "Organic Visibility",
                    text: "Relevant pages can become easier to discover in search."
                },
                {
                    title: "Content Structure",
                    text: "Information becomes clearer for users and search engines."
                },
                {
                    title: "Technical Clarity",
                    text: "Core SEO issues can be identified and prioritized."
                },
                {
                    title: "Search Performance",
                    text: "Tracking helps show which pages and queries need attention."
                },
                {
                    title: "Internal Page Relevance",
                    text: "Better linking can support stronger content relationships."
                },
                {
                    title: "Long-Term Discoverability",
                    text: "SEO builds through consistent refinement over time."
                }
            ],
            faqs: [
                {
                    question: "How long does SEO take?",
                    answer:
                        "SEO usually takes time because search visibility depends on competition, website condition, content quality, technical factors, authority signals, and how search engines process changes."
                },
                {
                    question: "Do you guarantee first-page rankings?",
                    answer:
                        "No. KLM Group does not guarantee specific rankings, traffic volume, or search positions. SEO performance depends on many external and internal factors."
                },
                {
                    question: "Can SEO work with paid ads?",
                    answer:
                        "Yes. SEO and paid ads can support each other. Paid campaigns can help capture immediate demand, while SEO supports longer-term organic visibility and stronger website structure."
                },
                {
                    question: "Do you optimize existing websites?",
                    answer:
                        "Yes. We can review and optimize existing websites, including technical elements, content hierarchy, page metadata, internal links, and keyword alignment."
                }
            ],
            ctaTitle: "Ready to strengthen your search visibility?",
            ctaText:
                "Share your website and business goals with KLM Group so we can help identify practical SEO priorities."
        },

        "social-media-marketing": {
            category: "Social Strategy",
            badge: "Social Media Marketing",
            floatingLabel: "Content Direction",
            floatingTitle: "Strategic posts",
            floatingText: "Social content planned around audience communication, brand consistency, and campaign messaging.",
            overviewLead:
                "Social media works better when every post, campaign idea, and creative direction supports a clear brand message.",
            overviewCopy:
                "KLM Group helps businesses build stronger social media presence through content planning, creative direction, campaign structure, paid social support, brand messaging, and performance review. The goal is to make social content more intentional and easier to connect with business objectives.",
            overviewText:
                "Social media is not only about posting often. It is about creating a consistent presence, communicating value clearly, and supporting the wider marketing system with focused creative ideas.",
            metrics: [
                {
                    value: "01",
                    label: "Audience and platform direction"
                },
                {
                    value: "02",
                    label: "Content planning and messaging"
                },
                {
                    value: "03",
                    label: "Creative and performance review"
                }
            ],
            whatWeDo: [
                {
                    title: "Social Media Strategy",
                    text: "We define platform priorities, audience direction, content themes, and campaign goals."
                },
                {
                    title: "Content Planning",
                    text: "We create content structures and planning systems to support consistent publishing."
                },
                {
                    title: "Creative Campaign Concepts",
                    text: "We shape campaign ideas, visual direction, and messaging angles for social content."
                },
                {
                    title: "Paid Social Support",
                    text: "We support paid social campaign structure, audience thinking, and creative testing ideas."
                },
                {
                    title: "Brand Messaging",
                    text: "We help refine the voice, tone, and value messages used across social platforms."
                },
                {
                    title: "Performance Review",
                    text: "We review content performance and campaign signals to guide future decisions."
                }
            ],
            whyTitle: "Why Social Media Matters",
            whyText:
                "Social media helps brands stay visible, build trust, and communicate value. With a clear strategy, social content can support awareness, engagement, campaign messaging, and stronger customer journeys.",
            valueLabel: "Social Value",
            valueNumber: "360",
            valueText:
                "Social media can support brand awareness, audience communication, creative testing, and customer journey consistency.",
            workSteps: [
                {
                    title: "Audience Analysis",
                    text: "We review the business audience, platform fit, content expectations, and brand positioning."
                },
                {
                    title: "Content Strategy",
                    text: "We plan content pillars, posting themes, campaign messages, and creative structure."
                },
                {
                    title: "Creative Direction",
                    text: "We shape visual and messaging direction so content feels more intentional and consistent."
                },
                {
                    title: "Review & Optimize",
                    text: "We assess content performance and refine future planning based on audience response."
                }
            ],
            outcomes: [
                {
                    title: "Brand Visibility",
                    text: "A consistent presence can keep the brand easier to recognize."
                },
                {
                    title: "Content Consistency",
                    text: "Planning helps avoid random posting and scattered messaging."
                },
                {
                    title: "Audience Communication",
                    text: "Content becomes more connected to audience needs and questions."
                },
                {
                    title: "Campaign Messaging",
                    text: "Social posts can support launches, offers, and wider campaigns."
                },
                {
                    title: "Social Engagement",
                    text: "Clearer content direction can support better audience interaction."
                },
                {
                    title: "Creative Direction",
                    text: "A stronger visual and message system makes content feel more professional."
                }
            ],
            faqs: [
                {
                    question: "Which social platforms should my business use?",
                    answer:
                        "That depends on your audience, content type, industry, goals, and available resources. KLM Group can help evaluate which platforms make the most sense for your business."
                },
                {
                    question: "Do you create content calendars?",
                    answer:
                        "Yes. Content calendars can be created around themes, campaign periods, audience needs, and business priorities."
                },
                {
                    question: "Can social media support lead generation?",
                    answer:
                        "Social media can support awareness, trust, engagement, and campaign journeys, but leads are not guaranteed. Results depend on audience, offer, creative quality, budget, and conversion path."
                },
                {
                    question: "Do you manage paid social campaigns?",
                    answer:
                        "KLM Group can support paid social campaign structure, creative direction, audience planning, and performance review depending on project scope."
                }
            ],
            ctaTitle: "Ready to make your social presence more strategic?",
            ctaText:
                "Tell KLM Group where your brand is active today and what kind of audience you want to reach next."
        },

        "web-design": {
            category: "Web Experience",
            badge: "Web Design",
            floatingLabel: "UX Structure",
            floatingTitle: "Sharper websites",
            floatingText: "Modern layouts, responsive design, clearer messaging, and conversion-focused user journeys.",
            overviewLead:
                "A strong website combines visual polish, clear structure, responsive behavior, persuasive messaging, and easy next steps.",
            overviewCopy:
                "KLM Group designs modern websites that combine clean visuals, strong hierarchy, responsive layouts, clear content structure, and conversion-focused user journeys. The goal is to create a website that looks professional and supports marketing activity more effectively.",
            overviewText:
                "Your website is often the center of your digital marketing system. We focus on making the experience clear, credible, mobile-friendly, and easier for users to act on.",
            metrics: [
                {
                    value: "01",
                    label: "Structure and UX direction"
                },
                {
                    value: "02",
                    label: "Responsive visual design"
                },
                {
                    value: "03",
                    label: "Conversion-focused layouts"
                }
            ],
            whatWeDo: [
                {
                    title: "Website Structure",
                    text: "We plan page hierarchy, navigation, sections, and content flow around user needs and business goals."
                },
                {
                    title: "Landing Page Design",
                    text: "We design focused pages for campaigns, services, offers, and conversion paths."
                },
                {
                    title: "Responsive Design",
                    text: "We create layouts that adapt across desktop, laptop, tablet, mobile, and small mobile screens."
                },
                {
                    title: "Conversion-Focused Layouts",
                    text: "We organize CTAs, trust elements, forms, and content blocks to support user action."
                },
                {
                    title: "UX Improvements",
                    text: "We improve clarity, readability, navigation, spacing, and interaction patterns."
                },
                {
                    title: "Visual Direction",
                    text: "We shape the website look and feel so the brand appears more polished and distinctive."
                }
            ],
            whyTitle: "Why Web Design Matters",
            whyText:
                "A website is often the center of digital marketing. Strong design helps users understand the offer, trust the brand, move through content more easily, and take the next step with less friction.",
            valueLabel: "Website Value",
            valueNumber: "UX",
            valueText:
                "A better website experience can support first impressions, mobile usability, campaign landing pages, and conversion paths.",
            workSteps: [
                {
                    title: "Discovery & Structure",
                    text: "We review brand goals, website needs, services, user journeys, and page requirements."
                },
                {
                    title: "Wireframe & Content Flow",
                    text: "We shape the page order, section rhythm, CTA placement, and content hierarchy."
                },
                {
                    title: "Visual Design",
                    text: "We create a modern design direction with typography, spacing, imagery, color, and components."
                },
                {
                    title: "Responsive QA",
                    text: "We check layout behavior across key breakpoints to reduce broken spacing and usability issues."
                }
            ],
            outcomes: [
                {
                    title: "First Impression",
                    text: "A polished design helps the brand look more credible."
                },
                {
                    title: "User Experience",
                    text: "Clear navigation and structure make pages easier to use."
                },
                {
                    title: "Mobile Usability",
                    text: "Responsive design supports visitors across different screen sizes."
                },
                {
                    title: "Landing Page Clarity",
                    text: "Focused sections can make campaign pages easier to understand."
                },
                {
                    title: "Conversion Paths",
                    text: "Better CTA and form placement can reduce user friction."
                },
                {
                    title: "Brand Trust",
                    text: "Consistent visuals and messaging can make the business feel more established."
                }
            ],
            faqs: [
                {
                    question: "Can you redesign an existing website?",
                    answer:
                        "Yes. KLM Group can review an existing website and help redesign its structure, visual direction, page flow, messaging, and responsive behavior."
                },
                {
                    question: "Will the website be mobile-friendly?",
                    answer:
                        "Yes. Responsive behavior is a core part of the design process, including desktop, laptop, tablet, mobile, and small mobile screens."
                },
                {
                    question: "Do you design landing pages for ads?",
                    answer:
                        "Yes. Landing pages can be designed for paid ads, SEO campaigns, service promotions, lead generation, and focused user journeys."
                },
                {
                    question: "Can you connect the website with marketing campaigns?",
                    answer:
                        "Yes. Website structure can be planned to support Google Ads, SEO, social campaigns, tracking, and conversion-focused paths."
                }
            ],
            ctaTitle: "Ready to make your website work harder?",
            ctaText:
                "Share your current website or design goals with KLM Group so we can help shape a sharper digital experience."
        },

        "conversion-boost": {
            category: "Conversion Strategy",
            badge: "Conversion Boost",
            floatingLabel: "User Journey",
            floatingTitle: "Less friction",
            floatingText: "Landing page, CTA, form, messaging, and funnel improvements for clearer paths to action.",
            overviewLead:
                "Conversion optimization focuses on reducing friction between a visitor’s interest and the action you want them to take.",
            overviewCopy:
                "KLM Group helps businesses improve how users move from interest to action through landing page reviews, CTA optimization, form improvement, funnel analysis, messaging refinement, and conversion tracking review. The goal is to make digital journeys clearer and easier to act on.",
            overviewText:
                "Traffic alone is not enough. Conversion-focused improvements help websites and campaigns communicate value clearly, guide visitors more confidently, and make next steps easier to complete.",
            metrics: [
                {
                    value: "01",
                    label: "Landing page and funnel review"
                },
                {
                    value: "02",
                    label: "CTA and form improvements"
                },
                {
                    value: "03",
                    label: "Testing ideas and tracking review"
                }
            ],
            whatWeDo: [
                {
                    title: "Landing Page Review",
                    text: "We review page structure, headline clarity, visual hierarchy, content flow, and CTA placement."
                },
                {
                    title: "CTA Optimization",
                    text: "We refine call-to-action wording, placement, contrast, and relationship to the page message."
                },
                {
                    title: "Form Improvement",
                    text: "We review field count, form layout, validation patterns, policy text, and completion friction."
                },
                {
                    title: "Funnel Analysis",
                    text: "We look at the journey from traffic source to landing page, offer, form, and follow-up path."
                },
                {
                    title: "Messaging Refinement",
                    text: "We improve clarity around the offer, benefits, audience fit, trust signals, and next step."
                },
                {
                    title: "Tracking Review",
                    text: "We check whether important actions are easier to measure and review."
                }
            ],
            whyTitle: "Why Conversion Optimization Matters",
            whyText:
                "Traffic alone is not enough. Conversion-focused improvements help websites and campaigns turn more visitors into inquiries, calls, bookings, or other meaningful actions by making the path from interest to action clearer.",
            valueLabel: "Conversion Value",
            valueNumber: "CRO",
            valueText:
                "Conversion work can support clearer CTAs, simpler forms, stronger messaging, better landing pages, and improved tracking quality.",
            workSteps: [
                {
                    title: "Journey Audit",
                    text: "We review landing pages, forms, CTAs, content flow, and the source-to-action user journey."
                },
                {
                    title: "Friction Mapping",
                    text: "We identify areas where visitors may hesitate, get confused, lose trust, or fail to complete an action."
                },
                {
                    title: "Improvement Plan",
                    text: "We shape practical updates for layout, messaging, CTA structure, form behavior, and tracking."
                },
                {
                    title: "Review & Refine",
                    text: "We review performance signals and recommend further testing or optimization ideas."
                }
            ],
            outcomes: [
                {
                    title: "Form Completion",
                    text: "Forms can become easier to understand and complete."
                },
                {
                    title: "Page Clarity",
                    text: "Visitors can understand the offer and next step faster."
                },
                {
                    title: "CTA Visibility",
                    text: "Primary actions become more noticeable and easier to follow."
                },
                {
                    title: "User Journey Flow",
                    text: "The path from traffic source to action can feel more connected."
                },
                {
                    title: "Campaign Landing Pages",
                    text: "Ad traffic can be sent to clearer, more focused experiences."
                },
                {
                    title: "Tracking Quality",
                    text: "Important actions can be easier to review and compare."
                }
            ],
            faqs: [
                {
                    question: "What is conversion optimization?",
                    answer:
                        "Conversion optimization is the process of improving pages, forms, CTAs, messaging, and user journeys so visitors can move from interest to action more clearly."
                },
                {
                    question: "Can you improve existing landing pages?",
                    answer:
                        "Yes. KLM Group can review existing landing pages and suggest improvements to structure, copy, CTAs, forms, trust elements, and tracking."
                },
                {
                    question: "Do you guarantee more sales?",
                    answer:
                        "No. Sales, leads, conversion rates, and revenue outcomes are not guaranteed. Results depend on traffic quality, market, offer, competition, website, audience, and many other factors."
                },
                {
                    question: "What elements usually affect conversion?",
                    answer:
                        "Common factors include page speed, headline clarity, offer strength, CTA placement, form friction, trust signals, mobile usability, audience fit, and tracking accuracy."
                }
            ],
            ctaTitle: "Ready to improve the path from visit to action?",
            ctaText:
                "Tell KLM Group where users currently drop off and what actions matter most to your business."
        },

        "local-seo": {
            category: "Local Search",
            badge: "Local SEO",
            floatingLabel: "Local Discovery",
            floatingTitle: "City visibility",
            floatingText: "Local search structure, profile guidance, location content, and service-area relevance.",
            overviewLead:
                "Local SEO helps businesses become easier to discover when people search in specific cities, regions, or service areas.",
            overviewCopy:
                "KLM Group helps local businesses improve online visibility through local search optimization, business profile guidance, local keyword planning, location page strategy, local content structure, citation consistency guidance, and review visibility strategy.",
            overviewText:
                "Local visibility depends on relevance, location signals, business profile quality, content clarity, and consistent search presence. We help organize these pieces into a more focused local search structure.",
            metrics: [
                {
                    value: "01",
                    label: "Local keyword and city planning"
                },
                {
                    value: "02",
                    label: "Business profile and page structure"
                },
                {
                    value: "03",
                    label: "Local visibility monitoring"
                }
            ],
            whatWeDo: [
                {
                    title: "Local Keyword Planning",
                    text: "We identify city, region, service-area, and local intent search themes relevant to the business."
                },
                {
                    title: "Google Business Profile Guidance",
                    text: "We provide guidance for profile clarity, categories, services, descriptions, and business information."
                },
                {
                    title: "Location Page Strategy",
                    text: "We plan location or service-area pages with clearer structure and local relevance."
                },
                {
                    title: "Local Content Structure",
                    text: "We organize content around local services, areas, user questions, and search intent."
                },
                {
                    title: "Citation Consistency Guidance",
                    text: "We help identify where business name, address, and contact details should remain consistent."
                },
                {
                    title: "Review Visibility Strategy",
                    text: "We provide direction for making reviews easier to understand as part of the local trust journey."
                }
            ],
            whyTitle: "Why Local SEO Matters",
            whyText:
                "Local SEO helps businesses become more visible to people searching in specific cities, regions, or service areas. Strong local visibility can support better discovery, clearer customer intent, and a more trustworthy local search presence.",
            valueLabel: "Local Value",
            valueNumber: "MAP",
            valueText:
                "Local SEO can support city-based discovery, profile clarity, location page relevance, and stronger local search presence.",
            workSteps: [
                {
                    title: "Local Visibility Review",
                    text: "We review current local search presence, website structure, business profile quality, and location signals."
                },
                {
                    title: "Profile & Location Strategy",
                    text: "We define improvement priorities for business profile clarity, local keywords, and location pages."
                },
                {
                    title: "Content & Optimization",
                    text: "We organize local content, page structure, internal links, and service-area relevance."
                },
                {
                    title: "Monitoring & Reporting",
                    text: "We review local search signals and identify practical next steps for continued improvement."
                }
            ],
            outcomes: [
                {
                    title: "Local Discovery",
                    text: "The business can become easier to find for relevant local searches."
                },
                {
                    title: "City-Based Visibility",
                    text: "Pages can better support specific city or service-area relevance."
                },
                {
                    title: "Location Page Relevance",
                    text: "Local pages can be structured around clearer search intent."
                },
                {
                    title: "Business Profile Clarity",
                    text: "Profile information can become more complete and consistent."
                },
                {
                    title: "Local Search Presence",
                    text: "Local SEO helps organize the signals that support discovery."
                },
                {
                    title: "Customer Intent Alignment",
                    text: "Content can better match what local users are searching for."
                }
            ],
            faqs: [
                {
                    question: "What is Local SEO?",
                    answer:
                        "Local SEO is the process of improving online visibility for searches connected to specific cities, regions, service areas, or nearby intent."
                },
                {
                    question: "Is Local SEO different from regular SEO?",
                    answer:
                        "Yes. Regular SEO can focus broadly on organic visibility, while Local SEO places more emphasis on business profile quality, local relevance, location pages, reviews, and area-based search intent."
                },
                {
                    question: "Can you help with Google Business Profile?",
                    answer:
                        "Yes. KLM Group can provide guidance for business profile clarity, service categories, descriptions, information consistency, and local search alignment."
                },
                {
                    question: "Do you guarantee map rankings?",
                    answer:
                        "No. KLM Group does not guarantee map rankings, calls, leads, or exact visibility outcomes. Local results depend on competition, location, relevance, profile quality, reviews, search behavior, and other factors."
                }
            ],
            ctaTitle: "Ready to strengthen your local search presence?",
            ctaText:
                "Tell KLM Group where your business operates and which local services matter most."
        }
    };

    document.addEventListener("DOMContentLoaded", initServicePage);

    function initServicePage() {
        if (!document.body.classList.contains("service-page")) return;

        const currentService = getCurrentService();

        if (!currentService) {
            console.warn("No matching service found for this service page.");
            return;
        }

        const content = SERVICE_PAGE_CONTENT[currentService.id];

        if (!content) {
            console.warn(`No service page content found for: ${currentService.id}`);
            return;
        }

        hydrateServicePage(currentService, content);
        renderOtherServices(currentService);
        initServiceRevealEffects();
        initServiceSignalAnimation();
    }

    function getCurrentService() {
        const bodyServiceId = document.body.getAttribute("data-service-id");

        if (bodyServiceId) {
            return config.services.find((service) => service.id === bodyServiceId);
        }

        const currentPage = getCurrentPage();

        return config.services.find((service) => service.href === currentPage);
    }

    function hydrateServicePage(service, content) {
        setText("[data-service-category]", content.category);
        setText("[data-service-badge]", content.badge);
        setText("[data-service-title]", service.heroHeadline);
        setText("[data-service-intro]", service.heroIntro);
        setText("[data-service-breadcrumb-current]", service.title);

        setText("[data-service-floating-label]", content.floatingLabel);
        setText("[data-service-floating-title]", content.floatingTitle);
        setText("[data-service-floating-text]", content.floatingText);

        setText("[data-service-overview-title]", service.title);
        setText("[data-service-overview-text]", content.overviewText);
        setText("[data-service-overview-lead]", content.overviewLead);
        setText("[data-service-overview-copy]", content.overviewCopy);

        setText("[data-service-value-title]", content.whyTitle);
        setText("[data-service-value-text]", content.whyText);
        setText("[data-service-value-label]", content.valueLabel);
        setText("[data-service-value-number]", content.valueNumber);
        setText("[data-service-value-copy]", content.valueText);

        setText("[data-service-cta-title]", content.ctaTitle || service.ctaText);
        setText("[data-service-cta-text]", content.ctaText);

        setImage("[data-service-hero-image]", service.heroImage, `${service.title} by KLM Group`);
        setSelectedServiceOnForms(service.title);

        renderMetrics(content.metrics);
        renderWhatWeDo(content.whatWeDo);
        renderWorkSteps(content.workSteps);
        renderOutcomes(content.outcomes);
        renderFaqs(content.faqs);
    }

    function renderMetrics(metrics) {
        const container = document.querySelector("[data-service-metrics]");
        if (!container || !Array.isArray(metrics)) return;

        container.innerHTML = metrics
            .map((metric) => {
                return `
          <div class="service-overview__metric">
            <strong>${escapeHtml(metric.value)}</strong>
            <span>${escapeHtml(metric.label)}</span>
          </div>
        `;
            })
            .join("");
    }

    function renderWhatWeDo(items) {
        const container = document.querySelector("[data-service-do-grid]");
        if (!container || !Array.isArray(items)) return;

        container.innerHTML = items
            .map((item, index) => {
                return `
          <article class="service-do-card">
            <span class="service-do-card__number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="service-do-card__content">
              <h3 class="service-do-card__title">
                ${escapeHtml(item.title)}
              </h3>

              <p class="service-do-card__text">
                ${escapeHtml(item.text)}
              </p>
            </div>
          </article>
        `;
            })
            .join("");
    }

    function renderWorkSteps(steps) {
        const container = document.querySelector("[data-service-work-grid]");
        if (!container || !Array.isArray(steps)) return;

        container.innerHTML = steps
            .map((step, index) => {
                return `
          <article class="service-work-step">
            <span class="service-work-step__number">
              ${String(index + 1).padStart(2, "0")}
            </span>

            <div class="service-work-step__content">
              <h3 class="service-work-step__title">
                ${escapeHtml(step.title)}
              </h3>

              <p class="service-work-step__text">
                ${escapeHtml(step.text)}
              </p>
            </div>
          </article>
        `;
            })
            .join("");
    }

    function renderOutcomes(outcomes) {
        const container = document.querySelector("[data-service-outcomes-list]");
        if (!container || !Array.isArray(outcomes)) return;

        container.innerHTML = outcomes
            .map((outcome) => {
                return `
          <article class="service-outcome">
            <span class="service-outcome__check" aria-hidden="true">✓</span>

            <div class="service-outcome__content">
              <h3 class="service-outcome__title">
                ${escapeHtml(outcome.title)}
              </h3>

              <p class="service-outcome__text">
                ${escapeHtml(outcome.text)}
              </p>
            </div>
          </article>
        `;
            })
            .join("");
    }

    function renderFaqs(faqs) {
        const container = document.querySelector("[data-service-faq-list]");
        if (!container || !Array.isArray(faqs)) return;

        container.innerHTML = faqs
            .map((faq, index) => {
                const answerId = `service-faq-${index + 1}`;

                return `
          <article class="faq-item" data-faq-item>
            <button 
              class="faq-question" 
              type="button" 
              data-faq-button
              aria-expanded="false"
              aria-controls="${answerId}"
            >
              ${escapeHtml(faq.question)}
            </button>

            <div 
              class="faq-answer" 
              id="${answerId}" 
              data-faq-answer
              aria-hidden="true"
            >
              <div class="faq-answer-inner">
                <p>${escapeHtml(faq.answer)}</p>
              </div>
            </div>
          </article>
        `;
            })
            .join("");

        if (window.KLM && typeof window.KLM.initFaqs === "function") {
            window.KLM.initFaqs();
        }
    }

    function renderOtherServices() {
        const container = document.querySelector("[data-other-services]");

        if (!container || !config.services) return;

        const currentPage = getCurrentPage();

        const services = config.services.filter((service) => {
            const servicePage = service.href.replace("./", "");
            return servicePage !== currentPage;
        });

        container.innerHTML = services
            .map((service, index) => {
                const rawImage =
                    service.image ||
                    service.previewImage ||
                    service.heroImage ||
                    service.cardImage ||
                    "";

                const image = toCssAssetUrl(rawImage);

                return `
                <a 
                    class="other-service-card" 
                    href="${escapeAttribute(service.href)}"
                    style="--service-bg: url('${escapeAttribute(image)}');"
                >
                    <span class="other-service-card__number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 class="other-service-card__title">
                        ${escapeHtml(service.title)}
                    </h3>

                    <span class="other-service-card__link">
                        Explore
                        <span aria-hidden="true">→</span>
                    </span>
                </a>
            `;
            })
            .join("");
    }

    function toCssAssetUrl(path) {
        const value = String(path || "");
        if (!value) return "";

        if (value.startsWith("./assets/")) {
            return `../${value.slice(2)}`;
        }

        if (value.startsWith("assets/")) {
            return `../${value}`;
        }

        return value;
    }

    function setSelectedServiceOnForms(serviceTitle) {
        document.querySelectorAll("[data-service-select]").forEach((select) => {
            select.setAttribute("data-selected-service", serviceTitle);

            Array.from(select.options).forEach((option) => {
                option.selected = option.value === serviceTitle;
            });
        });
    }

    function initServiceRevealEffects() {
        const revealItems = document.querySelectorAll(
            ".service-hero__content, .service-hero__visual, .service-overview__sticky, .service-overview__panel, .service-do-card, .service-value__content, .service-value__visual, .service-work-step, .service-outcome, .faq-item, .other-service-card, .service-cta__panel"
        );

        if (!revealItems.length || prefersReducedMotion()) {
            revealItems.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        revealItems.forEach((item) => {
            item.classList.add("service-reveal-item");
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
        if (document.querySelector("#serviceRevealStyles")) return;

        const style = document.createElement("style");
        style.id = "serviceRevealStyles";
        style.textContent = `
      .service-reveal-item {
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 680ms cubic-bezier(0.16, 1, 0.3, 1),
          transform 680ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .service-reveal-item.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;

        document.head.appendChild(style);
    }

    function initServiceSignalAnimation() {
        const signalCard = document.querySelector(".service-hero__signal-card");
        const heroVisual = document.querySelector(".service-hero__visual");

        if (!signalCard || !heroVisual || prefersReducedMotion()) return;

        let ticking = false;

        const update = () => {
            const rect = heroVisual.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const progress = clamp(1 - rect.top / viewportHeight, 0, 1);

            signalCard.style.transform = `translateY(${progress * 16}px)`;

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

    function setImage(selector, src, alt) {
        document.querySelectorAll(selector).forEach((image) => {
            image.src = src;
            image.alt = alt || "";
        });
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

export const portfolioData = {
  meta: {
    siteName: "QA Portfolio",
    title: "Software Tester Portfolio | 2.9+ Years Experience",
    description:
      "Ice-blue glassmorphism QA portfolio featuring bug tracker, API testing simulator, test case explorer, dashboards, and interactive demos.",
  },
  profile: {
    name: "Ashish Wani",
    role: "Senior Manual QA Engineer",
    tagline: "High-signal human verification for complex systems. Specializing in exploratory risk-distillation and meticulous defect documentation.",
    location: "Mumbai, India",
    email: "ashishwani808@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/ashish-wani-49b238211/",
      github: "",
    },
    ctas: {
      primary: { label: "Explore Portfolio", href: "#projects" },
      secondary: { label: "Download Resume", href: "/Ashish_Wani_Resume.pdf" },
    },
    typingPhrases: [
      "Exploratory System Audits",
      "Risk-Based Regression",
      "Human-Centric UX Validation",
      "Complex RBAC Verification",
      "Data Integrity & SQL Audits",
    ],
    counters: [
      { label: "Stability Index", value: 99.8, suffix: "%" },
      { label: "Bugs Logged", value: 1200, suffix: "+" },
      { label: "Critical Escapes", value: 0, suffix: "" },
    ],
  },
  nav: {
    primary: [
      { id: "home", label: "Home", icon: "home" },
      { id: "about", label: "Persona", icon: "user" },
      { id: "skills", label: "Stack", icon: "spark" },
      { id: "projects", label: "Case Studies", icon: "grid" },
      { id: "qa-lab", label: "Execution Suite", icon: "lab" },
      { id: "experience", label: "History", icon: "timeline" },
      { id: "contact", label: "Collaborate", icon: "mail" },
    ],
    secondary: [],
  },
  about: {
    heading: "Quality is a Human Intelligence Discipline",
    summary:
      "With over 2.6 years of hyper-focused manual QA experience, I don't just 'find bugs'—I act as the ultimate user advocate. My approach goes beyond checklists to perform deep exploratory sessions that uncover the most subtle edge cases. I specialize in breaking complex authorization matrices (RBAC) and ensuring data integrity at the SQL level, ensuring that every release meets the highest standards of stability and human trust.",
    highlights: [
      { id: '1', text: "Designed deep exploratory test plans covering 100% of P0 user-critical paths." },
      { id: '2', text: "Reduced production escapes by 40% via high-cognitive scenario design." },
      { id: '3', text: "Lead end-to-end verification for high-concurrency fintech and e-commerce apps." },
    ],
    capabilities: [
      {
        title: "SDLC Mastery",
        items: [
          "Requirement Analysis",
          "Test Planning",
          "Test Design",
          "Test Environment Setup",
          "Test Execution",
          "Defect Management",
          "Test Reporting",
          "UAT & Release Support",
          "Maintenance & Regression Cycle"
        ],
        color: "sky",
        primary: "#0EA5E9",
        secondary: "#22D3EE",
        primaryAlt: "#0284c7",
        secondaryAlt: "#38bdf8"
      },
      {
        title: "Tested Domains",
        items: [
          "Web / Internet Products",
          "Retail & Commerce",
          "Health, Fitness & Wellness",
          "Transport & Logistics",
          "Media & Entertainment",
          "Education & Learning",
          "Travel & Hospitality",
          "Enterprise / Business Software",
          "Real Estate & Property",
          "Legal & Documentation",
          "Telecom & ISP"
        ],
        color: "emerald",
        primary: "#10B981",
        secondary: "#34D399",
        primaryAlt: "#059669",
        secondaryAlt: "#6ee7b7"
      },
      {
        title: "Backend Validation",
        items: [
          "Validate API-driven systems via Postman",
          "Ensure end-to-end data integrity"
        ],
        color: "violet",
        primary: "#8B5CF6",
        secondary: "#A78BFA",
        primaryAlt: "#7c3aed",
        secondaryAlt: "#c4b5fd"
      },
      {
        title: "Collaboration in Agile/Scrum",
        items: [
          "Participate in Sprint planning, grooming, stand-ups",
          "Understand user stories & acceptance criteria",
          "Work closely with Dev, BA, DevOps"
        ],
        color: "amber",
        primary: "#F59E0B",
        secondary: "#FBBF24",
        primaryAlt: "#d97706",
        secondaryAlt: "#fcd34d"
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Types Of Testing",
        items: [
          { name: "Functional Testing", level: 92 },
          { name: "Smoke Testing", level: 95 },
          { name: "Sanity Testing", level: 95 },
          { name: "Regression Testing", level: 92 },
          { name: "Re-testing", level: 95 },
          { name: "Exploratory Testing", level: 93 },
          { name: "Ad-hoc Testing", level: 85 },
          { name: "End-to-End (E2E) Testing", level: 90 },
          { name: "Usability Testing", level: 88 },
          { name: "API Testing", level: 90 },
          { name: "UAT Support", level: 80 }
        ],
      },
      {
        title: "Test Management & API Testing",
        items: [
          { name: "Jira- Create/track bugs, tasks, sprints", level: 94 },
          { name: "Postman – Send requests, validate responses", level: 92 }
        ],
      },
      {
        title: "Database & Cross-Browser Testing",
        items: [
          { name: "MongoDB", level: 68 },
          { name: "BrowserStack", level: 85 },
          { name: "Chrome DevTools (built into browser)", level: 95 }
        ],
      },
      {
        title: "Reporting, Evidence & Collaboration",
        items: [
          { name: "Microsoft Excel – Test cases, RTM, reports", level: 90 },
          { name: "Microsoft Word – Test plans", level: 85 },
          { name: "Google Sheets", level: 88 },
          { name: "Screen Recorder", level: 98 },
          { name: "Chrome DevTools – Network, console, elements", level: 95 },
          { name: "Google Meet", level: 95 }
        ],
      },
    ],
  },
  experience: [
    {
      company: "HYPLAP IT SOLUTION PVT LTD",
      role: "Quality Assurance Engineer",
      logo: "/hyplaplogo.png",
      period: "2025 — PRESENT",
      location: "Navi Mumbai, IN",
      product: "Custom Software",
      achievements: [
        "Led end-to-end testing for multiple client products (mobile apps, admin panels, and APIs), ensuring stable releases across booking, marketplace, logistics, and legal drafting platforms.",
        "Improved requirement clarity and defect prevention by collaborating with product and development teams and using AI to analyze PRDs, identify gaps, and convert them into actionable test scenarios.",
        "Reduced regression effort by 30% by creating reusable test suites and using AI to quickly validate impact areas after every build.",
        "Owned complete regression cycles and UAT support, enabling faster deployments and higher client confidence in releases.",
        "Prepared detailed case studies, defect reports, DSRs, and test documentation used for client demos, audits, and internal quality tracking."
      ],
      stack: ["Manual Testing", "Postman", "JIRA"],
    },
    {
      company: "HT MEDIA LABS",
      role: "QA Engineer",
      logo: "/htmedialogo.png",
      period: "2023 — 2025",
      location: "Navi Mumbai, IN",
      product: "OTTPlay",
      achievements: [
        "Reduced production defects by 40% by designing thorough positive, negative, and edge test scenarios across Android, iOS, Web Admin, and API modules.",
        "Owned end-to-end testing of complex subscription, wallet, coupon, auto-renewal, and RBAC modules used by multiple ISP partners, ensuring stable releases.",
        "Detected and reported 150+ critical and major defects before release through deep functional, regression, and cross-platform testing.",
        "Improved regression efficiency by 30% by creating reusable test suites and structured test documentation for faster release cycles.",
        "Collaborated with developers and product teams to close requirement gaps early, preventing rework and improving overall product quality and client satisfaction."
      ],
      stack: ["Manual Testing", "Postman", "MongoDB",],
    },
  ],
  certificates: [
    {
      id: "cert-01",
      title: "Certified Manual Testing Professional",
      issuer: "Net Tech India",
      date: "2023",
      validationId: "QA-MT-99281",
      description: "“Manual Testing | STLC | SDLC | Test Case Design | Defect Lifecycle | Regression Testing | Smoke Testing.”\n“Defect Tracking and Test Management using Jira Software | API Testing with Postman ”\n“Agile/Scrum Testing | Sprint Execution | Bug Triage | Requirement Analysis | Test Scenario Writing | UAT Support.”",
      link: "#",
      image: "/manual-cert.jpg",
      icon: "verified"
    },
    {
      id: "cert-02",
      title: "Certified Automation Testing Professional",
      issuer: "Net Tech India",
      date: "2024",
      validationId: "API-PX-44012",
      description: "“Test Automation Fundamentals | Selenium WebDriver | Java | Locators | Waits | Test Scripts | Page Object Model.”\n“UI Automation using Selenium | TestNG | Maven | Cross-Browser Testing | Element Handling | Assertions.”\n“Automation Framework Basics | Smoke & Regression Suite | Reporting | Debugging Test Failures.”",
      link: "#",
      image: "/automationcert.png",
      icon: "api"
    }
  ],
  projects: [
    {
      title: "OTTplay",
      tag: "OTT Aggregation Platform",
      image: "/ottplaylogo.png",
      summary: "QA Case Study: End-to-End Validation of OTTplay Content Discovery, Aggregation, and Deep Linking",
      tech: ["Manual Testing", "Postman", "Cross-Platform", "Log Analysis", "Regression"],
      caseStudy: {
        client: "OTTplay",
        industry: "Media & Entertainment",
        type: "Content Discovery & Aggregation Platform",
        context: "OTTplay is an OTT content discovery and aggregation platform that helps users find what to watch across multiple streaming services like Netflix, Prime Video, Hotstar, Zee5, SonyLIV, and more — all in one place. The platform does not stream content, but intelligently: Aggregates content metadata from multiple OTT providers; Allows users to search movies/shows across platforms; Redirects users to the respective OTT app for playback; Provides personalized recommendations; Manages user preferences, watchlists, notifications, and deep links. Because the system depends on real-time metadata sync, deep linking, multiple device types, and third-party OTT integrations, quality assurance played a critical role.",
        objective: "As a tester, the primary goals were: Ensure accurate content aggregation from multiple OTT sources. Validate deep linking and redirection to OTT apps. Test cross-platform behavior (Android, iOS, Web). Verify recommendation logic and search accuracy. Ensure seamless user experience with watchlists, reminders, and notifications. Validate performance with large content datasets. Test edge cases around app redirection, login states, and device compatibility.",
        scope: [
          "Content Aggregation & Metadata Validation (title, genre, cast, language, duplicate handling)",
          "Smart Search & Filters (Trending, Popular, Recommended, exact/partial typo tolerance)",
          "Deep Linking & OTT Redirection (Android, iOS, Web fallback behavior)",
          "Watchlist & Personalization (Sync across devices, metric impacts)",
          "Notifications & Reminders (Push direction, background state edge-cases)",
          "Cross-Platform & Device Testing (UI/UX differences, tablet compatibility)",
          "API & Backend Testing (Payload exactness, OTT provider response errors)",
          "Performance & Large Data Handling (Thousands of content records, memory usage limiters)"
        ],
        challenges: [
          { title: "Deep Linking Failures", desc: "Deep link failing when OTT app updated to a newer version. iOS redirection opening browser instead of OTT app." },
          { title: "Incorrect Asset Redirection", desc: "Incorrect redirection to wrong season/episode." },
          { title: "Data Synching & Tokenization", desc: "Watchlist not syncing across devices due to token mismatch. Notifications opening home screen instead of content page." },
          { title: "Metadata Delays", desc: "Duplicate content cards due to metadata sync delay. Search showing removed/expired OTT content." }
        ],
        approach: [
          "Manual Functional Testing",
          "API Testing using Postman",
          "Regression Suite Preparation",
          "Cross-device testing",
          "Log analysis for deep link failures",
          "Test case design for edge scenarios",
          "Collaboration with backend team for metadata validation"
        ],
        scenarios: [
          "Handling third-party dependencies requires strong edge case coverage",
          "Deep linking and redirection testing is critical in aggregator apps",
          "Metadata-driven platforms need continuous validation",
          "Cross-platform behavior can differ significantly for the same feature",
          "API validation is as important as UI validation in content platforms"
        ],
        outcomes: [
          "Reduced deep link failure rate significantly before production release",
          "Improved accuracy of search and recommendations",
          "Ensured reliable watchlist and notification experience",
          "Prevented stale/invalid content from being shown to users",
          "Stabilized app performance across devices"
        ]
      }
    },
    {
      title: "BULLSEYE CARGO",
      tag: "Operational Flow",
      image: "/bullseyecargologo.png",
      summary: "QA Case Study: Ensuring Reliability of Bullseye Cargo’s Real-Time Logistics Platform",
      tech: ["Laravel", "Ionic", "SMS/Email/In-app Notifications", "AI Summaries"],
      caseStudy: {
        client: "Bullseye Cargo",
        industry: "Logistics",
        type: "Mobile App / Custom Web App / Admin Panel",
        context: "Bullseye Cargo implemented a connected logistics platform built by HYPLAP to manage LRs, trips, vehicles, drivers, alerts, dashboards, and financial records in one place. The system included a role-based admin panel and a 4-role mobile app for Client, Vendor, Supervisor, and Driver. As a QA, my responsibility was to validate complete operational journeys across roles, devices, and workflows to ensure the platform worked reliably in real logistics conditions.",
        takeaways: [
          "Validated end-to-end LR to trip to payment journeys",
          "Ensured strict role-based visibility and access control",
          "Verified real-time sync between mobile app and admin panel",
          "Covered exception scenarios like delays, breakdowns, and reassignment",
          "Improved usability through focused UI/UX validation"
        ],
        challenges: [
          { title: "Multiple roles interacting with the same trips and data" },
          { title: "Live updates from mobile needing instant reflection on admin dashboards" },
          { title: "Correct triggering of SMS, email, and in-app alerts" },
          { title: "Workflow movement across branches without manual follow-up" },
          { title: "Accurate linkage of invoices, expenses, and payments with trips" },
          { title: "Making the system easy for operations teams with minimal training" }
        ],
        approach: [
          "Tested complete LR → Trip → Driver update → Completion → Invoice → Payment flow",
          "Performed RBAC checks for Client, Vendor, Supervisor, Driver, and Admin",
          "Cross-verified data between mobile screens and admin dashboards",
          "Validated alerts for milestones and exception cases",
          "Checked dashboards, reports, and AI summaries for data accuracy",
          "Performed usability and device-level validation"
        ],
        outcomes: [
          "Smooth go-live with no major workflow failures",
          "Correct data visibility for every role",
          "Reliable real-time status updates across system",
          "Reduced production issues related to alerts and trip updates",
          "Faster onboarding due to clear and tested interface",
          "Accurate dashboards and financial records for management use"
        ]
      }
    },
    {
      title: "SOMEWHR",
      tag: "Wellness Marketplace",
      image: "/somewhrlogo.png",
      summary: "QA Case Study: Ensuring Consistency and Reliability of a Wellness Marketplace Platform",
      tech: ["Ionic", "Angular", "Node.js", "MongoDB", "Payment Gateway", "SMS/Email/Push Notifications"],
      caseStudy: {
        client: "Somewhr",
        industry: "Wellness & Fitness Marketplace",
        type: "Two-Sided Marketplace (Hybrid Mobile App + Web Partner Portal)",
        context: "Somewhr is a two-sided wellness marketplace platform connecting users with studios and freelancers offering Pilates, yoga, recovery, breathwork, and sound healing. HYPLAP built a fully customized hybrid app and partner portal to unify discovery, booking, payments, notifications, coupons, and analytics into one ecosystem. As a QA Tester, my responsibility was to validate seamless interaction between user app, partner app, admin panel, payments, notifications, and analytics across iOS, Android, and web from a single codebase.",
        takeaways: [
          "Validated end-to-end booking flow from discovery → pass purchase → studio booking → confirmation",
          "Ensured payment accuracy and partner payout logic across multiple scenarios",
          "Tested real-time slot availability to prevent double bookings",
          "Verified coupon, package, and Discovery Pass pricing logic",
          "Confirmed cross-platform consistency (Android, iOS, Web) from one Ionic + Angular codebase"
        ],
        challenges: [
          { title: "Complex flows between user app, partner portal, and admin" },
          { title: "Real-time booking conflicts when multiple users book the same slot" },
          { title: "Validating Discovery Pass logic across 3 different studios" },
          { title: "Testing coupon combinations, packages, and pricing edge cases" },
          { title: "Ensuring notifications (SMS, email, push) trigger at correct booking stages" },
          { title: "Payment gateway scenarios: success, failure, retry, refund, partial usage" },
          { title: "Role-based testing for user, studio partner, freelancer, admin" },
          { title: "Cross-device and cross-platform UI/UX consistency" },
          { title: "Data accuracy in AI analytics dashboards based on live bookings" }
        ],
        approach: [
          "Wrote end-to-end test scenarios covering discovery to booking completion",
          "Performed integration testing between apps, portal, admin, and payment systems",
          "Executed concurrency test cases for slot booking conflicts",
          "Validated Discovery Pass usage rules across multiple studios",
          "Tested coupon engine with boundary values and invalid combinations",
          "Verified notification triggers for booking, reminders, cancellations",
          "Conducted cross-platform testing on Android, iOS, and web browsers",
          "Performed database validation for bookings, payments, and schedules",
          "Supported UAT with real partners to simulate live studio operations",
          "Ran multiple regression cycles after feature enhancements"
        ],
        outcomes: [
          "Zero double-booking issues after production release",
          "Accurate pricing and payment calculations for passes, coupons, and packages",
          "Reliable notification system reducing missed appointments",
          "Smooth partner operations with correct schedule and booking visibility",
          "Consistent UI/UX across all devices and platforms",
          "Reduced manual coordination due to system reliability",
          "Stable production rollout with minimal post-live defects"
        ]
      }
    },
    {
      title: "MINISTRY OF PETS",
      image: "/ministryofpetlogo.png",
      tag: "Operations Management",
      summary: "QA Case Study: Verifying a Centralized Multi-Module Retail & Hospital Platform",
      tech: ["Laravel", "MySQL", "AWS", "Razorpay", "SMS/Email Gateway"],
      caseStudy: {
        client: "Ministry of Pets",
        industry: "Pet Care Retail, Hospital & Spa",
        type: "Custom POS + eCommerce + Operations Management System (Web App)",
        context: "Ministry of Pets operated pet stores, a pet hospital, and a pet spa using multiple disconnected tools for billing, inventory, appointments, and records. What began as a request for an eCommerce website evolved into a full-scale, centralized operations platform covering POS, inventory, hospital, spa, accounting, and online sales in one system. As a QA Tester, my role was to ensure this highly integrated platform worked flawlessly across modules, locations, user roles, and real-time data dependencies.",
        takeaways: [
          "Validated real-time inventory sync between POS and eCommerce without data mismatch",
          "Ensured accurate financial reconciliation across cash, card, and online payments",
          "Tested multi-module workflows spanning retail, hospital, and spa in a single system",
          "Verified document auto-generation (POs, invoices, prescriptions, challans) for correctness",
          "Confirmed role-based access for staff, doctors, and admins with zero permission leaks"
        ],
        challenges: [
          { title: "Complex workflows across retail, hospital, and spa sharing the same database" },
          { title: "Real-time stock updates across multiple store locations and website" },
          { title: "Handling concurrent billing at POS while online orders were placed" },
          { title: "Validating appointment scheduling with doctor/staff availability logic" },
          { title: "Ensuring accounting accuracy when transactions came from different channels" },
          { title: "Testing large combinations of products, variants, pet types, categories" },
          { title: "Verifying auto-generated documents with dynamic data population" },
          { title: "Cross-role testing: cashier, admin, doctor, spa staff, inventory manager" }
        ],
        approach: [
          "Designed end-to-end test scenarios covering retail → inventory → accounting → reports",
          "Performed integration testing between POS, eCommerce, hospital, and spa modules",
          "Conducted data validation at database level for stock, billing, and records",
          "Executed payment gateway test cases for Razorpay success/failure/refund scenarios",
          "Tested real-time sync cases: sell offline → reflect online instantly",
          "Validated appointment edge cases: overlaps, cancellations, reschedules",
          "Verified role-based access control for all user types",
          "Performed regression cycles after every module release",
          "Tested SMS/Email notifications triggers for orders and appointments",
          "Conducted UAT support with live scenarios from Ministry of Pets staff"
        ],
        outcomes: [
          "Zero inventory mismatch between stores and website after go-live",
          "100% accurate billing and reconciliation across payment modes",
          "Smooth appointment management for hospital and spa without clashes",
          "Error-free document generation for operational paperwork",
          "Stable system performance even during simultaneous POS and online activity",
          "Reduced manual verification effort by ~50% due to system reliability",
          "Confident production release with minimal post-live issues"
        ]
      }
    },
    {
      title: "KAAMEZY",
      image: "/Logo.png",
      tag: "Home Services",
      summary: "QA Case Study: Validating AI Rate Estimation and Dynamic Workflows in a Service Marketplace",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Socket.io", "MSG91", "Google Maps/Places API"],
      caseStudy: {
        client: "Kaamezy",
        industry: "Home Services & Maid Placement",
        type: "Service Marketplace Website + Operations Admin Panel",
        context: "Kaamezy operates in the household help and maid placement segment where speed, trust, and coordination are critical. HYPLAP built an AI-powered, fully integrated platform covering quote estimation, helper onboarding, request tracking, assignment workflow, trial management, invoicing, and real-time notifications. As a QA Tester, my role was to validate the complete service lifecycle from quote request to maid assignment to invoice generation, ensuring real-time sync between customer site, admin panel, and helpers.",
        takeaways: [
          "Verified AI rate estimation accuracy based on service inputs and location",
          "Ensured dynamic form builder created valid, usable intake forms without code breaks",
          "Tested real-time status updates across users",
          "Validated end-to-end workflow: request → assignment → trial → invoice",
          "Confirmed helper registration and broadcast request flow worked reliably"
        ],
        challenges: [
          { title: "Testing AI-based quote logic with multiple service and location combinations" },
          { title: "Validating admin-created no-code forms for both customers and helpers" },
          { title: "Real-time state changes without sync delays" },
          { title: "Complex workflow for maid assignment and trial period tracking" },
          { title: "Verifying invoice generation after job completion" },
          { title: "Notification triggers via SMS and email at each stage" },
          { title: "Role-based testing for admin, customer, and helper views" },
          { title: "Google Maps/Places API dependency for address and pricing accuracy" }
        ],
        approach: [
          "Designed end-to-end scenarios covering the entire request lifecycle",
          "Performed form validation testing for dynamically created intake forms",
          "Executed location-based test cases for AI quote estimation",
          "Tested real-time sync cases across multiple roles",
          "Validated assignment logic and trial period edge cases",
          "Verified invoice data accuracy post job completion",
          "Tested SMS/email notification triggers for all status changes",
          "Conducted database validation for requests, helpers, and invoices",
          "Supported UAT with real operational scenarios from Kaamezy team",
          "Ran thorough regression testing after admin panel enhancements"
        ],
        outcomes: [
          "Accurate AI-generated quotes with no manual intervention required",
          "Reliable dynamic forms used by ops team without technical support",
          "Zero tracking gaps in request lifecycle after go-live",
          "Smooth maid assignment and trial tracking without confusion",
          "Correct invoice generation aligned with completed jobs",
          "Reduced manual coordination due to dependable real-time updates",
          "Stable production rollout with minimal post-launch issues"
        ]
      }
    },
    {
      title: "ZANE'S CAFE",
      image: "/Zane's_Logo.png",
      tag: "Hospitality & Spa",
      summary: "QA Case Study: Validating a Real-Time Appointment & Service Management Ecosystem",
      tech: ["Android", "iOS", "Admin Panel", "Payment Gateway", "SMS/Email Notifications"],
      caseStudy: {
        client: "Zane’s Cafe",
        industry: "Pet Spa & Café",
        type: "Appointment Booking Mobile App + Admin Workflow System",
        context: "Zane’s Spa operates as a pet spa service center with café for pet parents and others. The entire business depends on appointment scheduling, service management and customer experience. Before the system, bookings were handled manually via calls and WhatsApp, creating confusion, missed appointments, and operational delays. HYPLAP built a mobile app for customer appointment booking and a centralized admin panel to manage spa operations, service slots, and reporting. As a QA Tester, my role was to validate the complete appointment lifecycle and ensure smooth coordination between customer app and internal admin workflows.",
        takeaways: [
          "Validated real-time appointment slot availability",
          "Ensured no double-booking conflicts",
          "Tested seamless flow from booking → confirmation → service completion",
          "Verified Admin panel master data admin panel",
          "Confirmed correct billing and notification triggers"
        ],
        challenges: [
          { title: "Testing real-time slot blocking when multiple users book simultaneously" },
          { title: "Validating staff availability mapping to service types" },
          { title: "Ensuring correct time-slot calculations (buffer time between sessions)" },
          { title: "Testing reschedule and cancellation edge cases" },
          { title: "Verifying notifications (booking confirmation, reminders, cancellations)" },
          { title: "Cross-platform testing on Android and iOS" },
          { title: "Role-based access testing for admin and staff" },
          { title: "Handling peak-time booking load scenarios" }
        ],
        approach: [
          "Designed end-to-end test scenarios covering booking to service completion",
          "Performed concurrency testing to prevent duplicate slot bookings",
          "Validated service duration logic and buffer time calculations",
          "Tested reschedule/cancel flows with refund (if applicable) scenarios",
          "Verified push, SMS, and email notifications at each booking stage",
          "Conducted cross-device and OS compatibility testing",
          "Performed database validation for appointment records",
          "Executed regression cycles after workflow updates",
          "Supported UAT sessions with real staff scheduling scenarios"
        ],
        outcomes: [
          "Zero double-booking issues after go-live",
          "Accurate real-time slot visibility for customers",
          "Smooth internal workflow for staff allocation",
          "Reduced missed appointments due to automated reminders",
          "Faster billing and service tracking",
          "Stable production release with minimal post-launch issues during peak hours"
        ]
      }
    },
    {
      title: "ITEEHA CAFE",
      image: "/iteeha logo.png",
      tag: "Food & Beverage",
      summary: "QA Case Study: Modernizing Customer Experience with Digital Ordering and Loyalty Integration",
      tech: ["Android", "iOS", "Wallet & Loyalty Systems", "Payment Gateway", "Push Notifications"],
      caseStudy: {
        client: "Iteeha Cafe",
        industry: "Food & Beverage / Café",
        type: "Digital Ordering & Loyalty Mobile App + Admin Integration",
        context: "Iteeha Cafe wanted to modernize its customer experience by enabling digital ordering, in-building delivery, and loyalty rewards in a single mobile app. Before the app, orders were manually placed at the counter, and loyalty rewards were tracked separately, resulting in slower service, missed reward points, and operational inefficiencies. HYPLAP built a Flutter-based cross-platform app connected with the admin panel to manage menus, orders, payments, and loyalty points seamlessly. As a QA Tester, my role was to validate the complete ordering and loyalty workflow, ensuring smooth integration across the mobile app, wallet system, and admin panel.",
        takeaways: [
          "Verified live menu browsing and accurate cart management",
          "Ensured correct order placement for pickup and in-building delivery",
          "Validated wallet recharges and secure payments",
          "Tested loyalty rewards, coupons, and offer redemptions",
          "Confirmed notifications for order confirmations, delivery updates, and promotions"
        ],
        challenges: [
          { title: "Testing simultaneous orders for the same menu items during peak hours" },
          { title: "Validating wallet balance updates and loyalty point calculations" },
          { title: "Ensuring real-time synchronization between app and admin panel" },
          { title: "Testing promotional banners, dynamic home screens, and coupon flows" },
          { title: "Cross-platform testing on Android and iOS" },
          { title: "Role-based access testing for admin and staff" },
          { title: "Handling load spikes during promotions or peak hours" }
        ],
        approach: [
          "Designed end-to-end test scenarios covering menu browsing, ordering, payment, and rewards",
          "Conducted concurrency testing to prevent duplicate or conflicting orders",
          "Validated wallet and loyalty point integration with orders",
          "Tested promotional banners, coupons, and reward redemption flows",
          "Verified push notifications, SMS, and email updates at each stage",
          "Performed cross-device and OS compatibility testing",
          "Conducted database validation for orders, payments, and loyalty records",
          "Executed regression cycles after workflow updates",
          "Supported UAT sessions with cafe staff for real-order simulations"
        ],
        outcomes: [
          "Zero order or loyalty calculation errors after go-live",
          "Smooth real-time order placement for pickup and delivery",
          "Accurate wallet and loyalty point tracking",
          "Increased repeat visits due to integrated rewards system",
          "Faster order processing and improved operational efficiency",
          "Stable app performance even during peak hours"
        ]
      }
    },
  ],
  demos: {
    bugTracker: {
      columns: [
        { key: "key", label: "Key" },
        { key: "summary", label: "Summary" },
        { key: "status", label: "Status" },
        { key: "severity", label: "Severity" },
        { key: "module", label: "Module" },
        { key: "updated", label: "Updated" },
      ],
      statuses: ["Open", "In Progress", "Closed"],
      severities: ["High", "Medium", "Low"],
      modules: ["Auth", "RBAC", "Orders", "Payments", "Reports", "Admin"],
      issues: [
        {
          id: "BUG_01",
          summary: "Subscription status 'Inactive' after successful callback",
          status: "Open",
          severity: "High",
          priority: "P1",
          environment: "Chrome 125, Windows 11",
          module: "Payments",
          updated: "2026-03-25",
          steps: [
            "Initiate subscription payment for 'Gold Plan'",
            "Complete payment on Razorpay gateway",
            "Simulate webhook latency for callback",
          ],
          expected: "Subscription should activate immediately.",
          actual: "Status remains 'Inactive' until manual refresh.",
          reportedBy: "Ashish Wani",
          evidence: { type: "note", value: "pay_0x9928" },
        },
        {
          id: "BUG_02",
          summary: "Trip state transition logic bypass in logistics module",
          status: "In Progress",
          severity: "High",
          priority: "P1",
          environment: "Android 14, Pixel 7",
          module: "Logistics",
          updated: "2026-03-22",
          steps: ["Mark Trip #4401 as Delivered", "Send PUT request to /api/trip/status with 'IN_TRANSIT'"],
          expected: "API returns 400 Bad Request.",
          actual: "API returns 200 OK. State sequence integrity compromised.",
          reportedBy: "Ashish Wani",
          evidence: { type: "sql", value: "UPDATE trips SET status='IN_TRANSIT'" },
        },
        {
          id: "BUG_03",
          summary: "Slot double-booking via concurrent API requests",
          status: "Closed",
          severity: "High",
          priority: "P2",
          environment: "Postman v10.x",
          module: "Bookings",
          updated: "2026-03-15",
          steps: ["Open two sessions for same slot", "Execute booking simultaneously"],
          expected: "One request fails with 'Slot Unavailable'.",
          actual: "Both requests allowed; duplicate appointment created.",
          reportedBy: "Ashish Wani",
          evidence: { type: "note", value: "Optimistic locking implemented." },
        },
        {
          id: "BUG_04",
          summary: "Category filters ignored when search query is present",
          status: "Open",
          severity: "Medium",
          priority: "P2",
          environment: "Edge 122, macOS Sonoma",
          module: "Search",
          updated: "2026-03-10",
          steps: ["Search for 'leash'", "Apply 'Premium' category filter"],
          expected: "Results filtered by both query and category.",
          actual: "Global search results displayed; parameters ignored.",
          reportedBy: "Ashish Wani",
          evidence: { type: "note", value: "SearchService missing branch." },
        },
      ],
    },
    apiLab: {
      methods: ["GET", "POST", "PUT", "DELETE"],
      endpoints: [
        {
          id: "ottplay-auth",
          name: "Plan Activation",
          method: "POST",
          url: "/api/v1/subscription/activate",
          description: "Activates a user subscription post-payment callback.",
          requestBody: { orderId: "ORD_7721", couponCode: "WELCOME50" },
          response: {
            status: 200,
            timeMs: 342,
            json: {
              success: true,
              plan: "Gold OTT Bundle",
              expiry: "2027-03-27T11:03:51Z",
              benefits: ["4K Streaming", "Ad-Free", "5 Screens"]
            },
          },
        },
        {
          id: "cargo-update",
          name: "Trip State Update",
          method: "PUT",
          url: "/api/logistics/trips/4401/status",
          description: "Updates trip status in the logistics lifecycle.",
          requestBody: { status: "DELIVERED", timestamp: "2026-03-27T11:03:51Z" },
          response: {
            status: 200,
            timeMs: 188,
            json: {
              tripId: 4401,
              prevStatus: "IN_TRANSIT",
              newStatus: "DELIVERED",
              integrityCheck: "PASSED"
            },
          },
        },
        {
          id: "market-search",
          name: "Studio Discovery",
          method: "GET",
          url: "/api/v1/marketplace/search?category=pilates&city=mumbai",
          description: "Queries the wellness marketplace for partner studios.",
          response: {
            status: 200,
            timeMs: 124,
            json: {
              results: [
                { id: "S_922", name: "Zen Studio", rating: 4.9, slots: 5 },
                { id: "S_925", name: "Core Fitness", rating: 4.7, slots: 2 }
              ],
              total: 12
            },
          },
        },
      ],
    },
    testCases: {
      modules: ["Bookings", "Subscriptions", "Discovery"],
      priorities: ["P0", "P1", "P2"],
      statuses: ["Not Run", "Pass", "Fail", "Blocked"],
      rows: [
        {
          id: "TS_001",
          title: "Verify successful booking for an available slot with valid payment",
          module: "Bookings",
          priority: "P0",
          status: "Pass",
          precondition: "User logged in, slot available",
          testData: "Service: Zumba, Slot: 11:00 AM – 12:00 PM, Card: 4111 1111 1111 1111",
          steps: [
            "Select Zumba service",
            "Select 11:00 AM slot",
            "Proceed to payment",
            "Complete payment",
          ],
          expected: "Booking should be created successfully and should display a confirmation ID after successful payment.",
          actual: "Booking created successfully with confirmation ID BKG20251.",
        },
        {
          id: "TS_002",
          title: "Verify system prevents duplicate booking on multiple taps of booking button",
          module: "Bookings",
          priority: "P0",
          status: "Fail",
          precondition: "On booking confirmation screen",
          testData: "Slot: 12:00 PM – 01:00 PM",
          steps: [
            "Tap \"Confirm Booking\" button rapidly 4–5 times",
          ],
          expected: "System should create only one booking and should ignore multiple taps.",
          actual: "Two bookings created for the same slot due to multiple taps.",
        },
        {
          id: "TS_003",
          title: "Verify fully booked slot is not selectable for booking",
          module: "Bookings",
          priority: "P1",
          status: "Fail",
          precondition: "Slot capacity already reached",
          testData: "Slot: 10:00 AM – 11:00 AM",
          steps: [
            "Try selecting fully booked slot",
          ],
          expected: "Fully booked slot should be disabled and should not allow booking.",
          actual: "Slot is selectable and booking process proceeds.",
        },
        {
          id: "TS_004",
          title: "Verify subscription session count reduces after booking using subscription plan",
          module: "Subscriptions",
          priority: "P1",
          status: "Fail",
          precondition: "Active subscription with 1 session remaining",
          testData: "Plan: Monthly Yoga Plan",
          steps: [
            "Book Yoga service using subscription",
          ],
          expected: "Subscription session count should be reduced from 1 to 0 after booking.",
          actual: "Booking completed but session count remains unchanged.",
        },
        {
          id: "TS_005",
          title: "Verify booking cancellation before scheduled time",
          module: "Bookings",
          priority: "P1",
          status: "Pass",
          precondition: "Upcoming booking available",
          testData: "Booking ID: BKG77889",
          steps: [
            "Open booking details",
            "Tap cancel booking",
          ],
          expected: "Booking status should be updated to \"Cancelled.\"",
          actual: "Booking cancelled successfully and status updated.",
        },
        {
          id: "TS_006",
          title: "Verify nearby studios are displayed when user allows location permission",
          module: "Discovery",
          priority: "P2",
          status: "Pass",
          precondition: "Location permission popup is displayed on discovery screen",
          testData: "Location: Mumbai, Service keyword: Yoga",
          steps: [
            "Launch app and navigate to discovery screen",
            "Allow location permission when prompted",
            "Observe the list of studios/freelancers",
          ],
          expected: "System should display nearby studios and freelancers based on the user's current location.",
          actual: "Nearby studios and freelancers displayed correctly as per location.",
        },
      ],
    },
  },
  dashboard: {
    project: "Execution Overview",
    reliabilityScore: "98.2%",
    insight: "The system demonstrates exceptional operational stability across core modules. Cumulative data indicates a 92% pass rate across multi-platform execution cycles over the recent sprints.",
    charts: {
      executionSummary: {
        labels: ["Passed", "Failed", "Blocked", "In Progress"],
        series: [2254, 80, 40, 76],
        colors: ["#10B981", "#EF4444", "#F59E0B", "#3B82F6"]
      },
      defectSeverity: {
        categories: ["P0", "P1", "P2", "P3"],
        series: [8, 24, 65, 32],
        colors: ["#DC2626", "#F97316", "#FBBF24", "#34D399"]
      },
      defectLifecycle: {
        categories: ["New", "Open", "Assigned", "Resolved", "Reopened", "Closed"],
        series: [12, 34, 28, 45, 10, 240],
        colors: ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE", "#E0E7FF", "#EEF2FF"]
      },
      moduleDefects: {
        categories: ["Auth", "Pass", "Booking", "Pay", "Portal", "Admin", "Push"],
        series: [15, 38, 24, 42, 18, 12, 21],
        colors: ["#0EA5E9"]
      },
      defectTrend: {
        categories: ["W1", "W2", "W3", "W4", "W5", "W6"],
        series: [12, 28, 45, 22, 58, 30],
        colors: ["#8B5CF6"]
      },
      requirementCoverage: {
        labels: ["Covered", "At Risk"],
        series: [94, 6],
        colors: ["#10B981", "#E11D48"]
      },
      platformCoverage: {
        labels: ["iOS", "Andr", "Web", "Tab"],
        series: [42, 38, 15, 5],
        colors: ["#334155", "#10B981", "#0284C7", "#9333EA"]
      },
      executionByPriority: {
        labels: ["P0", "P1", "P2", "P3"],
        series: [450, 850, 750, 400],
        colors: ["#991B1B", "#C2410C", "#0369A1", "#065F46"]
      }
    }
  },
  howITest: {
    steps: [
      {
        title: "Requirement Analysis",
        desc: "Clarify scope, risks, and acceptance criteria. Identify ambiguous areas early.",
      },
      {
        title: "Test Case Design",
        desc: "Build scenario coverage including edge cases, negatives, and data states.",
      },
      {
        title: "Execution",
        desc: "Run smoke/regression with focus on user-impacting workflows and stability.",
      },
      {
        title: "Defect Logging",
        desc: "High-signal JIRA tickets: steps, expected/actual, evidence, and impact.",
      },
      {
        title: "Retesting",
        desc: "Verify fixes, check side effects, and update regression scope accordingly.",
      },
    ],
  },

  chatbot: {
    greeting: "Hi! I’m your QA assistant. Ask me about testing, bugs, or my process.",
    quickActions: ["What is your testing approach?", "Show bug tracker features", "How do you test APIs?"],
    intents: [
      {
        match: ["testing approach", "how you test", "process"],
        answer:
          "I follow a risk-based approach: clarify requirements, design cases + checklists, execute smoke/regression, log crisp defects with evidence, retest and validate side effects.",
      },
      {
        match: ["api", "postman", "rest"],
        answer:
          "For APIs I validate status codes, schema/contract, negative cases, auth/RBAC behavior, idempotency, and data integrity using SQL checks when possible.",
      },
      {
        match: ["jira", "bug", "defect"],
        answer:
          "My JIRA defects include clear steps, expected/actual, environment, impact, and supporting evidence (screenshots/logs/queries) so fixes are fast and reproducible.",
      },
      {
        match: ["resume", "cv", "download"],
        answer: "Use the Download CV button in the hero or Resume section to get the PDF.",
      },
    ],
  },
  easterEgg: {
    secretCode: ["q", "a", "t", "e", "s", "t"],
    title: "System Integrity Scan",
    message: "QA Security Protocol Level 4 Activated. Performing automated regression on local nodes. 128/128 assertions passed. Environment: Production. Latency: 42ms. Site status: COMPLIANT.",
  },
  i18n: {
    enabled: false,
    languages: [
      { code: "en", label: "English" },
      { code: "hi", label: "Hindi" },
    ],
  },
}

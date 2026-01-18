import {
    Briefcase,
    Code,
    Database,
    Layout,
    Server,
    Settings,
    ShoppingCart,
    TrendingUp,
    Users,
    FileText,
    Truck,
    Factory,
    MessageCircle,
    CreditCard,
    Github,
    Linkedin,
    Mail
} from "lucide-react";

export const heroData = {
    name: "Yoga Listianto",
    role: "Odoo Technical Engineer",
    headline: "Odoo Technical Engineer & Custom Module Specialist",
    subheadline: "Specializing in Odoo Technical Development, Custom Module Creation, API Integrations (BCA & WhatsApp), and Scalable ERP Architecture.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me"
};

export const aboutData = {
    title: "About Me",
    description: "I am Yoga Listianto, a 25-year-old Odoo Technical Engineer with a strong passion for backend logic and system architecture. With over 5 years of professional experience ranging from Staff Admin to Technical Developer, I possess a deep understanding of business processes which allows me to build Odoo solutions that are not only code-perfect but also functionally sound. My expertise lies in Python, Odoo ORM, and creating seamless integrations with third-party services like Payment Gateways and Messaging APIs.",
    stats: [
        { label: "Experience", value: "5+ Years" },
        { label: "Integrations", value: "10+" },
        { label: "Odoo Versions", value: "v10 - v19" }
    ],
    highlights: [
        "Expert in Odoo Technical Development (Python, XML, JS)",
        "API Integrations (SNAP BCA, WhatsApp)",
        "High-Performance Custom Modules",
        "Business Process Optimization"
    ]
};

export const skillsData = {
    technical: [
        { name: "Python", level: 95, icon: Code },
        { name: "Odoo ORM", level: 95, icon: Database },
        { name: "PostgreSQL", level: 90, icon: Server },
        { name: "QWeb Reports", level: 85, icon: FileText },
        { name: "Node.js", level: 80, icon: Layout },
        { name: "Rest API", level: 90, icon: Settings },
    ],
    functional: [
        { name: "Sales & CRM", level: 90, icon: TrendingUp },
        { name: "Inventory", level: 95, icon: Briefcase },
        { name: "Accounting", level: 85, icon: FileText },
        { name: "Manufacturing", level: 80, icon: Factory },
        { name: "Purchase", level: 90, icon: ShoppingCart },
        { name: "Delivery", level: 85, icon: Truck },
    ]
};

export const experienceData = [
    {
        year: "Jul 2021 - Present",
        role: "Odoo Technical Engineer",
        company: "PT Nexapasifik (formerly PT. Tetrasoft)",
        description: "Working full-time as an Odoo Technical Engineer. Developing custom modules, handling complex data migrations, and ensuring system stability for enterprise clients. Developed a WhatsApp API middleware using Node.js, integrated it with Odoo, and implemented BCA API integration for automated payments."
    },
    {
        year: "Mar 2021 - Jul 2021",
        role: "Back-End Programmer",
        company: "PT. Citra Niaga Teknologi Bandung",
        description: "Built a School Data Application using Odoo v14 custom modules. Managed database structures and backend logic for educational data processing."
    },
    {
        year: "Feb 2015 - Des 2020",
        role: "Staff Admin",
        company: "PT. Trimandiri Plasindo Cimahi",
        description: "Operated Oracle ERP system for manufacturing. Managed production planning, stock opname reports, and shift production analysis."
    }
];

const getImagePath = (path) => {
    return import.meta.env.BASE_URL + path;
}

export const projectsData = [
    {
        title: "SNAP BCA -> VA BCA Integration",
        category: "Payment Integration",
        description: "Seamless integration between Odoo and SNAP BCA for automatic Virtual Account (VA) issuance. Enables real-time payment reconciliation and improved cash flow management.",
        tech: ["Odoo", "Python", "BCA API", "JSON"],
        image: getImagePath("projects/payment.png")
    },
    {
        title: "WhatsApp API Integration",
        category: "Communication & Notification",
        description: "Automated notification system sending WhatsApp messages for Sales Orders, Invoices, and Delivery updates. Built with Node.js middleware connecting Odoo to WA Gateway.",
        tech: ["Odoo", "Node.js", "Rest API", "Webhook"],
        image: getImagePath("projects/whatsapp.png")
    },
    {
        title: "School Data Application",
        category: "Education ERP",
        description: "Comprehensive Odoo v14 custom module for school management. Features include student enrollment, curriculum planning, and teacher data management.",
        tech: ["Odoo 14", "Python", "XML", "PostgreSQL"],
        image: getImagePath("projects/school.png")
    },
    {
        title: "Sales Commission System",
        category: "Sales Module",
        description: "Advanced commission calculation engine integrated with Odoo Sales Order. Automates percentage-based rewards for sales teams based on revenue targets and margins.",
        tech: ["Odoo Sales", "Python", "Accounting"],
        image: getImagePath("projects/commission.png")
    },
    {
        title: "Customer Reward Points",
        category: "Loyalty Program",
        description: "A comprehensive loyalty points system allowing customers to earn and redeem points. Fully integrated with Odoo POS and Website modules for seamless user experience.",
        tech: ["Odoo POS", "Website", "Python"],
        image: getImagePath("projects/rewards.png")
    },
    {
        title: "Manufacturing Customization",
        category: "MRP",
        description: "Deep customization of Odoo Manufacturing module to support multi-step production flows, work center tracking, and automated material consumption logic.",
        tech: ["Odoo MRP", "Python", "XML"],
        image: getImagePath("projects/manufacturing.png")
    }
];

export const socialLinks = {
    github: "https://github.com/YogaListianto19",
    linkedin: "https://www.linkedin.com/in/yoga-listianto-87153a208/",
    email: "mailto:yoga.listianto@example.com" // Placeholder, user didn't provide email but requested updates
};

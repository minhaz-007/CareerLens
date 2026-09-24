export type RoleSignal = {
  name: string;
  keywords: string[];
  weight: number;
};

export type RoleProfile = {
  id: string;
  family: string;
  aliases: string[];
  signals: RoleSignal[];
};

export const roleProfiles: RoleProfile[] = [
  // ==================================================
  // SOFTWARE ENGINEERING
  // ==================================================
  {
    id: "software-engineering",
    family: "Software Engineering",

    aliases: [
      "software engineer",
      "software developer",
      "developer",
      "web developer",
      "frontend developer",
      "front end developer",
      "backend developer",
      "back end developer",
      "full stack developer",
      "fullstack developer",
      "application developer",
      "junior software engineer",
      "graduate software engineer",
    ],

    signals: [
      {
        name: "Programming languages",
        keywords: [
          "javascript",
          "typescript",
          "python",
          "java",
          "c#",
          "c++",
          "golang",
          "go",
          "ruby",
          "php",
          "swift",
          "kotlin",
        ],
        weight: 20,
      },
      {
        name: "Software development",
        keywords: [
          "software development",
          "application development",
          "web development",
          "frontend",
          "backend",
          "full stack",
          "fullstack",
        ],
        weight: 15,
      },
      {
        name: "Frameworks & libraries",
        keywords: [
          "react",
          "next.js",
          "nextjs",
          "node.js",
          "nodejs",
          "express",
          "angular",
          "vue",
          "django",
          "flask",
          "spring",
          ".net",
        ],
        weight: 15,
      },
      {
        name: "Version control",
        keywords: ["git", "github", "gitlab", "version control"],
        weight: 10,
      },
      {
        name: "Databases",
        keywords: [
          "sql",
          "postgresql",
          "mysql",
          "mongodb",
          "database",
          "redis",
        ],
        weight: 10,
      },
      {
        name: "APIs & integration",
        keywords: ["api", "rest api", "restful", "graphql", "microservices"],
        weight: 10,
      },
      {
        name: "Testing & quality",
        keywords: [
          "testing",
          "unit testing",
          "jest",
          "pytest",
          "cypress",
          "test driven",
          "tdd",
        ],
        weight: 10,
      },
      {
        name: "Deployment & cloud",
        keywords: [
          "aws",
          "azure",
          "gcp",
          "docker",
          "kubernetes",
          "ci/cd",
          "deployment",
          "cloud",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // DATA ANALYTICS
  // ==================================================
  {
    id: "data-analytics",
    family: "Data & Analytics",

    aliases: [
      "data analyst",
      "business intelligence analyst",
      "bi analyst",
      "reporting analyst",
      "junior data analyst",
      "graduate data analyst",
      "insights analyst",
      "analytics analyst",
    ],

    signals: [
      {
        name: "SQL & databases",
        keywords: [
          "sql",
          "mysql",
          "postgresql",
          "database",
          "query",
          "queries",
        ],
        weight: 20,
      },
      {
        name: "Spreadsheets",
        keywords: [
          "excel",
          "google sheets",
          "spreadsheet",
          "pivot table",
          "vlookup",
          "xlookup",
        ],
        weight: 10,
      },
      {
        name: "Data visualisation",
        keywords: [
          "power bi",
          "tableau",
          "data visualization",
          "data visualisation",
          "dashboard",
          "dashboards",
        ],
        weight: 15,
      },
      {
        name: "Data analysis",
        keywords: [
          "data analysis",
          "data analytics",
          "analysis",
          "analysed",
          "analyzed",
          "insights",
          "trends",
        ],
        weight: 15,
      },
      {
        name: "Data preparation",
        keywords: [
          "data cleaning",
          "data cleansing",
          "data preparation",
          "etl",
          "data transformation",
        ],
        weight: 10,
      },
      {
        name: "Programming for data",
        keywords: ["python", "pandas", "numpy", "r programming", "r studio"],
        weight: 10,
      },
      {
        name: "Reporting",
        keywords: [
          "reporting",
          "reports",
          "kpi",
          "kpis",
          "metrics",
          "performance reporting",
        ],
        weight: 10,
      },
      {
        name: "Stakeholder communication",
        keywords: [
          "stakeholder",
          "stakeholders",
          "presentation",
          "presented",
          "communicated",
          "business requirements",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // RETAIL
  // ==================================================
  {
    id: "retail",
    family: "Retail & Store Operations",

    aliases: [
      "retail assistant",
      "retail associate",
      "sales assistant",
      "shop assistant",
      "store assistant",
      "store associate",
      "retail sales assistant",
      "customer assistant",
      "shop floor assistant",
    ],

    signals: [
      {
        name: "Customer service",
        keywords: [
          "customer service",
          "customer support",
          "customers",
          "customer enquiries",
          "customer queries",
          "customer satisfaction",
        ],
        weight: 20,
      },
      {
        name: "Sales",
        keywords: [
          "sales",
          "selling",
          "upselling",
          "cross-selling",
          "sales targets",
          "revenue",
        ],
        weight: 15,
      },
      {
        name: "Stock handling",
        keywords: [
          "stock",
          "stock replenishment",
          "stocking",
          "inventory",
          "inventory management",
          "stock count",
          "stock counts",
        ],
        weight: 20,
      },
      {
        name: "Till & payments",
        keywords: [
          "till",
          "cash register",
          "pos",
          "point of sale",
          "cash handling",
          "payments",
          "transactions",
        ],
        weight: 15,
      },
      {
        name: "Merchandising",
        keywords: [
          "merchandising",
          "visual merchandising",
          "product displays",
          "displays",
          "shop floor",
        ],
        weight: 10,
      },
      {
        name: "Store operations",
        keywords: [
          "store operations",
          "opening",
          "closing",
          "store standards",
          "shop floor",
          "retail operations",
        ],
        weight: 10,
      },
      {
        name: "Teamwork & communication",
        keywords: [
          "teamwork",
          "team member",
          "team player",
          "communication",
          "communicated",
          "collaborated",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // IT SUPPORT
  // ==================================================
  {
    id: "it-support",
    family: "IT Support & Service Desk",
    aliases: [
      "it support",
      "it support technician",
      "it technician",
      "helpdesk technician",
      "help desk technician",
      "service desk analyst",
      "service desk technician",
      "desktop support",
      "technical support",
      "technical support engineer",
    ],
    signals: [
      {
        name: "Technical troubleshooting",
        keywords: [
          "troubleshooting",
          "diagnostics",
          "technical issues",
          "technical support",
          "problem solving",
          "incident resolution",
        ],
        weight: 20,
      },
      {
        name: "Operating systems",
        keywords: [
          "windows",
          "macos",
          "linux",
          "active directory",
          "microsoft 365",
          "office 365",
        ],
        weight: 15,
      },
      {
        name: "Service desk",
        keywords: [
          "service desk",
          "helpdesk",
          "help desk",
          "ticketing",
          "tickets",
          "incident management",
          "servicenow",
        ],
        weight: 15,
      },
      {
        name: "Hardware & devices",
        keywords: [
          "hardware",
          "laptop",
          "desktop",
          "printer",
          "mobile devices",
          "device setup",
        ],
        weight: 15,
      },
      {
        name: "Networking",
        keywords: [
          "networking",
          "tcp/ip",
          "dns",
          "dhcp",
          "vpn",
          "wifi",
          "wi-fi",
        ],
        weight: 15,
      },
      {
        name: "User support",
        keywords: [
          "users",
          "end users",
          "customer support",
          "user support",
          "technical assistance",
        ],
        weight: 10,
      },
      {
        name: "Documentation & communication",
        keywords: [
          "documentation",
          "knowledge base",
          "communicated",
          "communication",
          "instructions",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // CUSTOMER SERVICE
  // ==================================================
  {
    id: "customer-service",
    family: "Customer Service",
    aliases: [
      "customer service advisor",
      "customer service assistant",
      "customer service representative",
      "customer support advisor",
      "customer support representative",
      "call centre advisor",
      "call center representative",
      "customer care advisor",
      "customer advisor",
    ],
    signals: [
      {
        name: "Customer support",
        keywords: [
          "customer service",
          "customer support",
          "customer care",
          "customers",
          "customer enquiries",
        ],
        weight: 25,
      },
      {
        name: "Communication",
        keywords: [
          "communication",
          "communicated",
          "telephone",
          "email",
          "face to face",
          "written communication",
        ],
        weight: 15,
      },
      {
        name: "Issue resolution",
        keywords: [
          "resolved",
          "resolution",
          "complaints",
          "problem solving",
          "queries",
          "enquiries",
        ],
        weight: 20,
      },
      {
        name: "CRM & systems",
        keywords: [
          "crm",
          "salesforce",
          "zendesk",
          "customer database",
          "ticketing",
        ],
        weight: 10,
      },
      {
        name: "Service performance",
        keywords: [
          "customer satisfaction",
          "sla",
          "response time",
          "service level",
          "kpi",
          "targets",
        ],
        weight: 15,
      },
      {
        name: "Teamwork",
        keywords: [
          "team",
          "teamwork",
          "collaborated",
          "colleagues",
          "team member",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // ADMINISTRATION
  // ==================================================
  {
    id: "administration",
    family: "Administration & Office Support",
    aliases: [
      "administrator",
      "admin assistant",
      "administrative assistant",
      "office administrator",
      "office assistant",
      "business administrator",
      "administration assistant",
      "receptionist",
    ],
    signals: [
      {
        name: "Office administration",
        keywords: [
          "administration",
          "administrative",
          "office support",
          "filing",
          "records",
          "data entry",
        ],
        weight: 20,
      },
      {
        name: "Microsoft Office",
        keywords: [
          "microsoft office",
          "word",
          "excel",
          "outlook",
          "powerpoint",
          "office 365",
        ],
        weight: 15,
      },
      {
        name: "Scheduling & organisation",
        keywords: [
          "calendar",
          "scheduling",
          "appointments",
          "meetings",
          "diary management",
          "organised",
          "organized",
        ],
        weight: 20,
      },
      {
        name: "Communication",
        keywords: [
          "telephone",
          "email",
          "correspondence",
          "communication",
          "enquiries",
        ],
        weight: 15,
      },
      {
        name: "Documentation",
        keywords: [
          "documents",
          "documentation",
          "reports",
          "records",
          "spreadsheets",
          "minutes",
        ],
        weight: 15,
      },
      {
        name: "Stakeholder support",
        keywords: [
          "clients",
          "customers",
          "stakeholders",
          "visitors",
          "colleagues",
          "management",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // SALES
  // ==================================================
  {
    id: "sales",
    family: "Sales & Business Development",
    aliases: [
      "sales executive",
      "sales representative",
      "sales advisor",
      "business development executive",
      "business development representative",
      "bdr",
      "sales development representative",
      "sdr",
      "account executive",
      "inside sales representative",
    ],
    signals: [
      {
        name: "Sales performance",
        keywords: [
          "sales",
          "revenue",
          "sales target",
          "sales targets",
          "quota",
          "conversion",
        ],
        weight: 25,
      },
      {
        name: "Prospecting",
        keywords: [
          "prospecting",
          "lead generation",
          "cold calling",
          "outreach",
          "leads",
          "pipeline",
        ],
        weight: 15,
      },
      {
        name: "Client relationships",
        keywords: [
          "client relationships",
          "customer relationships",
          "account management",
          "relationship management",
          "clients",
        ],
        weight: 15,
      },
      {
        name: "CRM",
        keywords: ["crm", "salesforce", "hubspot", "pipeline management"],
        weight: 10,
      },
      {
        name: "Negotiation & closing",
        keywords: [
          "negotiation",
          "negotiated",
          "closing",
          "closed",
          "contracts",
          "deals",
        ],
        weight: 20,
      },
      {
        name: "Communication & presentation",
        keywords: [
          "presentation",
          "presented",
          "communication",
          "pitch",
          "proposal",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // MARKETING
  // ==================================================
  {
    id: "marketing",
    family: "Marketing & Digital Marketing",
    aliases: [
      "marketing assistant",
      "marketing executive",
      "digital marketing executive",
      "digital marketer",
      "marketing coordinator",
      "social media executive",
      "social media manager",
      "content marketing executive",
    ],
    signals: [
      {
        name: "Campaigns",
        keywords: [
          "marketing campaign",
          "campaigns",
          "campaign management",
          "marketing strategy",
        ],
        weight: 20,
      },
      {
        name: "Digital marketing",
        keywords: [
          "digital marketing",
          "seo",
          "sem",
          "ppc",
          "google ads",
          "paid search",
        ],
        weight: 20,
      },
      {
        name: "Social media",
        keywords: [
          "social media",
          "instagram",
          "facebook",
          "linkedin",
          "tiktok",
          "social content",
        ],
        weight: 15,
      },
      {
        name: "Content",
        keywords: [
          "content creation",
          "copywriting",
          "content marketing",
          "blog",
          "email marketing",
          "newsletter",
        ],
        weight: 15,
      },
      {
        name: "Analytics",
        keywords: [
          "google analytics",
          "analytics",
          "conversion rate",
          "engagement",
          "traffic",
          "performance",
        ],
        weight: 15,
      },
      {
        name: "Brand & audience",
        keywords: [
          "brand",
          "branding",
          "audience",
          "market research",
          "customer insights",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // ACCOUNTING & FINANCE
  // ==================================================
  {
    id: "accounting-finance",
    family: "Accounting & Finance",
    aliases: [
      "accountant",
      "accounts assistant",
      "finance assistant",
      "finance officer",
      "assistant accountant",
      "management accountant",
      "financial accountant",
      "bookkeeper",
      "accounts payable assistant",
      "accounts receivable assistant",
    ],
    signals: [
      {
        name: "Accounting",
        keywords: [
          "accounting",
          "bookkeeping",
          "general ledger",
          "journal entries",
          "reconciliation",
          "reconciliations",
        ],
        weight: 20,
      },
      {
        name: "Financial reporting",
        keywords: [
          "financial statements",
          "financial reporting",
          "management accounts",
          "month end",
          "year end",
          "reporting",
        ],
        weight: 20,
      },
      {
        name: "Accounts payable & receivable",
        keywords: [
          "accounts payable",
          "accounts receivable",
          "invoices",
          "invoicing",
          "payments",
          "credit control",
        ],
        weight: 15,
      },
      {
        name: "Finance systems",
        keywords: [
          "sage",
          "xero",
          "quickbooks",
          "sap",
          "oracle",
          "accounting software",
        ],
        weight: 15,
      },
      {
        name: "Excel",
        keywords: ["excel", "pivot table", "vlookup", "xlookup", "spreadsheet"],
        weight: 15,
      },
      {
        name: "Budgeting & analysis",
        keywords: [
          "budget",
          "budgeting",
          "forecasting",
          "variance analysis",
          "financial analysis",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // HUMAN RESOURCES
  // ==================================================
  {
    id: "human-resources",
    family: "Human Resources & Recruitment",
    aliases: [
      "hr assistant",
      "human resources assistant",
      "hr administrator",
      "hr advisor",
      "human resources advisor",
      "recruiter",
      "recruitment consultant",
      "talent acquisition",
      "talent acquisition specialist",
    ],
    signals: [
      {
        name: "HR administration",
        keywords: [
          "human resources",
          "hr administration",
          "employee records",
          "hr policies",
          "hr processes",
        ],
        weight: 15,
      },
      {
        name: "Recruitment",
        keywords: [
          "recruitment",
          "recruiting",
          "candidates",
          "interviews",
          "screening",
          "talent acquisition",
        ],
        weight: 20,
      },
      {
        name: "Employee lifecycle",
        keywords: [
          "onboarding",
          "offboarding",
          "employee lifecycle",
          "induction",
          "probation",
        ],
        weight: 15,
      },
      {
        name: "Employee relations",
        keywords: [
          "employee relations",
          "grievance",
          "disciplinary",
          "absence management",
          "performance management",
        ],
        weight: 20,
      },
      {
        name: "HR systems",
        keywords: [
          "hris",
          "workday",
          "people system",
          "applicant tracking system",
          "ats",
        ],
        weight: 10,
      },
      {
        name: "Communication & confidentiality",
        keywords: [
          "confidential",
          "confidentiality",
          "communication",
          "stakeholders",
          "employees",
        ],
        weight: 20,
      },
    ],
  },

  // ==================================================
  // PROJECT MANAGEMENT
  // ==================================================
  {
    id: "project-management",
    family: "Project Management",
    aliases: [
      "project manager",
      "project coordinator",
      "project assistant",
      "junior project manager",
      "programme coordinator",
      "program coordinator",
      "pmo analyst",
      "pmo coordinator",
    ],
    signals: [
      {
        name: "Project delivery",
        keywords: [
          "project management",
          "project delivery",
          "project plan",
          "milestones",
          "deliverables",
        ],
        weight: 20,
      },
      {
        name: "Planning & scheduling",
        keywords: [
          "planning",
          "scheduling",
          "timeline",
          "deadlines",
          "roadmap",
        ],
        weight: 15,
      },
      {
        name: "Stakeholder management",
        keywords: [
          "stakeholder management",
          "stakeholders",
          "clients",
          "project team",
        ],
        weight: 20,
      },
      {
        name: "Risk & issue management",
        keywords: [
          "risk management",
          "risks",
          "issues",
          "dependencies",
          "mitigation",
        ],
        weight: 15,
      },
      {
        name: "Project tools",
        keywords: [
          "jira",
          "trello",
          "asana",
          "microsoft project",
          "monday.com",
          "confluence",
        ],
        weight: 10,
      },
      {
        name: "Reporting & governance",
        keywords: [
          "status report",
          "project reporting",
          "governance",
          "kpi",
          "progress reporting",
        ],
        weight: 10,
      },
      {
        name: "Delivery methods",
        keywords: ["agile", "scrum", "waterfall", "kanban", "prince2"],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // HOSPITALITY
  // ==================================================
  {
    id: "hospitality",
    family: "Hospitality & Front of House",
    aliases: [
      "waiter",
      "waitress",
      "server",
      "barista",
      "front of house assistant",
      "food and beverage assistant",
      "restaurant assistant",
      "hotel receptionist",
      "hospitality assistant",
    ],
    signals: [
      {
        name: "Guest service",
        keywords: [
          "guest service",
          "customer service",
          "guests",
          "customers",
          "hospitality",
        ],
        weight: 20,
      },
      {
        name: "Food & beverage service",
        keywords: [
          "food service",
          "beverage service",
          "table service",
          "orders",
          "menu",
          "barista",
        ],
        weight: 15,
      },
      {
        name: "Payments & POS",
        keywords: ["pos", "till", "cash handling", "payments", "transactions"],
        weight: 15,
      },
      {
        name: "Food safety & hygiene",
        keywords: [
          "food safety",
          "food hygiene",
          "hygiene",
          "health and safety",
          "allergens",
        ],
        weight: 15,
      },
      {
        name: "Teamwork",
        keywords: [
          "teamwork",
          "team member",
          "collaborated",
          "kitchen team",
          "front of house",
        ],
        weight: 15,
      },
      {
        name: "Working under pressure",
        keywords: [
          "busy",
          "fast paced",
          "fast-paced",
          "pressure",
          "high volume",
          "multitasking",
        ],
        weight: 10,
      },
      {
        name: "Upselling",
        keywords: ["upselling", "sales", "recommendations", "promotions"],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // WAREHOUSE & LOGISTICS
  // ==================================================
  {
    id: "warehouse-logistics",
    family: "Warehouse & Logistics",
    aliases: [
      "warehouse operative",
      "warehouse assistant",
      "warehouse worker",
      "picker packer",
      "picker",
      "packer",
      "logistics assistant",
      "goods in operative",
      "dispatch operative",
    ],
    signals: [
      {
        name: "Picking & packing",
        keywords: [
          "picking",
          "packing",
          "pick and pack",
          "orders",
          "order fulfilment",
          "order fulfillment",
        ],
        weight: 20,
      },
      {
        name: "Stock & inventory",
        keywords: [
          "stock",
          "inventory",
          "stock control",
          "stock count",
          "goods in",
          "goods out",
        ],
        weight: 20,
      },
      {
        name: "Warehouse systems",
        keywords: [
          "warehouse management system",
          "wms",
          "scanner",
          "barcode",
          "rf scanner",
        ],
        weight: 10,
      },
      {
        name: "Dispatch & receiving",
        keywords: [
          "dispatch",
          "shipping",
          "receiving",
          "deliveries",
          "goods received",
        ],
        weight: 15,
      },
      {
        name: "Health & safety",
        keywords: [
          "health and safety",
          "manual handling",
          "safety procedures",
          "ppe",
        ],
        weight: 15,
      },
      {
        name: "Equipment",
        keywords: [
          "forklift",
          "pallet truck",
          "fork lift",
          "warehouse equipment",
        ],
        weight: 10,
      },
      {
        name: "Productivity & teamwork",
        keywords: [
          "targets",
          "productivity",
          "teamwork",
          "team member",
          "deadlines",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // SUPPLY CHAIN & PROCUREMENT
  // ==================================================
  {
    id: "supply-chain",
    family: "Supply Chain & Procurement",
    aliases: [
      "supply chain analyst",
      "supply chain assistant",
      "procurement assistant",
      "procurement officer",
      "buyer",
      "junior buyer",
      "purchasing assistant",
      "inventory planner",
    ],
    signals: [
      {
        name: "Procurement",
        keywords: [
          "procurement",
          "purchasing",
          "sourcing",
          "purchase orders",
          "buying",
        ],
        weight: 20,
      },
      {
        name: "Supplier management",
        keywords: [
          "suppliers",
          "supplier management",
          "vendor management",
          "vendors",
          "supplier relationships",
        ],
        weight: 15,
      },
      {
        name: "Inventory",
        keywords: [
          "inventory",
          "stock management",
          "stock control",
          "inventory planning",
        ],
        weight: 15,
      },
      {
        name: "Supply chain",
        keywords: [
          "supply chain",
          "logistics",
          "distribution",
          "demand planning",
          "supply planning",
        ],
        weight: 20,
      },
      {
        name: "Commercial analysis",
        keywords: [
          "cost analysis",
          "spend analysis",
          "excel",
          "data analysis",
          "forecasting",
        ],
        weight: 15,
      },
      {
        name: "Negotiation",
        keywords: [
          "negotiation",
          "negotiated",
          "contracts",
          "commercial terms",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // HEALTHCARE SUPPORT
  // ==================================================
  {
    id: "healthcare-support",
    family: "Healthcare Support",
    aliases: [
      "healthcare assistant",
      "health care assistant",
      "healthcare support worker",
      "clinical support worker",
      "hospital support worker",
      "healthcare worker",
    ],
    signals: [
      {
        name: "Patient care",
        keywords: [
          "patient care",
          "patients",
          "personal care",
          "care plans",
          "patient support",
        ],
        weight: 25,
      },
      {
        name: "Clinical observations",
        keywords: [
          "observations",
          "vital signs",
          "blood pressure",
          "temperature",
          "clinical observations",
        ],
        weight: 15,
      },
      {
        name: "Safety & infection control",
        keywords: [
          "infection control",
          "health and safety",
          "ppe",
          "safeguarding",
          "hygiene",
        ],
        weight: 15,
      },
      {
        name: "Documentation",
        keywords: [
          "care records",
          "patient records",
          "documentation",
          "record keeping",
          "notes",
        ],
        weight: 10,
      },
      {
        name: "Communication",
        keywords: [
          "communication",
          "patients",
          "families",
          "relatives",
          "multidisciplinary",
        ],
        weight: 15,
      },
      {
        name: "Compassion & dignity",
        keywords: [
          "compassion",
          "dignity",
          "respect",
          "person centred",
          "person-centered",
        ],
        weight: 20,
      },
    ],
  },

  // ==================================================
  // SOCIAL CARE
  // ==================================================
  {
    id: "social-care",
    family: "Care & Support",
    aliases: [
      "care assistant",
      "carer",
      "support worker",
      "residential support worker",
      "care worker",
      "home care assistant",
      "domiciliary care worker",
    ],
    signals: [
      {
        name: "Personal care",
        keywords: [
          "personal care",
          "washing",
          "dressing",
          "mobility",
          "daily living",
        ],
        weight: 20,
      },
      {
        name: "Person-centred support",
        keywords: [
          "person centred",
          "person-centered",
          "care plan",
          "support plan",
          "individual needs",
        ],
        weight: 20,
      },
      {
        name: "Safeguarding",
        keywords: [
          "safeguarding",
          "vulnerable adults",
          "protection",
          "risk assessment",
        ],
        weight: 15,
      },
      {
        name: "Medication support",
        keywords: [
          "medication",
          "medication administration",
          "medication support",
          "mar chart",
        ],
        weight: 10,
      },
      {
        name: "Record keeping",
        keywords: [
          "care records",
          "record keeping",
          "daily notes",
          "documentation",
          "incident report",
        ],
        weight: 15,
      },
      {
        name: "Communication & compassion",
        keywords: [
          "communication",
          "compassion",
          "empathy",
          "dignity",
          "families",
        ],
        weight: 20,
      },
    ],
  },

  // ==================================================
  // EDUCATION
  // ==================================================
  {
    id: "education",
    family: "Teaching & Education Support",
    aliases: [
      "teacher",
      "teaching assistant",
      "learning support assistant",
      "classroom assistant",
      "tutor",
      "cover supervisor",
      "education assistant",
    ],
    signals: [
      {
        name: "Teaching & learning",
        keywords: [
          "teaching",
          "learning",
          "lessons",
          "lesson planning",
          "instruction",
        ],
        weight: 20,
      },
      {
        name: "Student support",
        keywords: [
          "students",
          "pupils",
          "learner support",
          "learning support",
          "student support",
        ],
        weight: 20,
      },
      {
        name: "Classroom management",
        keywords: [
          "classroom management",
          "behaviour management",
          "behavior management",
          "classroom",
        ],
        weight: 15,
      },
      {
        name: "Assessment",
        keywords: [
          "assessment",
          "marking",
          "feedback",
          "progress",
          "learning outcomes",
        ],
        weight: 15,
      },
      {
        name: "Safeguarding",
        keywords: [
          "safeguarding",
          "child protection",
          "student welfare",
          "pupil welfare",
        ],
        weight: 15,
      },
      {
        name: "Communication & collaboration",
        keywords: [
          "parents",
          "teachers",
          "communication",
          "collaboration",
          "colleagues",
        ],
        weight: 15,
      },
    ],
  },

  // ==================================================
  // MECHANICAL & MANUFACTURING ENGINEERING
  // ==================================================
  {
    id: "mechanical-engineering",
    family: "Mechanical & Manufacturing Engineering",
    aliases: [
      "mechanical engineer",
      "graduate mechanical engineer",
      "manufacturing engineer",
      "production engineer",
      "design engineer",
      "mechanical design engineer",
      "maintenance engineer",
    ],
    signals: [
      {
        name: "Engineering design",
        keywords: [
          "mechanical design",
          "engineering design",
          "design engineering",
          "technical drawings",
          "engineering drawings",
        ],
        weight: 20,
      },
      {
        name: "CAD",
        keywords: ["cad", "solidworks", "autocad", "catia", "creo", "inventor"],
        weight: 15,
      },
      {
        name: "Manufacturing",
        keywords: [
          "manufacturing",
          "production",
          "machining",
          "cnc",
          "assembly",
          "fabrication",
        ],
        weight: 15,
      },
      {
        name: "Engineering analysis",
        keywords: [
          "fea",
          "finite element",
          "simulation",
          "analysis",
          "matlab",
          "engineering calculations",
        ],
        weight: 15,
      },
      {
        name: "Maintenance & reliability",
        keywords: [
          "maintenance",
          "preventive maintenance",
          "reliability",
          "fault finding",
          "root cause",
        ],
        weight: 15,
      },
      {
        name: "Quality & safety",
        keywords: [
          "quality control",
          "quality assurance",
          "health and safety",
          "risk assessment",
          "iso",
        ],
        weight: 10,
      },
      {
        name: "Projects & teamwork",
        keywords: [
          "engineering project",
          "project management",
          "team",
          "collaboration",
          "technical report",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // CONSTRUCTION
  // ==================================================
  {
    id: "construction",
    family: "Construction & Site Operations",
    aliases: [
      "construction operative",
      "construction worker",
      "site operative",
      "site assistant",
      "construction assistant",
      "site technician",
      "construction technician",
    ],
    signals: [
      {
        name: "Site experience",
        keywords: [
          "construction site",
          "site work",
          "site operations",
          "construction",
          "site experience",
        ],
        weight: 20,
      },
      {
        name: "Health & safety",
        keywords: [
          "health and safety",
          "risk assessment",
          "method statement",
          "ppe",
          "toolbox talk",
        ],
        weight: 25,
      },
      {
        name: "Tools & equipment",
        keywords: [
          "power tools",
          "hand tools",
          "equipment",
          "machinery",
          "tools",
        ],
        weight: 15,
      },
      {
        name: "Plans & measurements",
        keywords: [
          "drawings",
          "plans",
          "measurements",
          "technical drawings",
          "specifications",
        ],
        weight: 15,
      },
      {
        name: "Site teamwork",
        keywords: [
          "site team",
          "teamwork",
          "contractors",
          "supervisor",
          "trades",
        ],
        weight: 15,
      },
      {
        name: "Site standards",
        keywords: [
          "quality",
          "site standards",
          "inspection",
          "compliance",
          "housekeeping",
        ],
        weight: 10,
      },
    ],
  },

  // ==================================================
  // BANKING & FINANCIAL SERVICES
  // ==================================================
  {
    id: "banking",
    family: "Banking & Financial Services",
    aliases: [
      "banking assistant",
      "banking advisor",
      "banking associate",
      "bank cashier",
      "personal banker",
      "relationship banker",
      "financial services administrator",
      "banking analyst",
    ],
    signals: [
      {
        name: "Customer & client service",
        keywords: [
          "customers",
          "clients",
          "customer service",
          "client service",
          "relationship management",
        ],
        weight: 20,
      },
      {
        name: "Financial products",
        keywords: [
          "banking",
          "financial products",
          "accounts",
          "loans",
          "mortgages",
          "credit",
        ],
        weight: 15,
      },
      {
        name: "Transactions",
        keywords: [
          "transactions",
          "payments",
          "cash handling",
          "transfers",
          "reconciliation",
        ],
        weight: 15,
      },
      {
        name: "Compliance & risk",
        keywords: [
          "compliance",
          "kyc",
          "aml",
          "anti money laundering",
          "risk",
          "regulatory",
        ],
        weight: 20,
      },
      {
        name: "Financial analysis",
        keywords: [
          "financial analysis",
          "excel",
          "reporting",
          "data analysis",
          "financial data",
        ],
        weight: 15,
      },
      {
        name: "Accuracy & confidentiality",
        keywords: [
          "accuracy",
          "attention to detail",
          "confidential",
          "confidentiality",
          "data protection",
        ],
        weight: 15,
      },
    ],
  },
];

export type RoleEvidence = {
  name: string;
  weight: number;
  matched: boolean;
  matchedKeywords: string[];

  evidenceLevel: "none" | "mentioned" | "demonstrated" | "impact";
};

export type RoleMatchResult = {
  matched: boolean;
  profileId: string | null;
  family: string | null;
  targetRole: string;
  score: number | null;
  confidence: "high" | "medium" | "low" | "none";
  evidence: RoleEvidence[];
};

function normalise(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsKeyword(text: string, keyword: string) {
  const normalisedText = normalise(text);
  const normalisedKeyword = normalise(keyword);

  if (!normalisedKeyword) return false;

  if (normalisedKeyword.length <= 2) {
    const words = normalisedText.split(/\s+/);
    return words.includes(normalisedKeyword);
  }

  return normalisedText.includes(normalisedKeyword);
}

function countKeywordOccurrences(text: string, keyword: string) {
  const normalisedText = normalise(text);
  const normalisedKeyword = normalise(keyword);

  if (!normalisedKeyword) return 0;

  if (normalisedKeyword.length <= 2) {
    const words = normalisedText.split(/\s+/);

    return words.filter((word) => word === normalisedKeyword).length;
  }

  let count = 0;
  let position = 0;

  while (true) {
    const foundAt = normalisedText.indexOf(normalisedKeyword, position);

    if (foundAt === -1) break;

    count += 1;
    position = foundAt + normalisedKeyword.length;
  }

  return count;
}
function getEvidenceContext(text: string, keyword: string) {
  const normalisedKeyword = normalise(keyword);

  if (!normalisedKeyword) {
    return {
      mentions: 0,
      contextualMentions: 0,
      outcomeMentions: 0,
    };
  }

  const chunks = text
    .split(/\r?\n|[•●▪◦]\s*|(?<=[.!?])\s+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  const matchingChunks = chunks.filter((chunk) =>
    normalise(chunk).includes(normalisedKeyword)
  );

  const actionPattern =
    /\b(built|developed|created|implemented|designed|engineered|delivered|integrated|deployed|maintained|improved|optimised|optimized|automated|led|managed|analysed|analyzed|supported|resolved|tested|configured|used|worked)\b/i;

  const outcomePattern =
    /\b(reduced|decreased|cut|lowered|increased|grew|improved|boosted|raised|saved|accelerated|shortened|streamlined|enabled|achieved)\b[^.!?]{0,80}(\d+%|\d+\+|\£\s?\d+|\$\s?\d+|\d+\s?(?:hours|days|weeks|months))\b|(\d+%|\£\s?\d+|\$\s?\d+)[^.!?]{0,80}\b(reduction|increase|growth|improvement|saving|faster|more|less)\b/i;
  const contextualChunks = matchingChunks.filter((chunk) =>
    actionPattern.test(chunk)
  );

  const outcomeChunks = contextualChunks.filter((chunk) =>
    outcomePattern.test(chunk)
  );

  return {
    mentions: matchingChunks.length,
    contextualMentions: contextualChunks.length,
    outcomeMentions: outcomeChunks.length,
  };
}

type CVSections = {
  skills: string;
  experience: string;
  projects: string;
  other: string;
};

function extractCVSections(text: string): CVSections {
  const sections: CVSections = {
    skills: "",
    experience: "",
    projects: "",
    other: "",
  };

  const preparedText = text.replace(
    /\b(Technical Skills|Core Skills|Key Skills|Skills|Professional Experience|Work Experience|Employment History|Work History|Experience|Selected Projects|Technical Projects|Personal Projects|Academic Projects|Projects)\b/gi,
    "\n$1\n"
  );

  const lines = preparedText.split(/\r?\n/);

  let currentSection: keyof CVSections = "other";

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) continue;

    const heading = normalise(line);
    const cleanHeading = heading.replace(/:$/, "").trim();

    if (
      /^(skills|technical skills|core skills|key skills|technologies|technical expertise)$/.test(
        cleanHeading
      )
    ) {
      currentSection = "skills";
      continue;
    }

    if (
      /^(experience|work experience|professional experience|employment|employment history|work history)$/.test(
        cleanHeading
      )
    ) {
      currentSection = "experience";
      continue;
    }

    if (
      /^(projects|projects experience|personal projects|technical projects|academic projects|selected projects)$/.test(
        cleanHeading
      )
    ) {
      currentSection = "projects";
      continue;
    }

    sections[currentSection] += `${line}\n`;
  }

  return sections;
}

export function findRoleProfile(targetRole: string): RoleProfile | null {
  const role = normalise(targetRole);

  if (!role) {
    return null;
  }

  // First try an exact alias match.
  const exactMatch = roleProfiles.find((profile) =>
    profile.aliases.some((alias) => normalise(alias) === role)
  );

  if (exactMatch) {
    return exactMatch;
  }

  // Then allow a longer title containing one of our known aliases.
  // Example: "Junior Software Engineer Intern"
  const containedMatch = roleProfiles.find((profile) =>
    profile.aliases.some((alias) => {
      const normalisedAlias = normalise(alias);

      return (
        normalisedAlias.length >= 5 &&
        (role.includes(normalisedAlias) || normalisedAlias.includes(role))
      );
    })
  );

  return containedMatch ?? null;
}

export function analyseRoleReadiness(
  cvText: string,
  targetRole: string
): RoleMatchResult {
  const cleanTargetRole = targetRole.trim();

  if (!cleanTargetRole) {
    return {
      matched: false,
      profileId: null,
      family: null,
      targetRole: "",
      score: null,
      confidence: "none",
      evidence: [],
    };
  }

  const profile = findRoleProfile(cleanTargetRole);

  if (!profile) {
    return {
      matched: false,
      profileId: null,
      family: null,
      targetRole: cleanTargetRole,
      score: null,
      confidence: "none",
      evidence: [],
    };
  }

  const cvSections = extractCVSections(cvText);

  const evidence: RoleEvidence[] = profile.signals.map((signal) => {
    const matchedKeywords = signal.keywords.filter((keyword) =>
      containsKeyword(cvText, keyword)
    );

    const matched = matchedKeywords.length > 0;

    const contexts = matchedKeywords.map((keyword) =>
      getEvidenceContext(cvText, keyword)
    );

    const totalContextualMentions = contexts.reduce(
      (total, context) => total + context.contextualMentions,
      0
    );

    const totalOutcomeMentions = contexts.reduce(
      (total, context) => total + context.outcomeMentions,
      0
    );

    let evidenceLevel: RoleEvidence["evidenceLevel"] = "none";

    if (matched) {
      evidenceLevel = "mentioned";
    }

    const demonstratedKeywords = matchedKeywords.filter(
      (keyword) =>
        containsKeyword(cvSections.experience, keyword) ||
        containsKeyword(cvSections.projects, keyword)
    );

    if (demonstratedKeywords.length > 0) {
      evidenceLevel = "demonstrated";
    }

    const demonstratedText = `${cvSections.experience}\n${cvSections.projects}`;

    const hasImpactEvidence = demonstratedKeywords.some((keyword) => {
      const context = getEvidenceContext(demonstratedText, keyword);

      return context.contextualMentions > 0 && context.outcomeMentions > 0;
    });

    if (hasImpactEvidence) {
      evidenceLevel = "impact";
    }

    return {
      name: signal.name,
      weight: signal.weight,
      matched,
      matchedKeywords,

      evidenceLevel,
    };
  });

  const matchedEvidence = evidence.filter((item) => item.matched);

  const matchedWeight = matchedEvidence.reduce(
    (total, item) => total + item.weight,
    0
  );

  const totalWeight = evidence.reduce((total, item) => total + item.weight, 0);

  const score =
    totalWeight > 0 ? Math.round((matchedWeight / totalWeight) * 100) : null;

  const evidenceCoverage =
    evidence.length > 0 ? matchedEvidence.length / evidence.length : 0;

  let confidence: RoleMatchResult["confidence"] = "low";

  if (evidenceCoverage >= 0.65) {
    confidence = "high";
  } else if (evidenceCoverage >= 0.35) {
    confidence = "medium";
  }

  return {
    matched: true,
    profileId: profile.id,
    family: profile.family,
    targetRole: cleanTargetRole,
    score,
    confidence,
    evidence,
  };
}

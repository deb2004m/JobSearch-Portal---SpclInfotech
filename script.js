const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
});
// ===== JOB DATA =====
const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Pixel Labs",
    location: "San Francisco, CA",
    category: "IT",
    experience: "Mid-Level",
    salary: "$90k–120k",
    description:
      "Join our creative tech team to craft seamless, beautiful web experiences using React and modern CSS. You'll work closely with designers to bring pixel-perfect interfaces to life.",
    requirements: [
      "3+ years React experience",
      "Proficiency in TypeScript",
      "Strong CSS/animation skills",
      "Experience with design systems",
      "Excellent attention to detail",
    ],
    posted: "2 days ago",
    color: "#7c6aff",
    logo: "P",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Forma Studio",
    location: "New York, NY",
    category: "Design",
    experience: "Senior",
    salary: "$110k–140k",
    description:
      "Shape the future of product design at Forma. You'll lead UX strategy, run user research, and mentor a talented team of designers building next-gen SaaS products.",
    requirements: [
      "5+ years UX/product design",
      "Figma expert",
      "User research methodology",
      "Design systems experience",
      "Cross-functional leadership",
    ],
    posted: "1 day ago",
    color: "#ff6a9e",
    logo: "F",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Quantum Analytics",
    location: "Austin, TX",
    category: "IT",
    experience: "Senior",
    salary: "$130k–160k",
    description:
      "Drive data-driven decisions at Quantum Analytics. You'll build predictive models, analyze massive datasets, and present insights to C-suite stakeholders.",
    requirements: [
      "Python & R proficiency",
      "ML/deep learning frameworks",
      "SQL & big data tools",
      "Statistical analysis",
      "Strong communication skills",
    ],
    posted: "3 days ago",
    color: "#6affcf",
    logo: "Q",
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Bloom Agency",
    location: "Chicago, IL",
    category: "Marketing",
    experience: "Mid-Level",
    salary: "$75k–95k",
    description:
      "Lead integrated marketing campaigns across digital and traditional channels. You'll manage a small team and own the full campaign lifecycle from strategy to execution.",
    requirements: [
      "4+ years marketing experience",
      "Campaign management",
      "Google Analytics & Meta Ads",
      "Team leadership",
      "Budget management",
    ],
    posted: "5 days ago",
    color: "#ffbe64",
    logo: "B",
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "Nexus Systems",
    location: "Seattle, WA",
    category: "IT",
    experience: "Senior",
    salary: "$120k–155k",
    description:
      "Architect and scale distributed systems that power millions of users. You'll own critical microservices, mentor junior engineers, and drive architectural decisions.",
    requirements: [
      "5+ years backend development",
      "Node.js or Go",
      "Distributed systems",
      "AWS/GCP experience",
      "Database optimization",
    ],
    posted: "1 week ago",
    color: "#ff9d6a",
    logo: "N",
  },
  {
    id: 6,
    title: "Content Strategist",
    company: "Narrative Co",
    location: "Remote",
    category: "Marketing",
    experience: "Mid-Level",
    salary: "$65k–85k",
    description:
      "Develop compelling content strategies that drive brand awareness and audience engagement. You'll create editorial calendars, write long-form content, and own SEO strategy.",
    requirements: [
      "3+ years content marketing",
      "SEO expertise",
      "Excellent writing skills",
      "CMS proficiency",
      "Analytical mindset",
    ],
    posted: "4 days ago",
    color: "#a06aff",
    logo: "N",
  },
  {
    id: 7,
    title: "Junior iOS Developer",
    company: "AppForge",
    location: "Boston, MA",
    category: "IT",
    experience: "Fresher",
    salary: "$60k–80k",
    description:
      "Kick-start your mobile development career at AppForge. You'll work alongside senior engineers building consumer apps used by millions, with mentorship and rapid growth.",
    requirements: [
      "Swift fundamentals",
      "iOS SDK knowledge",
      "Understanding of MVC/MVVM",
      "Git version control",
      "Eagerness to learn",
    ],
    posted: "2 days ago",
    color: "#6ab3ff",
    logo: "A",
  },
  {
    id: 8,
    title: "Brand Designer",
    company: "Studio Craft",
    location: "Los Angeles, CA",
    category: "Design",
    experience: "Mid-Level",
    salary: "$80k–100k",
    description:
      "Create iconic visual identities for ambitious brands. From logo systems to brand guidelines, you'll shape how companies present themselves to the world.",
    requirements: [
      "3+ years brand design",
      "Adobe Creative Suite",
      "Typography expertise",
      "Brand strategy understanding",
      "Strong portfolio",
    ],
    posted: "6 days ago",
    color: "#ff6a9e",
    logo: "S",
  },
  {
    id: 9,
    title: "DevOps Engineer",
    company: "CloudPeak",
    location: "Denver, CO",
    category: "IT",
    experience: "Senior",
    salary: "$125k–155k",
    description:
      "Build and maintain the infrastructure that keeps our platform running 24/7. You'll implement CI/CD pipelines, manage cloud infrastructure, and drive reliability improvements.",
    requirements: [
      "5+ years DevOps",
      "Kubernetes & Docker",
      "Terraform/IaC",
      "AWS or Azure",
      "SRE principles",
    ],
    posted: "3 days ago",
    color: "#64d8a0",
    logo: "C",
  },
  {
    id: 10,
    title: "Social Media Manager",
    company: "Hype Digital",
    location: "Miami, FL",
    category: "Marketing",
    experience: "Fresher",
    salary: "$45k–60k",
    description:
      "Join our energetic digital agency and manage social media presence for exciting lifestyle brands. Perfect for someone creative who lives and breathes social trends.",
    requirements: [
      "Strong social media knowledge",
      "Content creation skills",
      "Photography basics",
      "Data analysis aptitude",
      "Creative mindset",
    ],
    posted: "1 day ago",
    color: "#ffbe64",
    logo: "H",
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Vega Tech",
    location: "San Francisco, CA",
    category: "IT",
    experience: "Senior",
    salary: "$140k–175k",
    description:
      "Own the product roadmap for our flagship SaaS platform. You'll bridge engineering, design, and business stakeholders to deliver features that customers love.",
    requirements: [
      "5+ years product management",
      "Agile/Scrum",
      "Technical background preferred",
      "Data-driven decision making",
      "Exceptional communication",
    ],
    posted: "2 days ago",
    color: "#7c6aff",
    logo: "V",
  },
  {
    id: 12,
    title: "Motion Designer",
    company: "Kinetic Studio",
    location: "Remote",
    category: "Design",
    experience: "Mid-Level",
    salary: "$70k–90k",
    description:
      "Create stunning animations and motion graphics for digital campaigns, product onboarding, and brand storytelling. You'll bring static designs to life with purposeful motion.",
    requirements: [
      "3+ years motion design",
      "After Effects expert",
      "Lottie/Rive experience",
      "Principle or Figma",
      "Strong storytelling sense",
    ],
    posted: "5 days ago",
    color: "#ff9d6a",
    logo: "K",
  },
  {
    id: 13,
    title: "Cybersecurity Analyst",
    company: "ShieldCore",
    location: "Washington, DC",
    category: "IT",
    experience: "Mid-Level",
    salary: "$95k–120k",
    description:
      "Protect critical infrastructure from emerging threats. You'll monitor systems, conduct vulnerability assessments, and develop incident response procedures.",
    requirements: [
      "3+ years security experience",
      "CISSP or CEH preferred",
      "SIEM tools",
      "Penetration testing",
      "Network protocols",
    ],
    posted: "1 week ago",
    color: "#6affcf",
    logo: "S",
  },
  {
    id: 14,
    title: "Copywriter",
    company: "WordSmith Agency",
    location: "New York, NY",
    category: "Marketing",
    experience: "Fresher",
    salary: "$42k–58k",
    description:
      "Write copy that converts for top consumer brands. From social ads to email sequences, you'll learn the craft of persuasive writing from seasoned creatives.",
    requirements: [
      "Excellent writing ability",
      "Understanding of brand voice",
      "Willingness to accept feedback",
      "Research skills",
      "Portfolio of writing samples",
    ],
    posted: "3 days ago",
    color: "#a06aff",
    logo: "W",
  },
  {
    id: 15,
    title: "Full Stack Developer",
    company: "Meridian Labs",
    location: "Austin, TX",
    category: "IT",
    experience: "Mid-Level",
    salary: "$100k–130k",
    description:
      "Build end-to-end features across our modern web stack. You'll work on everything from database schema design to polished React UIs, shipping meaningful product improvements.",
    requirements: [
      "React & Node.js",
      "PostgreSQL or MongoDB",
      "REST & GraphQL APIs",
      "CI/CD familiarity",
      "Collaborative mindset",
    ],
    posted: "4 days ago",
    color: "#6ab3ff",
    logo: "M",
  },
  {
    id: 16,
    title: "HR Business Partner",
    company: "Talent Bridge",
    location: "Chicago, IL",
    category: "HR",
    experience: "Senior",
    salary: "$90k–115k",
    description:
      "Partner with leadership teams to build high-performing cultures. You'll drive talent strategy, manage complex employee relations, and lead organizational development initiatives.",
    requirements: [
      "5+ years HR experience",
      "Employment law knowledge",
      "HRIS proficiency",
      "Coaching & mediation",
      "Strategic thinking",
    ],
    posted: "6 days ago",
    color: "#ff6a9e",
    logo: "T",
  },
  {
    id: 17,
    title: "Junior Data Analyst",
    company: "Insight Corp",
    location: "Remote",
    category: "IT",
    experience: "Fresher",
    salary: "$55k–70k",
    description:
      "Start your data career analyzing business metrics and building dashboards that drive decisions. You'll learn SQL, Python, and BI tools in a supportive environment.",
    requirements: [
      "SQL knowledge",
      "Excel proficiency",
      "Basic Python/R",
      "Curiosity for data",
      "Attention to detail",
    ],
    posted: "2 days ago",
    color: "#64d8a0",
    logo: "I",
  },
  {
    id: 18,
    title: "Recruitment Specialist",
    company: "PeopleFirst",
    location: "Seattle, WA",
    category: "HR",
    experience: "Mid-Level",
    salary: "$60k–78k",
    description:
      "Source and attract top talent for fast-growing tech startups. You'll own full-cycle recruiting, build talent pipelines, and create exceptional candidate experiences.",
    requirements: [
      "3+ years recruiting",
      "ATS experience",
      "Sourcing techniques",
      "Interviewing skills",
      "Strong communication",
    ],
    posted: "1 day ago",
    color: "#ffbe64",
    logo: "P",
  },
];

// ===== STATE =====
let state = {
  search: "",
  title: "",
  location: "",
  category: "",
  experience: "",
  page: 1,
  perPage: 6,
};

let filtered = [...JOBS];

// ===== INIT =====
function init() {
  populateDropdowns();
  bindEvents();
  render();
}

function populateDropdowns() {
  const locations = [...new Set(JOBS.map((j) => j.location))].sort();
  const categories = [...new Set(JOBS.map((j) => j.category))].sort();

  const locSel = document.getElementById("locationFilter");
  const catSel = document.getElementById("categoryFilter");

  locations.forEach((l) => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    locSel.appendChild(opt);
  });

  categories.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    catSel.appendChild(opt);
  });
}

function bindEvents() {
  document.getElementById("globalSearch").addEventListener("input", (e) => {
    state.search = e.target.value.toLowerCase();
    state.page = 1;
    applyFilters();
  });

  document.getElementById("titleFilter").addEventListener("input", (e) => {
    state.title = e.target.value.toLowerCase();
    state.page = 1;
    applyFilters();
  });

  document.getElementById("locationFilter").addEventListener("change", (e) => {
    state.location = e.target.value;
    state.page = 1;
    applyFilters();
  });

  document.getElementById("categoryFilter").addEventListener("change", (e) => {
    state.category = e.target.value;
    state.page = 1;
    applyFilters();
  });

  document.getElementById("expFilter").addEventListener("change", (e) => {
    state.experience = e.target.value;
    state.page = 1;
    applyFilters();
  });

  document.getElementById("resetBtn").addEventListener("click", resetFilters);

  // Mobile filter toggle
  document.getElementById("filterToggleBtn").addEventListener("click", () => {
    const coll = document.getElementById("filterCollapsible");
    const chevron = document.getElementById("chevronIcon");
    coll.classList.toggle("open");
    chevron.classList.toggle("rotated");
  });

  // Open collapsible by default on desktop
  if (window.innerWidth > 768) {
    document.getElementById("filterCollapsible").classList.add("open");
  }

  // Modal close
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function applyFilters() {
  filtered = JOBS.filter((j) => {
    const searchMatch =
      !state.search ||
      j.title.toLowerCase().includes(state.search) ||
      j.company.toLowerCase().includes(state.search) ||
      j.description.toLowerCase().includes(state.search);

    const titleMatch =
      !state.title || j.title.toLowerCase().includes(state.title);
    const locMatch = !state.location || j.location === state.location;
    const catMatch = !state.category || j.category === state.category;
    const expMatch = !state.experience || j.experience === state.experience;

    return searchMatch && titleMatch && locMatch && catMatch && expMatch;
  });

  render();
}

function resetFilters() {
  state = {
    ...state,
    search: "",
    title: "",
    location: "",
    category: "",
    experience: "",
    page: 1,
  };
  document.getElementById("globalSearch").value = "";
  document.getElementById("titleFilter").value = "";
  document.getElementById("locationFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("expFilter").value = "";
  filtered = [...JOBS];
  render();
}

function render() {
  renderBadge();
  renderActiveTags();
  renderHeading();
  renderCards();
  renderPagination();
}

function renderBadge() {
  document.getElementById("jobCountBadge").textContent =
    `${filtered.length} opening${filtered.length !== 1 ? "s" : ""}`;
}

function renderHeading() {
  const h = document.getElementById("jobsHeading");
  const hasFilters =
    state.search ||
    state.title ||
    state.location ||
    state.category ||
    state.experience;
  h.textContent = hasFilters
    ? `${filtered.length} Result${filtered.length !== 1 ? "s" : ""} Found`
    : "All Openings";
}

function renderActiveTags() {
  const container = document.getElementById("activeTags");
  container.innerHTML = "";
  const tags = [
    { key: "search", val: state.search, label: `"${state.search}"` },
    { key: "title", val: state.title, label: state.title },
    { key: "location", val: state.location, label: state.location },
    { key: "category", val: state.category, label: state.category },
    { key: "experience", val: state.experience, label: state.experience },
  ];

  tags
    .filter((t) => t.val)
    .forEach((t) => {
      const tag = document.createElement("div");
      tag.className = "filter-tag";
      tag.innerHTML = `${t.label}<button onclick="removeFilter('${t.key}')">✕</button>`;
      container.appendChild(tag);
    });
}

function removeFilter(key) {
  state[key] = "";
  state.page = 1;
  if (key === "search") document.getElementById("globalSearch").value = "";
  if (key === "title") document.getElementById("titleFilter").value = "";
  if (key === "location") document.getElementById("locationFilter").value = "";
  if (key === "category") document.getElementById("categoryFilter").value = "";
  if (key === "experience") document.getElementById("expFilter").value = "";
  applyFilters();
}

function renderCards() {
  const grid = document.getElementById("jobsGrid");
  const start = (state.page - 1) * state.perPage;
  const paged = filtered.slice(start, start + state.perPage);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No jobs found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>`;
    return;
  }

  grid.innerHTML = paged
    .map(
      (j, i) => `
    <div class="job-card" onclick="openModal(${j.id})" style="animation-delay:${i * 0.06}s">
      <div class="card-top">
        <div class="company-logo" style="background:${j.color}22;color:${j.color}">${j.logo}</div>
        <div class="card-meta">
          <div class="job-title">${j.title}</div>
          <div class="company-name">${j.company}</div>
        </div>
        ${j.salary ? `<div class="salary-badge">${j.salary}</div>` : ""}
      </div>
      <div class="card-tags">
        <span class="tag tag-location">📍 ${j.location}</span>
        <span class="tag tag-category">${j.category}</span>
        <span class="tag tag-exp">${j.experience}</span>
      </div>
      <p class="card-desc">${j.description}</p>
      <div class="card-footer">
        <span class="posted-date">Posted ${j.posted}</span>
        <button class="view-btn" onclick="event.stopPropagation();openModal(${j.id})">View More</button>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderPagination() {
  const container = document.getElementById("pagination");
  const totalPages = Math.ceil(filtered.length / state.perPage);

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  let html = `
    <button class="page-btn" onclick="changePage(${state.page - 1})" ${state.page === 1 ? "disabled" : ""}>
      ← Prev
    </button>`;

  for (let p = 1; p <= totalPages; p++) {
    if (
      totalPages > 7 &&
      p > 2 &&
      p < totalPages - 1 &&
      Math.abs(p - state.page) > 1
    ) {
      if (p === 3 || p === totalPages - 2)
        html += `<span class="page-btn" style="cursor:default;opacity:0.4">…</span>`;
      continue;
    }
    html += `<button class="page-btn ${p === state.page ? "active" : ""}" onclick="changePage(${p})">${p}</button>`;
  }

  html += `
    <button class="page-btn" onclick="changePage(${state.page + 1})" ${state.page === totalPages ? "disabled" : ""}>
      Next →
    </button>`;

  container.innerHTML = html;
}

function changePage(p) {
  const totalPages = Math.ceil(filtered.length / state.perPage);
  if (p < 1 || p > totalPages) return;
  state.page = p;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== MODAL =====
function openModal(id) {
  const job = JOBS.find((j) => j.id === id);
  if (!job) return;

  document.getElementById("modalLogo").textContent = job.logo;
  document.getElementById("modalLogo").style.background = job.color + "22";
  document.getElementById("modalLogo").style.color = job.color;
  document.getElementById("modalJobTitle").textContent = job.title;
  document.getElementById("modalCompany").textContent = job.company;

  document.getElementById("modalInfoGrid").innerHTML = `
    <div class="modal-info-item">
      <div class="modal-info-label">Location</div>
      <div class="modal-info-value">📍 ${job.location}</div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Experience</div>
      <div class="modal-info-value">${job.experience}</div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Category</div>
      <div class="modal-info-value">${job.category}</div>
    </div>
    <div class="modal-info-item">
      <div class="modal-info-label">Salary</div>
      <div class="modal-info-value">${job.salary || "Competitive"}</div>
    </div>
  `;

  document.getElementById("modalTags").innerHTML = `
    <span class="tag tag-location">${job.location}</span>
    <span class="tag tag-category">${job.category}</span>
    <span class="tag tag-exp">${job.experience}</span>
  `;

  document.getElementById("modalDescription").textContent = job.description;
  document.getElementById("modalRequirements").innerHTML = job.requirements
    .map((r) => `<li>${r}</li>`)
    .join("");

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ===== START =====
init();

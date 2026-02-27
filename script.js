const JOBS = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tata Consultancy Services",
    location: "Bengaluru, Karnataka",
    category: "IT",
    experience: "Fresher",
    salary: "₹3–6 LPA",
    description:
      "Join our creative tech team to craft seamless, beautiful web experiences using React and modern CSS. You'll work closely with designers to bring pixel-perfect interfaces to life.",
    requirements: [
      "0–2 years React experience",
      "Proficiency in TypeScript",
      "Strong CSS/animation skills",
      "Experience with design systems",
      "Excellent attention to detail",
    ],
    posted: "2 days ago",
    color: "#7c6aff",
    logo: "T",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Infosys",
    location: "Pune, Maharashtra",
    category: "Design",
    experience: "Senior",
    salary: "₹12–18 LPA",
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
    logo: "I",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Wipro",
    location: "Hyderabad, Telangana",
    category: "IT",
    experience: "Senior",
    salary: "₹15–25 LPA",
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
    logo: "W",
  },
  {
    id: 4,
    title: "Marketing Manager",
    company: "Byju’s",
    location: "Mumbai, Maharashtra",
    category: "Marketing",
    experience: "Mid-Level",
    salary: "₹6–12 LPA",
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
    company: "HCLTech",
    location: "Noida, Uttar Pradesh",
    category: "IT",
    experience: "Senior",
    salary: "₹14–22 LPA",
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
    logo: "H",
  },
  {
    id: 6,
    title: "Content Strategist",
    company: "Times Internet",
    location: "Gurugram, Haryana",
    category: "Marketing",
    experience: "Mid-Level",
    salary: "₹5–9 LPA",
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
    logo: "T",
  },
  {
    id: 7,
    title: "Junior iOS Developer",
    company: "Zoho Corporation",
    location: "Chennai, Tamil Nadu",
    category: "IT",
    experience: "Fresher",
    salary: "₹4–8 LPA",
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
    logo: "Z",
  },
  {
    id: 8,
    title: "Brand Designer",
    company: "Nykaa",
    location: "Mumbai, Maharashtra",
    category: "Design",
    experience: "Mid-Level",
    salary: "₹6–10 LPA",
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
    logo: "N",
  },
  {
    id: 9,
    title: "DevOps Engineer",
    company: "Tech Mahindra",
    location: "Chennai, Tamil Nadu",
    category: "IT",
    experience: "Senior",
    salary: "₹12–20 LPA",
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
    logo: "T",
  },
  {
    id: 10,
    title: "Social Media Manager",
    company: "Zomato",
    location: "Delhi, India",
    category: "Marketing",
    experience: "Fresher",
    salary: "₹3–6 LPA",
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
    logo: "Z",
  },
  {
    id: 11,
    title: "Product Manager",
    company: "Flipkart",
    location: "Bengaluru, Karnataka",
    category: "IT",
    experience: "Senior",
    salary: "₹20–35 LPA",
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
    logo: "F",
  },
  {
    id: 12,
    title: "Motion Designer",
    company: "Swiggy",
    location: "Remote (India)",
    category: "Design",
    experience: "Mid-Level",
    salary: "₹5–9 LPA",
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
    logo: "S",
  },
  {
    id: 13,
    title: "Cybersecurity Analyst",
    company: "TCS",
    location: "Kolkata, West Bengal",
    category: "IT",
    experience: "Mid-Level",
    salary: "₹8–14 LPA",
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
    logo: "T",
  },
  {
    id: 14,
    title: "Copywriter",
    company: "Dentsu India",
    location: "Mumbai, Maharashtra",
    category: "Marketing",
    experience: "Fresher",
    salary: "₹3–5 LPA",
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
    logo: "D",
  },
  {
    id: 15,
    title: "Full Stack Developer",
    company: "Paytm",
    location: "Noida, Uttar Pradesh",
    category: "IT",
    experience: "Mid-Level",
    salary: "₹10–18 LPA",
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
    logo: "P",
  },
  {
    id: 16,
    title: "HR Business Partner",
    company: "Reliance Industries",
    location: "Ahmedabad, Gujarat",
    category: "HR",
    experience: "Senior",
    salary: "₹12–20 LPA",
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
    logo: "R",
  },
  {
    id: 17,
    title: "Junior Data Analyst",
    company: "Capgemini",
    location: "Hyderabad, Telangana",
    category: "IT",
    experience: "Fresher",
    salary: "₹4–7 LPA",
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
    logo: "C",
  },
  {
    id: 18,
    title: "Recruitment Specialist",
    company: "TeamLease Services",
    location: "Bengaluru, Karnataka",
    category: "HR",
    experience: "Mid-Level",
    salary: "₹5–8 LPA",
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
    logo: "T",
  },
];

/* =========================================================
   STATE
   ========================================================= */
let state = {
  search: "",
  title: "",
  location: "",
  category: "",
  experience: "",
  page: 1,
  perPage: 6,
  currentJobId: null,
  appliedCount: 0,
  viewedCount: 0,
  theme: "dark",
  selectedFile: null,
};

let filtered = [...JOBS];

/* =========================================================
   THEME
   ========================================================= */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  document.getElementById("moonIcon").style.display =
    newTheme === "dark" ? "block" : "none";
  document.getElementById("sunIcon").style.display =
    newTheme === "light" ? "block" : "none";
}

document
  .getElementById("themeToggleBtn")
  .addEventListener("click", toggleTheme);

/* =========================================================
   PROFILE DROPDOWN
   ========================================================= */
document.getElementById("profileTrigger").addEventListener("click", (e) => {
  e.stopPropagation();
  document.getElementById("profileDropdown").classList.toggle("open");
});

document.addEventListener("click", () => {
  document.getElementById("profileDropdown").classList.remove("open");
});

document
  .getElementById("profileDropdown")
  .addEventListener("click", (e) => e.stopPropagation());

function closeProfileDropdown() {
  document.getElementById("profileDropdown").classList.remove("open");
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  populateDropdowns();
  bindEvents();
  // Open filters on desktop by default
  if (window.innerWidth > 768)
    document.getElementById("filterCollapsible").classList.remove("collapsed");
  else document.getElementById("filterCollapsible").classList.add("collapsed");
  render();
}

function populateDropdowns() {
  const locations = [...new Set(JOBS.map((j) => j.location))].sort();
  const categories = [...new Set(JOBS.map((j) => j.category))].sort();
  const locSel = document.getElementById("locationFilter");
  const catSel = document.getElementById("categoryFilter");
  locations.forEach((l) => {
    const o = document.createElement("option");
    o.value = l;
    o.textContent = l;
    locSel.appendChild(o);
  });
  categories.forEach((c) => {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    catSel.appendChild(o);
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
    const chev = document.getElementById("chevronIcon");
    coll.classList.toggle("collapsed");
    chev.classList.toggle("rotated");
  });

  // Job detail modal close
  document
    .getElementById("modalClose")
    .addEventListener("click", closeJobModal);
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalOverlay")) closeJobModal();
  });

  // Apply form modal close
  document
    .getElementById("applyFormClose")
    .addEventListener("click", closeApplyForm);
  document.getElementById("applyFormOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("applyFormOverlay"))
      closeApplyForm();
  });

  // Apply now button (inside job detail modal)
  document
    .getElementById("applyNowBtn")
    .addEventListener("click", openApplyForm);

  // Submit application
  document
    .getElementById("submitApplicationBtn")
    .addEventListener("click", submitApplication);

  // Drag & drop
  const dropArea = document.getElementById("fileUploadArea");
  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
  });
  dropArea.addEventListener("dragleave", () =>
    dropArea.classList.remove("dragover"),
  );
  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
    const f = e.dataTransfer.files[0];
    if (f) setFile(f);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeJobModal();
      closeApplyForm();
    }
  });
}

/* =========================================================
   FILTERS
   ========================================================= */
function applyFilters() {
  filtered = JOBS.filter((j) => {
    const s = state.search;
    const searchOk =
      !s ||
      j.title.toLowerCase().includes(s) ||
      j.company.toLowerCase().includes(s) ||
      j.description.toLowerCase().includes(s);
    const titleOk = !state.title || j.title.toLowerCase().includes(state.title);
    const locOk = !state.location || j.location === state.location;
    const catOk = !state.category || j.category === state.category;
    const expOk = !state.experience || j.experience === state.experience;
    return searchOk && titleOk && locOk && catOk && expOk;
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

/* =========================================================
   RENDER
   ========================================================= */
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
  const has =
    state.search ||
    state.title ||
    state.location ||
    state.category ||
    state.experience;
  document.getElementById("jobsHeading").textContent = has
    ? `${filtered.length} Result${filtered.length !== 1 ? "s" : ""} Found`
    : "All Openings";
}

function renderActiveTags() {
  const c = document.getElementById("activeTags");
  c.innerHTML = "";
  [
    { key: "search", val: state.search, label: `"${state.search}"` },
    { key: "title", val: state.title, label: state.title },
    { key: "location", val: state.location, label: state.location },
    { key: "category", val: state.category, label: state.category },
    { key: "experience", val: state.experience, label: state.experience },
  ]
    .filter((t) => t.val)
    .forEach((t) => {
      const el = document.createElement("div");
      el.className = "filter-tag";
      el.innerHTML = `${t.label}<button onclick="removeFilter('${t.key}')">✕</button>`;
      c.appendChild(el);
    });
}

function renderCards() {
  const grid = document.getElementById("jobsGrid");
  const start = (state.page - 1) * state.perPage;
  const paged = filtered.slice(start, start + state.perPage);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><h3>No jobs found</h3><p>Try adjusting your filters or search terms</p></div>`;
    return;
  }

  grid.innerHTML = paged
    .map(
      (j, i) => `
    <div class="job-card" onclick="openJobModal(${j.id})" style="animation-delay:${i * 0.06}s">
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
        <button class="view-btn" onclick="event.stopPropagation();openJobModal(${j.id})">View More</button>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderPagination() {
  const c = document.getElementById("pagination");
  const total = Math.ceil(filtered.length / state.perPage);
  if (total <= 1) {
    c.innerHTML = "";
    return;
  }

  let html = `<button class="page-btn" onclick="changePage(${state.page - 1})" ${state.page === 1 ? "disabled" : ""}>← Prev</button>`;

  for (let p = 1; p <= total; p++) {
    if (total > 7 && p > 2 && p < total - 1 && Math.abs(p - state.page) > 1) {
      if (p === 3 || p === total - 2)
        html += `<span class="page-btn" style="cursor:default;opacity:.35">…</span>`;
      continue;
    }
    html += `<button class="page-btn ${p === state.page ? "active" : ""}" onclick="changePage(${p})">${p}</button>`;
  }

  html += `<button class="page-btn" onclick="changePage(${state.page + 1})" ${state.page === total ? "disabled" : ""}>Next →</button>`;
  c.innerHTML = html;
}

function changePage(p) {
  const total = Math.ceil(filtered.length / state.perPage);
  if (p < 1 || p > total) return;
  state.page = p;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   JOB DETAIL MODAL
   ========================================================= */
function openJobModal(id) {
  const job = JOBS.find((j) => j.id === id);
  if (!job) return;
  state.currentJobId = id;

  // Track viewed
  state.viewedCount++;
  document.getElementById("statViewed").textContent = state.viewedCount;

  document.getElementById("modalLogo").textContent = job.logo;
  document.getElementById("modalLogo").style.cssText =
    `background:${job.color}22;color:${job.color}`;
  document.getElementById("modalJobTitle").textContent = job.title;
  document.getElementById("modalCompany").textContent =
    `${job.company} • ${job.location}`;
  document.getElementById("modalInfoGrid").innerHTML = `
    <div class="modal-info-item"><div class="modal-info-label">Location</div><div class="modal-info-value">📍 ${job.location}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Experience</div><div class="modal-info-value">${job.experience}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Category</div><div class="modal-info-value">${job.category}</div></div>
    <div class="modal-info-item"><div class="modal-info-label">Salary</div><div class="modal-info-value">${job.salary || "Competitive"}</div></div>
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

function closeJobModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* =========================================================
   APPLICATION FORM
   ========================================================= */
function openApplyForm() {
  closeJobModal();
  const job = JOBS.find((j) => j.id === state.currentJobId);
  if (job)
    document.getElementById("applyFormSubtitle").textContent =
      `Applying for: ${job.title} at ${job.company}`;

  // Reset form
  document.getElementById("applicantName").value = "";
  document.getElementById("applicantEmail").value = "";
  document.getElementById("applicantPhone").value = "";
  document.getElementById("applicantBatch").value = "";
  document.getElementById("applicantLinkedIn").value = "";
  document.getElementById("fileSelectedName").textContent = "";
  document.getElementById("resumeFile").value = "";
  state.selectedFile = null;
  document
    .querySelectorAll(".form-error")
    .forEach((e) => e.classList.remove("show"));

  document.getElementById("applyFormOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeApplyForm() {
  document.getElementById("applyFormOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) setFile(file);
}

function setFile(file) {
  state.selectedFile = file;
  document.getElementById("fileSelectedName").textContent = `✓ ${file.name}`;
  document.getElementById("fileUploadArea").style.borderColor =
    "var(--accent3)";
  document.getElementById("resumeError").classList.remove("show");
}

function validateForm() {
  let valid = true;
  const name = document.getElementById("applicantName").value.trim();
  const email = document.getElementById("applicantEmail").value.trim();
  const batch = document.getElementById("applicantBatch").value.trim();

  if (!name) {
    document.getElementById("nameError").classList.add("show");
    valid = false;
  } else document.getElementById("nameError").classList.remove("show");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById("emailError").classList.add("show");
    valid = false;
  } else document.getElementById("emailError").classList.remove("show");

  if (!batch) {
    document.getElementById("batchError").classList.add("show");
    valid = false;
  } else document.getElementById("batchError").classList.remove("show");

  if (!state.selectedFile) {
    document.getElementById("resumeError").classList.add("show");
    valid = false;
  } else document.getElementById("resumeError").classList.remove("show");

  return valid;
}

function submitApplication() {
  if (!validateForm()) return;

  const job = JOBS.find((j) => j.id === state.currentJobId);
  const btn = document.getElementById("submitApplicationBtn");

  btn.textContent = "Submitting…";
  btn.disabled = true;

  setTimeout(() => {
    closeApplyForm();

    // Update stats
    state.appliedCount++;
    document.getElementById("statApplied").textContent = state.appliedCount;

    // Show toast
    document.getElementById("toastSubtitle").textContent = job
      ? `Your application for ${job.title} at ${job.company} was successfully submitted!`
      : "Your application was successfully submitted!";

    const toast = document.getElementById("successToast");
    // Restart progress animation
    const prog = document.getElementById("toastProgress");
    prog.style.animation = "none";
    void prog.offsetWidth;
    prog.style.animation = "progressShrink 4s linear forwards";

    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 4500);

    btn.textContent = "Submit Application →";
    btn.disabled = false;
  }, 1200);
}

/* =========================================================
   BOOT
   ========================================================= */
init();

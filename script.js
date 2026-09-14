/* =========================================================
   EDUMATCH — Main JavaScript
   ========================================================= */

const schools = [
    {
        id: 1,
        name: "Notre Dame University",
        city: "Cotabato City",
        province: "Cotabato City",
        type: "Private",
        programs: ["BS Computer Science", "BS Education", "BS Business Administration", "BS Criminology", "BS Accountancy"],
        admissionRequirements: ["Form 138 (Report Card)", "Certificate of Good Moral Character", "NDU entrance exam", "PSA Birth Certificate"],
        applicationPeriod: "March – May",
        tuition: "Not publicly available — verify with the registrar",
        scholarshipsAvailable: ["Institutional academic scholarship", "Athletic scholarship"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 2,
        name: "Notre Dame of Parang College",
        city: "Parang",
        province: "Maguindanao del Norte",
        type: "Private",
        programs: ["BS Education", "BS Business Administration", "BS Information Technology"],
        admissionRequirements: ["Form 138", "Barangay Certificate of Residency", "2x2 ID photo"],
        applicationPeriod: "April – June",
        tuition: "Not publicly available — verify with the registrar",
        scholarshipsAvailable: ["Institutional academic scholarship"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 3,
        name: "Mindanao State University – Main Campus",
        city: "Marawi City",
        province: "Lanao del Sur",
        type: "Public",
        programs: ["BS Civil Engineering", "BS Agriculture", "BS Education", "BS Computer Science"],
        admissionRequirements: ["MSU-CET result", "Form 138", "PSA Birth Certificate"],
        applicationPeriod: "February – April",
        tuition: "State university — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible", "Institutional grants-in-aid"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 4,
        name: "MSU – Maguindanao",
        city: "Datu Odin Sinsuat",
        province: "Maguindanao del Norte",
        type: "Public",
        programs: ["BS Nursing", "BS Civil Engineering", "BS Education"],
        admissionRequirements: ["MSU-CET result", "Form 138", "Medical certificate"],
        applicationPeriod: "March – May",
        tuition: "State university — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 5,
        name: "Cotabato City State Polytechnic College",
        city: "Cotabato City",
        province: "Cotabato City",
        type: "Public",
        programs: ["BS Information Technology", "BS Business Administration", "BS Criminology"],
        admissionRequirements: ["Form 138", "Certificate of Good Moral Character"],
        applicationPeriod: "April – June",
        tuition: "State college — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 6,
        name: "Sulu State College",
        city: "Jolo",
        province: "Sulu",
        type: "Public",
        programs: ["BS Education", "BS Agriculture", "BS Nursing"],
        admissionRequirements: ["Form 138", "Barangay Clearance", "Entrance exam"],
        applicationPeriod: "May – June",
        tuition: "State college — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 7,
        name: "Basilan State College",
        city: "Isabela City",
        province: "Basilan",
        type: "Public",
        programs: ["BS Education", "BS Business Administration", "BS Agriculture"],
        admissionRequirements: ["Form 138", "Certificate of Residency"],
        applicationPeriod: "April – June",
        tuition: "State college — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    },
    {
        id: 8,
        name: "Adiong Memorial State College",
        city: "Ditsaan-Ramain",
        province: "Lanao del Sur",
        type: "Public",
        programs: ["BS Education", "BS Social Work", "BS Agriculture"],
        admissionRequirements: ["Form 138", "Entrance exam"],
        applicationPeriod: "March – May",
        tuition: "State college — minimal fees under the Free Higher Education Act",
        scholarshipsAvailable: ["CHED TES / TDP eligible"],
        email: "Not publicly available",
        phone: "Not publicly available",
        website: "#",
        source: "SAMPLE DATA — replace with verified school source",
        dateVerified: "September 2026"
    }
];

const scholarships = [
    {
        id: 1,
        name: "BARMM MBHTE Regional Scholarship",
        provider: "Ministry of Basic, Higher and Technical Education (BARMM)",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City"],
        eligibility: "For BARMM residents pursuing an undergraduate degree.",
        programs: "All undergraduate programs",
        applicationOpen: "June",
        applicationDeadline: "Check official MBHTE announcement",
        requirements: ["Certificate of BARMM Residency", "Form 138 (GWA 83 and above)", "Certificate of Indigency"],
        benefits: "Benefits depend on official MBHTE guidelines for the school year.",
        website: "#",
        source: "SAMPLE DATA — replace with official MBHTE source",
        dateVerified: "September 2026"
    },
    {
        id: 2,
        name: "CHED Merit Scholarship Program",
        provider: "Commission on Higher Education",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City"],
        eligibility: "For incoming freshmen with strong academic standing (GWA 85 and above).",
        programs: "All CHED-recognized undergraduate programs",
        applicationOpen: "May – June",
        applicationDeadline: "Check official CHED announcement",
        requirements: ["Form 138 (GWA 85 and above)", "PSA Birth Certificate", "2x2 ID photo"],
        benefits: "Tuition and allowance support per official CHED guidelines.",
        website: "#",
        source: "SAMPLE DATA — replace with official CHED source",
        dateVerified: "September 2026"
    },
    {
        id: 3,
        name: "CHED Tertiary Education Subsidy (TES)",
        provider: "Commission on Higher Education / UniFAST",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City"],
        eligibility: "For enrolled students in CHED-recognized programs, prioritizing financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "Rolling, upon enrollment",
        applicationDeadline: "Set by UniFAST each academic year",
        requirements: ["Certificate of Enrollment", "Income Certificate"],
        benefits: "Subsidy amount set annually by UniFAST.",
        website: "#",
        source: "SAMPLE DATA — replace with official UniFAST source",
        dateVerified: "September 2026"
    },
    {
        id: 4,
        name: "DOST-SEI Undergraduate S&T Scholarship",
        provider: "Department of Science and Technology",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City"],
        eligibility: "For students pursuing science, engineering, or technology courses with strong Math/Science grades.",
        programs: "BS Computer Science, BS Civil Engineering, BS Information Technology, BS Agriculture",
        applicationOpen: "August – September",
        applicationDeadline: "Check official DOST-SEI announcement",
        requirements: ["DOST-SEI qualifying exam", "Form 138 (Science/Math grades 85 and above)"],
        benefits: "Monthly stipend, tuition, and book allowance per DOST-SEI guidelines.",
        website: "#",
        source: "SAMPLE DATA — replace with official DOST-SEI source",
        dateVerified: "September 2026"
    },
    {
        id: 5,
        name: "Maguindanao Provincial Governor's Scholarship",
        provider: "Provincial Government of Maguindanao",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur"],
        eligibility: "For residents of Maguindanao del Norte or del Sur with financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "July",
        applicationDeadline: "Check official provincial announcement",
        requirements: ["Certificate of Residency (Maguindanao)", "Form 138", "Certificate of Indigency"],
        benefits: "Benefits set annually by the Provincial Government.",
        website: "#",
        source: "SAMPLE DATA — replace with official provincial source",
        dateVerified: "September 2026"
    },
    {
        id: 6,
        name: "Parang Municipal Scholarship Program",
        provider: "Local Government of Parang",
        provinces: ["Maguindanao del Norte"],
        eligibility: "For residents of Parang, Maguindanao del Norte.",
        programs: "All undergraduate programs",
        applicationOpen: "June",
        applicationDeadline: "Check official municipal announcement",
        requirements: ["Certificate of Residency (Parang)", "Form 138", "Barangay Endorsement"],
        benefits: "Benefits set annually by the Municipal Government.",
        website: "#",
        source: "SAMPLE DATA — replace with official LGU source",
        dateVerified: "September 2026"
    },
    {
        id: 7,
        name: "Lanao del Sur Provincial Scholarship",
        provider: "Provincial Government of Lanao del Sur",
        provinces: ["Lanao del Sur"],
        eligibility: "For residents of Lanao del Sur with financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "July",
        applicationDeadline: "Check official provincial announcement",
        requirements: ["Certificate of Residency", "Form 138", "Certificate of Indigency"],
        benefits: "Benefits set annually by the Provincial Government.",
        website: "#",
        source: "SAMPLE DATA — replace with official provincial source",
        dateVerified: "September 2026"
    },
    {
        id: 8,
        name: "Sulu Provincial Scholarship Program",
        provider: "Provincial Government of Sulu",
        provinces: ["Sulu"],
        eligibility: "For residents of Sulu with financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "June – July",
        applicationDeadline: "Check official provincial announcement",
        requirements: ["Certificate of Residency", "Form 138"],
        benefits: "Benefits set annually by the Provincial Government.",
        website: "#",
        source: "SAMPLE DATA — replace with official provincial source",
        dateVerified: "September 2026"
    },
    {
        id: 9,
        name: "Basilan Provincial Scholarship Program",
        provider: "Provincial Government of Basilan",
        provinces: ["Basilan"],
        eligibility: "For residents of Basilan with financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "June – July",
        applicationDeadline: "Check official provincial announcement",
        requirements: ["Certificate of Residency", "Form 138"],
        benefits: "Benefits set annually by the Provincial Government.",
        website: "#",
        source: "SAMPLE DATA — replace with official provincial source",
        dateVerified: "September 2026"
    }
];

const form = document.getElementById("recommendationForm");
const resultsSection = document.getElementById("results");

const studentNameInput = document.getElementById("studentName");
const gradeLevelInput = document.getElementById("gradeLevel");
const strandInput = document.getElementById("strand");
const gwaInput = document.getElementById("gwa");
const courseInput = document.getElementById("course");
const interestInput = document.getElementById("interest");
const provinceInput = document.getElementById("province");
const institutionTypeInput = document.getElementById("institutionType");

const schoolResults = document.getElementById("schoolResults");
const scholarshipResults = document.getElementById("scholarshipResults");
const schoolCount = document.getElementById("schoolCount");
const scholarshipCount = document.getElementById("scholarshipCount");

const editProfileButton = document.getElementById("editProfileButton");

const schoolModal = document.getElementById("schoolModal");
const scholarshipModal = document.getElementById("scholarshipModal");
const schoolModalContent = document.getElementById("schoolModalContent");
const scholarshipModalContent = document.getElementById("scholarshipModalContent");
const closeSchoolModal = document.getElementById("closeSchoolModal");
const closeScholarshipModal = document.getElementById("closeScholarshipModal");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const student = {
        name: studentNameInput.value.trim(),
        grade: gradeLevelInput.value,
        strand: strandInput.value,
        gwa: Number(gwaInput.value),
        course: courseInput.value,
        interest: interestInput.value,
        province: provinceInput.value,
        institutionType: institutionTypeInput.value
    };

    generateRecommendations(student);

    resultsSection.classList.remove("hidden");
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});

function generateRecommendations(student) {
    updateSummary(student);

    const recommendedSchools = findMatchingSchools(student);
    const recommendedScholarships = findMatchingScholarships(student);

    displaySchools(recommendedSchools, student);
    displayScholarships(recommendedScholarships);

    schoolCount.textContent = `${recommendedSchools.length} school${recommendedSchools.length === 1 ? "" : "s"}`;
    scholarshipCount.textContent = `${recommendedScholarships.length} scholarship${recommendedScholarships.length === 1 ? "" : "s"}`;

    document.getElementById("resultIntro").textContent =
        `Recommendations based on ${student.course}, ${student.province}, and the profile information you provided.`;
}

function updateSummary(student) {
    document.getElementById("summaryName").textContent = student.name || "—";
    document.getElementById("summaryCourse").textContent = student.course || "—";
    document.getElementById("summaryStrand").textContent = student.strand || "—";
    document.getElementById("summaryGwa").textContent = isNaN(student.gwa) ? "—" : student.gwa.toFixed(2);
    document.getElementById("summaryProvince").textContent = student.province || "—";
}

function findMatchingSchools(student) {
    const matches = schools.filter((school) =>
        school.programs.some((program) => program.toLowerCase() === student.course.toLowerCase())
    );

    matches.sort((a, b) => {
        const aNear = student.province === "Any BARMM Province" || a.province === student.province ? 0 : 1;
        const bNear = student.province === "Any BARMM Province" || b.province === student.province ? 0 : 1;
        if (aNear !== bNear) return aNear - bNear;

        const aType = student.institutionType === "Any" || a.type === student.institutionType ? 0 : 1;
        const bType = student.institutionType === "Any" || b.type === student.institutionType ? 0 : 1;
        return aType - bType;
    });

    return matches;
}

function courseMatchesInterest(course, interest) {
    const map = {
        "BS Nursing": "Health",
        "BS Computer Science": "Technology",
        "BS Information Technology": "Technology",
        "BS Accountancy": "Business",
        "BS Business Administration": "Business",
        "BS Education": "Education",
        "BS Psychology": "Social Sciences",
        "BS Social Work": "Social Sciences",
        "BS Civil Engineering": "Engineering",
        "BS Agriculture": "Science",
        "BS Criminology": "Social Sciences"
    };
    return map[course] === interest;
}

function findMatchingScholarships(student) {
    return scholarships.filter((scholarship) => {
        const locationMatch =
            student.province === "Any BARMM Province" || scholarship.provinces.includes(student.province);

        if (!locationMatch) return false;

        if (scholarship.programs && scholarship.programs !== "All undergraduate programs") {
            return scholarship.programs.toLowerCase().includes(student.course.toLowerCase());
        }

        return true;
    });
}

function displaySchools(recommendations, student) {
    schoolResults.innerHTML = "";

    if (recommendations.length === 0) {
        schoolResults.innerHTML = `
            <div class="empty-state">
                <h4>No matching schools found</h4>
                <p>Try another course — none of the schools in our current data list ${student.course || "that course"} yet.</p>
            </div>`;
        return;
    }

    recommendations.forEach((school) => {
        const card = document.createElement("article");
        card.className = "school-card";

        card.innerHTML = `
            <div class="school-top">
                <div class="school-icon">🎓</div>
                <div>
                    <h4>${school.name}</h4>
                    <div class="school-location">📍 ${school.city}, ${school.province}</div>
                </div>
                ${school.province === student.province ? `<span class="match-label">NEAR YOU</span>` : ""}
            </div>

            <div class="school-info">
                <div class="info-box"><small>Institution</small><strong>${school.type}</strong></div>
                <div class="info-box"><small>Matching Course</small><strong>${student.course}</strong></div>
                <div class="info-box"><small>Application</small><strong>${school.applicationPeriod}</strong></div>
                <div class="info-box"><small>Tuition / Fees</small><strong>${school.tuition}</strong></div>
            </div>

            <div class="school-actions">
                <button class="small-button" onclick="openSchoolModal(${school.id})">View Details</button>
                ${
                    school.website !== "#"
                        ? `<a href="${school.website}" target="_blank" class="small-button primary">Official Website</a>`
                        : `<button class="small-button primary" onclick="openSchoolModal(${school.id})">School Information</button>`
                }
            </div>
        `;

        schoolResults.appendChild(card);
    });
}

function displayScholarships(matchingScholarships) {
    scholarshipResults.innerHTML = "";

    if (matchingScholarships.length === 0) {
        scholarshipResults.innerHTML = `
            <div class="empty-state">
                <h4>No scholarship matches found</h4>
                <p>Check the scholarship database again after adding verified data for your area.</p>
            </div>`;
        return;
    }

    matchingScholarships.forEach((scholarship) => {
        const card = document.createElement("article");
        card.className = "scholarship-card";

        card.innerHTML = `
            <div class="scholarship-main">
                <div class="scholarship-icon">💰</div>
                <div>
                    <h4>${scholarship.name}</h4>
                    <div class="scholarship-provider">${scholarship.provider}</div>
                    <div class="scholarship-meta">
                        <span>📅 Opens: ${scholarship.applicationOpen}</span>
                        <span>Deadline: ${scholarship.applicationDeadline}</span>
                    </div>
                </div>
            </div>
            <div class="scholarship-action">
                <button class="small-button primary" onclick="openScholarshipModal(${scholarship.id})">View Details</button>
            </div>
        `;

        scholarshipResults.appendChild(card);
    });
}

function openSchoolModal(schoolId) {
    const school = schools.find((item) => item.id === schoolId);
    if (!school) return;

    schoolModalContent.innerHTML = `
        <div class="eyebrow">SCHOOL INFORMATION</div>
        <h3>${school.name}</h3>
        <div class="modal-location">📍 ${school.city}, ${school.province}</div>

        <div class="modal-section">
            <h4>Type of Institution</h4>
            <p>${school.type}</p>
        </div>

        <div class="modal-section">
            <h4>College Programs / Courses</h4>
            <ul>${school.programs.map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>

        <div class="modal-section">
            <h4>Admission Requirements</h4>
            <ul>${school.admissionRequirements.map((r) => `<li>${r}</li>`).join("")}</ul>
        </div>

        <div class="modal-section">
            <h4>Application Period</h4>
            <p>${school.applicationPeriod}</p>
        </div>

        <div class="modal-section">
            <h4>Tuition / Fees</h4>
            <p>${school.tuition}</p>
        </div>

        <div class="modal-section">
            <h4>Scholarships at This School</h4>
            <ul>${school.scholarshipsAvailable.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>

        <div class="modal-section">
            <h4>Official Contact</h4>
            <p>Email: ${school.email}</p>
            <p>Telephone: ${school.phone}</p>
        </div>

        <div class="modal-section">
            <h4>Source</h4>
            <p>${school.source}</p>
            <p>Date Verified: ${school.dateVerified}</p>
        </div>

        ${school.website !== "#" ? `<a href="${school.website}" target="_blank" class="modal-link">Visit Official Website →</a>` : ""}
    `;

    schoolModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function openScholarshipModal(scholarshipId) {
    const scholarship = scholarships.find((item) => item.id === scholarshipId);
    if (!scholarship) return;

    scholarshipModalContent.innerHTML = `
        <div class="eyebrow">SCHOLARSHIP INFORMATION</div>
        <h3>${scholarship.name}</h3>
        <div class="modal-location">${scholarship.provider}</div>

        <div class="modal-section">
            <h4>Eligibility</h4>
            <p>${scholarship.eligibility}</p>
        </div>

        <div class="modal-section">
            <h4>Eligible Programs</h4>
            <p>${scholarship.programs}</p>
        </div>

        <div class="modal-section">
            <h4>Application Period</h4>
            <p>Opens: ${scholarship.applicationOpen}</p>
            <p>Deadline: ${scholarship.applicationDeadline}</p>
        </div>

        <div class="modal-section">
            <h4>Requirements</h4>
            <ul>${scholarship.requirements.map((r) => `<li>${r}</li>`).join("")}</ul>
        </div>

        <div class="modal-section">
            <h4>Scholarship Benefits</h4>
            <p>${scholarship.benefits}</p>
        </div>

        <div class="modal-section">
            <h4>Source</h4>
            <p>${scholarship.source}</p>
            <p>Date Verified: ${scholarship.dateVerified}</p>
        </div>

        ${scholarship.website !== "#" ? `<a href="${scholarship.website}" target="_blank" class="modal-link">Visit Official Information →</a>` : ""}
    `;

    scholarshipModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

closeSchoolModal.addEventListener("click", closeAllModals);
closeScholarshipModal.addEventListener("click", closeAllModals);

schoolModal.addEventListener("click", function (event) {
    if (event.target === schoolModal) closeAllModals();
});

scholarshipModal.addEventListener("click", function (event) {
    if (event.target === scholarshipModal) closeAllModals();
});

function closeAllModals() {
    schoolModal.classList.add("hidden");
    scholarshipModal.classList.add("hidden");
    document.body.style.overflow = "";
}

editProfileButton.addEventListener("click", function () {
    document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.position = "absolute";
        navLinks.style.top = "76px";
        navLinks.style.left = "0";
        navLinks.style.right = "0";
        navLinks.style.padding = "20px";
        navLinks.style.background = "#12182a";
        navLinks.style.flexDirection = "column";
        navLinks.style.alignItems = "flex-start";
        navLinks.style.borderBottom = "1px solid #242e48";
    }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
        if (window.innerWidth <= 850) {
            navLinks.style.display = "";
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeAllModals();
});
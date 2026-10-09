/* =========================================================
   EDUMATCH — Main JavaScript
   ========================================================= */

const schools = [
    {
        id: 1,
        name: `Basilan State University (BasSU) – Lamitan City Campus`,
        city: `Lamitan City`,
        province: `Basilan`,
        type: `Public`,
        programsText: `Bachelor of Elementary Education (BEED)
	Bachelor of Science in Computer Science (BSCS)
	Bachelor of Science in Criminology (BSCrim)
	Bachelor of Arts in Political Science (AB PolSci)
	Associate in Computer Technician (ACoT) (2-year course)
	Nursing Assistant (NA) (2-year course)`,
        matchedCourses: [`BS Computer Science`, `BS Education`, `BS Criminology`],
        admissionRequirements: [`applicants must take and pass the BaSC College Entrance Test (BaSC-CET). 
Entrance Exam: Must register, take, and pass the BaSC-CET. 
Freshmen Requirements: 
	College Entrance Test result 
	Interview result 
	Aptitude test result 
	Admission form / student profiling slip 
	Local Contact/Location for Lamitan Campus:Ingoing freshmen and students can coordinate on-site via the local campus facilities (such as the MIS building or designated local coordinators in Lamitan).You can check current announcements and digital forms directly on the Basilan State College Facebook Page.`],
        admissionInfo: `Apply through the BasSU Test Team; testing schedules and centers are announced by the university prior to each admission cycle.`,
        tuition: `Free for qualified first-time undergraduate students under RA 10931 (Universal Access to Quality Tertiary Education Act), as this is a CHED-regulated public/state institution; specific peso figures for miscellaneous fees: Not publicly available.`,
        scholarshipsAvailable: `Not separately itemized for this campus beyond RA 10931 free tuition; general BasSU System scholarship information: Not publicly available.`,
        contact: `+639670331560 basilanstatecollege1984@gmail.com`,
        website: `Basilan state College Official website (https://bassc.edu.ph/basc/)`,
        source: `Basilan State College – Wikipedia; bassc.edu.ph (official BasSU System site); classmate.ph school directory`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 2,
        name: `Hardam Furigay Colleges Foundation, Incorporated (HFCFI)`,
        city: `Lamitan City (Main Campus, Barangay Limo-ok); additional campuses in Maluso, and extended sites in Buli-Buli, Mangal, and Saluping. (An Isabela City campus is planned but was listed as “Coming Soon” as of verification.)`,
        province: `Basilan`,
        type: `Private`,
        programsText: `Bachelor's degree programs in Teacher Education (including Bachelor of Special Needs Education/BSNED), 
	Criminal Justice Education (Criminology)
	Information Technology
	Hotel and Restaurant Management
	Allied Health/Nursing, and Business; also offers Graduate Studies (master's/doctorate level)
	Senior High School (Academic and TVL strands)
 	Junior High School, and Elementary levels.`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Criminology`],
        admissionRequirements: [`PSA Birth Certificate`, `Form 137/Transcript of Records`, `Form 138 (Report Card)`, `Good Moral Certificate`, `2x2 ID photo`, `Certificate of Transfer (for transferees only).`],
        admissionInfo: `Apply online via the school's official website (“Apply Now”) or through walk-in inquiries; no application fee; enrollment for AY 2026–2027 was open at time of verification, with a ₱500 enrollment fee for incoming first-year students.`,
        tuition: `₱500 enrollment fee advertised for incoming first-year students (AY 2026–2027), described as “no hidden fees.” Full tuition schedule beyond the enrollment fee: Not publicly available.`,
        scholarshipsAvailable: `CHED Tulong Dunong Program (one-time ₱7,500 grant for enrolled college students); OWWA scholarship for students with a parent or sibling working overseas; additional academic, athletic, and government-grant scholarship options advertised generally on the official website.`,
        contact: `Phone: (+63) 975-715-5976; Email: hardamfurigaycollege@gmail.com / furigaycolleges@gmail.com; Address: Barangay Limo-ok, Lamitan City, Basilan 7302; Office Hours: Mon–Sat, 8:00 AM–5:00 PM`,
        website: `www.hardamfurigay.ph (also mirrored at hardam-edu.com)`,
        source: `hardamfurigay.ph (official website — Home and Admission pages); hardam-edu.com (official mirror site)`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 3,
        name: `Lamitan Technical Institute, Incorporated (LTI)`,
        city: `Lamitan City (main branch: D. Flores St., Barangay Maligaya; second branch: Barangay Maganda)`,
        province: `Basilan`,
        type: `Private`,
        programsText: `Undergraduate degree programs in Elementary Education
	Hospitality Management
	Information Technology
	Midwifery, and Nursing. 
	Also offers modular technical-vocational courses in Hotel and Restaurant Services (HRS), 
	Animation
	and Health Care Services
	plus a Senior High School department (ABM, GAS, ICT, and HE strands).`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Education`],
        admissionRequirements: [`Specific entrance credentials (such as report cards, birth certificates, and transfer credentials) are verified upon visiting the registrar's office or messaging their official social media channels.`],
        admissionInfo: 
	`Walk-in inquiries and submissions are accommodated at their physical branches in Barangay Maligaya or Barangay Maganda.`,
        tuition: 
	`Exact per-semester tuition and miscellaneous fees are not publicly listed online and require a direct inquiry with the school cashier or admissions office.`,
        scholarshipsAvailable: `Information regarding institutional discounts
	government grants (such as CHED or TESDA-related support)
	or internal academic scholarships must be requested directly from the school administration.`,
        contact: `Email: ltii.basilan@gmail.com 
	Phone: 0936 666 6040 / 0961 458 5417`,
        website: `Lamitan Technical Institute Facebook Page`,
        source: `AHME Portal – Ministry of Basic 
	Higher and Technical Education
	BARMM (official regional HEI directory, ahme-mbhte.bangsamoro.gov.ph/heis)`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 4,
        name: `The Mariam School of Nursing (MSN)`,
        city: `Lamitan City (Flores St. corner Rizal Avenue)`,
        province: `Basilan`,
        type: `Private`,
        programsText: `Nursing-focused programs (school name and founding mission indicate a Nursing degree as its core offering); a fully itemized current program list was not independently published.`,
        matchedCourses: [`BS Nursing`],
        admissionRequirements: [`Report Card or Form 138 
	PSA Birth 
	Good Moral Character certificate`],
        admissionInfo: `Complete the online application form with your personal and academic information through their official channels. 
	Click this one for application: https://www.mariamilm.college/?fbclid=IwcGRvZgNleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8yNzUyNTQ2OTI1OTgyNzkAAR572v8QBcZuc8UtLwkI74SrNGwkvj7ibdKxsB_kjTFxAqk14MWj4sv_le0Uyw_aem__0jDzH8XC7HTpDdLncFYxg`,
        tuition: `Tuition Rate: Starts as low as ₱7,500 per semester under the Libreng Kolehiyo program framework. 
	Enrollment Perks: Free uniform fabric and free school supplies are currently offered for incoming students.`,
        scholarshipsAvailable: `Offers affordable college options and localized financial support via government/institutional programs like the Libreng Kolehiyo Program. 
	For specific academic or merit-based scholarships, reach out directly to their admissions office.`,
        contact: `Admissions Contact Number: (+63) 977 079 0031 (Look for Philip Desuyo)`,
        website: `Official Website: Mariam ILM Colleges Inc. Facebook Page: Mariam Ilm Colleges Inc. Facebook`,
        source: `AHME Portal – Ministry of Basic, 
	Higher and Technical Education, 
	BARMM (official regional HEI directory). 
	Notes the school was founded by Carmelita C. Cajucom on September 8, 2004.`,
        
	dateVerified: `August 29, 2026`
    },
    {
        id: 5,
        name: `Mindanao Autonomous College Foundation, Incorporated`,
        city: `Lamitan City (D. Flores Street)`,
        province: `Basilan`,
        type: `Private`,
        programsText: `Bachelor of Science in Elementary Education 
	Bachelor of Science in Secondary Education 
	Bachelor of Science in Nursing 
	Bachelor of Science in Criminology 
	Bachelor of Science in Computer Science 
	Bachelor of Science in Social Work 
	Bachelor of Science in Hospitality Management 
	Bachelor of Science in Agriculture 
	Bachelor of Science in Midwifery`,
        matchedCourses: [`BS Nursing`, `BS Computer Science`, `BS Education`, `BS Criminology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`Not publicly available.`],
        admissionInfo: `Entrance Exam: None required. Process: Students can submit early registrations and enroll directly at the campus.`,
        tuition: `Tuition is affordable with flexible payment options. The school maintains stable rates with no sudden fee increases.`,
        scholarshipsAvailable: `Valedictorian: Free full tuition fee. 
	With Honors: 50% discount on tuition. 
	Special Discounts: 25% discount 
	and other academic programs available.`,
        contact: `Contact Numbers: 0975-951-6745 / 0926-975-9332 / 0905-136-9203 
	Email: macfi_lasian@yahoo.com`,
        website: `Official Social Media Page: Mindanao Autonomous College Foundation, Inc. Facebook Page`,
        source: `AHME Portal – Ministry of Basic, Higher and Technical Education, 
	BARMM (official regional HEI directory)`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 6,
        name: `Mindanao State University – Marawi Campus (MSU Main Campus / MSU System Headquarters)`,
        city: `Marawi City`,
        province: `Lanao del Sur`,
        type: `Public`,
        programsText: `BS Agriculture; BS Agricultural and Biosystems Engineering; BS Civil/Electrical/Mechanical/Computer Engineering; BS Engineering Technology; Bachelor of Elementary/Secondary Education; BS Business Administration, Accountancy, Economics; BS Nursing; BS Information Technology; AB Political Science, Sociology, Psychology, History; BS Biology, Chemistry, Physics, Mathematics; Bachelor of Laws; Bachelor of Physical Education; Islamic, Arabic and Asian Studies (King Faisal Center); graduate and doctoral programs in select fields. 
Also listed in the other file: 
Colleges & Academic 
DepartmentsColleges A–H 
Agriculture: Agribusiness Management, Agricultural Education & Extension, Animal Science, Plant Science, Business Administration and 
Accountancy: Accountancy, Economics, Management
Marketing.Education: Elementary Teaching, Home Economics, Secondary Teaching. 
Engineering: Agricultural, Chemical, Civil, Electrical & Electronic Mechanical, and Engineering Technology. 
Fisheries and Aquatic Sciences: Fisheries, Fisheries Technology. 
Forestry and Environmental Studies: Environmental Studies, Forestry. 
Health Sciences: Nursing 
Hospitality and Tourism Management: Hospitality Management, Tourism Management. 
Colleges I–P 
Information and Computing Sciences: Computing Sciences, Information Sciences. 
King Faisal Center for Islamic, Arabic and Asian Studies: International Relations, Islamic Studies, 
Teaching Arabic Law: College/Department of Law. 
Medicine: College/Department of Medicine. 
Natural Sciences and Mathematics: Biology, Chemistry, Mathematics, Physics. Public Affairs: Public Administration, Social Work, Sustainable Community Development. 
Colleges S–Z 
Social Sciences and Humanities: Communication & Media Studies, English, Filipino, History, Library and Information Science, Philosophy, Political Science, Psychology, Sociology Sports, 
Physical Education and Recreation: Physical Education.`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Accountancy`, `BS Education`, `BS Psychology`, `BS Business Administration`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`Must take and pass the MSU System Admission and Scholarship Examination (SASE) or College Entrance Test (CET)`, `submit Form 138 (report card), PSA birth certificate, Certificate of Good Moral Character, ID photos, and program-specific requirements. Also listed in the other file: 
Section 1. Admission Requirements in the Undergraduate and Transferees: 
Section 1.1. New Applicants (Freshmen): 
	1. MSU-SASE/CET or CBP Report of Rating 
	2. Senior High School Report Card/Form138A (Original) 
	3. Certificate of Good Moral Character from Senior High School Principal (Original) 
	4. Birth Certificate (PSA-SECPA original/authenticated) 
	5. Medical Certificate from the University Medical Services and Hospital Division/Infirmary 
	5. 2 pieces of 2"'x2"' photo with nametag 
	7. 1 long brown envelope with plastic transparent envelope 
Section 1.2. Transferees: 
	1. Honorable Dismissal/Transfer Certificate (To be submitted in university Registrar)
	2. Transcript of Records or Evaluation of Grades (signed by the Registrar) | 
	3. Original Certificate of Good Moral Character 
	4. Birth Certificate (PSA-SECPA Original or authenticated) 
	5. SASE/CET Report of Rating (for transferees from non-MSU Campuses) 2 pieces of 2"x2" ID photo with name-tag 
	7. Medical Certificate from the University Medical Services and Hospital Division/Infirmary 
	8. 1 long brown envelope with plastic transparent envelope`],
        admissionInfo: `Apply through the MSU Marawi Campus Office of Admissions (OAD). SASE/CET schedules and application periods are announced through official MSU channels prior to each academic year.`,
        tuition: `Covered under RA 10931 (Universal Access to Quality Tertiary Education Act) for qualified first-time undergraduate students; minimal miscellaneous, laboratory, and student-organization fees may apply. Exact peso amounts: Not publicly available.`,
        scholarshipsAvailable: `University Scholarship Programs administered by the Office of Admissions; free tuition/fee waiver under RA 10931 for qualified students; additional merit- and need-based grants offered by individual colleges. Also listed in the other file: Visit this link: msumain.edu.ph`,
        contact: `General inquiries via official website and the “MSU Marawi Campus Office of Admissions” Facebook page. Specific email/telephone: Not publicly available. Also listed in the other file: 
Email: admissions.sase-cet@msumain.edu.ph 
Messenger: Mindanao State University - Marawi Campus Office of Admissions`,
        website: `www.msumain.edu.ph`,
        source: `msumain.edu.ph.`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 7,
        name: `Adiong Memorial State College (AMSC)`,
        city: `Ditsaan-Ramain`,
        province: `Lanao del Sur`,
        type: `Public`,
        programsText: `BS Agriculture (major in Farming System); BS Business Administration (major in Human Resource Management); BS Criminology; Bachelor of Elementary Education (General Education); Bachelor of Secondary Education (major in Social Studies); BS Fisheries; BS Forestry (General Forestry); BS Information Technology; Graduate School: Certificate in Professional Teaching.`,
        matchedCourses: [`BS Information Technology`, `BS Education`, `BS Business Administration`, `BS Criminology`, `BS Agriculture`],
        admissionRequirements: [`Senior High School graduate from a CHED- and DepEd-recognized institution`, `must pass the AMSC Qualifying Exam`, `additional department-specific requirements as prescribed by each college.`],
        admissionInfo: `Apply through the AMSC Registrar's Unit / Admission Procedures office. 
Enrollment steps: proceed to chosen college/department, 
secure Pre-Registration Form (PRF), 
then Guidance Office, Supreme Student Government (SSG) Office, and ICT Department to confirm free-tuition status.`,
        tuition: `Free for qualified first-time students under RA 10931 (public state college); specific peso figures for miscellaneous fees: Not publicly available.`,
        scholarshipsAvailable: `Merit-based scholarships (academic achievement/leadership); Need-based scholarships and grants; Specialized scholarships for specific fields/programs; Athletic scholarships for student-athletes.`,
        contact: `Address: Ditsaan-Ramain, Lanao del Sur 9713, Philippines. Specific phone/email: Not publicly available.`,
        website: `www.amsc.edu.ph (also mirrored at amsc-edu.net)`,
        source: `amsc.edu.ph (official); Adiong Memorial State College – Wikipedia`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 8,
        name: `Dansalan College (Dansalan College Foundation, Incorporated)`,
        city: `Marawi City`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Science in Criminology (BSCrim)
	Bachelor of Science in Social Work (BSSW)
	Bachelor of Elementary Education (BEEd)
	Bachelor of Science in Information Technology (BSIT)
	Bachelor of Science in Accountancy (BSA)
	Bachelor of Science in Customs Administration (BSCA) – notable as an in-demand program in the area, 
	Bachelor of Arts in Islamic Studies / Shari'ah Law (AB-Shari'ah)
	Associate in Computer Technology (2-year course).`,
        matchedCourses: [`BS Information Technology`, `BS Accountancy`, `BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`For Freshmen: 
	Form 138 (Report Card), 
	Good Moral Character Certificate, 
	Photocopy of NSO/PSA Birth Certificate, 
	Two 2x2 ID pictures, 
	Long white folder. 
For Transferees: 
	Transcript of Records (TOR) or Evaluation Sheet, 
	Honorable Dismissal, 
	Photocopy of NSO/PSA Birth Certificate, 
	Two 2x2 ID pictures, 
	Long white folder.`],
        admissionInfo: `Not publicly available.(It depends to the program or courses that would you like to take)`,
        tuition: `Registration/Enrollment Fee: Around ₱850 to ₱5,000 per year depending on the specific enrollment tier and promotion. 
Tuition: Free or heavily subsidized for incoming first-year students under special promotional programs. 
Examination/Periodic Fees: Low incremental payments around ₱500 per exam period.`,
        scholarshipsAvailable: `free tuition for incoming freshmen, requiring only an initial registration/enrollment fee of ₱850 and a monthly examination fee of ₱500.`,
        contact: `Facebook: “Dansalan College Foundation, Incorporated” (Marawi City)`,
        website: `does not have a dedicated standalone official website`,
        source: `Dansalan College – Wikipedia; Dansalan College Foundation, Incorporated – Facebook. Note: a separate, distinct institution, “Dansalan Polytechnic College” (private, non-sectarian, est. 1999), also operates in Marawi City — do not conflate the two in citations.`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 9,
        name: `Jamiatu Muslim Mindanao (JMM)`,
        city: `Marawi City (Barangay Matampay / Darussalam)`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `College-level courses follow the government-approved curriculum enriched with Islamic and Arabic studies. An itemized bachelor's-degree list is not currently published; the official website is undergoing an upgrade. Also listed in the other file: BS Criminology BS Social Work BS Information Technology BS Information System BS Computer Science BS Islamic Studies 
(BEEd) English, Math, Social Studies, Values Education, Filipino 
(BSBA) Human Resources Management 
(BSBA) Operational Management 
(BSBA) Business Economics 
(BSBA) Financial Management`,
        matchedCourses: [`BS Information Technology`, `BS Computer Science`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Honorable Dismissal 
Transcript of Records (TOR) - Photocopy
Good Moral Character certificate
Philippine Statistics Authority (PSA) 
Birth Certificate - Original or Photocopy
2x2 ID picture
Brown long envelope 
Also listed in the other file: For New Students/Transferees: 
1. Filled-out Registration Form 
2. Diploma or Certificate of Completion 
3. Latest Grade Card from the last school attended 
4. Good Moral Certificate 
5. Photo copy of PSA Birth Certificate 
6. Two recent 2x2 ID Picture 
7. Interview/Muqabalah 
8. Enrollment Fee`],
        admissionInfo: `Online enrollment for AY 2025–2026 was announced as an upcoming website feature at time of verification.`,
        tuition: `Not publicly available.`,
        scholarshipsAvailable: `Available Support and Scholarships Regional Subsidies: Students often qualify for government-backed initiatives like the Marawi Rehabilitation Program (MRP) educational cash assistance or tuition fee subsidies for displaced and local students. Internal Grants: Jamiatu Muslim Mindanao provides specific institutional updates and aid guidelines directly through their campus office or official channels.`,
        contact: `Telephone: +63 917 716 5030 / +63 917 704 2706 Also listed in the other file: Contact no.: 0917 773 3579 Email: info@jmm.edu.ph Messenger: Jamiatu Muslim Mindanao`,
        website: `www.jmm.edu.ph.`,
        source: `jmm.edu.ph (official); Jamiatu Muslim Mindanao – Wikipedia.`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 10,
        name: `Lake Lanao College Incorporated (also known as Lake Lanao College Foundation, Inc.)`,
        city: `Marawi City (H. Omar Cadayonan St., Basak Malutlut)`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Undergraduate Programs The college offers bachelor's degrees in fields such as Political Science, Islamic Studies (Shariah), Computer Science, Business Administration (Management), Criminology, Social Work, Community Development, Elementary Education, and Secondary Education (English and Social Studies), alongside a Civil Engineering program and an Associate in Computer Science. Graduate Programs Graduate offerings include a Master of Arts in Education (Educational Administration) and a Master in Public Administration. Also listed in the other file: Bachelor of Arts in Political Science Bachelor of Arts in Islamic Studies, Major in Shariah Bachelor of Science in Computer Science Bachelor of Science in Business Administration, Major in Management Bachelor of Science in Criminology Bachelor of Science in Social Work Bachelor of Elementary Education Bachelor of Secondary Education, Major in English Bachelor of Secondary Education, Major in Social Studies Bachelor of Science in Civil Engineering`,
        matchedCourses: [`BS Computer Science`, `BS Education`, `BS Civil Engineering`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Admission requirements for college programs at Lake Lanao College Incorporated in Marawi City typically include a school ID or admission slip, a report card or previous grades, a completed enrollment form, and an entrance exam.`],
        admissionInfo: `Not publicly available.`,
        tuition: `Enrollment Fee: ₱600 Examination Fee: ₱700 Monthly Payment: ₱700 (noted in prior terms) Orphan Privilege: ₱500 (discounted rate noted previously) Sibling Discount: 1 free tuition for every 4 siblings from the same family`,
        scholarshipsAvailable: `The school was founded in part to serve orphaned students at reduced cost, but no formal published scholarship program was found.`,
        contact: `+63 969 560 6780 Also listed in the other file: Contact no.: 0969 560 6780 Messenger: Lake Lanao College Incorporated`,
        website: `“Lake Lanao College Incorporated” Facebook page.`,
        source: `FindUniversity.ph; Lake Lanao College Incorporated – Facebook; lakelanaocollege.blogspot.com`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 11,
        name: `Philippine Engineering and Agro-Industrial College, Inc.`,
        city: `Lomidong, Marawi City`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `College of Information Technology and Engineering: BS Civil Engineering, BS Electrical Engineering, BS Information Technology College of Arts, Sciences, and Education: Bachelor of Elementary Education (BEED) General Education, Bachelor of Secondary Education (BSED) Mathematics, BS Accountancy, BS Criminology, BS Social Work.`,
        matchedCourses: [`BS Information Technology`, `BS Accountancy`, `BS Education`, `BS Civil Engineering`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Requirements & Process: Specific entrance credentials typically include a 
high school report card/form 138
good moral character certificate, and birth certificate. 
Action: You can visit the campus administration office directly or check updates via their communication lines for current enrollment periods.`],
        admissionInfo: `Not publicly available.`,
        tuition: `Exact current semester rates are not publicly itemized online and require direct inquiry with the school cashier or registrar's office.`,
        scholarshipsAvailable: `Institutional or internal financial aid options may be available for qualified students; inquire directly at the administrative office during enrollment.`,
        contact: `0912-248-9147 or 0948-911-7178 peaci.school@gmail.com`,
        website: `Visit the PEACI Official Website for institutional overviews.`,
        source: `Lanao del Sur – Wikipedia (list of higher education institutions).`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 12,
        name: `Adiong Memorial College Foundation, Inc.`,
        city: `Wao`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Agriculture, Business Administration, Education, Computer Technology, Political Science, Technical-Vocational (TESDA)`,
        matchedCourses: [`BS Business Administration`, `BS Agriculture`],
        admissionRequirements: [`New College Students: 
Report Card / Form 138
 Certificate of Good Moral Character
PSA Certificate of Live Birth. 
Transferees: 
Certificate of Transfer Credentials or Honorable Dismissal
Transcript of Records (TOR) for evaluation
Certificate of Good Moral Character
PSA Certificate of Live Birth`],
        admissionInfo: `Applications and enrollments can be processed through their on-site campus office or via their online system updates.For inquiries, you can visit the Adiong Memorial College Foundation Official Facebook Page. 
For inquiries, you can visit the Adiong Memorial College Foundation Official Facebook Page.`,
        tuition: `Not publicly available.`,
        scholarshipsAvailable: `AMCFI brands itself as a "school of scholars" and regularly provides financial assistance: 
Academic Scholarship: Provided to junior and senior high school students who maintain top academic rankings. 
TESDA Grants: For students enrolled in registered technical-vocational tracks, funding may be covered through government-sponsored TVET scholarship programs. 
ESC/Voucher Programs: Government subsidies that drastically lower tuition for qualified private school enrollees.`,
        contact: `Email: amcfi_wao@yahoo.com (+63) 920-910-3641`,
        website: `Official Web Channel: Adiong Memorial College Foundation, Inc. Official Facebook Page`,
        source: `Lanao del Sur – Wikipedia (list of higher education institutions). No independent official source was located — recommend confirming directly with the institution or MBHTE-BARMM.`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 13,
        name: `Lanao Central College, Incorporated (LCCI)`,
        city: `Marawi City (Awar St., East Basak)`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `BS Agriculture; Bachelor of Elementary Education (BEED); BS Civil Engineering; BS Criminology; BS Computer Science; Bachelor of Social Work; AB Shariah (Islamic Studies); graduate programs in Education and Public Administration. Also listed in the other file: Bachelor of Elementary Education (BEED) Bachelor of Science in Criminology (BSCrim) Bachelor of Science in Civil Engineering (BSCE) Bachelor of Science in Computer Science (BSCS) Bachelor of Science in Social Work (BSSW) Bachelor of Science in Agriculture (BSA) AB - ISLAMIC STUDIES - Major in SHARI'AH MPA - Master in Public Administration - Major in Organization & Management MAED - Master of Arts in Education - Major in School Administration`,
        matchedCourses: [`BS Computer Science`, `BS Education`, `BS Civil Engineering`, `BS Criminology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`UNDERGRADUATE STUDENTS: 
LRN (Learner Reference Number)
Two 2x2 ID pictures 
Two long white folders
Photocopy of NSO/PSA Birth Certificate
Senior High School documents
GRADUATE STUDENTS: 
CAV (Certification, Authentication, and Verification)
Diploma and Honorable DismissalE
valuation sheet and Transcript of Record (TR)
Special Order (SO)
Two 2x2 ID pictures and two long white folders
Photocopy of NSO/PSA Birth Certificate.`],
        admissionInfo: `Enrollment periods announced via the official Facebook page for new and transferee students; formal application steps not published on an official website.`,
        tuition: `Advertised as “The Home of Free Tuition Fee” — free tuition for one year with no monthly payment. This does not cover Enrollment fee, School ID, and School Uniform, which are charged separately.`,
        scholarshipsAvailable: `Not separately itemized; the free-tuition arrangement functions as the school's primary affordability program. Also listed in the other file: SPECIAL DISCOUNTS: ORPHAN (WATA A ILO) SIBLING DISCOUNT HONOR STUDENTS WATA A MUJAHIDEEN LESS FORTUNATE`,
        contact: `Facebook: “Lanao Central College” (official page: facebook.com/OfficialLCCI) Also listed in the other file: Contact no.: 0910 256 9881 Email: lccilayko@gmail.com Messenger: Lanao Central College`,
        website: `No independently confirmed official website found.`,
        source: `Facebook – Lanao Central College (official page); Studocu course listings (Lanao Central College, Inc.); EverybodyWiki – Lanao Central College, Inc. (lower-reliability source; cites founding by Dr. Bae Okile Mangondato Sharief, established 2012 ).`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 14,
        name: `Mindanao State University – Lanao National College of Arts and Trades (MSU-LNCAT)`,
        city: `Marawi City (Panggao Saduc)`,
        province: `Lanao del Sur`,
        type: `Public`,
        programsText: `Bachelor of Science in Technology Teacher Education; Bachelor of Technology and Livelihood Education (BTLEd); Bachelor of Secondary Education; Bachelor of Elementary Education; Technical-Vocational Education and Training (TVET) programs accredited by TESDA. Also operates a Senior High School (SHS) department and Junior High School Department.`,
        matchedCourses: [`BS Education`],
        admissionRequirements: [`As an MSU System campus, applicants generally take the MSU System Admission and Scholarship Examination (SASE)`, `standard documentary requirements (Form 138, PSA birth certificate, Certificate of Good Moral Character, ID photos) typically apply. Campus-specific admission procedures were not separately published.`],
        admissionInfo: `Not separately published for this campus; inquiries are generally directed through the campus itself or the MSU System Office of Admissions.`,
        tuition: `Free tuition for qualified Filipino undergraduates under RA 10931 (Universal Access to Quality Tertiary Education Act), consistent with all MSU System campuses since AY 2018–2019; minimal miscellaneous/laboratory fees may still apply.`,
        scholarshipsAvailable: `Covered under the MSU System's general scholarship and RA 10931 free-tuition framework; scholarship opportunities also available via CHED and DOST channels. No LNCAT-specific scholarship program found separately published.`,
        contact: `Email: mailmsulncat@gmail.com`,
        website: `sites.google.com/site/msulncat (Google Sites page, not a full institutional domain)`,
        source: `msumain.edu.ph / msu.edu.ph (official MSU System pages — 2001 CHED-Supervised Institution integration); Edukasyon.ph school profile; Facebook – “LNCATian” (Panggao Saduc, Marawi City)`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 15,
        name: `Jamiatul Philippine Al-Islamia (JPI)`,
        city: `Marawi City (#271 Sumndad/Sumundad Street, Barangay Bangon)`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `BS Criminology (confirmed, with dedicated forensic-science lab facilities); BS Social Work (confirmed via student coursework); Graduate School Department offering programs with an Islamic Studies component (e.g., Master of Arts in Education with Islamic Studies focus). Full undergraduate catalog not independently published.`,
        matchedCourses: [`BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Not publicly available.`],
        admissionInfo: `Enrollment details and application inquiries can be handled directly through their campus office during regular office hours or via their Jamiatul Philippine Al-Islamia Facebook Page.`,
        tuition: `Not publicly available.`,
        scholarshipsAvailable: `Not publicly available.`,
        contact: `Telephone: +63 917 710 6654; Email: jpi_50@yahoo.com; DepEd School ID: 406095`,
        website: `No dedicated official website found; official presence maintained via Facebook.`,
        source: `Facebook – “Jamiatul Philippine Al-Islamia” official page (JPIschoolmarawi) and “Jamiatul Philippine Al-Islamia Central Student Government Organization” (JPISSG); e-Library Philippines (elib.gov.ph) student thesis records referencing the institution`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 16,
        name: `RC – Al Khwarizmi International College Foundation, Inc. (AKICFI)`,
        city: `Marawi City (National Highway, Basak Malutlut)`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of General Education (confirmed via student coursework); BS Accountancy (confirmed via active Junior Philippine Institute of Accountants student chapter). Also operates a Senior High School department. School follows a tri-semester academic calendar. Full undergraduate catalog not independently published.`,
        matchedCourses: [`BS Accountancy`],
        admissionRequirements: [`PSA Birth CertificateForm 138 (Report Card) or Transcript of Records (TOR), Certificate of Good Moral Character, 2x2 ID photo, White folder`],
        admissionInfo: `Office Hours: Sunday to Thursday, 8:00 AM – 4:00 PM (Registrar's Office, 1st Floor, RC-AKICFI Main Building). 
Enrolling Process: Applications and enrollment coordination are handled directly at the Registrar's Office or via their official social media page.`,
        tuition: `Specific exact peso amounts are not published online. Payment Options: Tuition installment plans and various discount privileges are available.`,
        scholarshipsAvailable: `Tuition Discounts: Available for the Honors Program, Leadership Institute, and Varsity members. 
Sibling Discounts: 50% discount on tuition for the 3rd child, and 100% free tuition for the 4th child when enrolled concurrently (applies to the youngest). 
Employee Dependents: 20% tuition fee discount for RC dependents`,
        contact: `Facebook: “RC-Al Khwarizmi International College Foundation Inc.- Main” (official Main Campus page)`,
        website: `No independent official website found; primary online presence via Facebook.`,
        source: `alkhwarizmijdiplomats.blogspot.com (school-affiliated blog — institutional mission/vision); 
Facebook – RC-Al Khwarizmi International College Foundation Inc.- Main, and JPIA-RC Al Khwarizmi International College; 
Ministry of Basic, Higher and Technical Education (MBHTE-BARMM) 2025 UPCAT passers announcement, 
which names this school among Bangsamoro schools producing UPCAT-qualified graduates`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 17,
        name: `Balabagan Trade School`,
        city: `Balabagan (Barangay Narra)`,
        province: `Lanao del Sur`,
        type: `Public`,
        programsText: `BS Criminology is confirmed (referenced in Professional Regulation Commission board-exam records). A complete current program list is not published online.`,
        matchedCourses: [`BS Criminology`],
        admissionRequirements: [`Form 138 (Report Card) or Form 137 from high school.
Certificate of Good Moral Character.
Birth Certificate (PSA copy).
Recent ID picture`],
        admissionInfo: `Not publicly available.`,
        tuition: `Government-subsidized as a CHED-supervised public institution; itemized fees: Not publicly available.`,
        scholarshipsAvailable: `Available through government-funded programs, local government unit (LGU) grants, or partner agencies like TESDA for qualified students.`,
        contact: `Address: Narra Street, Balabagan, Lanao del Sur, 9302. An older public listing cites the email BTS/lanao@yahoo.com — unverified as current.`,
        website: `None located.`,
        source: `AHME Portal – Ministry of Basic, Higher and Technical Education, BARMM (official regional HEI directory, ahme-mbhte.bangsamoro.gov.ph); Philippine Daily Inquirer; GMA Regional TV News`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 18,
        name: `Iranun Foundation College, Incorporated`,
        city: `Kapatagan`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `BS Criminology
Education, 
and Social Work`,
        matchedCourses: [`BS Criminology`],
        admissionRequirements: [`Specific admission credentials (like report cards, transcripts, or placement forms) are managed directly by the registrar's office.`],
        admissionInfo: `Not publicly available.`,
        tuition: `Specific tuition schedules and fee breakdowns are not publicly posted online and must be requested directly from the institution's administrative or finance office.`,
        scholarshipsAvailable: `Public records do not detail specific school-based scholarship programs online; inquiries should be directed to the school administration.`,
        contact: `Not publicly available.`,
        website: `Iranun Foundation College, Incorporated`,
        source: `Lanao del Sur – Wikipedia (list of higher education institutions); Luwaran.com (BARMM news — community forum coverage referencing the school). No official school website or CHED/MBHTE profile was located — recommend confirming directly with MBHTE-BARMM or the institution.`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 19,
        name: `Mapandi Memorial College`,
        city: `Lilod Saduc, Marawi City, Philippines, 9700`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `BS in Nursing 
	BS in Medical Technology 
	BS in Midwifery BS in Elementary Education`,
        matchedCourses: [`BS Nursing`, `BS Education`],
        admissionRequirements: [`Not publicly available`],
        admissionInfo:`Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Mapandi Memorial College - CNAHS`,
        website: `Mapandi Memorial College - CNAHS | Marawi City Mapandi Memorial College - CNAHS, Marawi City. 264 followers · 3 talking about this. For School Activity Posting`,
        source: `Mapandi Memorial College - CNAHS `,
        dateVerified: `September 2026`
    },
    {
        id: 20,
        name: `Dansalan Polytechnic College`,
        city: `149 Tampilong, Marawi City.`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `BS Criminology BS Social Work BS Elementary Education BS Information Technology BA Islamic Studies (Shari’ah) BS Accountancy BS Customs Administration Associate in Computer Technology`,
        matchedCourses: [`BS Information Technology`, `BS Accountancy`, `BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Requirements for Freshmen: 
Form 138 Good Moral Certificate 
NSO/PSA Birth Certificate (Photocopy) 
2x2 ID Picture (2 pcs) 
Long White Folder Requirements for 
Transferees: 
TOR or Evaluation Sheet Honorable Dismissal 
NSO/PSA Birth Certificate (Photocopy) 
2x2 ID Picture (2 pcs) Long White Folder`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Dansalan Polytechnic College - DPC`,
        website: `Dansalan Polytechnic College`,
        source: `Dansalan Polytechnic College`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 21,
        name: `Philippine Muslim Teacher’s College`,
        city: `037 Bo. Green, Marawi City, Philippines, 9700`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education major in General Education Bachelor of Secondary Education major in English Bachelor of Science in Social Work`,
        matchedCourses: [`BS Education`, `BS Social Work`],
        admissionRequirements: [`Exclusive for Female Students Only In line with our commitment to a safe, modest, and values-based Islamic learning environment, PMTC implements an admission policy for female students only. 
FOR FRESHMEN: 
Senior High School Report Card (Original) 
Certificate of Good Moral Character (Original) 
Diploma (Photocopy) 
PSA Birth Certificate (Photocopy) 
4 pcs 1x1 and 2x2 ID pictures (recent, white background with name tag) 
Certificate of Indigency 
1 Long Brown Envelope 
FOR TRANSFEREES: 
Transcript of Records (TOR) and/or Evaluation Sheet (Original)
Transfer Credentials / Honorable Dismissal (Original) 
PSA Birth Certificate (Photocopy) 
4 pcs 1x1 and 2x2 ID pictures (recent, white background with name tag) 
Certificate of Indigency 
1 Long Brown Envelope`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no.: 0909 065 9449 Email: alhamdulillah2019@yahoo.com Messenger: Philippine Muslim Teachers' College - PMTC Official`,
        website: `Philippine Muslim Teachers' College - PMTC Official | Marawi City Philippine Muslim Teachers' College - PMTC Official, Marawi City.`,
        source: `Philippine Muslim Teachers' College - PMTC Official`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 22,
        name: `Lanao College of Criminology`,
        city: `Shiek Macalawi Village, Salacayan Buadiamaloy , Masiu, Philippines, 9706`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Courses Offered Bachelor of Science in Criminology Bachelor of Elementary Education (BEEd) Bachelor of Science in Social Work (BSSW) Bachelor of Public Administration (BPA) Bachelor of Arts in Islamic Studies – Major in Shari’ah Law (BAIS) Bachelor of Secondary Education (BSEd) Major in English Major in Mathematics Major in Science Major in Social Studies`,
        matchedCourses: [`BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Enrollment Process Secure a CDT Form. 
Take the College Entrance Examination Receive your examination result. 
Proceed to your preferred course for the interview and/or written examination. 
If qualified, continue with the admission process. 
Submit your accomplished Admission Form to the Admission Office. 
Secure and submit your Medical Certificate. 
Obtain a Library Borrower’s Card from the Library. 
Process your Student ID application. 
Wait for the release of your Certificate of Registration (COR). 
Once released, you are officially enrolled!`],
        admissionInfo: `Not publicly available`,
        tuition: `Maximum of ₱700 Enrollment Fees FREE Tuition Fees NO Monthly Payment`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Lanao College of Criminology - LCCr`,
        website: `No Available Independent Website`,
        source: `Lanao College of Criminology - LCCr | Masiu Lanao College of Criminology - LCCr`,
        dateVerified: `August 2026`
    },
    {
        id: 23,
        name: `Lanao Agricultural College`,
        city: `Lumbatan, Philippines, 9307`,
        province: `Lanao del Sur`,
        type: `Private`,
        programsText: `Undergraduate Programs: Bachelor of Science in Criminology
Bachelor of Science in Social Work 
Bachelor of Science in Agriculture Major in Agronomy
Bachelor of Science in Agriculture Major in Animal Science
Bachelor of Elementary Education 
Bachelor of Early Childhood Education`,
        matchedCourses: [`BS Education`, `BS Criminology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`For New Students: Incoming First-Year College Students and Transferees 
1. Bring your PSA Birth Certificate and your card/temporary transcript of records/evaluation. 
2. Enroll at the Office of the Registrar located in the Administration Building. 
3. Fill out the Registration Form.`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Lanao Agricultural College`,
        website: `No  Independent Website Available`,
        source: `Lanao Agricultural College | Lumbatan Lanao Agricultural College Facebook`,
        dateVerified: `August 2026`
    },
    {
        id: 24,
        name: `Academia De Technologia in Mindanao Inc.`,
        city: `Cotabato City, Philippines - 4A Don Roman, Vilo Street, Poblacion 6, Landmark: Sariling Atin, Fabric Store, Downtown.`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Science in Social Work Bachelor of Science in Accounting Information System Bachelor of Science in Civil Engineering Bachelor of Science in Criminology Bachelor of Elementary Education Bachelor of Secondary Education [Major in English, Mathematics, Science, and TLE] Bachelor of Science in Hospitality Management`,
        matchedCourses: [`BS Education`, `BS Civil Engineering`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`FOR INCOMING FRESHMEN :
 PSA Birth Certificate 
Good Moral Certificate 
Form 137 Form 138 (CARD) 
2x2 ID Picture (2pcs) 
Long Brown Envelope 
FOR TRANSFEREES :
Good Moral Certificate 
Honorable Dismissal 
Transcript of Records 
2x2 ID Picture (2pcs) 
PSA Birth Cert. 
Long Brown Envelope`],
        admissionInfo: `Not publicly available/ Contact the school directly`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `For inquiries, email us at adtmindanao@gmail.com Contact us at 0917-153-6742`,
        website: `https://www.facebook.com/share/1H3gHVmLWo/`,
        source: `https://www.facebook.com/share/1H3gHVmLWo/`,
        dateVerified: `August 2026`
    },
    {
        id: 25,
        name: `AMA Computer College–Cotabato City / AMA Computer College Inc. Cotabato Campus`,
        city: `S.K. Pendatun Avenue, Cotabato City`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Arts in Economics 
	Bachelor of Arts in English 
	Bachelor of Arts in Mass Communication 
	Bachelor of Arts in Political Science 
	Bachelor of Arts in Psychology 
	Bachelor of Elementary Education 
	Bachelor of Science in Accountancy 
	Bachelor of Science in Accounting Information System 
	Bachelor of Science in Accounting Technology 
	Bachelor of Science in Artificial Intelligence 
	Bachelor of Science in Biology 
	Bachelor of Science in Blockchain Technology 
	Bachelor of Science in Business Administration 
	Bachelor of Science in Computer Engineering 
	Bachelor of Science in Computer Science 
	Bachelor of Science in Criminology 
	Bachelor of Science in Cybersecurity 
	Bachelor of Science in Data Science 
	Bachelor of Science in Electronics Engineering 
	Bachelor of Science in Entrepreneurship 
	Bachelor of Science in Hospitality Management 
	Bachelor of Science in Industrial Engineering 
	Bachelor of Science in Information System 
	Bachelor of Science in Information Technology 
	Bachelor of Science in Internal Auditing 
	Bachelor of Science in Marine Transportation 
	Bachelor of Science in Nursing 
	Bachelor of Science in Nursing International 
	Bachelor of Science in Office Administration 
	Bachelor of Science in Psychology 
	Bachelor of Science in Real Estate Management 
	Bachelor of Science in Social Work 
	Bachelor of Science in Tourism 
	Bachelor of Science in Virtual Education 
	Bachelor of Secondary Education 
	Bachelor-Secondar Education 
	BS Entertainment & MM Computing 
	PRE-MEDPSYCHFOREIGN-23`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Computer Science`, `BS Accountancy`, `BS Education`, `BS Psychology`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`https://inquire.amaes.edu.ph/inquiry-form/ Direct Message The official account or number`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Call/Text: +63 955 401 9371`,
        website: `AMA Computer College - Cotabato`,
        source: `AMA Computer College - Cotabato`,
        dateVerified: `August 2026`
    },
    {
        id: 26,
        name: `Antonio R. Pacheco College, Inc.`,
        city: `#36 San Gregorio Ext. Kimpo Subd., Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education (BEEd) Bachelor of Secondary Education (BSEd) Major in: English, Math, and Filipino Bachelor of Science in Business Administration (BSBA) Bachelor of Science in Criminology (BSCrim) Bachelor of Science in Social Work (BSSW) Bachelor of Science in Information Systems Bachelor of Science in Tourism Management (BSTM)`,
        matchedCourses: [`BS Education`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Form 138 or Report Card 
Good Moral Character Certificate 
PSA Birth Certificate 
Certificate of Residency 
3 pcs 2x2 ID picture (white background) 
2 pcs long brown envelope`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no.: 0997 769 1188 Email: arpachecocollege@gmail.com Messenger: Antonio R. Pacheco College, Inc. (ARPCIANS)`,
        website: `Antonio R. Pacheco College, Inc. (ARPCIANS)`,
        source: `https://www.facebook.com/share/1DUwSLnKuT/`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 27,
        name: `Aviation Technical School of Cotabato City`,
        city: `34 Mabini St., ATSC Building, Bagua 3, Cotabato City, Maguindanao`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Science in Aircraft Maintenance Technology Bachelor of Science in Aeronautical Engineering`,
        matchedCourses: [],
        admissionRequirements: [`Not publicly available`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no. :(064) 557 3056 Email: registrar@atsc.space`,
        website: `Aviation Technical School of Cotabato`,
        source: `Aviation Technical School of Cotabato`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 28,
        name: `Coland Systems Technology, Inc.`,
        city: `Peñas Building, Sinsuat Avenue, Cotabato City`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS Computer Science BS Information Technology BS Business Administration – Marketing Management Bachelor of Elementary Education BS Criminology BS Social Work`,
        matchedCourses: [`BS Information Technology`, `BS Computer Science`, `BS Education`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Not publicly available`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no. :0999 881 5378 Messenger: Coland Systems Technology, INC.`,
        website: `Coland Systems Technology, Inc.`,
        source: `https://www.facebook.com/share/1D43fPHBe2/`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 29,
        name: `Cotabato State University`,
        city: `Sinsuat Avenue, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Public`,
        programsText: `BS Information Technology BS Social Work BS Psychology BS Community Development BS Biology BS Agriculture BS Agribusiness BS Fisheries BS Forestry Bachelor of Elementary Education Bachelor of Secondary Education Bachelor of Physical Education Bachelor of Technology and Livelihood Education Bachelor of Technical-Vocational Teacher Education BA Islamic Studies`,
        matchedCourses: [`BS Information Technology`, `BS Education`, `BS Psychology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`A. FOR NEW STUDENTS 
Transcript of records (Original) 
Birth Certificate (PSA) 
2X2 ID Picture (2pcs) 
1x1 ID Picture for Library ID 
(1pc) Honorable Dismissal Authority to study 
for working students Brown Kraft Long Envelope 
B. FOR TRANSFEREES 
All of the abovementioned requirements 
plus Law School Transcript of Records.`],
        admissionInfo: `Apply/enroll through the university’s admission process.`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `https://www.youtube.com/c/CotabatoStateUniversity Email: icto@cotsu.edu.ph Messenger: Cotabato State University`,
        website: `Cotabato State University`,
        source: `https://www.facebook.com/share/1CNiKdSe34/`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 30,
        name: `De La Vida College, Inc.`,
        city: `Notre Dame Avenue, Cotabato City, Cotabato City, Philippines`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education – English, Filipino, Social Studies Bachelor of Arts – English, History BS Business Administration – Financial Management, Marketing Management Also listed in the other file: Publicly available records identify Bachelor of Elementary Education; Bachelor of Secondary Education (English, Filipino and Social Studies) BA English and History BS Business Administration (Financial Management and Marketing Management) Associate in Computer Technology, among other offerings.`,
        matchedCourses: [`BS Education`, `BS Business Administration`],
        admissionRequirements: [`FOR INCOMING FRESHMEN Prepare the following requirements for enrollment: 
PSA Birth Certificate 
Good Moral Certificate 
Form 137 Form 138 (CARD) 
2x2 ID Picture (2pcs) 
Long Brown Envelope 
FOR TRANSFEREES Submit the following documents: 
Good Moral Certificate 
Honorable Dismissal 
Transcript of Records 
2x2 ID Picture (2pcs) 
PSA Birth Cert. 
Long Brown Envelope`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `No Tuition Fee Increase, PEAC Accreditation, Free Tuition for Qualified ESC Grantees`,
        contact: `Cell Phone Number: 09061805778 Facebook Page: De la Vida College, Inc. Also listed in the other file: Location: De La Vida Building, Notre Dame Avenue, Cotabato City Landline Number: (064) 421-2567. 09061805778`,
        website: `https://www.facebook.com/p/De-la-Vida-CollegeInc-100095169745479/`,
                source: `De la Vida College, Inc. – Official Facebook Page`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 31,
        name: `Dr. P. Ocampo Colleges, Inc.`,
        city: `Cotabato City, De Mazenod Avenue Extension`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS Nursing 
	BS Medical Technology 
	BS Midwifery 
	BS Radiologic Technology 
	Bachelor of Elementary Education 
	Bachelor of Secondary Education 
Also listed in the other file: 
	BS Radiologic Technology 
	BS Medical Technology 
	BS Midwifery, 
	BS Nursing 
	Bachelor of Secondary Education 
	Bachelor of Elementary Education`,
        matchedCourses: [`BS Nursing`, `BS Education`],
        admissionRequirements: [`For further inquiries, please contact our registrar. 
	Also listed in the other file: 
	The school has indicated that there is no entrance exam for several programs, including Radiologic Technology, Medical Technology, Midwifery, Secondary Education, and Elementary Education. BS Nursing requires an entrance examination.`],
        admissionInfo: `Enrollment information is released through the college's announcements; nursing applicants are instructed to bring their SHS card for validation.`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Dr P Ocampo Colleges, Inc. 
	Landline Number (064) 421-5697`,
        website: `https://www.facebook.com/dpoci.maincampus/`,
        source: `https://www.facebook.com/share/1BqHhEAgkh/ 
	Also listed in the other file: CHED records and current school information`,
        dateVerified: `August 26, 2026`
    },
    {
        id: 32,
        name: `Headstart College of Cotabato`,
        city: `Japan Guini Sr. Street, 9600`,
        province: `Maguindanao del Norte`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Science in Criminology Bachelor of Science in Industrial Security Management Master of Science and Criminal Justice`,
        matchedCourses: [`BS Education`, `BS Criminology`],
        admissionRequirements: [`FOR INCOMING 1ST YEAR STUDENTS: 
	SIHS Report Card (Form 138 – Original and 2 photocopies) 
	Certificate of Good Moral Character 
	Original and 2 photocopies PSA 
	Birth Certificate – 1 photocopy 
	Long Brown Envelope – 3 pcs. 
	2x2 ID picture – 1 pc. 
	4x5 Haircut (For Male) 
	Entrance Exam 

FOR TRANSFEREES: 
	Transcript of Records (TOR) – Original and 2 photocopies 
	Honorable Dismissal– Original and 2 photocopies 
	Certificate of Good Moral Character – Original and 2 photocopies 
	PSA Birth Certificate – 1 photocopy 
	Long Brown Envelope – 3 pcs. 
	2x2 ID picture – 1 pc. 
	4x5 Haircut (For Male) 
	Entrance Exam`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Headstart College of Cotabato Also listed in the other file: Office Location 21 Makakua Street, Cotabato City. Landline Number Null`,
        website: `https://www.facebook.com/share/1Dd8HX4Woe/ Also listed in the other file: No independently verified official website found. The Cotabato City Government currently provides a school social media link for the institution. Official Facebook page: https://www.facebook.com/officialpageHCC/`,
        source: `https://www.facebook.com/share/1Dd8HX4Woe/ Also listed in the other file: UniFAST; Bangsamoro Ministry of Basic, Higher and Technical Education; Cotabato City Government.`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 33,
        name: `Jamiat Cotabato and Institute of Technology, Inc.`,
        city: `Bubong Road, Barangay Datu Balabaran, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Arts in Islamic Studies – Major in Political Economy Bachelor of Secondary Education (BSEd) – Major in English Bachelor of Science in Information Technology (BSIT) Also listed in the other file: AB Islamic Studies – Major in Political Economy; Bachelor of Secondary Education (BSEd) – Major in English; BS Information Technology (BSIT).`,
        matchedCourses: [`BS Information Technology`, `BS Education`],
        admissionRequirements: [`INCOMING FRESHMEN
Barangay Clearance 
Barangay Certificate of Indigency 
PSA Authenticated Birth Certificate (Original Copy) 
Original Copy of Senior High School Report Card 
Certificate of Good Moral Character 
Four (4) passport-size photos (white background) 
Long brown envelope 
TRANSFER STUDENTS: 
Barangay Clearance Barangay \
Certificate of Indigency 
PSA Authenticated Birth Certificate (Original Copy) 
Transcript of Records (TOR) 
Certificate of Good Moral 
Character Honorable Dismissal 
Certificate of Transfer 
Four (4) passport-size photos (white background) 
Long brown envelope`],
        admissionInfo: `For Bachelor of Science in Information Technology (BSIT) The first ten (10) students to register will receive free tuition for four (4) years. 
Students ranked 11th to 25th will receive a 50% tuition discount for four (4) years. 
Only 25 slots are available for the BSIT program. 
Also listed in the other file: Enrollment for AY 2026–2027 is advertised as ongoing, with limited slots and first-come, first-served enrollment. 
Entrance examination fee is listed as ₱100 and the enrollment fee as ₱1,200.`,
        tuition: `Entrance Exam Fee: ₱100.00 Enrollment Fee: ₱1,200.00 Also listed in the other file: Entrance examination: ₱100; enrollment fee: ₱1,200. Full tuition rate was not publicly verified.`,
        scholarshipsAvailable: `Available Scholarships and Discounts 
Students without scholarships or sponsorships whose educational expenses are supported by a parent or guardian are eligible for a 50% tuition fee discount for four (4) years. 
10% discount for student leaders (Supreme Student Council). 
Four (4) years of free tuition for students graduating with honors. 
Four (4) years of free tuition for students with a General Weighted Average (GWA) of 93% or higher. 
Also listed in the other file: Scholarships and discounts are advertised, but the complete current list and qualifications were not publicly verified.`,
        contact: `Contact no.: (064) 421 1946 Messenger: Jamiat Cotabato and Institute of Technology - جامعة كوتاباتو  
Landline Number 0906-821-4009.`,
        website: `https://www.facebook.com/share/1864PDfCcA/
Facebook Page: https://www.facebook.com/jamiatcotabatoofficialpage/`,
        source: `https://www.facebook.com/share/1864PDfCcA/ Also listed in the other file: UniFAST; current 2026 JCIT enrollment announcement; Cotabato City Government. (UniFAST)`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 34,
        name: `Kutawato Darussalam College, Inc.`,
        city: `MB Bagua, Cotabato City, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BACHELOR OF ELEMENTARY EDUCATION (BEEd)`,
        matchedCourses: [`BS Education`],
        admissionRequirements: [`FOR MORE INFORMATION, MESSAGE US HERE OR VISIT THE SCHOOL CAMPUS`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Kutawato Darussalam College, Inc. (formerly Ma'had Kutawato Al-Islamie)`,
        website: `https://www.facebook.com/share/19BXRAxYWT/ Also listed in the other file: No independently verified official website found.`,
        source: `https://www.facebook.com/share/19BXRAxYWT/ Also listed in the other file: UniFAST; Cotabato City Government. (UniFAST)`,
        dateVerified: `August 29, 2026`
    },
    {
        id: 35,
        name: `Mindanao Capitol Colleges, Inc.`,
        city: `Cotabato City`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education: Major in English, Filipino, Mathematics & History Bachelor of Science in Business Administration: Major in Financial Management & Human Resource Development Management Bachelor of Science in Criminology`,
        matchedCourses: [`BS Education`, `BS Business Administration`, `BS Criminology`],
        admissionRequirements: [`For Newbies: Transcript of Records/Report Card (Original copy)`, `Good Moral (Original copy)`, `Diploma (Photocopy)`, `PSA (Photocopy)`, `two (2) 2×2 pictures with white background`, `two (2) long brown envelopes. For Transferees: Transcript of Records/Report Card (Original copy)`, `Honorable Dismissal for College only (Original copy)`, `Good Moral (Original copy)`, `Diploma (Photocopy)`, `PSA (Photocopy)`, `two (2) 2×2 pictures with white background`, `two (2) long brown envelopes.`],
        admissionInfo: `Applicants are instructed to prepare the required documents and enroll at the school. The post states that the school is open Monday–Friday, 8:00 AM–5:00 PM—location given in the post: Don Rufino Alonso St., Cotabato City.`,
        tuition: `₱500.00 down payment only is stated in the Facebook post. Advertised enrollment/down-payment amount, not the full tuition fee. The post does not state the total tuition per semester.`,
        scholarshipsAvailable: `Free tuition and uniform fabric for the first 50 Grade 7 enrollees, first 50 Grade 11 enrollees, and first 25 first-year college enrollees, according to the post`,
        contact: `Office Location Don Rufino Alonso St., Cotabato City Landline Number 0953 403 8245 Email: mindanaocapitolcolleges@gmail.com`,
        website: `No independently verified official website found. The Cotabato City Government lists the institution and provides a current social media link. Facebook Page: https://www.facebook.com/MCCI.CotabatoCity/`,
        source: `UniFAST; MBHTE; Cotabato City Government. Facebook Page`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 36,
        name: `Notre Dame Hospital and Siena College of Cotabato, Inc.`,
        city: `Governor Gutierrez Avenue, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Science in Nursing 
	Bachelor of Science in Medical Technology 
	Bachelor of Science in Midwifery 
	Bachelor of Science in Radiologic Technology 
Also listed in the other file: 
	Bachelor of Science in Nursing (BSN) 
	Bachelor of Science in Medical Technology 
	(BSMT) Bachelor of Science in Radiologic Technology 
	(BSRT) Bachelor of Science in Midwifery (BSM)`,
        matchedCourses: [`BS Nursing`],
        admissionRequirements: [`For inquiries visit the NDHSCCI-Guidance and Testing Center and Notre Dame Hospital and Siena College of Cotabato, Inc. or visit us at NDHSCCI Admissions Office.`],
        admissionInfo: `The school advises applicants to take the College Admission Test and proceed with enrollment.`,
        tuition: `Enrollment Fee: 1,500 
Also listed in the other file: 
	Enrollment Downpayment: ₱1,500.00. 
	Does not state the full tuition fee or tuition per unit.`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no.: 0938 601 4591 
	Email: ndhsmrh9@yahoo.com 
	Messenger: Notre Dame Hospital and Siena College of Cotabato, Inc. 
	Also listed in the other file: Office Location Governor Gutierrez Avenue, Cotabato City 
	Landline Number 0937-020-6166l 
	Email: ndhsmrh9@yahoo.com`,
        website: `https://www.facebook.com/share/1DZBXr8bQZ/ 
	No Official Website Facebook Page: https://www.facebook.com/ndhscci/`,
        source: `https://www.facebook.com/share/1DZBXr8bQZ/ Also listed in the other file: Facebook Page`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 37,
        name: `Notre Dame University`,
        city: `Notre Dame Avenue, Rosary Heights 3, Cotabato City, Philippines`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Juris Doctor 
Bachelor of Science in Nursing Bachelor of Multimedia Arts Bachelor of Science in Computer Science Bachelor of Science in Information Technology Bachelor of Science in Electrical Engineering Bachelor of Science in Electronics Engineering Bachelor of Science in Computer Engineering Bachelor of Science in Civil Engineering Bachelor of Science in Mechanical Engineering Bachelor of Elementary Education Bachelor of Physical Education Bachelor of Secondary Education major in Mathematics Bachelor of Secondary Education major in Filipino Bachelor of Secondary Education major in Science Bachelor of Secondary Education major in English Bachelor of Public Administration Bachelor of Science in Business Administration major in Human Resource Management Bachelor of Science in Business Administration major in Marketing Management Bachelor of Science in Business Administration major in Financial Management Bachelor of Science in Accountancy Bachelor of Science in Biology Bachelor of Arts Major in Philosophy Bachelor of Science in Psychology Also listed in the other file: Arts & Sciences: AB Philosophy, AB Communication, BS Biology, BS Psychology. Business & Accountancy: BS Accountancy, BS Accounting Information Systems, BSBA (Marketing, HR, Financial Management), Bachelor of Public Administration. Education: BEEd, BSEd (English, Filipino, Mathematics, Science), BPEd. Engineering & Computer Studies: BS Civil Engineering, BS Mechanical Engineering, BS Electrical Engineering, BS Computer Engineering, BS Electronics Engineering, BSIT, BS Computer Science, BS Multimedia Arts. It also has Health Sciences, Law, and graduate programs.`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Computer Science`, `BS Accountancy`, `BS Education`, `BS Psychology`, `BS Civil Engineering`, `BS Business Administration`],
        admissionRequirements: [`For College Admission Test and other inquiries, visit: NDU Guidance & Testing Center or proceed to the NDU-Guidance Testing Center Office.BS Medical Technology Also listed in the other file: Incoming freshmen: Original Senior High School Card with school seal`, `Original Certificate of Good Moral Character`, `Original PSA Birth Certificate`, `one 2×2 colored ID picture with white background`, `and a long brown envelope for submitted documents. Transferees: Original Transcript of Records with school seal and Certificate of Transfer Credential/Honorable Dismissal`, `Original Certificate of Good Moral Character`, `Original PSA Birth Certificate`, `one 2×2 colored ID picture with white background`, `and a long brown envelope. Additional requirements may apply depending on the program.`],
        admissionInfo: `NDU's Guidance and Testing Center (GTC) handles admission for new students. The admission program includes scheduling and administering the admission test, determining cut-off scores, classifying students according to program, referring applicants to the appropriate dean, and conducting orientation for new freshmen and transferees. For the current AY 2026–2027, NDU's website indicates that the College Admission Test is open.`,
        tuition: `Fees vary by program. NDU provides a Schedule of Fees Matrix and Tuition Payment Schedule rather than one universal tuition amount.`,
        scholarshipsAvailable: `Working Student Scholarship (WOLAR); academic scholarships for Valedictorians, Salutatorians, and Honor Students. NDU states that valedictorians may receive free tuition for their first semester and salutatorians 50% tuition exemption, subject to its conditions.`,
        contact: `Instagram: notredameuniversityofficial Contact no.: (064) 421 2698 Email: ndu@ndu.edu.ph Messenger: Notre Dame University Also listed in the other file: Office Location Notre Dame Avenue, Rosary Heights III. Cotabato City, Philippines, 9600 Landline Number (064) 421-2698`,
        website: `https://www.facebook.com/share/1F9vMQNeQd/ Also listed in the other file: https://www.ndu.edu.ph/ Facebook Page: https://www.facebook.com/nducotabatocity/`,
        source: `https://www.facebook.com/share/1F9vMQNeQd/ Also listed in the other file: https://www.ndu.edu.ph/`,
        dateVerified: `August 26, 2026`
    },
    {
        id: 38,
        name: `Notre Dame – RVM College of Cotabato, Inc.`,
        city: `#74 Sinsuat Avenue, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS Tourism Management BS Accounting Management BS Hospitality Management BS Information Technology BS Business Administration – Major in Financial Management and Marketing Management Bachelor of Elementary Education Bachelor of Secondary Education – Major in English, Science, and Mathematics Also listed in the other file: BS Information Technology (BSIT BS Business Administration (BSBA) – Financial Management and Marketing Management Bachelor of Secondary Education (BSEd) – English, Filipino, Mathematics, Physical Sciences Bachelor of Elementary Education (BEEd) BS Hospitality Management; BS Entrepreneurship; plus, TESDA programs.`,
        matchedCourses: [`BS Information Technology`, `BS Education`, `BS Business Administration`],
        admissionRequirements: [`FIRST YEAR COLLEGE AND TRANSFEREES 
Form 138 (Report Card) 
Birth Certificate (PSA) 
Certificate of Good Moral 
3pcs 2x2 Recent Colored ID Picture 
Baptismal Certificate (For Catholics only) 
Transcript of Records (For Transferees) 
Honorable Dismissal (For Transferees) .`],
        admissionInfo: `Applicants must take and pass the entrance examination before enrollment.`,
        tuition: `Down Payment (500.00 – 1,000.00)`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: ndrvmcc_2016@gmail.com Messenger: Notre Dame - RVM College of Cotabato, Inc. Contact no.: 0909 162 5729 Also listed in the other file: Office Location #74 Sinsuat Avenue, Cotabato City, Philippines. Landline Number Null`,
        website: `https://www.facebook.com/share/1BdhLn77hE/ 
Also listed in the other file: https://ndrvmcc.wixsite.com/marians?utm 
Facebook Page: https://www.facebook.com/ndrvmcotabato/`,
        source: `https://www.facebook.com/share/1BdhLn77hE/ `,
        dateVerified: `August 30, 2026`
    },
    {
        id: 39,
        name: `Shariff Kabunsuan College, Inc.`,
        city: `Parang, Philippines, 9604`,
        province: `Maguindanao del Norte`,
        type: `Private`,
        programsText: `Bachelor of Secondary Education Major in English Bachelor of Secondary Education Major in Mathematics Bachelor of Secondary Education Major in Filipino Bachelor of Elementary Education Major in General Education Also listed in the other file: Cotabato City Campus Bachelor of Secondary Education (BSEd): English, Islamic Studies, Filipino. Bachelor of Elementary Education (BEEd): General Education. Sarmiento, Parang, Maguindanao Campus Bachelor of Secondary Education (BSEd): English, Mathematics, Filipino Bachelor of Elementary Education (BEEd): General Education, Early Childhood Education`,
        matchedCourses: [`BS Education`],
        admissionRequirements: [`No Available Information Found`],
        admissionInfo: `Applicants may contact the Undergraduate School at the Cotabato City campus.`,
        tuition: `Enrollment Fee: 500.00`,
        scholarshipsAvailable: `10% tuition fee discounted to all incoming 1st year college students Can apply for CHED – UNIFAST Subsidy Program 
Free Full Tuition Fee for Graduates “With Highest Honor” 
20% Tuition Fee Discounted for SKCI Dean’s Lister per semester 
Educational Service Contracting (ESC), 
Senior High School Voucher Program, 
Tertiary Education Subsidy (TES), and Honor Student scholarships are listed by the school.`,
        contact: `contact no.: 0976 007 7597 Email: skcsarmiento@gmail.com Messenger: Shariff Kabunsuan College, Inc. - Sarmiento Also listed in the other file: Office Location Bagua-I, Cotabato City 9600, Philippines Landline Number +63 (064) 552-2472 Email: skcicot@gmail.com`,
        website: `https://www.facebook.com/share/1D952rbswk/ Also listed in the other file: https://skci.edu.ph/pages/home.php Facebook Page: https://www.facebook.com/SKCICOT/`,
        source: `https://www.facebook.com/share/1D952rbswk/ Also listed in the other file: Official SKCI Website`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 40,
        name: `SPM College Technology, Inc.`,
        city: `Almonte Extension, Brgy. Mother Poblacion, Cotabato City, Cotabato City, Philippines, 9606`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS Social Work BS Criminology Bachelor of Elementary Education Bachelor of Secondary Education (Major in English) BS Business Administration (Major in Marketing Management)`,
        matchedCourses: [`BS Education`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`REQUIREMENTS FOR NEW STUDENTS: PSA Birth Certificate (Clear Copy) Form 138 / Report Card Certificate of Good Moral`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: spmcti24@gmail.com Messenger: SPM College and Technology Incorporated`,
        website: `https://www.facebook.com/share/1AzmNHf6TC/ Also listed in the other file: No independently verified official website found. Facebook page (Unsure):https://www.facebook.com/p/SPM-College-and-Technology-Inc-Student-Council-61582844392892/ https://www.facebook.com/people/SPM-College-and-Technology-Incorporated/61582043653300/`,
        source: `https://www.facebook.com/share/1AzmNHf6TC/ Also listed in the other file: Cotabato City Government and current institutional listings. (Globgov) Facebook : https://www.facebook.com/p/SPM-College-and-Technology-Inc-Student-Council-61582844392892/`,
        dateVerified: `August 31, 2026`
    },
    {
        id: 41,
        name: `St. Benedict College of Cotabato, Inc.`,
        city: `Bishop Mongeau Avenue, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS in Criminology BS in Social Work BS in Business Administration BS in Public Administration Bachelor of Elementary Education Bachelor of Secondary Education Also listed in the other file: Bachelor of Science in Social Work Bachelor of Science in Criminology Bachelor in Public Administration Bachelor of Elementary Education Bachelor of Secondary Education – majors in English and Science; Bachelor of Science in Business Administration – major in Financial Management.`,
        matchedCourses: [`BS Education`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`For Incoming 1st Year: 
Form 138/Report Card`, `Good Moral Certificate`, `NSO/PSA Birth Certificate`, `Two 2×2 ID pictures with name tag`, `Long Kraft Envelope.`],
        admissionInfo: `Enroll Now. An entrance examination is required. 
The promotional post also advertises a 50% tuition-fee discount for new students from 1st year to 4th year. 
An early-bird 10% discount on the miscellaneous fee is also offered.`,
        tuition: `Tuition Fee: 198.00 Downpayment: 1,000.00 Also listed in the other file: ₱198.00 per unit, reduced from ₱397.00 per unit, representing a 50% tuition-fee discount for new students.`,
        scholarshipsAvailable: `Academic Honors Scholarship. The post also advertises 1 free set of uniform cloth for the first 50 students.`,
        contact: `Email: sbccicollegedept@gmail.com Messenger: St. Benedict College of Cotabato Inc. - Higher Education Department Contact no.: 0930 123 4567 Also listed in the other file: Office Location #74 Sinsuat Avenue, Cotabato City, Philippines. Landline Number (064) 421-1969 local 101 Globe: 0954-342-1492`,
        website: `https://www.facebook.com/share/1JBptxPmH4/ Also listed in the other file: Facebook Page: https://www.facebook.com/sbcci.CollegeDept/`,
        source: `https://www.facebook.com/share/1JBptxPmH4/ Also listed in the other file: Facebook Page page/post`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 42,
        name: `STI College Cotabato`,
        city: `A. Dorotheo St.,, Cotabato City, Philippines, 9600`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `BS Tourism Management BS Hospitality Management BS Information Technology BS Computer Engineering BS Social Work BS Criminology BS Secondary Education major in English BS Business Administration major in Operational Management Also listed in the other file: BS Information Technology (BSIT); BS Computer Engineering (BSCpE); BS Business Administration (BSBA); BS Hospitality Management (BSHM); BS Social Work (BSSW); Bachelor of Secondary Education major in English; BS Tourism Management (BSTM); BS Criminology. The campus also offers senior-high and TESDA programs.`,
        matchedCourses: [`BS Information Technology`, `BS Education`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`https://www.sti.edu/admissions Also listed in the other file: Requirements depend on applicant type and program`, `current requirements should be confirmed through STI's admissions system.`],
        admissionInfo: `STI provides online enrollment/admission services through its official system and the Cotabato campus.`,
        tuition: `Varies by program and semester; no single tuition amount.`,
        scholarshipsAvailable: `https://financialaid.sti.edu/ Also listed in the other file: STI offers scholarships/discount programs subject to its current qualifications.`,
        contact: `Contact no.: (064) 421 3628 Email: sti.college@cotabato.sti.edu.ph Messenger: STI College Cotabato Also listed in the other file: Location A. Dorotheo Street, Cotabato City, 9600 Maguindanao; Landline Number (064) 421-3628; 0917-722-2627 Email: . mailto:sti.college@cotabato.sti.edu.ph Facebook Page: https://www.facebook.com/cotabato.sti.edu`,
        website: `STI College Cotabato.`,
        source: `STI College Cotabato | Cotabato City STI College Cotabato, Cotabato City.`,
        dateVerified: `August 30, 2026`
    },
    {
        id: 43,
        name: `Sunshine College, Inc.`,
        city: `Tamontaka II, Cotabato City, Philippines, 9600 Brgy. Tamontaka II, Cotabato City ( DIVERSION ROAD)`,
        province: `Cotabato City`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education Bachelor of Science in Social Work Bachelor of Science in Criminology Bachelor of Arts in Islamic Studies Bachelor of Science in Nursing Bachelor of Science in MidWifery Bachelor of Science in Medical Technology Bachelor of Science in Real Estate Management`,
        matchedCourses: [`BS Nursing`, `BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`REQUIREMENTS: UNDERGRAD: Form 138 Diploma PSA Birth Certificate Good Moral 2×2 ID Picture with name tag Long brown envelope`],
        admissionInfo: `Not publicly available`,
        tuition: `ENROLLMENT FEE: 500 PESOS ONLY`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: sunshinecollegesinc@gmail.com Messenger: Sunshine Colleges, Inc.`,
        website: `Sunshine Colleges, Inc.`,
        source: `Sunshine Colleges, Inc.`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 44,
        name: `Southern Philippine Academy (SPA) College, Inc.`,
        city: `National Hi-way, Magaslong, Datu Piang, Philippines`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education Bachelor of Science in Nursing Bachelor of Science in Criminology Bachelor of Science in Social Work Bachelor of Science in Midwifery`,
        matchedCourses: [`BS Nursing`, `BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Requirements for Freshmen: 
	1. Form 138/ Card 
	2. Birth Certificate 
	3. 2x2 ID picture with name tagged (2pcs) 
	4. Good Moral 
	5. Brown Envelope 
	6. Transparent Envelope 
Requirements for Transferees: 
	1. Official Transcript of Records (Authenticated OTR) 
	2. Birth Certificate 
	3. 2x2 ID picture with name tagged (2pcs.) 
	4. Honorable Dismissal 
	5. Brown Envelope
	6. Transparent Envelope`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: Southern Philippine Academy (SPA) College, Inc.`,
        website: `https://www.facebook.com/share/1E7fxvbF8U/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/1E7fxvbF8U/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 45,
        name: `Gani L. Abpi College Inc.`,
        city: `Buaya, Datu Piang, Maguindanao`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education major in: English Mathematics Social Studies General Science Bachelor of Science in Social Work Bachelor of Science in Midwifery Bachelor of Science in Information Technology Bachelor of Science in Criminology Bachelor of Arts in Islamic Studies Bachelor of Science in Tourism Management (BSTM)`,
        matchedCourses: [`BS Information Technology`, `BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Check the official account`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: gani_abpi_hs@yahoo.com Messenger: Gani L. Abpi College Inc. formerly Central Maguindanao Institute`,
        website: `Gani L. Abpi College Inc. No Independent Available Website.`,
        source: `Gani L. Abpi College Inc. Facebook`,
        dateVerified: `August 2026`
    },
    {
        id: 46,
        name: `Sandigan Colleges, Inc.`,
        city: `Datu Salibo Maguindanao del Sur`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `BACHELOR OF ELEMENTARY EDUCATION (BEED) 
BACHELOR OF SECONDARY EDUCATION ( BSED-English) 
BACHELOR OF SCIENCE IN CRIMINOLOGY( BSCrim) 
BACHELOR OF SCIENCE IN SOCIAL WORK (BSSW) 
BACHELOR OF SCIENCE IN AGRICULTURE( BSAgri)`,
        matchedCourses: [`BS Education`, `BS Criminology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`2COPIES PSA BIRTH CERTIFICATE ( xerox copy) 
2 COPIES MARRIAGE CERTIFICATE if married( xerox copy) 
2COPIES DIPLOMA (xerox copy) 
2 COPIES FORM 138/137 (xerox copy)
2 COPIES GOOD MORAL CHARACTER(xerox copy) 
TRANSFEREES 
2 COPIES HONORABLE DISMISSAL (xerox copy) 
2 COPIES PSA BIRTH CERTIFICATE ( xerox copy) 
2 COPIES MARRIAGE CERTIFICATE if married( xerox copy) 
2 COPIES DIPLOMA (xerox copy) 
2 COPIES FORM 138/137 (xerox copy) 
2 COPIES GOOD MORAL CHARACTER(xerox copy) 
2 PCS 2x2 ID PICTURE 
2 PCS LONG BROWN ENVELOPE`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: sandigancollegesincregistrar@gmail.com Messenger: Sandigan Colleges , INC.`,
        website: `https://www.facebook.com/share/19ZyZpw1qE/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/19ZyZpw1qE/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 47,
        name: `Eastern Kutawato College, INC.`,
        city: `Buluan, Philippines, 9616`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education Bachelor of Secondary Education Major in English , Mathematics, Social Studies Bachelor of Science in Agriculture Major in Agronomy`,
        matchedCourses: [`BS Education`, `BS Agriculture`],
        admissionRequirements: [`FRESHMEN: 
1.Original & Photo Copy of form 137(Card from Senior High School) 
2.Original Photo Copy of Good moral Character
3. 2 Copies of PSA Birth Certificate 
4. 2 Pcs of 2x2 Picture with name tag 
5. 2 Pcs. Of Long Brown Envelope 
Transferee: 
1.Photo Copy of TOR 
2.Honorable Dismissal
3.2 Copies of PSA 
4.2 pcs of Long Brown Envelope 
4.2 copies of 2x2 Picture with name tag`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no.: 0926 376 1080 Messenger: Eastern Kutawato College, INC. Kayaga, Pandag, Maguindanao`,
        website: `https://www.facebook.com/share/19XyWDg7pV/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/19XyWDg7pV/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 48,
        name: `South Upi College, Inc.`,
        city: `Timanan, South Upi, Philippines, 9603`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `Doctor of Education major in Administration & Leadership (EdD - A&L) For Bachelor's Degree Bachelor in Elementary Education (BEEd) Bachelor of Secondary Education (BSEd) majors in English Mathematics Science Filipino Social Studies Physical Education Technology and Livelihood Education Bachelor of Science in Social Work Bachelor of Science in Agriculture (BSAgri) major in Agronomy`,
        matchedCourses: [`BS Education`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`Not publicly available`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: South Upi College, Inc.`,
        website: `https://www.facebook.com/share/1DGPBzBtyR/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/1DGPBzBtyR/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 49,
        name: `Kaliyot B. Sali Peace Academy, Inc.`,
        city: `Barurao, Sultan Sa Barongis, MDS`,
        province: `Maguindanao del Sur`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education (BEEd) Bachelor of Science in Social Work (BSSW) Bachelor of Science in Agriculture`,
        matchedCourses: [`BS Education`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`1 Original Copy of PSA Birth Certificate 
Certificate of Good Moral Character 
2 pcs. Long Thick Envelope 
Form 138A (Report Card) – Original (Freshmen) 
2 pcs. 2x2 ID Picture (White Background) 
Certificate of Transfer Credentials (Transferees) 
Official Transcript of Records (Transferees) 
Photocopy of PSA Marriage Certificate (Married Female only)`],
        admissionInfo: `Not publicly available`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: kbs_peaceacademy@yahoo.co Messenger: Kaliyot B. Sali Peace Academy, Inc. Contact: 0977-787-5509`,
        website: `https://www.facebook.com/share/1B1czgXdzg/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/1B1czgXdzg/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 50,
        name: `Special Geographical Area SGA Community College, Inc.`,
        city: `Manarapan, Kapalawan SGA BARMM,`,
        province: `Special Geographic Area`,
        type: `Private`,
        programsText: `BACHELOR OF SECONDARY EDUCATION ( Major in Mathematics ,English, MAPEH, T.L.E 
BACHELOR OF ELEMENTARY EDUCATION (BEEd) 
BACHELOR OF SCIENCE IN CRIMINOLOGY (BSCrim) 
BACHELOR OF SCIENCE IN SOCIAL WORK (BSSW) 
BACHELOR OF ARTS in POLITICAL SCIENCE`,
        matchedCourses: [`BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`COLLEGE FRESHMEN'S 
2pcs 2x2 ID picture with name tag white background 
Original Copy of Birth Certificate from PSA 2pcs long brown envelope 
Senior High School card and Form 138 with LRN number. 
Original Certificate of Good Moral Character 
Brgy. Certificate 
COLLEGE TRANSFEREES 
2pcs 2x2 ID picture with name tag white background. 
Original Birth Certificate from PSA 
2pcs brown envelope 
Original certificate of good moral 
Character Transcript of records (TOR) for evaluation purposes. 
Certificate of Transfer/Honorable Dismissal 
Brgy. Certificate`],
        admissionInfo: `N0t Publicly Verified`,
        tuition: `Price not publicly stated.`,
        scholarshipsAvailable: `Not Publicly Verified`,
        contact: `Gmail: sgacci21@gmail.com Contact Number: 0985 645 9655`,
        website: `No Official Website Facebook Page: https://www.facebook.com/people/Special-Geographical-Area-SGA-Community-College-Inc/100094379020637/`,
        source: `https://www.facebook.com/people/Special-Geographical-Area-SGA-Community-College-Inc/100094379020637/`,
        dateVerified: `August 25, 2026`
    },
    {
        id: 51,
        name: `Sulu State University (SSU) — formerly Sulu State College; converted to university status in 2025 under Republic Act No. 12296`,
        city: `Capitol Site, Bangkal, Patikul (commonly cited as Jolo, Sulu)`,
        province: `Sulu`,
        type: `Public`,
        programsText: `College of Computing Studies: BS Computer Science; BS Information Systems; BS Information Technology College of Teacher Education: Bachelor of Early Childhood Education; Bachelor of Elementary Education; Bachelor of Secondary Education (English, Filipino, Mathematics) College of Arts and Sciences: BA English Language Studies; BS Islamic Studies major in Political Economy College of Business Administration and Management: BS Business Administration (major in Human Resource Management or Marketing Management); Bachelor of Public Administration School of Computer Engineering: BS Computer Engineering School of Agriculture: BS Agriculture (major in Animal Science or Crop Science) School of Nursing: BS Nursing School of Criminal Justice Education: BS Criminology School of Social Work: BS Social Work Graduate School: Doctor of Education (Educational Management); PhD in English Language Teaching; Doctor of Public Administration; MA Education (Educational Administration); MA Language Teaching English; MA Mathematics; Master of Public Administration`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Computer Science`, `BS Education`, `BS Business Administration`, `BS Criminology`, `BS Agriculture`, `BS Social Work`],
        admissionRequirements: [`General university admission requirements apply, with additional program-specific requirements set by each college`, `full checklist not itemized in the public Admissions page content retrieved.`],
        admissionInfo: `How to apply: (1) Review program requirements under the Programs section; (2) Submit an online inquiry through the university Contact page for guidance; (3) Complete forms and submit documents to the Office of Admissions; (4) Await notice of evaluation and enrollment instructions. Application period: Not specified on the pages retrieved.`,
        tuition: `Not publicly available (as a state university, SSU is covered by the Universal Access to Quality Tertiary Education Act, RA 10931, for qualified first-time students).`,
        scholarshipsAvailable: `A dedicated "Scholarships & Grants" section exists on the university website, but specific program names/amounts were not itemized in the page content retrieved.`,
        contact: `Email: sulustatecollege2018@gmail.com Telephone: +63 991 713 9112 (President's Office)`,
        website: `https://sulusu.edu.ph`,
        source: `Official website, sulusu.edu.ph (Admissions and Course Offerings pages)`,
        dateVerified: `September 15, 2026`
    },
    {
        id: 52,
        name: `Mindanao State University – Sulu (MSU-Sulu) — formerly MSU-Sulu Development and Technical College (SDTC)`,
        city: `Capitol Site, Jolo`,
        province: `Sulu`,
        type: `Public`,
        programsText: `Offers undergraduate and graduate programs across multiple colleges, including: 
	College of Agriculture
College of Fisheries
College of Education
College of Arts and Sciences
College of Public Administration 
College of Business Administration and Accountancy 
College of Computer Studies and College of Nursing. 
Also operates Junior High School and Senior High School departments.`,
        matchedCourses: [`BS Nursing`, `BS Accountancy`, `BS Business Administration`, `BS Agriculture`],
        admissionRequirements: [`Freshmen: Original Form 138 (SHS Report Card)`, `Certificate of Good Moral Character`, `PSA Birth Certificate (authenticated) + 1 photocopy`, `two 2x2 ID pictures (white background)`, `one long white folder with fastener. Transferee: Original Honorable Dismissal`, `authenticated Transcript of Records`, `PSA Birth Certificate + photocopy`, `two 2x2 ID pictures`, `long white folder. Returnee: Last grade attended`, `Certificate of Registration (COR). Second Degree: Authenticated Transcript of Records`, `PSA Birth Certificate + photocopy`, `long white folder`],
        admissionInfo: `Requirements are submitted to the Office of Admissions upon confirmation of acceptance from the degree-granting College/Unit; specific application period not published on the pages retrieved.`,
        tuition: `Not publicly available (as a state university, MSU-Sulu is covered by RA 10931 for qualified first-time students).`,
        scholarshipsAvailable: `A Student Affairs "Scholarship" section is referenced on the website; specific programs/amounts were not itemized in the page content retrieved.`,
        contact: `Email: info@msusulu.edu.ph Address: Capitol Site, Jolo, Sulu, 7400 Telephone: Not publicly listed (placeholder shown on site)`,
        website: `https://msusulu.edu.ph`,
        source: `Official website, msusulu.edu.ph (Admission Requirements page)`,
        dateVerified: `September 15, 2026`
    },
    {
        id: 53,
        name: `Notre Dame of Jolo College (NDJC)`,
        city: `Gandasuli Road, Barangay Bus-Bus, Jolo`,
        province: `Sulu`,
        type: `Private`,
        programsText: `College of Nursing and Midwifery: BS Nursing; BS Midwifery; BS Pharmacy College of Education: BS Elementary Education; BS Early Childhood Education; Certificate of Professional Education; BS Secondary Education (English, Filipino, Mathematics, Physical Science, Social Studies) College of Liberal Arts and Criminal Justice Education: BA Psychology; BA History; BS Criminology; BA Islamic Studies; BA Communication; Bachelor of Forensic Science College of Accountancy, Management and Computer Education: BS Management Accounting; BS Accountancy; BS Business Administration (major in Human Resource Management); BS Hospitality Management; BS Entrepreneurship; BS Computer Engineering; BS Information Technology Also offers Senior High School (Academic and TVL tracks) and a Graduate School.`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Accountancy`, `BS Education`, `BS Psychology`, `BS Business Administration`, `BS Criminology`],
        admissionRequirements: [`College: Original Form 138`, `original Certificate of Good Moral Character`, `long white folder`, `2 PSA-authenticated photocopies of Birth Certificate`, `2 passport-size photos (blue background, name tag)`, `NDJC medical clearance`, `drug test result (required for BS Nursing, BS Midwifery, BS Pharmacy, BS Criminology, BS Information Technology, BS Computer Engineering)`, `entrance exam result`, `NAT result (for BS Nursing applicants). Senior High School: 4 copies PSA Birth Certificate`, `2 passport-size photos (blue background, name tag)`, `entrance exam result`, `white long folder.`],
        admissionInfo: `Steps: (1) Profiling at the Computer Laboratory; (2) Submission of requirements at the Student Development and Placement Center (SDPC); (3) Admission/issuance of Permit to Enroll by SDPC; (4) Tagging of account at the Registrar's Office; (5) Payment of down payment at the Finance Office. Down payment: ₱2,000 for non-medical courses; ₱5,000 for medical courses.`,
        tuition: `The exact, fixed tuition fees for Notre Dame of Jolo College (NDJC) are not publicly published online as they vary significantly depending on the undergraduate program (such as Criminology, Nursing, or Computer Engineering) and the total number of academic units taken per semester.`,
        scholarshipsAvailable: `Fr. Jose Ante Scholarship for Indigenous People (Badjao) Bishop Benjamin De Jesus Scholarship Program Athletic Scholarship; Apostolic Vicariate of Jolo Student Assistance; Fr. Rey Roda Scholarship for SHS Indigents Government-linked aid: CHED Scholarship Grants; Tertiary Education Subsidy (TES) for Private HEIs; Tulong Dunong Other: Navata Scholarship; Island Petroleum Scholarship; Mindanao Sulu Oil Scholarship; Oblate Foundation Scholarship Program; Teacher Education Scholarship Program`,
        contact: `Address: 7400, Gandasuli Road, Barangay Bus-Bus, Jolo, Sulu Telephone: (085) 341 8911`,
        website: `https://ndjc.edu.ph`,
        source: `Official website, ndjc.edu.ph (Undergraduate Program, Apply to NDJC, and Scholarship pages)`,
        dateVerified: `September 15, 2026`
    },
    {
        id: 54,
        name: `Sulu College of Technology, Inc. (SCT)`,
        city: `Jolo`,
        province: `Sulu`,
        type: `Private`,
        programsText: `Bachelor of Science in Nursing
Bachelor of Science in Civil Engineering
Bachelor of Science in Geodetic Engineering
Bachelor of Science in Information Technology
Bachelor of Science in Social Work 
Bachelor of Science in Criminology 
Bachelor of Science in Hospitality Management
Bachelor in Elementary Education 
Technical/Engineering Diplomas –Diploma courses in Civil, Electrical, and Mechanical Engineering Technology, as well as Information Technology.`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Education`, `BS Civil Engineering`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`For incoming college freshmen and transferees, the required documents generally include: 
	Entrance Exam Result: Must be claimed from the Department of Student Affairs (DSA) Office. 
	Report Card: Original and 1 photocopy (for fresh graduates). 
	Transcript of Records (TOR) & Honorable Dismissal: For transferees. 
	Birth Certificate: 2 photocopies issued by the Philippine Statistics Authority (PSA). 
	ID Photos: Two 2x2 pictures with a white background and a printed name tag. 
	Certificate of Good Moral Character: 2 photocopies. 
	Filing Materials: Two long folders equipped with fasteners`],
        admissionInfo: 
	`Process: Applications and registrations are conducted in person. New students must visit the DSA Office at the Tanjung Campus to complete the registration form and undergo the institutional entrance examination. 
	Timeline: Registration typically opens around May, with entrance examinations scheduled in early June for the first semester.`,
        tuition: `Exact flat-rate tuition structures are determined upon registration based on laboratory units and specific course requirements (such as Nursing or Engineering tracks). 
Promotions: The institution frequently provides a 30% tuition discount for non-scholarship students enrolled in its Engineering and Information Technology courses.`,
        scholarshipsAvailable: `SCT accommodates various financial aids, government-funded programs, and institutional privileges: 
	TESDA & CHED Tertiary Education Subsidy (TES) student allocations. Institutional Discounts: Up to 30% reduction on tuition fees for students without external scholarship backing. 
	Basic Education: SCT is an approved participant accepting ESC Grantees and Qualified Voucher Applicants (QVA) for its Senior High School department`,
        contact: `Email: sct.misdept@gmail.com Mobile / Contact Hotlines: General/TESDA: 0975-822-0211 Engineering Admissions: 0966-325-9320 / 0955-106-7132 IT Admissions: 0926-967-9152`,
        website: `sulusu.edu.ph `,
        source: `Sulu College of Technology, Inc. Facebook page; third-party TESDA course directory`,
        dateVerified: `September 15, 2026`
    },
    {
        id: 55,
        name: `Mindanao State University – Tawi-Tawi College of Technology and Oceanography`,
        city: `Boheh Sallang, Sanga-Sanga, Bongao, Philippines, 7500`,
        province: `Tawi-Tawi`,
        type: `Private`,
        programsText: `Visit msutcto.edu.ph link for full list of programs`,
        matchedCourses: [],
        admissionRequirements: [`For Freshmen: 
Senior High School Report Card (Form 138-A) 
MSU SASE Report of Rating (with passing score) 
PSA/NSO-Authenticated Birth Certificate (original) 
Certificate of Good Moral Character 
2x2 ID photos white background, 
For Transferees: 
Honorable Dismissal 
Transcript of Records (TOR) 
PSA/NSO-Authenticated Birth Certificate (original) 
MSU SASE Report of Rating (with passing score) 
Certificate of Good Moral Character`],
        admissionInfo: `Not publicly available`,
        tuition: `Tuition Fees Php 50.00 / unit Per unit charge for all academic courses Athletic Fees 
Php 50.00 Annual fee for sports facilities maintenance CDF 
Php 20.00 Cultural Development Fund for campus events SPEAR 
Php 50.00 Student Program for Enhancement and Advancement ROTC / CWTS 
Php 100.00 Mandatory for all undergraduate students Speech Laboratory 
Php 150.00 For communication courses and language labs`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Messenger: MSU Tawi-Tawi College of Technology and Oceanography https://www.facebook.com/msutcto/ then find LINK`,
        website: `https://www.facebook.com/msutcto/`,
        source: `https://www.facebook.com/msutcto/`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 56,
        name: `Tawi-Tawi Regional Agricultural College (TT-RAC)`,
        city: `Nalil, Bongao Poblacion, Philippines, 7500`,
        province: `Tawi-Tawi`,
        type: `Private`,
        programsText: `Bachelor of Science in Agricultural Bio-System and Engineering
Bachelor of Science in Economics
Bachelor of Science in Soils Science
Bachelor of Science in Criminology
Bachelor of Science in Hotel, Restaurant, and Resort Management
Bachelor of Science in Information Technology and Information System`,
        matchedCourses: [`Information technology`, `Criminology`],
        admissionRequirements: [`For requirements and other concerns, please visit the Registrar's Office.`],
        admissionInfo: `Not publicly available/ Contact the school directly`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Contact no.: 0909 506 6506 Email: trac.suc@gmail.com Messenger: Tawi-Tawi Regional Agricultural College`,
        website: `https://www.facebook.com/share/1H3gHVmLWo/`,
        source: `https://www.facebook.com/share/1CYQy6ubYU/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 57,
        name: `Mahardika Institute of Technology`,
        city: `Ilmoh street, Bongao, Philippines, 7500`,
        province: `Tawi-Tawi`,
        type: `Private`,
        programsText: `BACHELOR OF SCIENCE IN CIVIL ENGINEERING 
BACHELOR OF SCIENCE IN ELECTRICAL ENGINEERING 
BACHELOR OF SCIENCE IN GEODETIC ENGINEERING 
BACHELOR IN ELEMENTARY EDUCATION 
BACHELOR IN SECONDARY EDUCATION N 
BACHELOR OF SCIENCE IN ACCOUNTING 
BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION 
BACHELOR OF SCIENCE IN CRIMINOLOGY 
BACHELOR OF SCIENCE IN HOTEL & RESTAURANT MNGT 
BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY 
BACHELOR OF SCIENCE IN NURSING 
BACHELOR OF SCIENCE IN SOCIAL WORK 
BACHELOR OF SCIENCE IN ENTREPRENEUR 
BACHELOR OF SCIENCE IN TVET / INDUSTRIAL EDUCATION`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Education`, `BS Civil Engineering`, `BS Business Administration`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Not publicly available`],
        admissionInfo: `UNIFAST - Tertiary Education Subsidy Senfor High School Voucher Program 
ESC for Junior High School TWSP for Technical / TVET / Diploma Program 
FREE Tuition fees for HONOR GRADUATES and 
other Indigent but DESERVING STUDENTS 30% Discount 
for Non-Scholars IMOH Foundation Scholarship grants for Elementary`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Email: online.mit2020@gmail.com Messenger: Mahardika Institute of Technology, Inc.`,
        website: `https://www.facebook.com/p/Mahardika-Institute-of-Technology-Inc-100064840991363/`,
        source: `https://www.facebook.com/p/Mahardika-Institute-of-Technology-Inc-100064840991363/`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 58,
        name: `Tawi-Tawi Criminal Justice College`,
        city: `Purok 1 Lumboy, Nalil, Bongao, Tawi-Tawi., Bongao, Philippines, 7500`,
        province: `Tawi-Tawi`,
        type: `Private`,
        programsText: `Bachelor of Science in Social Work Bachelor of Science in Criminology Bachelor of Elementary Education`,
        matchedCourses: [`BS Education`, `BS Criminology`, `BS Social Work`],
        admissionRequirements: [`Not publicly available`],
        admissionInfo: `Not publicly available/ Contact the school directly`,
        tuition: `Not publicly available`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `Instagram: ttcjci?igsh=bGhobDluMDVpaHhw Contact no.: 0975 037 3112 Email:tawitawicriminaljusticecollege@gmail.com Messenger: Tawi Tawi Criminal Justice College, Inc.`,
        website: `https://www.facebook.com/share/19ZF7fpL2n/?mibextid=wwXIfr`,
        source: `https://www.facebook.com/share/19ZF7fpL2n/?mibextid=wwXIfr`,
        dateVerified: `Not stated in source file`
    },
    {
        id: 59,
        name: `Philippine Last Frontier College`,
        city: `Brgy. Kakoong, Ungus Matata, Tandubas, Tawi-Tawi`,
        province: `Tawi-Tawi`,
        type: `Private`,
        programsText: `Bachelor of Elementary Education (BEED) Bachelor of Science in Information Technology (BSIT) Bachelor of Science in Nursing (BSN)`,
        matchedCourses: [`BS Nursing`, `BS Information Technology`, `BS Education`],
        admissionRequirements: [`FRESHMEN: 
Report Card (Form 138) 
Certificate of Good Moral Character 
PSA Birth Certificate (Photocopy) 
Two (2) copies of a 2x2 picture (with nametag) 
One (1) long white folder 
TRANSFEREES: 
Transfer Credentials (Honorable Dismissal) 
Transcript of Records (TOR) 
PSA Birth Certificate (Photocopy) 
Two (2) copies of a 2x2 picture (with nametag) - 
One (1) long white folder`],
        admissionInfo: `Not publicly available`,
        tuition: `Free tuition for BEED and BSIT ₱10,000 per semester for BSN`,
        scholarshipsAvailable: `Not publicly available`,
        contact: `contact us @ 0965-922-9840`,
        website: `Philippine Last Frontier College, Inc.`,
        source: `Philippine Last Frontier College, Inc.`,
        dateVerified: `August 2026`
    }
];
const scholarships = [
    {
        id: 1,
        name: "AHME-SP (Access to Higher and Modern Education Scholarship Program) - Bangsamoro IQ Scholar",
        provider: "Ministry of Basic, Higher and Technical Education (MBHTE) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "For incoming freshmen only (4- or 5-year bachelor's degree). Must be a BARMM resident, SHS or ALS graduate, enrolled in a BARMM Priority Program, with combined family income of ₱400,000/year or below, and not currently receiving another scholarship. Special eligibility for combatants, orphans, children of solo parents, PWDs, IP members, and IDPs.",
        programs: "BARMM Priority Programs (e.g. STEM, Agriculture, Fisheries, Engineering, Business, Islamic Finance)",
        applicationOpen: "Typically mid-April (AY2026-2027 cycle ran April 13 – May 13, 2026; now closed, watch for next announcement)",
        applicationDeadline: "Typically mid-May; check ahme-mbhte.bangsamoro.gov.ph for the next cycle",
        requirements: ["SHS/ALS diploma or certificate", "Certificate of BARMM Residency", "PSA Birth Certificate", "2x2 ID photo", "Certificate of Indigency (income ≤₱400,000/year)", "No other active scholarship"],
        benefits: "₱30,000 per semester (₱60,000 per academic year).",
        website: "https://ahme-mbhte.bangsamoro.gov.ph",
        source: "Multiple scholarship-tracking sites citing AHME-BARMM official announcements (not yet cross-checked against the official portal directly)",
        dateVerified: "October 2026"
    },
    {
        id: 2,
        name: "AHME-CAP (College Assistance Program)",
        provider: "Ministry of Basic, Higher and Technical Education (MBHTE) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "For qualified Senior High School graduates and ALS learners from low-income Bangsamoro families pursuing a bachelor's degree at a recognized public or private HEI. Rolled out in batches by area, not all at once — confirm current batch status with MBHTE for your specific province.",
        programs: "All undergraduate programs",
        applicationOpen: "Rolled out by area in batches (e.g. Cotabato City/Maguindanao del Norte/Maguindanao del Sur/SGA batch signed Aug 2026; Basilan batch scheduled Sept 2026) — check with MBHTE for your area's current batch",
        applicationDeadline: "Varies by area batch; check MBHTE-BARMM announcements",
        requirements: ["Proof of SHS or ALS graduation", "Certificate of BARMM Residency", "Proof of low-income household status", "Enrollment in a recognized public or private HEI"],
        benefits: "₱60,000 per student per academic year, funded through the Transitional Development Impact Fund (TDIF).",
        website: "https://bangsamoro.gov.ph/news/latest-news/more-college-students-from-low-income-families-get-scholarship-grants-from-barmm/",
        source: "BARMM Official Website (bangsamoro.gov.ph), published August 18, 2026",
        dateVerified: "October 2026"
    },
    {
        id: 3,
        name: "BASE (Bangsamoro Assistance for Science Education)",
        provider: "Ministry of Science and Technology (MOST) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "Natural-born Filipino citizen, BARMM resident for at least 6 months, 85% GWA (Grade 12, 1st semester) for STEM strand, or top 5% of class for Non-STEM strand, or a financially-constrained dropout in a specialized S&T course. Family income ≤₱250,000/year (₱350,000 if 4+ children). No other active scholarship. Must pass the MOST qualifying exam.",
        programs: "BS Computer Science, BS Civil Engineering, BS Information Technology, BS Agriculture",
        applicationOpen: "Typically January – March (confirm annually)",
        applicationDeadline: "Check official MOST-BARMM announcement",
        requirements: ["Parent's ITR/W2/OFW contract or BIR exemption certificate", "Barangay Certificate of Indigency", "Good moral character/health certificate", "No prior college units", "Passing score on MOST qualifying exam"],
        benefits: "₱8,000 per month stipend (per MOST announcement; confirm current rate).",
        website: "https://most.bangsamoro.gov.ph/scholarships-grants-2/",
        source: "MOST-BARMM official website — Scholarships & Grants page",
        dateVerified: "September 2026"
    },
    {
        id: 4,
        name: "BASE-Merit (Bangsamoro Assistance for Science Education - Merit Track)",
        provider: "Ministry of Science and Technology (MOST) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "Natural-born Filipino citizen, BARMM resident, 85% GWA for STEM strand or 90% GWA for Non-STEM strand, passed the BASE-Merit qualifying exam, enrolled in a BASE-Merit priority course. No other active scholarship, no prior college units.",
        programs: "BS Computer Science, BS Civil Engineering, BS Information Technology, BS Agriculture",
        applicationOpen: "Typically January – March (confirm annually)",
        applicationDeadline: "Check official MOST-BARMM announcement",
        requirements: ["Same base requirements as BASE", "Passing score on BASE-Merit qualifying exam"],
        benefits: "₱20,000 per month stipend (per MOST announcement; confirm current rate).",
        website: "https://most.bangsamoro.gov.ph/scholarships-grants-2/",
        source: "MOST-BARMM official website — Scholarships & Grants page",
        dateVerified: "September 2026"
    },
    {
        id: 5,
        name: "Mujahidin Assistance for Science Education (MASE)",
        provider: "Ministry of Science and Technology (MOST) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "For legitimate children of MILF/MNLF combatants pursuing a science and technology priority course. Must not be receiving any other scholarship, grant, or financial subsidy.",
        programs: "MOST S&T priority courses (per CHED Memorandum No. 05, s. 2019)",
        applicationOpen: "Check official MOST-BARMM announcement",
        applicationDeadline: "Check official MOST-BARMM announcement",
        requirements: ["Fully-accomplished MASE application form", "Certificate of Enrolment (original)", "PSA-authenticated Certificate of Live Birth (photocopy)", "Certification from unit base with endorsement from the Front Commander", "Barangay Certificate of Indigency"],
        benefits: "Funded through the Transitional Development Impact Fund (TDIF); amount set per grant cycle.",
        website: "https://most.bangsamoro.gov.ph/scholarships-grants-2/",
        source: "MOST-BARMM official website — Scholarships & Grants page",
        dateVerified: "September 2026"
    },
    {
        id: 6,
        name: "Bangsamoro Special Assistance for Science Education (BSASE)",
        provider: "Ministry of Science and Technology (MOST) - BARMM",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "For Bangsamoro Filipino citizens currently enrolled in a MOST S&T priority course, with a grade of at least 2.50 or 80% GWA. Must be recommended or endorsed by a current BTA-Member of Parliament. Not a recipient of any other scholarship, grant, or financial subsidy.",
        programs: "MOST S&T priority courses",
        applicationOpen: "Check official MOST-BARMM announcement",
        applicationDeadline: "Check official MOST-BARMM announcement",
        requirements: ["Fully-accomplished BSASE application form", "Certificate of Enrolment or Registration (signed by Registrar)", "Certificate of Grades (signed by Registrar, if currently studying)", "PSA-authenticated Certificate of Live Birth (photocopy)", "Recommendation letter from a current BTA-Member of Parliament", "Barangay Certificate of Indigency"],
        benefits: "Cash assistance grant; amount set per grant cycle under the Bangsamoro Autonomy Act.",
        website: "https://most.bangsamoro.gov.ph/scholarships-grants-2/",
        source: "MOST-BARMM official website — Scholarships & Grants page",
        dateVerified: "September 2026"
    },
    {
        id: 7,
        name: "CHED Merit Scholarship Program (CMSP)",
        provider: "Commission on Higher Education",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "Competitive, nationwide, for incoming first-year college students. Minimum GWA of 93% (96%+ for Full Merit, 93-95% for Half Merit). Combined annual family income must not exceed ₱500,000. Must enroll in a CHED-identified priority program at a SUC, LUC, or CHED-recognized private HEI. Cannot hold another active government-funded scholarship.",
        programs: "CHED-identified priority programs only — not all undergraduate programs",
        applicationOpen: "Typically late June (AY2026-2027 cycle ran June 22 – July 31, 2026; now closed)",
        applicationDeadline: "Typically July 31; check the CHED Regional Office portal for the next cycle",
        requirements: ["Certified true copy of Grade 12 SF9 / Learner's Progress Report Card", "GWA of 93% or above", "Proof of family income ≤₱500,000/year", "Admission to a SUC, LUC, or CHED-recognized PHEI", "Enrollment in a CHED-identified priority program"],
        benefits: "₱120,000/year (Full Merit, GWA 96%+) or ₱60,000/year (Half Merit, GWA 93-95%), covering tuition, stipend, and book/connectivity allowance.",
        website: "https://ched.gov.ph",
        source: "CHED Regional Office announcements and CHED Memorandum Orders for AY2026-2027",
        dateVerified: "October 2026"
    },
    {
        id: 8,
        name: "CHED-UniFAST Tertiary Education Subsidy (TES)",
        provider: "Commission on Higher Education / UniFAST",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "For already-enrolled students in CHED-recognized programs, prioritizing financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "Rolling, upon enrollment",
        applicationDeadline: "Set by UniFAST each academic year",
        requirements: ["Certificate of Enrollment", "Income Certificate"],
        benefits: "Subsidy amount set annually by UniFAST.",
        website: "https://unifast.gov.ph",
        source: "CHED-UniFAST official website",
        dateVerified: "September 2026"
    },
    {
        id: 9,
        name: "CHED Tulong Dunong Program (TDP)",
        provider: "Commission on Higher Education / UniFAST",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "A separate UniFAST subsidy track from TES, for enrolled students in financial need.",
        programs: "All undergraduate programs",
        applicationOpen: "Rolling, upon enrollment",
        applicationDeadline: "Set by UniFAST each academic year",
        requirements: ["Certificate of Enrollment", "Income Certificate"],
        benefits: "One-time or per-semester grant amount set annually by UniFAST (some HEIs report ₱7,500 one-time grants).",
        website: "https://unifast.gov.ph",
        source: "CHED-UniFAST official website",
        dateVerified: "September 2026"
    },
       {
        id: 10,
        name: "DOST-SEI Undergraduate S&T Scholarship",
        provider: "Department of Science and Technology - Science Education Institute",
        provinces: ["Maguindanao del Norte", "Maguindanao del Sur", "Lanao del Sur", "Basilan", "Sulu", "Tawi-Tawi", "Cotabato City", "Special Geographic Area"],
        eligibility: "Nationwide, for Grade 12 students graduating in the current school year (or previous graduates who haven't enrolled in college), in STEM or Non-STEM strands, pursuing science/technology/engineering/mathematics priority programs. Must pass the DOST-SEI national qualifying exam.",
        programs: "BS Computer Science, BS Civil Engineering, BS Information Technology, BS Agriculture",
        applicationOpen: "Typically early October (AY2026-2027 cycle: Oct 6 – Nov 21, 2025 application; qualifying exam Feb 21-22 & Mar 7-8, 2026)",
        applicationDeadline: "Typically late November; check science-scholarships.ph for the next cycle",
        requirements: ["Online E-Application via science-scholarships.ph", "Required application forms (Form G Parent's Certification, Form H, etc.)", "Passing score on the DOST-SEI national qualifying exam held the following February"],
        benefits: "Monthly stipend, tuition, and book allowance per DOST-SEI guidelines (up to roughly ₱80,000/year reported by some sources).",
        website: "https://sei.dost.gov.ph",
        source: "DOST-SEI official announcements and science-scholarships.ph, AY2026-2027 cycle",
        dateVerified: "October 2026"
    },
];

/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const form = document.getElementById("recommendationForm");
const resultsSection = document.getElementById("results");

const studentNameInput = document.getElementById("studentName");
const gradeLevelInput = document.getElementById("gradeLevel");
const strandInput = document.getElementById("strand");
const gwaInput = document.getElementById("gwa");
const courseInput = document.getElementById("course");
const otherCourseGroup = document.getElementById("otherCourseGroup");
const otherCourseTextInput = document.getElementById("otherCourseText");

courseInput.addEventListener("change", function () {
    if (!otherCourseGroup || !otherCourseTextInput) return;
    if (courseInput.value === "Other") {
        otherCourseGroup.classList.remove("hidden");
    } else {
        otherCourseGroup.classList.add("hidden");
        otherCourseTextInput.value = "";
    }
});
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

/* =========================================================
   FORM SUBMISSION
   ========================================================= */

form.addEventListener("submit", function (event) {
    event.preventDefault();

       const student = {
        name: studentNameInput.value.trim(),
        grade: gradeLevelInput.value,
        strand: strandInput.value,
        gwa: Number(gwaInput.value),
        course: courseInput.value,
        otherCourse: otherCourseTextInput ? otherCourseTextInput.value.trim() : "",
        interest: interestInput.value,
        province: provinceInput.value,
        institutionType: institutionTypeInput.value
    };

    generateRecommendations(student);

    resultsSection.classList.remove("hidden");
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});

/* =========================================================
   GENERATE RECOMMENDATIONS
   ========================================================= */

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

/* =========================================================
   SCHOOL MATCHING
   ---------------------------------------------------------
   Schools are matched by matchedCourses (auto-detected from
   each school's raw program list against the course the
   student chose). Same-province schools rank first, then
   schools matching the preferred institution type.
   ========================================================= */

function findMatchingSchools(student) {
    const matches = student.course === "Other"
        ? schools.slice()
        : schools.filter((school) => school.matchedCourses.includes(student.course));

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

/* =========================================================
   SCHOLARSHIP MATCHING
   ========================================================= */

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

/* =========================================================
   DISPLAY SCHOOL RESULTS
   ========================================================= */

function displaySchools(recommendations, student) {
    schoolResults.innerHTML = "";

    if (student.course === "Other") {
        schoolResults.innerHTML = `
            <div class="empty-state">
                <h4>Showing general school options</h4>
                <p>We don't yet track specific matches for "${student.otherCourse || "your course"}" — here are schools in your area. Check each one's full program list to see if they offer it.</p>
            </div>` + schoolResults.innerHTML;
    }

    if (recommendations.length === 0) {
        schoolResults.innerHTML = `
            <div class="empty-state">
                <h4>No matching schools found</h4>
                <p>None of the schools in our current data clearly list ${student.course || "that course"}. Try another course, or check the school's full program list directly.</p>
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
                    <div class="school-location">📍 ${school.city}</div>
                </div>
                ${school.province === student.province ? `<span class="match-label">NEAR YOU</span>` : ""}
            </div>

            <div class="school-info">
                <div class="info-box"><small>Institution</small><strong>${school.type}</strong></div>
                <div class="info-box"><small>Matching Course</small><strong>${student.course}</strong></div>
            </div>

            <div class="school-actions">
                <button class="small-button primary" onclick="openSchoolModal(${school.id})">View Full Details</button>
            </div>
        `;

        schoolResults.appendChild(card);
    });
}

/* =========================================================
   DISPLAY SCHOLARSHIPS
   ========================================================= */

function displayScholarships(matchingScholarships) {
    scholarshipResults.innerHTML = "";

    if (matchingScholarships.length === 0) {
        scholarshipResults.innerHTML = `
            <div class="empty-state">
                <h4>No scholarship matches found</h4>
                <p>Check the scholarship database again after adding more verified data.</p>
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

/* =========================================================
   SCHOOL DETAILS MODAL
   ========================================================= */

function stripListArtifacts(s) {
    return s.replace(/^[-*\u2022\u00b7]\s*/, "").replace(/^\d+[\.\)]\s*/, "").trim();
}

function splitTextToItems(text) {
    if (!text) return [];
    let items = text.split(/;|\u2022|·|\n+/).map((s) => s.trim()).filter((s) => s.length > 1);
    items = items.map(stripListArtifacts);
    return items;
}

function splitProgramsText(text) {
    if (!text) return [];
    const withBreaks = text.replace(
        /(?<!^)\s*(?=\b(?:Bachelor(?:'s)?|Associate|Master|Doctor|Diploma)\b|\b(?:BS|BA|AB)\s(?:in\s)?[A-Z])/g,
        "\n"
    );
    return splitTextToItems(withBreaks);
}

function formatAsList(text) {
    const items = splitTextToItems(text);
    if (items.length === 0) return `<p>Not publicly available</p>`;
    if (items.length === 1) return `<p>${items[0]}</p>`;
    return `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}

function formatProgramsAsList(text) {
    const items = splitProgramsText(text);
    if (items.length === 0) return `<p>Not publicly available</p>`;
    if (items.length === 1) return `<p>${items[0]}</p>`;
    return `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}

function formatRequirementsList(reqItems) {
    let all = [];
    (reqItems || []).forEach((item) => {
        const sub = splitTextToItems(item);
        if (sub.length > 1) {
            all = all.concat(sub);
        } else {
            all.push(stripListArtifacts(item));
        }
    });
    if (all.length === 0) return `<p>Not publicly available</p>`;
    return `<ul>${all.map((i) => `<li>${i}</li>`).join("")}</ul>`;
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
            ${formatProgramsAsList(school.programsText)}
        </div>

        <div class="modal-section">
            <h4>Admission Requirements</h4>
            ${formatRequirementsList(school.admissionRequirements)}
        </div>

        <div class="modal-section">
            <h4>Admission / Application Information</h4>
            ${formatAsList(school.admissionInfo)}
        </div>

        <div class="modal-section">
            <h4>Tuition / Fees</h4>
            ${formatAsList(school.tuition)}
        </div>

        <div class="modal-section">
            <h4>School-based Scholarships</h4>
            ${formatAsList(school.scholarshipsAvailable)}
        </div>

        <div class="modal-section">
            <h4>Official Contact</h4>
            ${formatAsList(school.contact)}
        </div>

        <div class="modal-section">
            <h4>Source</h4>
            <p>${school.source}</p>
            <p>Date Verified: ${school.dateVerified}</p>
        </div>

        ${school.website ? `<p class="modal-link">${school.website}</p>` : ""}
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

        <a href="${scholarship.website}" target="_blank" class="modal-link">Visit Official Information →</a>
    `;

    scholarshipModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

/* =========================================================
   CLOSE MODALS
   ========================================================= */

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

/* =========================================================
   EDIT PROFILE
   ========================================================= */

editProfileButton.addEventListener("click", function () {
    document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
});

/* =========================================================
   MOBILE MENU
   ========================================================= */

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

/* =========================================================
   ESCAPE KEY CLOSES MODAL
   ========================================================= */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeAllModals();
});

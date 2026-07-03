// Single source of truth for resume content.
// Edit this file to update copy across the whole site.

export const profile = {
  name: 'Mahendra Bhalsing',
  role: 'Java Backend Developer',
  tagline: 'Spring Boot · Microservices · Banking & Fintech',
  location: 'Ahmednagar, Maharashtra, India',
  email: 'mahendrabhalsing777@gmail.com',
  phone: '+91 8668626568',
  linkedin: 'https://linkedin.com/in/mahendra-bhalsing',
  github: 'https://github.com/Mahendrasb',
  summary:
    "Backend engineer with 2+ years building production systems in the banking & fintech domain. I specialize in Java, Spring Boot and microservices — most recently architecting core modules of an enterprise Loan Origination System, from schema migrations to job scheduling to secure API design.",
  resumeFile: '/resume.pdf',
  availability: 'Open to new roles',
}

export const stats = [
  { label: 'Years experience', value: '2+' },
  { label: 'Domain', value: 'Banking / Fintech' },
  { label: 'Core stack', value: 'Java · Spring Boot' },
  { label: 'Architecture', value: 'Microservices' },
]

// Rendered in the hero as a simulated service boot log — grounded in real work.
export const bootSequence = [
  { text: '$ mb --init', delay: 0 },
  { text: 'Starting FCLS loan-origination service...', delay: 0.25 },
  { text: 'Connecting Loan IQ datasource...  OK', delay: 0.55 },
  { text: 'Applying Liquibase migrations...  OK', delay: 0.85 },
  { text: 'Quartz Scheduler initialized (3 jobs)', delay: 1.15 },
  { text: 'Spring Security context loaded', delay: 1.45 },
  { text: 'Service ready ✓', delay: 1.75 },
]

export const experience = [
  {
    company: 'Finexcore',
    domain: 'Banking Domain',
    role: 'Associate Technical Consultant — Java Backend Developer',
    period: 'Mar 2024 — Present',
    project: 'FCLS · Finexcore Corporate Lending Solutions',
    projectDesc:
      'Enterprise-grade Loan Origination System covering the full corporate lending lifecycle: loan creation, approval workflows, disbursement and repayment tracking.',
    logs: [
      { method: 'POST', path: '/loans/origination', detail: 'Designed and built REST APIs for loan processing, customer data and transaction handling', status: 200 },
      { method: 'MIGRATE', path: '/db/schema', detail: 'Managed schema versioning across dev, UAT and production with Liquibase', status: 200 },
      { method: 'CRON', path: '/jobs/scheduler', detail: 'Automated due-date notifications, interest calculations and reports with Quartz Scheduler', status: 200 },
      { method: 'CONNECT', path: '/loaniq/gateway', detail: 'Integrated backend services with the Loan IQ database for secure financial transactions', status: 200 },
      { method: 'OPTIMIZE', path: '/db/queries', detail: 'Tuned complex Oracle/MySQL queries, reducing execution time and improving throughput', status: 200 },
      { method: 'AUTH', path: '/security/rbac', detail: 'Applied Spring Security for role-based, secure API access and data integrity', status: 200 },
    ],
  },
]

export const projects = [
  {
    title: 'FCLS',
    subtitle: 'Finexcore Corporate Lending Solutions',
    method: 'GET',
    endpoint: '/projects/fcls',
    desc: 'Enterprise Loan Origination System handling the full corporate lending lifecycle — origination, approvals, disbursement and repayment — integrated with Loan IQ.',
    stack: ['Java', 'Spring Boot', 'Liquibase', 'Quartz Scheduler', 'Oracle', 'Loan IQ', 'Spring Security'],
  },
  {
    title: 'Pharma Assistant System',
    subtitle: 'Personal project · Microservices architecture',
    method: 'GET',
    endpoint: '/projects/pharma-assistant',
    desc: 'Microservices platform with independent services for user management, medicine inventory and order processing, behind a central API Gateway.',
    stack: ['Spring Boot', 'API Gateway', 'JWT', 'Spring Security', 'Docker', 'Microservices'],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'SQL', 'JavaScript'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JUnit', 'Mockito'],
  },
  {
    group: 'Database & Migration',
    items: ['MySQL', 'Oracle', 'Liquibase'],
  },
  {
    group: 'Scheduling & Messaging',
    items: ['Quartz Scheduler'],
  },
  {
    group: 'Microservices & API',
    items: ['REST APIs', 'API Gateway', 'JWT', 'Microservices'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    group: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Jira', 'Logback / SLF4J'],
  },
  {
    group: 'Concepts',
    items: ['OOP', 'Multithreading', 'Data Structures', 'Agile / Scrum'],
  },
]

export const education = [
  {
    degree: 'Master of Science — Computer Science',
    school: 'Savitribai Phule Pune University',
    year: '2024',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    school: 'Savitribai Phule Pune University',
    year: '2022',
  },
]

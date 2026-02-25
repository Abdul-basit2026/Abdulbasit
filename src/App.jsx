import React, { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION - YOUR DETAILS
// ==========================================
const CONFIG = {
  name: "ABDUL-BASIT",
  title: "CS GRADUATE & MERN STACK DEVELOPER",
  tagline: "Building Digital Experiences With Modern Web Technologies",
  email: "basitafzal890@gmail.com",
  phone: "+92 3088004748",
  altPhone: "+92 3336642402",
  whatsapp: "923088004748",
  location: "Peshawar, Pakistan",
  availability: "Open for Opportunities",
  
  // Social Links
 
  linkedin: "https://linkedin.com/in/yourusername",
  
  // Personal Image - Place your photo in public folder as 'profile.jpg'
  profileImage: "/profile.jpg",
  
  // About
"about": "I'm A Passionate Computer Science Graduate From Islamia College University Peshawar With A Diploma In Information Technology From PIEMS College. I Specialize In Building Responsive Web Applications Using Modern Technologies. My Journey In Tech Started With IT Support And Networking, Which Gave Me A Solid Foundation In Problem-Solving And System Architecture.",
  // Education
  education: [
    {
      degree: "BS COMPUTER SCIENCE",
      school: "ISLAMIA COLLEGE UNIVERSITY PESHAWAR ",
      year: "2021 - 2025",
"description": "Rigorous Training Across The Computing Spectrum: Theoretical Foundations (Automata, Formal Languages, Computational Complexity), Systems-Level Implementation (Assembly, Architecture, Algorithms, Data Structures), Data Management (Database Internals, Optimization), Intelligent Computing (Machine Learning, AI, Data Science, Statistical Analytics), And Modern Application Development (Full-Stack Web Engineering). Delivered Production-Grade Projects In Database Systems, Intelligent Web Platforms, And Data-Driven Solutions."    },
    {
      degree: "DIPLOMA IN INFORMATION TECHNOLOGY (DIT)",
      school: "PIEMS COLLEGE SYSTEM PESHAWAR",
      year: "2020-2021",
      description: "Hands-on training bridging hardware and software layers: network infrastructure design, hardware-software integration, diagnostic and repair protocols, IT operations management, and foundational programming. Established core infrastructure knowledge supporting advanced computing education.."
    }
  ],
  
  // Certifications
  certifications: [
    { name: "Linkedin Live Session", issuer: "Software Synergy", year: "2025" },
    { name: "Islamians Tech Seminar", issuer: "TECHLINK", year: "2025" },
  ],
  
  // Skills with YOUR proficiencies
  skills: [
    { name: "HTML/CSS/Tailwind", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Node.js & Express", level: 80, category: "Backend" },
    { name: "Web Development", level: 90, category: "Core" },
    { name: "Problem Solving", level: 90, category: "Core" },
    { name: "IT Support", level: 80, category: "IT" },
    { name: "Networking", level: 75, category: "IT" },
    { name: "UI/UX Design", level: 70, category: "Design" },
    { name: "MongoDB/SQL", level: 75, category: "Database" }
  ],
  
  // Experience
  experience: [
    {
      role: "FINAL YEAR PROJECT",
      company: "Self Not Hosted Locally",
      location: "Peshawar",
      period: "2024 DEC - 2025 DEC",
      type: "FYP",
      description: "Busline is a real-time bus ticket booking and transport management system that synchronizes online and station bookings to prevent overbooking and manual errors. It uses modern full-stack technologies to provide secure authentication, live seat updates, and efficient scheduling for intercity routes.",
      achievements: [
        "Built a full-stack application using React, Node.js, and MongoDB to manage bus ticket bookings and schedules",
        "Created responsive dashboards for data visualization"
      ],
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Socket.IO", "JWT Authentication"]
    },
    {
      role: "Hanif-Crockery-Shop",
      company: "Personal Project",
      location: "Peshawar",
      period: "2 Months Of Development 2025",
      type: "Part-time",
      description: "Hanif Crockery Shop is a retail store offering a wide range of quality kitchenware, home essentials, and decorative crockery items at affordable prices. The shop focuses on providing durable products, customer satisfaction, and a convenient shopping experience for households and businesses.",
      achievements: [
        "Built a strong and trusted customer base through consistent quality products and reliable service.",
        "Successfully expanded product variety to meet diverse household and commercial needs.",
        "Successfully expanded product variety to meet diverse household and commercial needs.",
      ],
      technologies: ["HTML5", "CSS3+TAILWIND", "REACT-JS", "Hardware"]
    },
    {
      role: "PERSONAL PORTFOLIO WEB APP",
      company: "SELF",
      location: "Peshawar",
      period: "2024-2025 june",
      type: "Learning Project",
      description: "My portfolio highlights my full-stack development skills, showcasing real-world projects with modern technologies, responsive design, and real-time functionality. It demonstrates my ability to build scalable, secure, and user-focused web applications while reflecting my continuous learning and problem-solving expertise.",
      achievements: [
        "Successfully completed BS degree in Computer Science",
        "Developed and delivered real-world full-stack projects with modern technologies.",
        "Gained practical experience in frontend, backend, database management, and real-time systems.",
        "Continuously improved technical skills through self-learning and project-based development."
      ],
      technologies: ["HTML5", "CSS3+TAILWIND", "REACT-JS"]
    }
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "BUSLINE TICKET BOOKING SYSTEM",
      subtitle: "Full-Stack Bus Ticket Booking Web App",
"description": "Busline Is A Real-Time Bus Ticket Booking And Transport Management System That Synchronizes Online And Station Bookings To Prevent Overbooking And Manual Errors. It Uses Modern Full-Stack Technologies To Provide Secure Authentication, Live Seat Updates, And Efficient Scheduling For Intercity Routes.",      image: "FYP.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      stats: { users: "50+", positive: "200+", Appreciate: "100+" },
      links: {},
      featured: true,
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Hanif Crockery Shop",
      subtitle: "Full-Stack Shop Advertisement Web App",
"description": "Hanif Crockery Shop Is A Retail Store Offering A Wide Range Of Quality Kitchenware, Home Essentials, And Decorative Crockery Items At Affordable Prices. The Shop Focuses On Providing Durable Products, Customer Satisfaction, And A Convenient Shopping Experience For Households And Businesses."      image: "img1.jpg",
      tags: ["HTML5", "CSS3+TAILWIND", "REACT-JS"],
      stats: { users: "500+", products: "800+", sales: "1M+" },
      links: {
        live: "https://hanif-crockery-shop.vercel.app/",
      },
      featured: true,
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Portfolio Web App",
      subtitle: "Personal Portfolio Web Application",
"description": "My Portfolio Highlights My Full-Stack Development Skills, Showcasing Real-World Projects With Modern Technologies, Responsive Design, And Real-Time Functionality. It Demonstrates My Ability To Build Scalable, Secure, And User-Focused Web Applications While Reflecting My Continuous Learning And Problem-Solving Expertise."      image: "pic.jpg",
      tags: ["HTML5", "CSS3+TAILWIND", "REACT-JS"],
      stats: { Views: "200+", Likes: "5,000+", Comments: "500+" },
      links: {
        live: "https://portfolio-m-basit.vercel.app/",
      },
      featured: true,
      color: "#8b5cf6"
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      text: "Basit is an exceptional developer with a strong work ethic. He delivered our project on time and exceeded our expectations in terms of quality and functionality.",
      author: "Arshad ALi",
      role: "Owner, Hanif Crockery Shop",
      company: "Business",
      image: "Arshad.jpg"
    },
    {
      text: "Working with Basit was a pleasure. He understood our requirements perfectly and built an e-commerce platform that doubled our online sales.",
      author: "Muhammad Ali",
      role: "Owner, Peshawar Electronics",
      company: "Client",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
    },
    {
      text: "Basit's IT support skills saved our business during a critical network failure. He's technically sound and professionally reliable.",
      author: "Sarah Ahmed",
      role: "Manager, Local Tech Solutions",
      company: "Former Colleague",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    }
  ],
  
  // Stats
  stats: [
    { value: "1+", label: "Year Experience", icon: "calendar" },
    { value: "7+", label: "Projects Completed", icon: "briefcase" },
    { value: "100%", label: "Client Satisfaction", icon: "users" },
    { value: "24/7", label: "Support Available", icon: "server" }
  ]
};

// ==========================================
// ICONS
// ==========================================
const Icons = {
  Menu: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  Twitter: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  MapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  ExternalLink: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  Send: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Calendar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Briefcase: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  Users: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Server: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  Award: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>,
  Message: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  ChevronRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
};

// ==========================================
// STYLES
// ==========================================
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    
    :root {
      --bg: #0a0a0a;
      --bg-elevated: #141414;
      --bg-card: #1a1a1a;
      --border: #262626;
      --text: #fafafa;
      --text-secondary: #a3a3a3;
      --text-muted: #737373;
      --primary: #3b82f6;
      --primary-dark: #2563eb;
      --accent: #8b5cf6;
      --success: #22c55e;
      --gradient-1: #3b82f6;
      --gradient-2: #8b5cf6;
      --gradient-3: #ec4899;
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
    ::selection { background: var(--primary); color: white; }
    
    .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    @media (max-width: 768px) { .container { padding: 0 16px; } }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes textGlow {
      0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3); }
      50% { text-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5); }
    }
    
    .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    
    /* Navigation */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border); transition: all 0.3s;
    }
    .nav-container { display: flex; justify-content: space-between; align-items: center; height: 80px; }
    .nav-logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.5px; color: var(--text); }
    .nav-logo span { color: var(--primary); }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a {
      color: var(--text-secondary); font-size: 0.9rem; font-weight: 500;
      transition: all 0.3s; position: relative; text-decoration: none;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--text); }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
      background: linear-gradient(90deg, var(--gradient-1), var(--gradient-2));
      transition: width 0.3s; border-radius: 2px;
    }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    .mobile-menu-btn { display: none; background: none; border: none; color: var(--text); cursor: pointer; padding: 8px; }
    
    @media (max-width: 768px) {
      .nav-links { display: none; position: absolute; top: 80px; left: 0; right: 0; background: var(--bg-elevated); flex-direction: column; padding: 24px; gap: 16px; border-bottom: 1px solid var(--border); }
      .nav-links.open { display: flex; animation: fadeIn 0.3s ease-out; }
      .mobile-menu-btn { display: block; }
    }
    
    /* Hero */
    .hero {
      min-height: 100vh; display: flex; align-items: center; position: relative;
      overflow: hidden; padding-top: 80px;
    }
    .hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.15), transparent),
                  radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.1), transparent);
      pointer-events: none;
    }
    .hero-grid {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
      pointer-events: none;
    }
    .hero-content { position: relative; z-index: 1; width: 100%; }
    .hero-grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    
    @media (max-width: 968px) { .hero-grid-layout { grid-template-columns: 1fr; text-align: center; } }
    
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 16px; background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 50px;
      color: var(--success); font-size: 0.875rem; font-weight: 600;
      margin-bottom: 24px; opacity: 0; animation: fadeIn 0.6s ease-out 0.1s forwards;
    }
    .hero-badge::before { content: ''; width: 8px; height: 8px; background: var(--success); border-radius: 50%; animation: pulse 2s infinite; }
    
    .hero-title {
      font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; line-height: 1.1;
      letter-spacing: -0.02em; margin-bottom: 24px; opacity: 0;
      animation: fadeIn 0.6s ease-out 0.2s forwards;
    }
    .hero-title .gradient-text {
      background: linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 50%, var(--gradient-3) 100%);
      background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      animation: gradient 8s linear infinite;
    }
    
    /* Typing Effect Styles */
    .typing-container {
      height: 1.2em;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .typing-line {
      font-size: clamp(1.5rem, 4vw, 2.5rem);
      font-weight: 700;
      color: var(--text);
      min-height: 1.2em;
      display: flex;
      align-items: center;
    }
    
    .typing-cursor {
      display: inline-block;
      width: 3px;
      height: 1em;
      background: var(--primary);
      margin-left: 4px;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    .glow-effect {
      animation: textGlow 2s ease-in-out infinite;
    }
    
    .hero-subtitle {
      font-size: 1.125rem; color: var(--text-secondary); max-width: 500px;
      margin-bottom: 32px; line-height: 1.7; opacity: 0;
      animation: fadeIn 0.6s ease-out 0.3s forwards;
    }
    
    .hero-actions {
      display: flex; gap: 16px; margin-bottom: 40px; flex-wrap: wrap; opacity: 0;
      animation: fadeIn 0.6s ease-out 0.4s forwards;
    }
    @media (max-width: 968px) { .hero-actions { justify-content: center; } }
    
    .btn {
      display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px;
      border-radius: 8px; font-weight: 600; font-size: 0.95rem;
      transition: all 0.3s; border: none; cursor: pointer; text-decoration: none;
    }
    .btn-primary { background: var(--text); color: var(--bg); }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.3); }
    .btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border); }
    .btn-secondary:hover { border-color: var(--text); background: rgba(255, 255, 255, 0.05); }
    
    .hero-stats {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; opacity: 0;
      animation: fadeIn 0.6s ease-out 0.5s forwards;
    }
    @media (max-width: 768px) { .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 24px; } }
    
    .stat-item { display: flex; flex-direction: column; }
    .stat-value { font-size: 2rem; font-weight: 800; color: var(--text); line-height: 1; }
    .stat-label { font-size: 0.875rem; color: var(--text-muted); margin-top: 8px; }
    
    /* Profile Image */
    .profile-container {
      position: relative; display: flex; justify-content: center; opacity: 0;
      animation: fadeIn 0.6s ease-out 0.3s forwards;
    }
    .profile-wrapper {
      position: relative; width: 320px; height: 320px;
      animation: float 6s ease-in-out infinite;
    }
    @media (max-width: 968px) { .profile-wrapper { width: 280px; height: 280px; } }
    
    .profile-glow {
      position: absolute; inset: -20px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%);
      border-radius: 50%; 
      animation: pulse 4s infinite;
      filter: blur(10px);
    }
    .profile-image {
      width: 100%; height: 100%; object-fit: cover; border-radius: 50%;
      border: 4px solid var(--border); position: relative; z-index: 1;
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
    }
    .profile-ring {
      position: absolute; inset: -10px; border: 2px dashed var(--border);
      border-radius: 50%; animation: spin 20s linear infinite;
    }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    
    /* Sections */
    .section { padding: 100px 0; position: relative; }
    .section-header { margin-bottom: 60px; }
    .section-label {
      display: inline-block; font-size: 0.875rem; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); margin-bottom: 16px;
    }
    .section-title {
      font-size: clamp(2rem, 5vw, 3rem); font-weight: 800;
      letter-spacing: -0.02em; margin-bottom: 16px;
    }
    .section-desc { font-size: 1.125rem; color: var(--text-secondary); max-width: 600px; line-height: 1.7; }
    
    /* About */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
    @media (max-width: 968px) { .about-grid { grid-template-columns: 1fr; gap: 60px; } }
    
    .about-text { font-size: 1.125rem; line-height: 1.8; color: var(--text-secondary); }
    .about-text p { margin-bottom: 20px; }
    
    .skills-container { display: flex; flex-direction: column; gap: 32px; }
    .skill-category h4 {
      font-size: 0.875rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 16px;
    }
    .skill-list { display: flex; flex-wrap: wrap; gap: 12px; }
    .skill-tag {
      padding: 10px 18px; background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 8px; font-size: 0.9rem; color: var(--text-secondary);
      transition: all 0.3s; cursor: default;
    }
    .skill-tag:hover {
      border-color: var(--primary); color: var(--text); transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    }
    
    /* Experience */
    .timeline { position: relative; padding-left: 32px; }
    .timeline::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
      background: linear-gradient(180deg, var(--gradient-1), var(--gradient-2)); border-radius: 2px;
    }
    .timeline-item { position: relative; padding-bottom: 48px; padding-left: 32px; opacity: 0; }
    .timeline-item.visible { animation: fadeIn 0.6s ease-out forwards; }
    .timeline-item::before {
      content: ''; position: absolute; left: -37px; top: 8px; width: 12px; height: 12px;
      background: var(--bg); border: 3px solid var(--primary); border-radius: 50%;
    }
    .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 12px; }
    .timeline-role { font-size: 1.25rem; font-weight: 700; color: var(--text); }
    .timeline-company { color: var(--primary); font-weight: 600; }
    .timeline-meta { display: flex; gap: 16px; font-size: 0.875rem; color: var(--text-muted); margin-bottom: 12px; flex-wrap: wrap; }
    .timeline-desc { color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
    .timeline-achievements { display: flex; flex-direction: column; gap: 8px; }
    .achievement { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--text-secondary); }
    .achievement-icon { color: var(--success); flex-shrink: 0; }
    .timeline-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
    .tech-pill {
      padding: 6px 12px; background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 50px;
      font-size: 0.8rem; color: var(--primary);
    }
    
    /* Education */
    .edu-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr; } }
    .edu-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
      padding: 32px; transition: all 0.3s;
    }
    .edu-card:hover { border-color: var(--primary); transform: translateY(-4px); box-shadow: 0 20px 40px -20px rgba(59, 130, 246, 0.2); }
    .edu-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; flex-wrap: wrap; gap: 12px; }
    .edu-degree { font-size: 1.125rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
    .edu-school { color: var(--primary); font-weight: 600; font-size: 0.95rem; }
    .edu-year { font-size: 0.875rem; color: var(--text-muted); font-weight: 500; padding: 6px 12px; background: var(--bg-elevated); border-radius: 50px; }
    .edu-details { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; }
    .edu-honors { display: inline-flex; align-items: center; gap: 6px; font-size: 0.875rem; color: var(--success); margin-top: 12px; }
    
    .cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr; } }
    .cert-card {
      display: flex; align-items: center; gap: 16px; padding: 20px;
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; transition: all 0.3s;
    }
    .cert-card:hover { border-color: var(--accent); background: var(--bg-elevated); }
    .cert-icon {
      width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
      border-radius: 12px; color: var(--accent);
    }
    .cert-info h4 { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
    .cert-info p { font-size: 0.875rem; color: var(--text-muted); }
    
    /* Projects */
    .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    @media (max-width: 968px) { .projects-grid { grid-template-columns: 1fr; } }
    .project-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
      overflow: hidden; transition: all 0.4s;
    }
    .project-card:hover { transform: translateY(-8px); box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.5); }
    .project-card.featured { grid-column: span 2; }
    @media (max-width: 968px) { .project-card.featured { grid-column: span 1; } }
    
    .project-image { position: relative; height: 240px; overflow: hidden; }
    .project-card.featured .project-image { height: 400px; }
    .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
    .project-card:hover .project-image img { transform: scale(1.05); }
    .project-overlay {
      position: absolute; inset: 0; background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, transparent 60%);
      opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 24px;
    }
    .project-card:hover .project-overlay { opacity: 1; }
    .project-category {
      position: absolute; top: 16px; left: 16px; padding: 8px 16px;
      background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px);
      border-radius: 50px; font-size: 0.8rem; font-weight: 600; color: var(--text); z-index: 2;
    }
    .project-content { padding: 32px; }
    .project-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .project-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 4px; }
    .project-subtitle { font-size: 0.9rem; color: var(--text-muted); }
    .project-stats { display: flex; gap: 24px; margin: 20px 0; padding: 16px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .project-stat { display: flex; flex-direction: column; }
    .project-stat-value { font-size: 1.25rem; font-weight: 700; color: var(--text); }
    .project-stat-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .project-desc { color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
    .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
    .project-tag { padding: 6px 12px; background: var(--bg-elevated); border-radius: 6px; font-size: 0.8rem; color: var(--text-secondary); }
    .project-actions { display: flex; gap: 12px; }
    .project-btn {
      flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      padding: 12px 20px; border-radius: 8px; font-size: 0.9rem; font-weight: 600;
      transition: all 0.3s; text-decoration: none;
    }
    .project-btn.primary { background: var(--text); color: var(--bg); }
    .project-btn.primary:hover { background: var(--text-secondary); }
    .project-btn.secondary { background: var(--bg-elevated); color: var(--text); border: 1px solid var(--border); }
    .project-btn.secondary:hover { border-color: var(--text); }
    
    /* Testimonials */
    .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    @media (max-width: 968px) { .testimonials-grid { grid-template-columns: 1fr; } }
    .testimonial-card {
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
      padding: 32px; position: relative; transition: all 0.3s;
    }
    .testimonial-card:hover { transform: translateY(-4px); }
    .testimonial-quote { font-size: 1.125rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 24px; }
    .testimonial-author { display: flex; align-items: center; gap: 16px; }
    .testimonial-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border); }
    .testimonial-info h4 { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
    .testimonial-info p { font-size: 0.875rem; color: var(--text-muted); }
    
    /* Contact */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    @media (max-width: 968px) { .contact-grid { grid-template-columns: 1fr; } }
    .contact-info h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; }
    .contact-desc { color: var(--text-secondary); line-height: 1.7; margin-bottom: 32px; }
    .contact-links { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
    .contact-link {
      display: flex; align-items: center; gap: 16px; padding: 20px;
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
      transition: all 0.3s; text-decoration: none; color: inherit;
    }
    .contact-link:hover { border-color: var(--primary); transform: translateX(8px); }
    .contact-icon {
      width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
      background: var(--bg-elevated); border-radius: 12px; color: var(--primary);
    }
    .contact-details h4 { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
    .contact-details p { font-size: 0.9rem; color: var(--text-muted); }
    .social-links { display: flex; gap: 12px; }
    .social-link {
      width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
      background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px;
      color: var(--text-secondary); transition: all 0.3s;
    }
    .social-link:hover { border-color: var(--text); color: var(--text); transform: translateY(-4px); }
    
    .form-group { margin-bottom: 20px; }
    .form-label { display: block; margin-bottom: 8px; font-size: 0.9rem; font-weight: 500; color: var(--text-secondary); }
    .form-input, .form-textarea {
      width: 100%; padding: 14px 16px; background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 10px; color: var(--text); font-size: 1rem; transition: all 0.3s;
    }
    .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
    .form-textarea { min-height: 140px; resize: vertical; }
    
    /* WhatsApp */
    .whatsapp-float {
      position: fixed; bottom: 32px; right: 32px; width: 64px; height: 64px;
      background: linear-gradient(135deg, #25d366, #128c7e); border-radius: 50%;
      display: flex; align-items: center; justify-content: center; color: white;
      box-shadow: 0 8px 32px rgba(37, 211, 102, 0.4); cursor: pointer;
      transition: all 0.3s; border: none; z-index: 999; animation: float 3s ease-in-out infinite;
    }
    .whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 12px 40px rgba(37, 211, 102, 0.6); }
    @media (max-width: 768px) { .whatsapp-float { bottom: 20px; right: 20px; width: 56px; height: 56px; } }
    
    /* Footer */
    .footer { padding: 60px 0; border-top: 1px solid var(--border); text-align: center; }
    .footer p { color: var(--text-muted); font-size: 0.9rem; }
    
    /* Reveal */
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
    .reveal.active { opacity: 1; transform: translateY(0); }
  `}</style>
);

// ==========================================
// COMPONENTS
// ==========================================

const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">{CONFIG.name}<span>.</span></div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// NEW: Typing Effect Component
const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Hi I'm Basit", "MERN Stack Developer"];
  const period = 1000; // Pause time before erasing

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      if (!isDeleting && displayText === fullText) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && displayText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="typing-container">
      <div className="typing-line glow-effect">
        {displayText}
        <span className="typing-cursor"></span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-grid-layout">
          <div>
            <div className="hero-badge">AVAILABLE FOR WORK</div>
            
            {/* REPLACED STATIC TITLE WITH TYPING EFFECT */}
            <TypingEffect />
            
            <h1 className="hero-title">
              <span className="gradient-text">{CONFIG.title}</span>
            </h1>
            
            <p className="hero-subtitle">{CONFIG.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work <Icons.ChevronRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              {CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-wrapper">
              <div className="profile-glow" />
              <div className="profile-ring" />
              <img 
                src={CONFIG.profileImage} 
                alt={CONFIG.name} 
                className="profile-image"
                onError={(e) => {
                  e.target.src = 'im.png'; // Fallback image if profile image fails to load
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const skillsByCategory = CONFIG.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-desc">Technologies and tools I use to build exceptional products</p>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>{CONFIG.about}</p>
          </div>
          <div className="skills-container reveal">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skill-list">
                  {skills.map(skill => (
                    <span key={skill.name} className="skill-tag">{skill.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-desc">My professional journey and key achievements</p>
        </div>
        <div className="timeline">
          {CONFIG.experience.map((job, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${visibleItems.includes(idx) ? 'visible' : ''}`}
              data-index={idx}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">{job.role}</div>
                  <div className="timeline-company">{job.company}</div>
                </div>
              </div>
              <div className="timeline-meta">
                <span>{job.period}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
              <p className="timeline-desc">{job.description}</p>
              <div className="timeline-achievements">
                {job.achievements.map((achievement, i) => (
                  <div key={i} className="achievement">
                    <span className="achievement-icon"><Icons.Check /></span>
                    {achievement}
                  </div>
                ))}
              </div>
              <div className="timeline-tech">
                {job.technologies.map(tech => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-desc">Degrees and certifications that shaped my expertise</p>
        </div>
        
        <div className="edu-grid reveal">
          {CONFIG.education.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div className="edu-header">
                <div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                </div>
                <span className="edu-year">{edu.year}</span>
              </div>
              <p className="edu-details">{edu.description}</p>
              <div className="edu-honors">
                <Icons.Award /> {edu.honors}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '60px', marginBottom: '24px', fontSize: '1.25rem' }}>Certifications</h3>
        <div className="cert-grid reveal">
          {CONFIG.certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon"><Icons.Award /></div>
              <div className="cert-info">
                <h4>{cert.name}</h4>
                <p>{cert.issuer} • {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">Selected works that showcase my technical abilities</p>
        </div>
        <div className="projects-grid">
          {CONFIG.projects.map((project, idx) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''} reveal`}>
              <div className="project-image">
                <span className="project-category">{project.category}</span>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <Icons.ExternalLink /> View Live
                  </a>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                </div>
                <div className="project-stats">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="project-stat">
                      <span className="project-stat-value">{value}</span>
                      <span className="project-stat-label">{key}</span>
                    </div>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                    <Icons.ExternalLink /> Live Demo
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                    <Icons.Github /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-desc">Feedback from colleagues and clients I've worked with</p>
        </div>
        <div className="testimonials-grid">
          {CONFIG.testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card reveal">
              <p className="testimonial-quote">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact: ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc">Have a project in mind? I'd love to hear about it.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Get in Touch</h3>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <div className="contact-links">
              <a href={`mailto:${CONFIG.email}`} className="contact-link">
                <div className="contact-icon"><Icons.Mail /></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>{CONFIG.email}</p>
                </div>
              </a>
              <a href={`tel:${CONFIG.phone}`} className="contact-link">
                <div className="contact-icon"><Icons.Phone /></div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>{CONFIG.phone} / {CONFIG.altPhone}</p>
                </div>
              </a>
              <div className="contact-link">
                <div className="contact-icon"><Icons.MapPin /></div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>{CONFIG.location}</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icons.Github />
              </a>
              <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icons.Linkedin />
              </a>
              <a href={CONFIG.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <Icons.Twitter />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="reveal">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Icons.Send /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const WhatsAppFloat = () => {
  const openChat = () => {
    const text = encodeURIComponent(`Hi ${CONFIG.name}, I saw your portfolio and would love to connect!`);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <button className="whatsapp-float" onClick={openChat} title="Chat on WhatsApp">
      <Icons.Message />
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
        <a className="developer-link font-extrabold " href="https://portfolio-m-basit.vercel.app" target="_blank" rel="noopener noreferrer">Click To Contact Developer</a>
        <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>Built with React & passion</p>

      </div>
    </footer>
  );
};

// MAIN APP
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    document.querySelectorAll('.reveal, section[id]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default App;

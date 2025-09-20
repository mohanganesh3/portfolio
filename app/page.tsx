"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Code,
  Database,
  Cpu,
  Eye,
  Award,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Phone,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react"

const skills = {
  "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL"],
  "Generative AI": [
    "GANs",
    "LLMs",
    "LangChain",
    "LangGraph",
    "RAG",
    "Vector Databases",
    "CrewAI",
    "n8n",
    "FastAPI",
    "MCP",
  ],
  "AI Engineering": ["ML", "DL", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Fine-tuning (LoRA/QLoRA)"],
  "Computer Vision & NLP": ["LSTM", "CNNs", "RNN", "YOLO", "OpenCV", "NLTK", "Sentiment Analysis", "Object Detection"],
  "Full-Stack Development": ["MERN Stack", "Next.js", "REST APIs", "Redux"],
  "DevOps & Databases": ["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "MySQL", "MongoDB", "Deployment"],
}

const projects = [
  {
    title: "BrewBuddy - Multi-Agent Coffee Shop AI",
    description:
      "Multi-agent pipeline with Google Gemini Pro, recommendation engine using market basket analysis, deployed serverless on RunPod with Next.js.",
    tech: ["Google Gemini", "Pinecone", "Next.js", "Multi-Agent Systems"],
    github: "https://github.com/mohanganesh3/CoffeeShopAI-Assistant",
    demo: "https://coffee-shop-ai-assistant-mohan-ganeshs-projects.vercel.app/",
    category: "AI/ML",
  },
  {
    title: "NewsletterGen - AI Newsletter Suite",
    description:
      "AI-driven newsletter generator using CrewAI and Exa, automating news retrieval, summarization, and content refinement with Streamlit interface.",
    tech: ["CrewAI", "Exa", "Streamlit", "Content Generation"],
    github: "https://github.com/mohanganesh3/NewsLetterGenerationUsingCrewAI",
    demo: "https://newslettergenerationusingcrewai-03l7.onrender.com/",
    category: "AI/ML",
  },
  {
    title: "RAG-Powered Web Content Q&A Chatbot",
    description:
      "Streamlit app with LangChain, LLaMA-3, and FAISS enabling real-time Q&A over website content with semantic retrieval.",
    tech: ["LangChain", "LLaMA-3", "FAISS", "RAG", "Streamlit"],
    github: "https://github.com/mohanganesh3/RAG-Powered-Web-Content-Q-A-Chatbot",
    demo: "https://rag-powered-web-content-q-a-chatbot-lfbp5fwkgnppgdnfpyae8v.streamlit.app/",
    category: "AI/ML",
  },
  {
    title: "Maritime AI: LoRA Fine-tuned LLM",
    description:
      "LoRA fine-tuned Mistral-7B LLM for maritime ship equipment guidance, enabling domain-specific Q&A and offline inference.",
    tech: ["Mistral-7B", "LoRA", "Fine-tuning", "Domain-specific LLM"],
    github: "https://github.com/mohanganesh3/Maritime-AI-LoRA-based-Finetuned-LLM-on-Ship-Equipment",
    category: "AI/ML",
  },
  {
    title: "Book Recommendation System",
    description:
      "Collaborative filtering model using cosine similarity on 1M+ user interactions with 89% relevance accuracy, deployed via Flask.",
    tech: ["Machine Learning", "Collaborative Filtering", "Flask", "Cosine Similarity"],
    github: "https://github.com/mohanganesh3/book_recommended_system",
    demo: "https://book-recommended-system-xud7.onrender.com/",
    category: "ML",
  },
  {
    title: "IPL Win Predictor",
    description:
      "Ensemble ML model with 84.3% accuracy using features like pressure index, momentum, and venue statistics.",
    tech: ["Ensemble ML", "Feature Engineering", "Streamlit"],
    github: "https://github.com/mohanganesh3/ipl_win_predictor",
    demo: "https://mohanganesh3-ipl-win-predictor-app-mpb9ve.streamlit.app/",
    category: "ML",
  },
  {
    title: "Smart ATS Resume Analyzer",
    description:
      "AI-powered Streamlit tool using Gemini for ATS-optimized resume scoring, keyword analysis, and smart summaries.",
    tech: ["Google Gemini", "Streamlit", "NLP", "Resume Analysis"],
    github: "https://github.com/mohanganesh3/ATS_Tracking",
    demo: "https://atstracking-4rbdd77ejbdkto9buv6fkw.streamlit.app/",
    category: "AI/ML",
  },
]

const experience = [
  {
    title: "AI Intern",
    company: "Kasolco",
    period: "05/2025 - 07/2025",
    description:
      "Developed AI solutions for retail analytics, healthcare applications, and fitness chatbots.",
    keyContributions: [
      {
        title: "AI Retail Shelf Vision Analytics System",
        description:
          "Engineered an enterprise-grade AI retail shelf vision analytics system for Vi-John cosmetics company, transforming a failed 67% accuracy project into a production-ready solution, achieving 95% accuracy (100% in optimal conditions). Implemented breakthrough multi-modal architecture: custom YOLOv10 trained on 11GB SKU-110K dataset → hybrid ResNet-34 + OCR embeddings (0.7:0.3 ratio) → FAISS similarity search → real-time product classification with automated gap detection, enabling automated inventory management and eliminating manual shelf auditing.",
        tech: ["YOLOv10", "ResNet-34", "FAISS", "OCR", "Computer Vision", "SKU-110K Dataset"],
        impact: "95% accuracy (100% in optimal conditions), eliminated manual shelf auditing",
        github: "https://github.com/mohanganesh3/AI-Retail-Shelf-Vision-Analytics",
      },
      {
        title: "Multi-Agent Fitness AI Chatbot",
        description:
          "Engineered a multi-agent AI chatbot for a fitness application using Google Gemini LLM with 5 specialised agents (Chief Strategist, Health Knowledge Council, Plan Generator, User Profile, Mental Wellness) and ThreadPoolExecutor parallel processing, achieving 3x response time improvement. Developed full-stack solution with FastAPI backend and React.js frontend, implementing Pydantic models for structured diet plan (daily meals with calorie/macro breakdowns) and fitness plans (weekly exercises with sets/reps/rest periods) tailored to specific user profiles, goals, and preferences.",
        tech: ["Google Gemini", "Multi-Agent Systems", "FastAPI", "React.js", "ThreadPoolExecutor", "Pydantic"],
        impact: "3x response time improvement, personalized health planning",
        github: "https://github.com/mohanganesh3/PersonalizedFitnessDietPlanner",
      },
      {
        title: "Healthcare AI Applications Suite",
        description:
          "Contributed to multiple healthcare AI applications during internship: developed HealthAdvisorAI-POC using quantised LLaMA-3.2-1B with FastAPI and prompt engineering for clinical recommendations; built ClarityScan medical imaging platform with Google Genkit for X-ray/MRI/ultrasound diagnostics featuring confidence scoring and heatmap visualisations; created Health & Wellbeing AI Companion using LangChain multi-agent framework and Google Gemini for personalised BMI calculations, stress assessment, fitness planning, and mental wellness support. Implemented RESTful APIs, conversation memory management, and real-time processing capabilities across all three healthcare AI solutions.",
        tech: ["LLaMA-3.2-1B", "Google Genkit", "LangChain", "Medical Imaging", "RESTful APIs", "Real-time Processing"],
        impact: "Comprehensive healthcare AI suite with clinical-grade accuracy",
        github: [
          "https://github.com/mohanganesh3/HealthAdvisorAI-POC",
          "https://github.com/mohanganesh3/AI-in-Medical-Imaging",
          "https://github.com/mohanganesh3/health-wellbeing-ai-agent"
        ],
      },
    ],
    certificate: "https://drive.google.com/file/d/1uLqvL8xz0MdkTmFdlA2ke-9UZ7qyLSAY/view",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [projectFilter, setProjectFilter] = useState("All")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const projectCategories = ["All", "AI/ML", "ML"]
  const filteredProjects = projectFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === projectFilter)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-accent/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Portfolio
              </motion.span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-foreground hover:text-accent transition-colors duration-300 px-3 py-2 rounded-lg group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </div>
            
            {/* Mobile menu - Enhanced */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add mobile menu toggle logic here
                console.log('Mobile menu toggle')
              }}
            >
              <div className="w-6 h-0.5 bg-accent mb-1 transition-all"></div>
              <div className="w-6 h-0.5 bg-accent mb-1 transition-all"></div>
              <div className="w-6 h-0.5 bg-accent transition-all"></div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10"
          style={{ y }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >


            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                MOHAN GANESH
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl text-muted-foreground typing-animation"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, delay: 0.5 }}
              >
                AI/ML Engineer & Full-Stack Developer
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                B.Tech Computer Science (Honors) from IIIT SriCity | CGPA: 9.5/10
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow"
                onClick={() => scrollToSection("experience")}
              >
                View Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                onClick={() => {
                  // Download resume functionality
                  const resumeUrl = "/MOHAN_GANESH.pdf"; // Resume in public folder
                  const link = document.createElement('a');
                  link.href = resumeUrl;
                  link.download = 'Mohan_Ganesh_Resume.pdf';
                  link.click();
                }}
              >
                Download Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {[
                { icon: Github, href: "https://github.com/mohanganesh3", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/mohanganesh3", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mohanganesh3@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional experience developing AI/ML solutions
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                {/* Professional Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Card className="glass-effect hover:shadow-2xl transition-all duration-500 border-l-4 border-l-accent relative overflow-hidden bg-gradient-to-r from-card/95 to-card/90">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="pb-6 relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          {/* Job Title */}
                          <div className="flex items-center gap-4 mb-3">
                            <motion.div
                              className="p-3 bg-accent/10 rounded-xl border border-accent/20"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Briefcase className="h-7 w-7 text-accent" />
                            </motion.div>
                            <div>
                              <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                                {exp.title}
                              </CardTitle>
                              <div className="flex items-center gap-3 text-lg">
                                <span className="font-semibold text-accent">{exp.company}</span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground font-medium">{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <motion.p
                            className="text-muted-foreground leading-relaxed text-base lg:text-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {exp.description}
                          </motion.p>
                        </div>

                        {/* Certificate Button */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="self-start"
                        >
                          <Button 
                            variant="outline" 
                            size="lg" 
                            asChild
                            className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent shadow-md backdrop-blur-sm"
                          >
                            <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                              <Award className="h-5 w-5 mr-3" />
                              View Certificate
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 relative z-10">
                      {/* Key Contributions Section */}
                      <div className="space-y-6">
                        <motion.div
                          className="flex items-center gap-3 pb-3 border-b border-accent/20"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <Target className="h-6 w-6 text-accent" />
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                            Key Contributions & Projects
                          </h3>
                        </motion.div>

                        {/* Contributions Grid */}
                        <div className="grid gap-6">
                          {exp.keyContributions.map((contribution, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.02 }}
                              className="group/contribution"
                            >
                              <div className="bg-gradient-to-r from-card to-card/90 rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                                {/* Project Header */}
                                <div className="flex items-start gap-4 mb-4">
                                  <motion.div
                                    className="p-2 bg-accent/10 rounded-lg"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <Zap className="h-5 w-5 text-accent" />
                                  </motion.div>
                                  <div className="flex-1">
                                    <h4 className="text-lg lg:text-xl font-bold text-accent mb-2 group-hover/contribution:text-foreground transition-colors">
                                      {contribution.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                      {contribution.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                  <div className="flex flex-wrap gap-2">
                                    {contribution.tech.map((tech, techIndex) => (
                                      <motion.div
                                        key={techIndex}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                      >
                                        <Badge 
                                          variant="secondary" 
                                          className="text-xs bg-accent/10 text-accent hover:bg-accent/20 transition-colors border border-accent/20"
                                        >
                                          {tech}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                {/* Impact and GitHub */}
                                <div className="space-y-3">
                                  <motion.div
                                    className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                    <div className="text-sm">
                                      <span className="font-semibold text-green-700 dark:text-green-300">Impact: </span>
                                      <span className="text-green-600 dark:text-green-400">{contribution.impact}</span>
                                    </div>
                                  </motion.div>

                                  {/* GitHub Repository Link(s) */}
                                  {contribution.github && (
                                    <motion.div
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="space-y-2"
                                    >
                                      {Array.isArray(contribution.github) ? (
                                        // Multiple GitHub repositories
                                        <div className="grid grid-cols-1 gap-2">
                                          {contribution.github.map((githubUrl, githubIndex) => {
                                            const repoName = githubUrl.split('/').pop() || `Repository ${githubIndex + 1}`;
                                            return (
                                              <Button 
                                                key={githubIndex}
                                                variant="outline" 
                                                size="sm" 
                                                asChild
                                                className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent shadow-sm backdrop-blur-sm"
                                              >
                                                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                                  <Github className="h-4 w-4 mr-2" />
                                                  {repoName}
                                                  <ExternalLink className="h-3 w-3 ml-2" />
                                                </a>
                                              </Button>
                                            );
                                          })}
                                        </div>
                                      ) : (
                                        // Single GitHub repository
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          asChild
                                          className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent shadow-sm backdrop-blur-sm"
                                        >
                                          <a href={contribution.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            View Repository
                                            <ExternalLink className="h-3 w-3 ml-2" />
                                          </a>
                                        </Button>
                                      )}
                                    </motion.div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Sophisticated animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-secondary/3" />
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
            animate={{ 
              x: [0, 100, 0], 
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
            animate={{ 
              x: [0, -80, 0], 
              y: [0, -40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/15 rounded-full blur-lg"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileInView={{ scale: 1 }}
                initial={{ scale: 0.8 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Brain className="w-8 h-8 text-accent" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Personal Projects
              </h2>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-8 h-8 text-accent" />
              </motion.div>
            </motion.div>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Personal projects and applications
            </motion.p>

            {/* Project Filter */}
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {projectCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setProjectFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    projectFilter === category
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-card hover:bg-accent/10 text-muted-foreground hover:text-accent border border-accent/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="perspective-1000 group"
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    rotateY: 2,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="transform-style-3d h-full"
                >
                  <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 border border-accent/20 relative overflow-hidden group-hover:border-accent/40 bg-gradient-to-br from-card/95 to-card/90">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10 pb-4">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <CardTitle className="text-lg font-bold leading-tight flex items-start gap-2 group-hover:text-accent transition-colors duration-300">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="mt-0.5"
                          >
                            <Code className="w-4 h-4 text-accent flex-shrink-0" />
                          </motion.div>
                          <span className="flex-1">{project.title}</span>
                        </CardTitle>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="self-start"
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 relative z-10 pt-0">
                      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="text-xs bg-muted/50 hover:bg-accent/10 hover:border-accent/30 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2 border-t border-accent/10">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button 
                              size="sm" 
                              variant="outline" 
                              asChild 
                              className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3 mr-2" />
                                Code
                              </a>
                            </Button>
                          </motion.div>
                          {project.demo && (
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="flex-1"
                            >
                              <Button 
                                size="sm" 
                                asChild
                                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md"
                              >
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3 mr-2" />
                                  Demo
                                </a>
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/mohanganesh3" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30 relative">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Brain className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <Cpu className="w-8 h-8 text-accent" />
            </motion.div>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Comprehensive expertise across AI/ML, full-stack development, and modern technologies
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full glass-effect hover:shadow-2xl transition-all duration-500 border border-accent/20 relative overflow-hidden bg-gradient-to-br from-card/95 to-card/90 group-hover:border-accent/40">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-lg flex items-center gap-3 group-hover:text-accent transition-colors duration-300">
                        <motion.div
                          className="p-2 bg-accent/10 rounded-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {category === "Programming Languages" && <Code className="h-5 w-5 text-accent" />}
                          {category === "Generative AI" && <Brain className="h-5 w-5 text-accent" />}
                          {category === "AI Engineering" && <Cpu className="h-5 w-5 text-accent" />}
                          {category === "Computer Vision & NLP" && <Eye className="h-5 w-5 text-accent" />}
                          {category === "Full-Stack Development" && <Code className="h-5 w-5 text-accent" />}
                          {category === "DevOps & Databases" && <Database className="h-5 w-5 text-accent" />}
                        </motion.div>
                        <span className="font-bold">{category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-accent/20 hover:border-accent shadow-sm"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect
              with fellow tech enthusiasts.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="glass-effect hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get In Touch</CardTitle>
                    <CardDescription>Ready to bring innovative AI solutions to life? Let's talk!</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <a href="mailto:mohanganesh3@gmail.com" className="hover:text-accent transition-colors">
                        mohanganesh3@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-accent" />
                      <span>+91-6302375782</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-accent" />
                      <span>IIIT SriCity, India</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/mohanganesh3",
                      label: "GitHub",
                      color: "hover:bg-gray-800",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/mohanganesh3",
                      label: "LinkedIn",
                      color: "hover:bg-blue-600",
                    },
                    { icon: Mail, href: "mailto:mohanganesh3@gmail.com", label: "Email", color: "hover:bg-red-600" },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 p-4 rounded-lg bg-card hover:text-white transition-all duration-300 text-center ${color}`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2" />
                      <span className="text-sm font-medium">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect hover:shadow-2xl transition-all duration-500 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { label: "CGPA", value: "9.5/10", icon: GraduationCap },
                      { label: "Projects Completed", value: "15+", icon: Code },
                      { label: "Technologies Mastered", value: "25+", icon: Cpu },
                      { label: "AI Models Deployed", value: "10+", icon: Brain },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <stat.icon className="h-5 w-5 text-accent" />
                          <span className="font-medium">{stat.label}</span>
                        </div>
                        <span className="text-2xl font-bold text-accent">{stat.value}</span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2025 Mohan Ganesh. Crafted with passion and precision.
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>Built with</span>
              <motion.span
                className="text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                ❤️
              </motion.span>
              <span>using Next.js & Framer Motion</span>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

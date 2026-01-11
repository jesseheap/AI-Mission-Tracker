
import { Task } from './types';

export const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    week: "Week 1",
    title: "Resolution Tracker",
    description: "Vibe code an AI-powered system to track your goals and keep you accountable.",
    icon: "Target",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Create a personal resolution tracker using AI. Design a system that helps you set, monitor, and achieve your goals throughout the year. Use natural language processing to log updates and get intelligent feedback on your progress.",
    tips: [
      "Start with 3-5 specific, measurable resolutions",
      "Use AI to categorize and prioritize goals",
      "Set up automated check-in prompts",
      "Include sentiment analysis on your progress updates"
    ]
  },
  {
    id: 2,
    week: "Week 2",
    title: "Model Mapping",
    description: "Create your personal AI model guide - know which tools work best for what.",
    icon: "Compass",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Develop a comprehensive map of AI models and their optimal use cases. Test different models with the same prompts, document their strengths and weaknesses, and create a personal reference guide for when to use each tool.",
    tips: [
      "Test at least 5 different AI models",
      "Use consistent prompts across all models",
      "Document response time, accuracy, and style",
      "Create a decision tree for model selection"
    ]
  },
  {
    id: 3,
    week: "Week 3",
    title: "Deep Research",
    description: "Master the art of AI-assisted deep research on any topic.",
    icon: "Flask",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Pick a topic you're curious about and conduct thorough research using AI tools. Learn to verify sources, cross-reference information, and synthesize findings into a comprehensive report or presentation.",
    tips: [
      "Choose a topic with multiple perspectives",
      "Use AI to find primary sources",
      "Cross-reference AI outputs with authoritative sources",
      "Create a structured research methodology"
    ]
  },
  {
    id: 4,
    week: "Week 4",
    title: "Data Analyst",
    description: "Transform raw data into insights using AI-powered analysis.",
    icon: "Chart",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Find or create a dataset relevant to your interests and use AI tools to analyze it. Generate visualizations, identify patterns, and create a data story that communicates your findings effectively.",
    tips: [
      "Start with a question you want to answer",
      "Clean your data before analysis",
      "Use multiple visualization types",
      "Document your analytical process"
    ]
  },
  {
    id: 5,
    week: "Week 5",
    title: "Visual Reasoning",
    description: "Explore multimodal AI - analyze and create with images.",
    icon: "Eye",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Work with AI vision capabilities to analyze images, extract information, and create visual content. Build a project that combines text and image understanding.",
    tips: [
      "Test image analysis with different types of visuals",
      "Combine vision AI with text generation",
      "Explore image generation and editing",
      "Document accuracy and limitations"
    ]
  },
  {
    id: 6,
    week: "Week 6",
    title: "Information Pipelines",
    description: "Build automated flows to gather, process, and deliver information.",
    icon: "Refresh",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Design and implement an information pipeline that automatically collects data from multiple sources, processes it with AI, and delivers insights in a useful format. Think of it as your personal AI news/research assistant.",
    tips: [
      "Identify your information sources",
      "Define filtering and prioritization rules",
      "Set up summarization workflows",
      "Create a delivery schedule that works for you"
    ]
  },
  {
    id: 7,
    week: "Week 7",
    title: "Automation: Distribution",
    description: "Automate content creation and distribution across platforms.",
    icon: "Send",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Create an automated system that helps you create, adapt, and distribute content across multiple platforms. Learn to repurpose content efficiently while maintaining quality and authenticity.",
    tips: [
      "Map your content distribution channels",
      "Create templates for different platforms",
      "Maintain your authentic voice",
      "Set up scheduling and cross-posting"
    ]
  },
  {
    id: 8,
    week: "Week 8",
    title: "Automation: Productivity",
    description: "Supercharge your daily workflow with AI automation.",
    icon: "Zap",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Identify repetitive tasks in your work or personal life and create AI-powered automations to handle them. Focus on workflows that save significant time and reduce cognitive load.",
    tips: [
      "Audit your tasks for automation potential",
      "Start with high-frequency, low-complexity tasks",
      "Build error handling into your automations",
      "Measure time saved"
    ]
  },
  {
    id: 9,
    week: "Week 9",
    title: "Context Engineering",
    description: "Master the art of prompting and context design for better AI outputs.",
    icon: "Brain",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Deep dive into advanced prompting techniques. Learn to structure context, create system prompts, use few-shot examples, and design prompts that consistently produce excellent results.",
    tips: [
      "Study prompt engineering frameworks",
      "Create a personal prompt library",
      "Test systematic variations",
      "Document what works and why"
    ]
  },
  {
    id: 10,
    week: "Week 10",
    title: "Build an AI App",
    description: "Bring it all together - build a complete AI-powered application.",
    icon: "Rocket",
    completed: false,
    completedDate: null,
    notes: "",
    briefing: "Apply everything you've learned to build a functional AI-powered application. This could be a tool for yourself, your community, or the world. Focus on solving a real problem.",
    tips: [
      "Start with a specific problem to solve",
      "Keep the MVP scope small",
      "Use no-code/low-code tools if needed",
      "Get feedback from real users"
    ]
  }
];

export const STORAGE_KEY = 'ai_mastery_tracker_state_v2';

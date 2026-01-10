
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
    notes: ""
  },
  {
    id: 2,
    week: "Week 2",
    title: "Model Mapping",
    description: "Create your personal AI model guide - know which tools work best for what.",
    icon: "Compass",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 3,
    week: "Week 3",
    title: "Deep Research",
    description: "Master the art of AI-assisted deep research on any topic.",
    icon: "Flask",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 4,
    week: "Week 4",
    title: "Data Analyst",
    description: "Transform raw data into insights using AI-powered analysis.",
    icon: "Chart",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 5,
    week: "Week 5",
    title: "Visual Reasoning",
    description: "Explore multimodal AI - analyze and create with images.",
    icon: "Eye",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 6,
    week: "Week 6",
    title: "Information Pipelines",
    description: "Build automated flows to gather, process, and deliver information.",
    icon: "Refresh",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 7,
    week: "Week 7",
    title: "Automation: Distribution",
    description: "Automate content creation and distribution across platforms.",
    icon: "Send",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 8,
    week: "Week 8",
    title: "Automation: Productivity",
    description: "Supercharge your daily workflow with AI automation.",
    icon: "Zap",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 9,
    week: "Week 9",
    title: "Context Engineering",
    description: "Master the art of prompting and context design for better AI outputs.",
    icon: "Brain",
    completed: false,
    completedDate: null,
    notes: ""
  },
  {
    id: 10,
    week: "Week 10",
    title: "Build an AI App",
    description: "Bring it all together - build a complete AI-powered application.",
    icon: "Rocket",
    completed: false,
    completedDate: null,
    notes: ""
  }
];

export const STORAGE_KEY = 'ai_mastery_tracker_state';

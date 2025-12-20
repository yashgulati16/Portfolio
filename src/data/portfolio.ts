export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

export interface Certification {
  title: string
  issuer: string
  link?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export const projects: Project[] = [
  {
    title: "Mindful Metrics: Modeling Attention Span via App Usage",
    description: "Built an ML pipeline to analyze app usage behaviors and model attention span using RandomForest, Gradient Boosting, SVR, and Ridge Regression; derived insights into focus patterns and digital engagement.",
    tech: ["Python", "RandomForest", "Gradient Boosting", "SVR", "Ridge Regression"],
    link: "#"
  },
  {
    title: "Automated Legal Assistant - Coal Mines Act",
    description: "Developed an intelligent chatbot aimed at assisting coal mine workers by parsing and responding to legal queries based on Indian mining Acts. The application used a custom-trained NLP model with PyTorch and a Tkinter GUI.",
    tech: ["Python", "PyTorch", "NLP", "Tkinter"],
    link: "#"
  },
  {
    title: "Movie Recommender with TMDb API",
    description: "Built a movie similarity engine using cosine similarity on genre vectors with scikit-learn and Pandas, and integrated TMDb API to deliver real-time top-10 personalized suggestions.",
    tech: ["Python", "scikit-learn", "Pandas", "TMDb API"],
    link: "#"
  }
]

export const certifications: Certification[] = [
  { title: "Learn C++ Programming - Beginner to Advance", issuer: "Abdul Bari (Udemy)" },
  { title: "Mastering Data Structures and Algorithms with C/C++", issuer: "Abdul Bari (Udemy)" },
  { title: "Python for Data Science, AI and Development", issuer: "IBM (Coursera)" },
  { title: "Data Science Methodology", issuer: "IBM (Coursera)" },
  { title: "Tools for Data Science", issuer: "IBM (Coursera)" }
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "DSA", "OOP"]
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "scikit-learn", "Matplotlib", "NLTK", "EDA", "ML Models"]
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "YOLO", "Object Detection", "Image Processing"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Jupyter Notebook", "Google Colab", "Linux/Ubuntu", "Git"]
  }
]

export const personalInfo = {
  name: "Yash Gulati",
  phone: "+91 9717796353",
  email: "ygulati84@gmail.com",
  linkedin: "https://linkedin.com/in/yashgulati14",
  youtube: "https://youtube.com/@yashgulati14",
  title: "Data Science & Computer Vision Enthusiast | ML Developer",
  subtitle: "Final-year B.Tech CSE student passionate about solving problems through data-driven approaches and building intelligent real-world systems."
}

export const summary = {
  title: "Professional Summary",
  content: "Final-year B.Tech CSE student (78% CGPA) with expertise in Data Science, ML, and Computer Vision. Proficient in Python, C++, NumPy, Pandas, and scikit-learn. Recently completed R&D internship at Indowings on computer vision and autonomous systems. Built 3+ production ML projects: attention span modeling, NLP chatbots, and recommendation engines. Competitive coding: 1st place Code Hustle, 2nd place Code Blaze, 600+ DSA problems solved. Completed 5 professional certifications (Udemy, Coursera). Skilled in Linux/Ubuntu, Git, and end-to-end ML deployment. Passionate about data-driven solutions to real-world problems."
}

export const education = [
  {
    course: "B.Tech. Computer Science Engineering",
    institution: "Lloyd Institute of Engineering and Technology",
    university: "AKTU",
    year: "Till 2026",
    percentage: "78% (Current)"
  },
  {
    course: "12th Grade",
    institution: "Bhatnagar International School",
    university: "CBSE",
    year: "2022",
    percentage: "80%"
  },
  {
    course: "10th Grade",
    institution: "Bhatnagar International School",
    university: "CBSE",
    year: "2020",
    percentage: "85%"
  }
]

export const experience = {
  position: "Research & Development Intern",
  company: "Indowings",
  duration: "Aug 2025 – Sept 2025",
  responsibilities: [
    "Applied machine learning and computer vision techniques on drone image data, developing and testing models in a Linux/Ubuntu environment.",
    "Gained hands-on experience in object detection and image data processing pipelines, learning how visual data is interpreted by CV models.",
    "Collaborated with the R&D team to translate research concepts into functional prototypes for autonomous drones."
  ]
}

export const competitive = {
  achievements: [
    { medal: "🥇", title: "First Place", description: "Code Hustle (24-hour coding marathon)" },
    { medal: "🥈", title: "Second Place", description: "Code Blaze" },
    { medal: "⭐", title: "600+ DSA problems", description: "solved on LeetCode" }
  ]
}

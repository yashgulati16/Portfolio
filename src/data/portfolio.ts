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
    link: "https://github.com/yashgulati16/Mindful-Metrics-Analyzing-Attention-Span-through-App-Usage.git"
  },
  {
    title: "Automated Legal Assistant - Coal Mines Act",
    description: "Developed an intelligent chatbot aimed at assisting coal mine workers by parsing and responding to legal queries based on Indian mining Acts. The application used a custom-trained NLP model with PyTorch and a Tkinter GUI.",
    tech: ["Python", "PyTorch", "NLP", "Tkinter"],
    link: "https://github.com/yashgulati16/Automated-Legal-Assistant"
  },
  {
    title: "Movie Recommender with TMDb API",
    description: "Built a movie similarity engine using cosine similarity on genre vectors with scikit-learn and Pandas, and integrated TMDb API to deliver real-time top-10 personalized suggestions.",
    tech: ["Python", "scikit-learn", "Pandas", "TMDb API"],
    link: "https://github.com/yashgulati16/MovieRecommendation.git"
  }
]

export const certifications: Certification[] = [
  {
    title: "Learn C++ Programming - Beginner to Advance",
    issuer: "Abdul Bari (Udemy)",
    link: "https://www.udemy.com/certificate/UC-3b250103-8959-44a4-99a6-0bf32f00a63f/"
  },
  {
    title: "Mastering Data Structures and Algorithms with C/C++",
    issuer: "Abdul Bari (Udemy)",
    link: "https://www.udemy.com/certificate/UC-fc20f3e2-29d6-4e71-b5e2-a05b85a0c3d4/"
  },
  {
    title: "Python for Data Science, AI and Development",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/AX5SD7J5WL7X?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/T4EQ722XNJAA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Tools for Data Science",
    issuer: "IBM (Coursera)",
    link: "https://www.coursera.org/account/accomplishments/verify/BG8R3SZMJLJ7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  }
]


export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "DSA", "OOP", "DBMS", "Problem Solving"]
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "NLTK", "EDA", "ML Models", "ANN", "CNN", "DNN"]
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "Object Detection", "YOLO", "Image Processing", "Visual Odometry", "Pillow", "Video Processing"]
  },
  {
    title: "Web Development",
    skills: ["React", "Git", "HTML", "CSS", "JavaScript", ".NET", "SQL Server"]
  }
]

export const personalInfo = {
  name: "Yash Gulati",
  phone: "+91 9717796353",
  email: "ygulati84@gmail.com",
  linkedin: "https://linkedin.com/in/yashgulati14",
  youtube: "https://youtube.com/@yashgulati14",
  title: "Data Science & Computer Vision Enthusiast | Web Developer",
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

export const experiences = [
  {
    position: "Research & Development Intern",
    company: "Indowings",
    duration: "August 2025 – September 2025",
    responsibilities: [
      "Applied machine learning and computer vision techniques to drone image datasets, developing and evaluating models in a Linux (Ubuntu) environment.",
      "Built hands-on expertise in object detection and image-processing pipelines, gaining insight into how computer vision models interpret visual data.",
      "Collaborated with the R&D team to convert research ideas into functional prototypes for autonomous drone systems."
    ]
  },
  {
    position: "Software Development Engineer",
    company: "CG Infinity",
    duration: "October 2025 – Present",
    responsibilities: [
      "Developing full-stack web applications using React for the frontend, .NET for backend services, and SQL Server (SSMS) for database management.",
      "Analyzing user and business requirements to design and deliver precise, scalable, and reliable software solutions.",
      "Solving complex technical problems through debugging, optimization, and continuous improvement of application performance and usability."
    ]
  }
]

export const competitive = {
  achievements: [
    {
      medal: "🥇",
      title: "First Place",
      description: "Code Hustle (24-hour coding marathon)",
      link: "https://www.linkedin.com/posts/yashgulati14_codehustle-certificate-activity-7358021957818179585-tJYa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqbzsBzt6SSGAqlC8FyU7IvgtWlfP5lFo"
    },
    {
      medal: "🥈",
      title: "Second Place",
      description: "Code Blaze",
      link: "https://www.linkedin.com/posts/yashgulati14_codeblaze-certificate-activity-7358019318489468932-OS4-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJqbzsBzt6SSGAqlC8FyU7IvgtWlfP5lFo"
    },
    {
      medal: "⭐",
      title: "600+ DSA problems",
      description: "solved on LeetCode",
      link: "https://leetcode.com/u/yashgulati14/"
    },
  ]
};

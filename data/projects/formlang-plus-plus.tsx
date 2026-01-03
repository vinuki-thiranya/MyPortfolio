import { ProjectData } from '../types'

export const formlangPlusPlusProject: ProjectData = {
  id: 1,
  slug: "formlang-plus-plus",
  title: "FORMLANG++",
  subtitle: "DOMAIN-SPECIFIC LANGUAGE FOR HTML FORM GENERATION",
  description: "Developed a domain-specific language (DSL) called FormLang++ to simplify and automate creating dynamic, validated HTML forms using a declarative, human-readable syntax.",
  fullDescription: "Built using C, Flex (Lex), and Bison (Yacc) as part of an advanced programming paradigms course, this project compiles .form files into clean, standards-compliant HTML5 with built-in validation and error handling.",
  detailedDescription: "This project enhanced my expertise in compiler design concepts such as lexical analysis, parsing, abstract syntax trees, and code generation, while improving my proficiency in C programming and bridging backend logic with frontend development.",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  images: [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  technologies: ["C", "Flex (Lex)", "Bison (Yacc)", "Parsing", "Compiler Design"],
  skills: ["Lexical Analysis", "Parsing", "Abstract Syntax Trees", "Code Generation", "Semantic Validation", "Error Handling"],
  keyFeatures: [
    "Declarative syntax for form elements like inputs, selects, radios, and textareas",
    "Semantic validation for required fields, input types, and layout rules", 
    "Robust error reporting for syntax and semantic issues",
    "Automatic generation of clean, styled, and accessible HTML5 code",
    "Extensible design allowing easy addition of new form controls and validation rules"
  ],
  period: "Apr 2025 - Jun 2025",
  liveUrl: "https://github.com/it23425590/Formlang-DSL",
  githubUrl: "https://github.com/it23425590/Formlang-DSL",
  timeline: "3 months",
  role: "Compiler Designer & Developer", 
  teamSize: "Individual Project",
  results: [
    { title: "Compiler Design", icon: "code" },
    { title: "Language Processing", icon: "cpu" },
    { title: "Code Generation", icon: "file" }
  ],
  caseStudy: {
    overview: "The goal of FORMLANG++ was to design and implement a small yet expressive language that allows developers to define web forms using a structured, readable syntax. The compiler processes .form files and generates equivalent HTML5 output, ensuring correctness and consistency through syntax and semantic checks.",
    pipeline: [
      { step: "1. Lexical Analysis", description: "Tokenizing input source files" },
      { step: "2. Parsing", description: "Validating grammar and structure" },
      { step: "3. Abstract Syntax Tree Construction", description: "Representing form elements logically" },
      { step: "4. Semantic Validation", description: "Detecting logical and structural errors" },
      { step: "5. Code Generation", description: "Producing clean HTML5 output" }
    ],
    problems: [
      "Repetitive and verbose markup",
      "Inconsistent validation logic", 
      "Higher risk of syntax and structural errors",
      "Poor separation between form logic and presentation"
    ],
    problemsIntro: "Traditional HTML form creation often leads to:",
    problemsMotivation: "FORMLANG++ addresses these challenges by providing a higher-level abstraction that focuses on what the form should contain, rather than how it should be implemented in HTML.",
    solutions: {
      problem: [
        "- Verbose and repetitive HTML",
        "- Syntax errors in HTML", 
        "- Poor validation handling",
        "- Hard-to-maintain forms",
        "- Weak compiler feedback"
      ],
      solution: [
        "- High-level DSL syntax for form definitions",
        "- Grammar-based parsing using Bison",
        "- Built-in semantic validation rules", 
        "- Abstract Syntax Tree representation",
        "- Detailed error handling and messages"
      ],
      impact: [
        "- Faster form creation",
        "- Early error detection",
        "- More reliable output",
        "- Clean, maintainable structure", 
        "- Improved developer experience"
      ]
    },
    technicalImplementation: {
      description: "FORMLANG++ was implemented entirely in **C**, using **Flex** for lexical analysis and **Bison** for syntax parsing. The lexer identifies tokens such as form fields, attributes, and validation rules, while the parser enforces grammar constraints and constructs an Abstract Syntax Tree (AST).",
      semanticAnalysis: [
        "Required attributes are present",
        "Field definitions are logically valid", 
        "Duplicate or conflicting rules are detected"
      ],
      learningOutcomes: [
        "Compiler architecture",
        "Language processing pipelines",
        "Memory management in C",
        "Bridging backend logic with frontend output"
      ]
    },
    learningOutcomes: {
      areas: [
        "- Compiler Design",
        "- Language Processing", 
        "- Code Generation",
        "- C Programming",
        "- Problem Solving"
      ],
      outcomes: [
        "- Strong understanding of lexer-parser pipelines",
        "- Hands-on DSL design experience",
        "- Reliable HTML output from high-level input",
        "- Improved memory and structure management",
        "- Systematic debugging and validation"
      ]
    },
    conclusion: "This project highlighted the power of domain-specific languages in simplifying repetitive development tasks. By designing FORMLANG++, I gained deep insight into compiler construction, language design trade-offs, and low-level system programming. The project reinforced that well-designed abstractions can significantly improve reliability, maintainability, and developer productivity. Most importantly, FORMLANG++ shows how foundational computer science concepts—such as parsing, ASTs, and semantic analysis—can directly support modern web development workflows."
  },
  hasVideo: true,
  videoUrl: "https://www.youtube.com/embed/TE871Ws4tmw?autoplay=1&mute=1"
}
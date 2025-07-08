export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  featured: boolean;
  problem: string;
  solution: string;
  outcome: string;
  challenges: string;
  process: {
    dataCollection: string;
    analysis: string;
    modeling: string;
    visualization: string;
  };
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  
  
  
  
  {
    id: 'project-engineer',
    title: 'Project Engineer',
    subtitle: 'Managing and executing engineering projects',
    description: 'A project where I acted as a Project Engineer, managing timelines, resources, and deliverables.',
    technologies: ['AutoCAD', 'MS Project', 'Excel'],
    category: 'Engineering',
    image: `${import.meta.env.BASE_URL}project_engineer.jpg`,
    featured: true,
    problem: 'The company needed a dedicated engineer to oversee a new project, ensuring it stayed on schedule and within budget.',
    solution: 'I took on the role of Project Engineer, developing a detailed project plan, coordinating with cross-functional teams, and tracking progress against key milestones.',
    outcome: 'The project was delivered on time and 10% under budget, meeting all quality standards.',
    challenges: 'Managing competing priorities and resource constraints required careful planning and communication.',
    process: {
      dataCollection: 'Gathered project requirements from stakeholders and defined project scope.',
      analysis: 'Analyzed project risks and developed mitigation strategies.',
      modeling: 'Created a detailed project schedule using MS Project.',
      visualization: 'Developed regular progress reports and dashboards to keep stakeholders informed.'
    },
    impact: 'Successful project completion led to a 15% increase in production efficiency.',
    githubUrl: 'https://github.com/BRSTKL'
  },
  {
    id: 'production-engineering',
    title: 'Production Engineering',
    subtitle: 'Optimizing manufacturing processes for efficiency and quality',
    description: 'A project focused on improving production lines, reducing waste, and enhancing product quality through engineering principles.',
    technologies: ['Lean Manufacturing', 'Six Sigma', 'Process Improvement', 'CAD'],
    category: 'Engineering',
    image: `${import.meta.env.BASE_URL}production_engineering.jpg`, // Placeholder image
    featured: true,
    problem: 'Manufacturing processes were inefficient, leading to high costs and inconsistent product quality.',
    solution: 'Implemented lean manufacturing principles and process optimization techniques to streamline production workflows and reduce defects.',
    outcome: 'Achieved a 20% reduction in production costs and a 15% improvement in product quality.',
    challenges: 'Resistance to change from existing staff and integrating new technologies into legacy systems.',
    process: {
      dataCollection: 'Collected production data, including cycle times, defect rates, and resource utilization.',
      analysis: 'Performed root cause analysis of inefficiencies and identified areas for improvement.',
      modeling: 'Developed process flow diagrams and simulations to test proposed changes.',
      visualization: 'Created dashboards to monitor key performance indicators and track progress.'
    },
    impact: 'Significantly improved operational efficiency and product reliability, leading to increased customer satisfaction.',
    githubUrl: 'https://github.com/BRSTKL' // Placeholder
  }
];

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const skills: Skill[] = [
  { name: 'MATLAB', level: 90, icon: `${import.meta.env.BASE_URL}skills_logo/matlab.png` },
  { name: 'AutoCAD', level: 80, icon: `${import.meta.env.BASE_URL}skills_logo/autocad.png` },
  
  { name: 'Power BI', level: 85, icon: `${import.meta.env.BASE_URL}skills_logo/power_bi.png` },
  { name: 'Excel', level: 85, icon: `${import.meta.env.BASE_URL}skills_logo/excel.png` },
  { name: 'SQL', level: 85, icon: `${import.meta.env.BASE_URL}skills_logo/sql.png` },
  { name: 'Python', level: 90, icon: `${import.meta.env.BASE_URL}skills_logo/python.png` },
  { name: 'SAP Data Cloud', level: 80, icon: `${import.meta.env.BASE_URL}skills_logo/sap.png` },
  { name: 'Turkish', level: 100, icon: 'Globe' },
  { name: 'English', level: 95, icon: 'Globe' },
  { name: 'German', level: 65, icon: 'Globe' }
];

export interface ProductionProject {
  id: string;
  title: string;
  description: string;
  images: string[];
}

export const productionProjects: ProductionProject[] = [
  {
    id: 'pressured-vessels',
    title: 'Pressured Vessels',
    description: 'Involved in the design and analysis of pressurized vessels, ensuring compliance with safety standards and operational requirements. This included material selection, stress analysis, and adherence to ASME codes.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Pressured Vessels/9F1B5C80-E8AA-4B35-96BC-0106C16FCCA5.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Pressured Vessels/IMG_3642.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Pressured Vessels/IMG_3558.MOV`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Pressured Vessels/IMG_3591.MOV`
    ]
  },
  {
    id: 'filters',
    title: 'Filters',
    description: 'Participated in the selection and integration of various filtration systems for industrial applications, focusing on efficiency and material compatibility. This involved understanding fluid dynamics and particle separation techniques.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/18.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/IMG_3133.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/IMG_6258.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/IMG_6259.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/IMG_6260.JPG`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Filters/IMG_6261.JPG`
    ]
  },
  {
    id: 'conveyor-systems',
    title: 'Conveyor Systems',
    description: 'Contributed to the planning and implementation of conveyor systems for material handling, optimizing flow and reducing manual labor. This included layout design, capacity calculations, and motor sizing.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Conveyor Systems/2-1.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Conveyor Systems/20160114_110252.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Conveyor Systems/IMG_0481.jpg`
    ]
  },
  {
    id: 'bunker',
    title: 'Bunker',
    description: 'Assisted in the structural design and capacity calculations for industrial bunkers, ensuring safe storage of bulk materials. This involved civil engineering principles and material properties.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Bunker/2-2.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Project Engineering/Bunker/20160323_094250.jpg`
    ]
  },
  {
    id: 'quality-control-procedures',
    title: 'Quality Control Procedures',
    description: 'Implemented quality control procedures and conducted process analysis to improve production efficiency.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4641.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4859.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4860.jpg`
    ]
  },
  {
    id: 'production-planning-management',
    title: 'Production Planning and Management',
    description: 'Gained practical experience in production planning and management by working directly with the production team.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4637.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4640.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4851.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4853.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4860.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4861.jpg`
    ]
  },
  {
    id: 'energy-safety-compliance',
    title: 'Energy Efficiency and Occupational Safety Compliance',
    description: 'Ensured that all processes were fully compliant with energy efficiency and occupational safety standards.',
    images: [
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4636.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4638.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4642.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4644.jpg`,
      `${import.meta.env.BASE_URL}portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4657.jpg`
    ]
  }
];
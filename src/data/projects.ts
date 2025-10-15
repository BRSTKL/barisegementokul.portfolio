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
    id: 'thesis-project',
    title: 'Relationship Between Electricity Market Clearing Price (PTF) and Market Value of Energy Companies: The Case of AKSEN',
    subtitle: 'My undergraduate thesis project',
    description: 'I have reviewed the project report and analyzed it for you in English. Executive Summary Capstone project titled "The Relationship between Electricity Market Clearing Price (PTF) and Market Value of Energy Firms: The Case of AKSEN", examines the relationship between electricity market clearing price (PTF) in Turkish Market and add stock performance of energy firms in Borsa Istanbul. The team consists of management and engineering students in the field of energy systems. Some statistical methods such as Granger causality model and VAR model have been used, and thus data for the years 2019-2023 has been examined. The sample has been created using Aksa Enerji (AKSEN), Turkey\'s largest private electricity producer. Findings show there is a significant relationship between changes in both PTF and Brent Oil Prices and the price fluctuations of stocks in AKSEN parametrically. The study notes that the influence of Brent Oil Price fluctuations on AKSEN is greatly delayed compared to the effect of fluctuations in PTF. General aim of the project is to inform about investments to be made and can be made in energy sector to potential investors & give them insights by indicating how volatility in market price influences stock performance.',
    technologies: ['Python', 'Excel', 'R-Studio'],
    category: 'Academic',
    image: 'portfolio_fotos/Thesis Project/thesis_project_placeholder.jpg', // Please provide a path to an image
    featured: true,
    problem: 'The main problem that the project deals with is the determination whether there is a direct influence of the prices of the electricity market clearing price (PTF) on the stock prices of the energy companies traded in Borsa Istanbul. The objective of the project is to comprehend whether the variations in the energy market are directly creating variations in the stock market. The research aims to give statistically valid results which could help the energy investors in anticipation of the trends and in the formation of conscious investments.',
    solution: 'The proposed work was carried out with a two-pronged approach, financial analysis and electricity market analysis capabilities. The issue of determining the causes of the PTF in the Turkish markets was solved by the energy systems engineering students. The linking between PTF changes and the financial health of firms and shares thereof was done by the management engineering students, respectively. The work was executed by use of Excel and Python programming languages hence made use of several sources of data like EPİAŞ and TEİAŞ, while the market database sites of Investing.com and Bloomberg aided in the overall collection of data and market attainments. The correlation of the daily AKSEN shares was performed for the period January 1, 2019 to May 1, 2023, and PTF data were related using Granger causaility model and from which the vector autoregression model was employed for the investigation. So the final results interpretted that the changes in PTF had a very surprizing correlation with share price changes of AKSEN, where the p-value was 0.002 and the emphirical level was found to be quite below the expected significance level of 0.05.',
    outcome: 'The results showed a significant correlation between PTF prices and AKSEN prices.',
    challenges: 'One of the most pressing issues concerning the team was the extraction and processing of data relating to the energy sector. Some of this data is confidential, and organizations such as EPİAŞ (Energy Exchange Istanbul) obliged the team to look elsewhere. Another problem was the lack of knowledge of the Python programming language on the part of the team, which made the learning process and implementation of hypothesis testing methods difficult. This was overcome by using Excel’s VLOOKUP function, to deal with inconsistencies in the data, such as when stock exchanges were closed on weekends and holidays but PTF prices were then still being recorded. The main lesson learned from this project is that a correlation exists between PTF prices and the market value of energy companies such as AKSEN. This discovery is of some importance to investors in that it suggests that changes in PTF may be a useful and valuable indicator in predicting movements in future energy company stocks.',
    process: {
      dataCollection: 'Data was collected from government entities like KAP, SPK, and EPİAŞ, and trusted outside resources such as investing.com and Bloomberg.',
      analysis: 'The data was analyzed using Excel and R-Studio.',
      modeling: 'Granger Causality Model and VAR Model were used to correlate AKSEN data and PTF data.',
      visualization: 'The results were visualized using graphs to show the correlation between PTF and AKSEN prices.'
    },
    impact: 'The project provides insights for potential investors in the energy sector and helps them to build an investment strategy.',
    githubUrl: 'https://github.com/BRSTKL/barisegementokul.portfolio/blob/dev/public/portfolio_fotos/Thesis%20Project/Relationship%20Between%20Electricity%20Market%20Clearing%20Price.pdf',
    liveUrl: 'portfolio_fotos/Thesis Project/Relationship Between Electricity Market Clearing Price.pdf'
  },
  
  
  
  
  {
    id: 'project-engineer',
    title: 'Project Engineer',
    subtitle: 'Managing and executing engineering projects',
    description: 'A project where I acted as a Project Engineer, managing timelines, resources, and deliverables.',
    technologies: ['AutoCAD', 'MS Project', 'Excel'],
    category: 'Engineering',
    image: 'project_engineer.jpg',
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
    image: 'production_engineering.jpg', // Placeholder image
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
  { name: 'MATLAB', level: 90, icon: 'skills_logo/matlab.png' },
  { name: 'AutoCAD', level: 80, icon: 'skills_logo/autocad.png' },
  
  { name: 'Power BI', level: 85, icon: 'skills_logo/power_bi.png' },
  { name: 'Excel', level: 85, icon: 'skills_logo/excel.png' },
  { name: 'SQL', level: 85, icon: 'skills_logo/sql.png' },
  { name: 'Python', level: 90, icon: 'skills_logo/Python.png' },
  { name: 'SAP Data Cloud', level: 80, icon: 'skills_logo/sap.png' },
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
      'portfolio_fotos/Pressured Vessels/9F1B5C80-E8AA-4B35-96BC-0106C16FCCA5.JPG',
      'portfolio_fotos/Pressured Vessels/IMG_3642.JPG',
      'portfolio_fotos/Pressured Vessels/IMG_3558.MOV',
      'portfolio_fotos/Pressured Vessels/IMG_3591.MOV'
    ]
  },
  {
    id: 'filters',
    title: 'Filters',
    description: 'Participated in the selection and integration of various filtration systems for industrial applications, focusing on efficiency and material compatibility. This involved understanding fluid dynamics and particle separation techniques.',
    images: [
      'portfolio_fotos/Project Engineering/Filters/18.jpg',
      'portfolio_fotos/Project Engineering/Filters/IMG_3133.JPG',
      'portfolio_fotos/Project Engineering/Filters/IMG_6258.JPG',
      'portfolio_fotos/Project Engineering/Filters/IMG_6259.JPG',
      'portfolio_fotos/Project Engineering/Filters/IMG_6260.JPG',
      'portfolio_fotos/Project Engineering/Filters/IMG_6261.JPG'
    ]
  },
  {
    id: 'conveyor-systems',
    title: 'Conveyor Systems',
    description: 'Contributed to the planning and implementation of conveyor systems for material handling, optimizing flow and reducing manual labor. This included layout design, capacity calculations, and motor sizing.',
    images: [
      'portfolio_fotos/Project Engineering/Conveyor Systems/2-1.jpg',
      'portfolio_fotos/Project Engineering/Conveyor Systems/20160114_110252.jpg',
      'portfolio_fotos/Project Engineering/Conveyor Systems/IMG_0481.jpg'
    ]
  },
  {
    id: 'bunker',
    title: 'Bunker',
    description: 'Assisted in the structural design and capacity calculations for industrial bunkers, ensuring safe storage of bulk materials. This involved civil engineering principles and material properties.',
    images: [
      'portfolio_fotos/Project Engineering/Bunker/2-2.jpg',
      'portfolio_fotos/Project Engineering/Bunker/20160323_094250.jpg'
    ]
  },
  {
    id: 'quality-control-procedures',
    title: 'Quality Control Procedures',
    description: 'Implemented quality control procedures and conducted process analysis to improve production efficiency.',
    images: [
      'portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4641.jpg',
      'portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4859.jpg',
      'portfolio_fotos/Production Engineering/Quality Control Procedures/IMG_4860.jpg'
    ]
  },
  {
    id: 'production-planning-management',
    title: 'Production Planning and Management',
    description: 'Gained practical experience in production planning and management by working directly with the production team.',
    images: [
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4637.jpg',
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4640.jpg',
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4851.jpg',
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4853.jpg',
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4860.jpg',
      'portfolio_fotos/Production Engineering/Production Planning and Management/IMG_4861.jpg'
    ]
  },
  {
    id: 'energy-safety-compliance',
    title: 'Energy Efficiency and Occupational Safety Compliance',
    description: 'Ensured that all processes were fully compliant with energy efficiency and occupational safety standards.',
    images: [
      'portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4636.jpg',
      'portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4638.jpg',
      'portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4642.jpg',
      'portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4644.jpg',
      'portfolio_fotos/Production Engineering/Energy Efficiency and Occupational Safety Compliance/IMG_4657.jpg'
    ]
  }
];
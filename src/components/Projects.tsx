import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const progressAnimation = keyframes`
  from { width: 0%; }
  to { width: var(--width); }
`;

// Main Container
const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Hero Section
const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
  
  ${media.mobile} {
    margin-bottom: 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.tablet} {
    font-size: 2.8rem;
  }
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  ${media.mobile} {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Filter Section
const FilterSection = styled.div`
  margin-bottom: 60px;
  
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  
  ${media.mobile} {
    gap: 10px;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e0e0e0'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }
  
  ${media.mobile} {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// Projects Grid
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  
  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
  }
  
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectHeader = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectContent = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
`;

const ProjectMetrics = styled.div`
  margin-bottom: 25px;
`;

const MetricItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 10px;
`;

const MetricLabel = styled.span`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

const MetricValue = styled.span`
  color: #667eea;
  font-weight: 700;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`;

const TechTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: white;
    }
  `}
`;

// Modal for detailed case studies
const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px 20px 0 0;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ModalBody = styled.div`
  padding: 30px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Project data
const projectsData = [
  {
    id: 1,
    title: "AI-Powered Prototyping Framework",
    category: "Product Innovation",
    description: "Co-developed an AI-powered prototyping framework leveraging Cursor AI for code automation and Figma AI for design, revolutionizing our development process.",
    metrics: [
      { label: "Development Time Reduction", value: "50%" },
      { label: "MVP Launch Timeline", value: "12w → 6w" },
      { label: "Team Productivity Gain", value: "2x" }
    ],
    techStack: ["Cursor AI", "Figma AI", "React", "TypeScript", "API Design"],
    impact: "Cut development cycles in half and reduced MVP launch timelines from 12 weeks to 6 weeks",
    caseStudy: {
      challenge: "Traditional development cycles were too slow for rapid market validation and competitive positioning.",
      solution: "Implemented an integrated AI-powered framework combining code automation and design tools to streamline the entire prototyping process.",
      results: "Achieved 50% reduction in development time, enabling faster market entry and improved team efficiency."
    },
    caseStudyUrl: "/projects/ai-prototyping-framework"
  },
  {
    id: 2,
    title: "Multi-Brand Digital Platform Launch",
    category: "Strategic Leadership",
    description: "Led strategic planning and execution of product roadmaps using SAFe Agile frameworks, launching 2 new digital brands and rebranding 3 post-acquisitions.",
    metrics: [
      { label: "Annual Recurring Revenue", value: "$2M+" },
      { label: "Brands Launched", value: "5" },
      { label: "Market Expansion", value: "Global" }
    ],
    techStack: ["SAFe Agile", "Product Roadmapping", "Brand Strategy", "Market Analysis"],
    impact: "Generated $2M+ ARR across five digital brands while establishing global market presence",
    caseStudy: {
      challenge: "Need to rapidly scale digital presence across multiple brands while maintaining consistency and market positioning.",
      solution: "Implemented SAFe Agile frameworks with cross-functional alignment to accelerate time-to-market for multiple brand launches.",
      results: "Successfully launched 5 digital brands generating $2M+ ARR with improved market positioning."
    },
    caseStudyUrl: "/projects/multi-brand-launch"
  },
  {
    id: 3,
    title: "Loyalty Program Platform",
    category: "Product Development",
    description: "Developed and launched a comprehensive loyalty program using Open Loyalty's API-first engine, leveraging real-time data to personalize rewards and drive engagement.",
    metrics: [
      { label: "User Engagement", value: "+35%" },
      { label: "Customer Retention", value: "+28%" },
      { label: "API Integrations", value: "10+" }
    ],
    techStack: ["Open Loyalty API", "Real-time Analytics", "Personalization Engine", "Customer Journey Mapping"],
    impact: "Significantly improved customer engagement and retention through personalized reward experiences",
    caseStudy: {
      challenge: "Low customer retention and engagement rates across digital touchpoints.",
      solution: "Built an API-first loyalty platform with real-time data integration and personalized reward mechanisms.",
      results: "Achieved 35% increase in user engagement and 28% improvement in customer retention."
    },
    caseStudyUrl: "/projects/loyalty-program-platform"
  },
  {
    id: 4,
    title: "A/B Testing Framework Implementation",
    category: "Growth Optimization",
    description: "Collaborated on the launch of comprehensive A/B testing frameworks using Optimizely, Google Optimize, and VWO to optimize user activation and conversion rates.",
    metrics: [
      { label: "User Activation Boost", value: "+10%" },
      { label: "Free-to-Paid Conversion", value: "+10%" },
      { label: "Testing Velocity", value: "3x" }
    ],
    techStack: ["Optimizely", "Google Optimize", "VWO", "Analytics", "Statistical Analysis"],
    impact: "Boosted user activation and free-to-paid conversion by 10% within 12 months",
    caseStudy: {
      challenge: "Inconsistent conversion rates and lack of systematic optimization processes.",
      solution: "Implemented comprehensive A/B testing framework with multiple tools for different use cases and rapid iteration cycles.",
      results: "Achieved 10% improvement in both user activation and conversion rates with increased testing velocity."
    },
    caseStudyUrl: "/projects/ab-testing-framework"
  },
  {
    id: 5,
    title: "Healthcare Professionals Platform",
    category: "Content Strategy",
    description: "Built and managed a targeted Healthcare Professionals website using WordPress, creating a comprehensive resource hub with educational content and infographics.",
    metrics: [
      { label: "Professional Engagement", value: "+45%" },
      { label: "Content Accessibility", value: "+60%" },
      { label: "Resource Utilization", value: "+50%" }
    ],
    techStack: ["WordPress", "Content Management", "Healthcare UX", "Educational Design"],
    impact: "Increased healthcare professional engagement through accessible, patient-friendly educational resources",
    caseStudy: {
      challenge: "Healthcare professionals needed accessible, comprehensive educational resources in a user-friendly format.",
      solution: "Developed a WordPress-based platform with structured educational content, infographics, and improved accessibility.",
      results: "Significantly increased professional engagement and resource utilization with improved content accessibility."
    },
    caseStudyUrl: "/projects/healthcare-platform"
  },
  {
    id: 6,
    title: "Performance Marketing Optimization",
    category: "Revenue Generation",
    description: "Leveraged Matomo and CRM analytics to refine campaign ROI, identifying high-value segments and optimizing paid media performance.",
    metrics: [
      { label: "Attributed Revenue", value: "$1M+" },
      { label: "CAC Reduction", value: "-25%" },
      { label: "Lead-to-MQL Conversion", value: "+30%" }
    ],
    techStack: ["Matomo Analytics", "CRM Integration", "Programmatic Ads", "Conversion Optimization"],
    impact: "Generated $1M+ in attributed revenue through data-driven campaign optimization and segment identification",
    caseStudy: {
      challenge: "Inefficient ad spend and poor visibility into high-value customer segments.",
      solution: "Implemented comprehensive analytics tracking with CRM integration to identify and optimize for high-value segments.",
      results: "Achieved $1M+ attributed revenue with 25% CAC reduction and 30% improvement in lead quality."
    },
    caseStudyUrl: "/projects/performance-marketing-optimization"
  },
  {
    id: 7,
    title: "Marketing Automation Infrastructure",
    category: "Process Optimization",
    description: "Built and maintained comprehensive marketing automation infrastructure supporting the complete customer journey from acquisition to retention.",
    metrics: [
      { label: "Lead-to-Customer Conversion", value: "+20%" },
      { label: "Automation Efficiency", value: "+40%" },
      { label: "Customer Journey Optimization", value: "End-to-End" }
    ],
    techStack: ["Marketing Automation", "CRM Integration", "Email Workflows", "Customer Journey Mapping"],
    impact: "Improved lead-to-customer conversion by 20% through automated, personalized customer journeys",
    caseStudy: {
      challenge: "Manual processes were causing lead leakage and inconsistent customer experiences.",
      solution: "Built comprehensive automation infrastructure with personalized workflows and trigger-based communications.",
      results: "Achieved 20% improvement in conversion rates with 40% increase in process efficiency."
    },
    caseStudyUrl: "/projects/marketing-automation"
  },
  {
    id: 8,
    title: "API Integration Suite",
    category: "Technical Product Management",
    description: "Collaborated with engineering to define API specifications for 10+ integrations, resolving critical customer workflow gaps and improving retention.",
    metrics: [
      { label: "API Integrations", value: "10+" },
      { label: "Customer Retention", value: "+15%" },
      { label: "Workflow Efficiency", value: "+35%" }
    ],
    techStack: ["API Design", "System Integration", "Workflow Optimization", "Customer Success"],
    impact: "Resolved critical customer workflow gaps through strategic API integrations, driving improved retention",
    caseStudy: {
      challenge: "Customers were experiencing workflow disruptions due to lack of system integrations.",
      solution: "Collaborated with engineering to design and implement comprehensive API integration suite addressing key customer needs.",
      results: "Successfully delivered 10+ integrations resulting in 15% improvement in customer retention."
    },
    caseStudyUrl: "/projects/api-integration-suite"
  }
];

const categories = [
  "All Projects",
  "Product Innovation",
  "Strategic Leadership", 
  "Growth Optimization",
  "Revenue Generation",
  "Process Optimization",
  "Technical Product Management",
  "Content Strategy",
  "Product Development"
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    revenue: 0,
    conversions: 0,
    efficiency: 0
  });
  
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate stats
          let progress = 0;
          const timer = setInterval(() => {
            progress += 1;
            setAnimatedStats({
              projects: Math.floor(50 * (progress / 100)),
              revenue: Math.floor(2 * (progress / 100)),
              conversions: Math.floor(35 * (progress / 100)),
              efficiency: Math.floor(50 * (progress / 100))
            });
            
            if (progress >= 100) {
              clearInterval(timer);
            }
          }, 20);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === "All Projects" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateToCaseStudy = (url: string) => {
    navigate(url);
  };

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Project Portfolio</HeroTitle>
          <HeroSubtitle>
            A showcase of product strategy, digital transformation, and growth optimization projects that have driven measurable business impact.
          </HeroSubtitle>
          
          <StatsGrid ref={statsRef}>
            <StatCard>
              <StatNumber>{animatedStats.projects}+</StatNumber>
              <StatLabel>Projects Delivered</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>${animatedStats.revenue}M+</StatNumber>
              <StatLabel>Revenue Generated</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{animatedStats.conversions}%</StatNumber>
              <StatLabel>Avg Conversion Improvement</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{animatedStats.efficiency}%</StatNumber>
              <StatLabel>Process Efficiency Gains</StatLabel>
            </StatCard>
          </StatsGrid>
        </HeroSection>

        <FilterSection>
          <FilterTitle>Filter by Category</FilterTitle>
          <FilterButtons>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterSection>

        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
              </ProjectHeader>
              
              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectMetrics>
                  {project.metrics.map((metric, index) => (
                    <MetricItem key={index}>
                      <MetricLabel>{metric.label}</MetricLabel>
                      <MetricValue>{metric.value}</MetricValue>
                    </MetricItem>
                  ))}
                </ProjectMetrics>
                
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                
                <ProjectActions>
                  {(project as any).caseStudyUrl ? (
                    <ActionButton 
                      variant="primary"
                      onClick={() => navigateToCaseStudy((project as any).caseStudyUrl)}
                    >
                      View Case Study
                    </ActionButton>
                  ) : (
                    <ActionButton 
                      variant="primary"
                      onClick={() => openModal(project)}
                    >
                      View Details
                    </ActionButton>
                  )}
                  <ActionButton 
                    variant="secondary"
                    onClick={() => openModal(project)}
                  >
                    Quick View
                  </ActionButton>
                </ProjectActions>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>

      <Modal isOpen={!!selectedProject} onClick={closeModal}>
        {selectedProject && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalHeader>
              <ModalTitle>{selectedProject.title}</ModalTitle>
              <ProjectCategory>{selectedProject.category}</ProjectCategory>
            </ModalHeader>
            <ModalBody>
              <h3>Challenge</h3>
              <p>{selectedProject.caseStudy.challenge}</p>
              
              <h3>Solution</h3>
              <p>{selectedProject.caseStudy.solution}</p>
              
              <h3>Results</h3>
              <p>{selectedProject.caseStudy.results}</p>
              
              <h3>Key Metrics</h3>
              <ProjectMetrics>
                {selectedProject.metrics.map((metric: any, index: number) => (
                  <MetricItem key={index}>
                    <MetricLabel>{metric.label}</MetricLabel>
                    <MetricValue>{metric.value}</MetricValue>
                  </MetricItem>
                ))}
              </ProjectMetrics>
              
              <h3>Technology Stack</h3>
              <TechStack>
                {selectedProject.techStack.map((tech: string, index: number) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </ProjectsContainer>
  );
};

export default Projects; 
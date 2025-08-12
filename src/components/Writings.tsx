import React, { useState } from 'react';
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Main Container
const WritingsContainer = styled.div`
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
  max-width: 700px;
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

// Articles Grid
const ArticlesGrid = styled.div`
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

const ArticleCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleImage = styled.div<{ backgroundImage: string }>`
  height: 250px;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)), url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ArticleCard}:hover &::before {
    opacity: 1;
  }
`;

const ArticleContent = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #888;
`;

const ReadTime = styled.span`
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 8px;
`;

const PublishDate = styled.span``;

const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #f8f9fa;
  color: #666;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
`;

// Article data
export const articles = [
  // New articles (Latest)
    {
    id: 'pm-os-2025',
    title: 'The PM OS 2025: Delegation, Decisions, and Bets With Your AI Partner',
    excerpt: 'A PM operating system for working with an AI partner: delegation, decision stories, and smart strategic bets.',
    category: 'Business & Strategy',
    image: 'https://source.unsplash.com/800x400/?product,management&sig=200',
    readTime: '14 min read',
    date: 'Aug 12, 2025',
    tags: ['Product Management', 'AI Delegation', 'Data Storytelling', 'Strategy', 'Playbooks']
  },
    {
      id: 'great-ai-model-commoditization',
      title: 'The Great AI Model Commoditization: Why GPT-5 Won\'t Matter',
      excerpt: 'Analysis of how AI models are becoming commoditized and what really drives competitive advantage. Why infrastructure, not intelligence, determines the AI winners.',
      category: 'AI & Technology',
      image: 'https://source.unsplash.com/800x400/?ai,neural-network&sig=201',
      readTime: '11 min read',
      date: 'Dec 18, 2024',
      tags: ['AI Models', 'Commoditization', 'Business Strategy']
    },
   {
     id: 'ai-governance-gap',
    title: 'The AI Governance Gap: Why Regulation is Already Obsolete',
    excerpt: 'How AI development is outpacing regulatory frameworks and what this means for businesses. The challenge of governing technology that evolves faster than policy.',
    category: 'AI & Technology',
          image: 'https://source.unsplash.com/800x400/?policy,government,technology&sig=203',
      readTime: '10 min read',
    date: 'Nov 28, 2024',
    tags: ['AI Governance', 'Regulation', 'Policy']
  },
  {
    id: 'multimodal-ai-end-of-specialized-software',
    title: 'Multimodal AI: The End of Specialized Software',
    excerpt: 'How AI that processes text, image, and audio simultaneously is reshaping application development. The convergence that makes specialized tools obsolete.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 15, 2024',
    tags: ['Multimodal AI', 'Software', 'Technology']
  },
  {
    id: 'ai-infrastructure-wars',
    title: 'The AI Infrastructure Wars: Who Will Control the Computing Layer',
    excerpt: 'Analysis of the battle for AI infrastructure dominance and its implications for the future. The race to control the next computing paradigm.',
    category: 'AI & Technology',
          image: 'https://source.unsplash.com/800x400/?data-center,servers,ai&sig=205',
      readTime: '13 min read',
    date: 'Oct 8, 2024',
    tags: ['Infrastructure', 'AI', 'Competition']
  },
  {
    id: 'platform-economics-unbundling-rebundling',
    title: 'Platform Economics: The Unbundling and Rebundling Cycle',
    excerpt: 'How successful platforms continuously unbundle and rebundle to capture more value. Understanding the endless cycle of digital business models.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?network,platform,ecosystem&sig=206',
      readTime: '14 min read',
    date: 'Sep 15, 2024',
    tags: ['Platform Economics', 'Business Models', 'Strategy']
  },
  {
    id: 'creator-economy-maturation',
    title: 'The Creator Economy\'s Maturation: From Hype to Sustainable Business Models',
    excerpt: 'How the creator economy is evolving from influencer marketing to legitimate digital businesses. The professionalization of content creation.',
    category: 'Industry Evolution',
          image: 'https://source.unsplash.com/800x400/?creator,studio,content&sig=207',
      readTime: '11 min read',
    date: 'Aug 5, 2024',
    tags: ['Creator Economy', 'Digital Business', 'Content']
  },
  {
    id: 'attention-economy-backlash',
    title: 'The Attention Economy Backlash: Why Digital Minimalism is Winning',
    excerpt: 'How consumer pushback against attention capture is reshaping technology and media. The movement toward intentional technology use.',
    category: 'Society & Culture',
          image: 'https://source.unsplash.com/800x400/?minimalism,focus,phone&sig=208',
      readTime: '9 min read',
    date: 'Jul 12, 2024',
    tags: ['Digital Minimalism', 'Attention Economy', 'Tech Culture']
  },
  {
    id: 'ai-alignment-control-problem',
    title: 'The AI Alignment Problem: Beyond Technical Solutions',
    excerpt: 'Why aligning AI systems with human values is more complex than programming safety constraints. The philosophical and practical challenges ahead.',
    category: 'AI & Technology',
          image: 'https://source.unsplash.com/800x400/?ethics,ai,alignment&sig=209',
      readTime: '10 min read',
    date: 'Jun 15, 2024',
    tags: ['AI Safety', 'Ethics', 'Alignment']
  },
  {
    id: 'ai-regulation-innovation-balance',
    title: 'AI Regulation: Balancing Innovation and Safety',
    excerpt: 'How policymakers are navigating the complex trade-offs of AI oversight without stifling progress. Finding the right regulatory approach.',
    category: 'AI & Technology',
          image: 'https://source.unsplash.com/800x400/?regulation,innovation,balance&sig=210',
      readTime: '12 min read',
    date: 'May 8, 2024',
    tags: ['AI Regulation', 'Innovation', 'Policy']
  },
  {
    id: 'consulting-industry-ai-disruption',
    title: 'The Consulting Industry\'s AI Disruption',
    excerpt: 'How AI is transforming the trillion-dollar consulting industry and what it means for knowledge work. The reshaping of professional services.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?consulting,boardroom,analytics&sig=211',
      readTime: '11 min read',
    date: 'Apr 22, 2024',
    tags: ['Consulting', 'AI', 'Knowledge Work']
  },
  {
    id: 'growth-hacking-maturation',
    title: 'Growth Hacking\'s Maturation into Growth Science',
    excerpt: 'The evolution from viral tricks to systematic, data-driven growth methodologies. How growth strategies are becoming more sophisticated.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?growth,data,experiments&sig=212',
      readTime: '9 min read',
    date: 'Mar 28, 2024',
    tags: ['Growth', 'Marketing', 'Strategy']
  },
  {
    id: 'pricing-psychology-revolution',
    title: 'The Pricing Psychology Revolution',
    excerpt: 'How behavioral economics and AI are transforming how companies set prices and capture value. The science of pricing in the digital age.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?pricing,behavioral,charts&sig=213',
      readTime: '13 min read',
    date: 'Mar 18, 2024',
    tags: ['Pricing', 'Psychology', 'Business']
  },







  // Original articles
  {
    id: 'ai-winter-that-never-came',
    title: 'The AI Winter That Never Came: Why This Time is Different',
    excerpt: 'Analysis of current AI boom vs. previous cycles and what sustains it. Exploring the fundamental differences in infrastructure, investment, and real-world applications that make 2025 unique.',
    category: 'AI & Technology',
        image: 'https://source.unsplash.com/800x400/?ai,network,abstract&sig=202',
     readTime: '8 min read',
    date: 'Jun 15, 2025',
    tags: ['AI', 'Tech Trends', 'Innovation']
  },
  {
    id: 'beyond-chatgpt-enterprise-ai',
    title: 'Beyond ChatGPT: The Quiet Revolution in Enterprise AI Implementation',
    excerpt: 'How businesses are actually adopting AI vs. the hype. Real case studies of AI integration in traditional industries and the gap between perception and reality.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'May 22, 2025',
    tags: ['Enterprise AI', 'Business Strategy', 'Implementation']
  },
  {
    id: 'great-ai-talent-war',
    title: 'The Great AI Talent War: Why Traditional Tech Giants Are Losing',
    excerpt: 'Observation on how AI talent is redistributing across the industry. The rise of AI-native companies and the strategic implications for established tech giants.',
    category: 'AI & Technology',
          image: 'https://source.unsplash.com/800x400/?talent,team,engineering&sig=215',
      readTime: '10 min read',
    date: 'Apr 18, 2025',
    tags: ['Talent', 'Tech Industry', 'Career']
  },
  {
    id: 'venture-capital-new-playbook',
    title: "Venture Capital's New Playbook: From Growth-at-All-Costs to Sustainable Scaling",
    excerpt: 'Shift in VC investment patterns post-2022. How the end of cheap money has fundamentally changed startup funding and what founders need to know.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?venture,capital,meeting&sig=216',
      readTime: '11 min read',
    date: 'Mar 8, 2025',
    tags: ['Venture Capital', 'Startups', 'Funding']
  },
  {
    id: 'subscription-economy-next-chapter',
    title: 'The Subscription Economy\'s Next Chapter: Beyond SaaS to Everything-as-a-Service',
    excerpt: 'Evolution of business models across industries. How subscription models are expanding beyond software into physical goods, services, and experiences.',
    category: 'Industry Evolution',
          image: 'https://source.unsplash.com/800x400/?subscription,recurring,revenue&sig=217',
      readTime: '13 min read',
    date: 'Feb 14, 2025',
    tags: ['Business Models', 'SaaS', 'Subscription']
  },
  {
    id: 'remote-work-settlement',
    title: 'The Remote Work Settlement: What We Actually Learned After 4 Years',
    excerpt: 'Long-term observations on distributed work impact. Data-driven analysis of productivity, culture, and the future of work based on real outcomes, not predictions.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?remote,work,home-office&sig=218',
      readTime: '7 min read',
    date: 'Jan 25, 2025',
    tags: ['Remote Work', 'Future of Work', 'Productivity']
  },
  {
    id: 'death-of-ten-year-business-plan',
    title: 'The Death of the 10-Year Business Plan: Why Agility Beats Strategy',
    excerpt: 'How rapid tech changes are reshaping corporate planning. Why traditional strategic planning is becoming obsolete and what agile businesses are doing instead.',
    category: 'Business & Strategy',
          image: 'https://source.unsplash.com/800x400/?strategy,planning,whiteboard&sig=219',
      readTime: '9 min read',
    date: 'Jan 12, 2025',
    tags: ['Strategy', 'Business Planning', 'Agility']
  }
];

const categories = ['All', 'AI & Technology', 'Business & Strategy', 'Industry Evolution', 'Society & Culture'];

const Writings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Sort articles by date (descending)
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate dynamic stats
  const totalArticles = articles.length;
  const totalCategories = categories.length - 1; // Subtract 'All' category
  const estimatedWords = totalArticles * 4000; // Average 4k words per article
  const currentYear = new Date().getFullYear();

  const navigateToArticle = (articleId: string) => {
    navigate(`/writings/${articleId}`);
  };

  return (
    <WritingsContainer>
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Writings</HeroTitle>
          <HeroSubtitle>
            Thoughts on technology, business, and the forces shaping our digital future. 
            Analysis, observations, and insights from the intersection of tech and society.
          </HeroSubtitle>
          
          <StatsGrid>
            <StatCard>
              <StatNumber>{totalArticles}</StatNumber>
              <StatLabel>Articles</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{totalCategories}</StatNumber>
              <StatLabel>Categories</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{Math.round(estimatedWords / 1000)}k+</StatNumber>
              <StatLabel>Words</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>{currentYear}</StatNumber>
              <StatLabel>Active Year</StatLabel>
            </StatCard>
          </StatsGrid>
        </HeroSection>

        <FilterSection>
          <FilterTitle>Explore by Category</FilterTitle>
          <FilterButtons>
            {categories.map((category) => (
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

        <ArticlesGrid>
          {sortedArticles.map((article) => (
            <ArticleCard
              key={article.id}
              onClick={() => navigateToArticle(article.id)}
            >
              <ArticleImage backgroundImage={article.image} />
              <ArticleContent>
                <ArticleCategory>{article.category}</ArticleCategory>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleMeta>
                  <PublishDate>{article.date}</PublishDate>
                  <ReadTime>{article.readTime}</ReadTime>
                </ArticleMeta>
                <ArticleTags>
                  {article.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ArticleTags>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </ContentWrapper>
    </WritingsContainer>
  );
};

export default Writings; 
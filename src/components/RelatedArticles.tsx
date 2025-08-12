import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

const RelatedArticlesContainer = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 80px 20px;
  border-radius: 20px;
  margin: 60px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #1f2937;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ArticleCard = styled(Link)`
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  line-height: 1.4;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #9ca3af;
`;

const ReadTime = styled.span`
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 8px;
`;

const PublishDate = styled.span``;

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface RelatedArticlesProps {
  currentArticleId?: string;
}

// All available articles
const allArticles: Article[] = [
  // Existing articles
  {
    id: 'ai-winter-that-never-came',
    title: 'The AI Winter That Never Came: Why This Time is Different',
    excerpt: 'Analysis of current AI boom vs. previous cycles and what sustains it.',
    category: 'AI & Technology',
    readTime: '8 min read',
    date: 'Jun 15, 2025'
  },
  {
    id: 'beyond-chatgpt-enterprise-ai',
    title: 'Beyond ChatGPT: The Quiet Revolution in Enterprise AI Implementation',
    excerpt: 'How businesses are actually adopting AI vs. the hype.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'May 22, 2025'
  },
  {
    id: 'great-ai-talent-war',
    title: 'The Great AI Talent War: Why Traditional Tech Giants Are Losing',
    excerpt: 'How AI talent is redistributing across the industry.',
    category: 'AI & Technology',
    readTime: '10 min read',
    date: 'Apr 18, 2025'
  },
  {
    id: 'venture-capital-new-playbook',
    title: 'Venture Capital\'s New Playbook: From Growth-at-All-Costs to Sustainable Scaling',
    excerpt: 'The shift in VC strategy and what founders need to know.',
    category: 'Business & Strategy',
    readTime: '11 min read',
    date: 'Mar 8, 2025'
  },
  {
    id: 'subscription-economy-next-chapter',
    title: 'The Subscription Economy\'s Next Chapter: Beyond SaaS to Everything-as-a-Service',
    excerpt: 'Evolution of business models across industries.',
    category: 'Industry Evolution',
    readTime: '13 min read',
    date: 'Feb 14, 2025'
  },
  {
    id: 'remote-work-settlement',
    title: 'The Remote Work Settlement: What We Actually Learned After 4 Years',
    excerpt: 'Long-term observations on distributed work impact.',
    category: 'Business & Strategy',
    readTime: '7 min read',
    date: 'Jan 25, 2025'
  },
    {
     id: 'death-of-ten-year-business-plan',
     title: 'The Death of the 10-Year Business Plan: Why Agility Beats Strategy',
     excerpt: 'How rapid tech changes are reshaping corporate planning.',
     category: 'Business & Strategy',
     readTime: '9 min read',
     date: 'Jan 12, 2025'
   },
       {
      id: 'pm-os-2025',
      title: 'The PM OS 2025: Delegation, Decisions, and Bets With Your AI Partner',
      excerpt: 'A PM operating system for working with an AI partner: delegation, decision stories, and smart strategic bets.',
      category: 'Business & Strategy',
      readTime: '14 min read',
      date: 'Aug 12, 2025'
    },
    // New articles
   {
    id: 'great-ai-model-commoditization',
    title: 'The Great AI Model Commoditization: Why GPT-5 Won\'t Matter',
    excerpt: 'Analysis of how AI models are becoming commoditized and what really drives competitive advantage.',
    category: 'AI & Technology',
    readTime: '11 min read',
    date: 'Dec 18, 2024'
  },
  {
    id: 'ai-governance-gap',
    title: 'The AI Governance Gap: Why Regulation is Already Obsolete',
    excerpt: 'How AI development is outpacing regulatory frameworks and what this means for businesses.',
    category: 'AI & Technology',
    readTime: '10 min read',
    date: 'Nov 28, 2024'
  },
  {
    id: 'multimodal-ai-end-of-specialized-software',
    title: 'Multimodal AI: The End of Specialized Software',
    excerpt: 'How AI that processes text, image, and audio simultaneously is reshaping application development.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'Nov 15, 2024'
  },
  {
    id: 'ai-infrastructure-wars',
    title: 'The AI Infrastructure Wars: Who Will Control the Computing Layer',
    excerpt: 'Analysis of the battle for AI infrastructure dominance and its implications for the future.',
    category: 'AI & Technology',
    readTime: '13 min read',
    date: 'Oct 8, 2024'
  },
  {
    id: 'platform-economics-unbundling-rebundling',
    title: 'Platform Economics: The Unbundling and Rebundling Cycle',
    excerpt: 'How successful platforms continuously unbundle and rebundle to capture more value.',
    category: 'Business & Strategy',
    readTime: '14 min read',
    date: 'Sep 15, 2024'
  },
  {
    id: 'creator-economy-maturation',
    title: 'The Creator Economy\'s Maturation: From Hype to Sustainable Business Models',
    excerpt: 'How the creator economy is evolving from influencer marketing to legitimate digital businesses.',
    category: 'Industry Evolution',
    readTime: '11 min read',
    date: 'Aug 5, 2024'
  },
  {
    id: 'attention-economy-backlash',
    title: 'The Attention Economy Backlash: Why Digital Minimalism is Winning',
    excerpt: 'How consumer pushback against attention capture is reshaping technology and media.',
    category: 'Society & Culture',
    readTime: '9 min read',
    date: 'Jul 12, 2024'
  },
  // Additional new articles
  {
    id: 'ai-alignment-control-problem',
    title: 'The AI Alignment Problem: Beyond Technical Solutions',
    excerpt: 'Why aligning AI systems with human values is more complex than programming safety constraints.',
    category: 'AI & Technology',
    readTime: '10 min read',
    date: 'Jun 15, 2024'
  },
  {
    id: 'ai-regulation-innovation-balance',
    title: 'AI Regulation: Balancing Innovation and Safety',
    excerpt: 'How policymakers are navigating the complex trade-offs of AI oversight without stifling progress.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'May 8, 2024'
  },
  {
    id: 'consulting-industry-ai-disruption',
    title: 'The Consulting Industry\'s AI Disruption',
    excerpt: 'How AI is transforming the trillion-dollar consulting industry and what it means for knowledge work.',
    category: 'Business & Strategy',
    readTime: '11 min read',
    date: 'Apr 22, 2024'
  },
  {
    id: 'growth-hacking-maturation',
    title: 'Growth Hacking\'s Maturation into Growth Science',
    excerpt: 'The evolution from viral tricks to systematic, data-driven growth methodologies.',
    category: 'Business & Strategy',
    readTime: '9 min read',
    date: 'Mar 28, 2024'
  },
  {
    id: 'pricing-psychology-revolution',
    title: 'The Pricing Psychology Revolution',
    excerpt: 'How behavioral economics and AI are transforming how companies set prices and capture value.',
    category: 'Business & Strategy',
    readTime: '13 min read',
    date: 'Mar 18, 2024'
  },







];

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentArticleId }) => {
  // Filter out current article and get 3 random related articles
  const getRelatedArticles = (): Article[] => {
    const otherArticles = allArticles.filter(article => article.id !== currentArticleId);
    
    // Shuffle and take first 3
    const shuffled = [...otherArticles].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <RelatedArticlesContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>Related Articles</SectionTitle>
          <SectionSubtitle>
            Continue exploring insights on technology, business, and innovation
          </SectionSubtitle>
        </SectionHeader>
        
        <ArticlesGrid>
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} to={`/writings/${article.id}`}>
              <ArticleCategory>{article.category}</ArticleCategory>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ArticleMeta>
                <PublishDate>{article.date}</PublishDate>
                <ReadTime>{article.readTime}</ReadTime>
              </ArticleMeta>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </Container>
    </RelatedArticlesContainer>
  );
};

export default RelatedArticles; 
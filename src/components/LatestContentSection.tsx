import React from 'react';
import styled from 'styled-components';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { media } from '../styles/GlobalStyles';

const LatestContentContainer = styled.section`
  padding: 100px 20px;
  background: #FFFFFF;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="contentGrain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23667eea" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23764ba2" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23667eea" opacity="0.03"/><circle cx="10" cy="60" r="0.5" fill="%23764ba2" opacity="0.03"/><circle cx="90" cy="40" r="0.5" fill="%23667eea" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23contentGrain)"/></svg>');
    pointer-events: none;
  }

  ${media.tablet} {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const HeaderText = styled.div`
  flex: 1;
  text-align: left;

  ${media.tablet} {
    text-align: center;
  }
`;

const ContentTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  ${media.tablet} {
    font-size: 2.5rem;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const ContentSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
  margin-top: 20px;

  ${media.tablet} {
    font-size: 1.1rem;
    max-width: 100%;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const HeaderVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, 
      rgba(102, 126, 234, 0.08) 0%, 
      rgba(118, 75, 162, 0.05) 50%, 
      transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const LottieContentContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  ${media.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 50px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ArticleCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px 25px;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(102, 126, 234, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.12),
      0 8px 32px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  ${media.tablet} {
    padding: 25px 20px;
  }

  ${media.mobile} {
    padding: 20px 18px;
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ArticleTag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  ${ArticleCard}:hover & {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-color: transparent;
  }
`;

const ArticleIcon = styled.div<{ variant: 'pink' | 'blue' | 'green' | 'purple' }>`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  ${props => {
    switch (props.variant) {
      case 'pink':
        return 'background: linear-gradient(135deg, #ff6b9d, #ff8a9b);';
      case 'blue':
        return 'background: linear-gradient(135deg, #667eea, #764ba2);';
      case 'green':
        return 'background: linear-gradient(135deg, #00d4aa, #01a3a4);';
      case 'purple':
        return 'background: linear-gradient(135deg, #764ba2, #667eea);';
      default:
        return 'background: linear-gradient(135deg, #667eea, #764ba2);';
    }
  }}

  i {
    font-size: 22px;
    color: white;
  }

  ${ArticleCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${ArticleCard}:hover & {
    color: #667eea;
  }

  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;

  ${media.mobile} {
    font-size: 0.95rem;
  }
`;

const ArticleLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #764ba2;

    &::after {
      transform: translateX(4px);
    }
  }
`;

const ContentFooter = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const ViewAllBtn = styled.a`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 16px 32px rgba(102, 126, 234, 0.3),
      0 8px 16px rgba(118, 75, 162, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  ${media.mobile} {
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

const articles = [
  {
    tag: 'How to',
    icon: 'fas fa-lightbulb',
    iconVariant: 'pink' as const,
    title: 'How the latest tech products do early access beta\'s',
    description: 'I\'ve searched high & low for the hottest beta access techniques in tech to show you the dos/don\'ts with early access onboarding. Here\'s what I found.',
    link: '#'
  },
  {
    tag: 'How to',
    icon: 'fas fa-fire',
    iconVariant: 'blue' as const,
    title: 'Comprehensive list of \'Smoke Test\' techniques',
    description: 'A definitive list of modern, alternative \'Smoke Test\' techniques to help test early signs of desirability with your target market.',
    link: '#'
  },
  {
    tag: 'Product',
    icon: 'fas fa-rocket',
    iconVariant: 'green' as const,
    title: 'Can I build an online shoe retailer with no shoes?',
    description: 'Turns out you can - or \'could\' should I say. This is Part 1 in my series of concierge MVP examples from well known tech startups.',
    link: '#'
  },
  {
    tag: 'Case Study',
    icon: 'fas fa-chart-line',
    iconVariant: 'purple' as const,
    title: 'From idea to 10K users: A SaaS journey',
    description: 'Deep dive into how we took a simple productivity tool from concept to 10,000 active users in 6 months using lean startup principles.',
    link: '#'
  }
];

const LatestContentSection: React.FC = () => {
  return (
    <LatestContentContainer id="latest-content">
      <Container>
        <ContentHeader>
          <HeaderText>
            <ContentTitle>Latest Content</ContentTitle>
            <ContentSubtitle>
              Insights, tutorials, and case studies to help you build better products.
            </ContentSubtitle>
          </HeaderText>
          <HeaderVisual>
            <LottieContentContainer>
              <DotLottiePlayer
                src="https://lottie.host/c808b92b-a13a-46ce-a4c8-becad30e6fc1/MzVoxeVy5K.lottie"
                loop
                autoplay
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent'
                }}
              />
            </LottieContentContainer>
          </HeaderVisual>
        </ContentHeader>

        <ArticlesGrid>
          {articles.map((article, index) => (
            <ArticleCard key={index}>
              <ArticleHeader>
                <ArticleTag>{article.tag}</ArticleTag>
                <ArticleIcon variant={article.iconVariant}>
                  <i className={article.icon}></i>
                </ArticleIcon>
              </ArticleHeader>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
              <ArticleLink href={article.link}>Learn More</ArticleLink>
            </ArticleCard>
          ))}
        </ArticlesGrid>

        <ContentFooter>
          <ViewAllBtn href="#">View All Articles</ViewAllBtn>
        </ContentFooter>
      </Container>
    </LatestContentContainer>
  );
};

export default LatestContentSection; 
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../styles/GlobalStyles';
import OfficeHoursButtonComponent from './OfficeHoursButton';

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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const progressFill = keyframes`
  from {
    width: 0%;
  }
  to {
    width: var(--target-width);
  }
`;

// Main Container
const ResumeContainer = styled.div`
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

const HeroContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  
  ${media.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

// Sidebar Navigation
const SidebarNav = styled.div`
  width: 300px;
  flex-shrink: 0;
  position: sticky;
  top: 140px;
  height: fit-content;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  ${media.tablet} {
    width: 100%;
    position: static;
    padding: 20px;
  }
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SidebarTabButton = styled.button<{ active?: boolean }>`
  background: transparent;
  color: #666;
  border: none;
  padding: 15px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    transform: translateX(5px);
    
    &:before {
      opacity: 1;
    }
  }
  
  ${media.tablet} {
    text-align: center;
    padding: 12px 16px;
    
    &:before {
      display: none;
    }
  }
  
  ${media.mobile} {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
`;

const TabIcon = styled.span`
  font-size: 1.2rem;
  
  ${media.tablet} {
    display: none;
  }
`;

const TabText = styled.span`
  flex: 1;
`;

// Main Content Area
const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;

// Section Headers
const SectionHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }
  
  ${media.tablet} {
    font-size: 2.2rem;
  }
  
  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
  scroll-margin-top: 140px;
  
  ${media.mobile} {
    margin-bottom: 60px;
  }
`;

// Hero Section (moved to main content)
const HeroSection = styled.section`
  padding: 0 0 60px;
  animation: ${fadeInUp} 1s ease-out;
  margin-bottom: 40px;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const HeroLeftContent = styled.div`
  text-align: center;
  
  ${media.tablet} {
    text-align: center;
  }
`;

const HeroRightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  ${media.tablet} {
    justify-content: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  
  ${media.tablet} {
    font-size: 2.8rem;
  }
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.3rem;
  color: #667eea;
  margin-bottom: 25px;
  font-weight: 500;
  
  ${media.mobile} {
    font-size: 1.1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
  ${media.mobile} {
    gap: 15px;
  }
`;

const ContactItem = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #667eea;
    transform: translateY(-2px);
  }
`;

// Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

const StatCard = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

// Professional Summary
const SummarySection = styled.section`
  margin-bottom: 50px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  color: white;
  text-align: center;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
`;

// Experience Section
const ExperienceGrid = styled.div`
  display: grid;
  gap: 25px;
`;

const ExperienceCard = styled.div<{ expanded: boolean }>`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 15px;
  
  ${media.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

const CompanyName = styled.h3`
  color: #667eea;
  font-size: 1.4rem;
  margin-bottom: 5px;
  font-weight: 600;
`;

const JobTitle = styled.h4`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 500;
`;

const JobDuration = styled.div`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const AchievementsList = styled.div<{ expanded: boolean }>`
  max-height: ${props => props.expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const Achievement = styled.div`
  color: #666;
  margin-bottom: 10px;
  padding-left: 15px;
  position: relative;
  line-height: 1.5;
  
  &::before {
    content: '•';
    color: #667eea;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const ExpandButton = styled.button`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
`;

// Skills Section
const SkillsGrid = styled.div`
  display: grid;
  gap: 25px;
`;

const SkillCategory = styled.div`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
  }
`;

const SkillCategoryTitle = styled.h3`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 18px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  
  ${media.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 8px;
  }
`;

const SkillBadge = styled.div<{ level: 'Expert' | 'Advanced' | 'Intermediate' }>`
  position: relative;
  background: ${props => {
    switch(props.level) {
      case 'Expert': return 'rgba(102, 126, 234, 0.1)';
      case 'Advanced': return 'rgba(118, 75, 162, 0.1)';
      case 'Intermediate': return 'rgba(160, 174, 192, 0.1)';
      default: return 'rgba(226, 232, 240, 0.1)';
    }
  }};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #333;
  padding: 16px 12px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid ${props => {
    switch(props.level) {
      case 'Expert': return 'rgba(102, 126, 234, 0.2)';
      case 'Advanced': return 'rgba(118, 75, 162, 0.2)';
      case 'Intermediate': return 'rgba(160, 174, 192, 0.2)';
      default: return 'rgba(226, 232, 240, 0.2)';
    }
  }};
  box-shadow: 
    0 4px 20px rgba(102, 126, 234, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => {
      switch(props.level) {
        case 'Expert': return 'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))';
        case 'Advanced': return 'linear-gradient(135deg, rgba(118, 75, 162, 0.15), rgba(102, 126, 234, 0.15))';
        case 'Intermediate': return 'linear-gradient(135deg, rgba(160, 174, 192, 0.15), rgba(113, 128, 150, 0.15))';
        default: return 'linear-gradient(135deg, rgba(226, 232, 240, 0.15), rgba(203, 213, 224, 0.15))';
      }
    }};
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 16px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      ${props => {
        switch(props.level) {
          case 'Expert': return 'rgba(102, 126, 234, 0.3)';
          case 'Advanced': return 'rgba(118, 75, 162, 0.3)';
          case 'Intermediate': return 'rgba(160, 174, 192, 0.3)';
          default: return 'rgba(226, 232, 240, 0.3)';
        }
      }},
      transparent
    );
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation: none;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: ${props => {
      switch(props.level) {
        case 'Expert': return 'rgba(102, 126, 234, 0.2)';
        case 'Advanced': return 'rgba(118, 75, 162, 0.2)';
        case 'Intermediate': return 'rgba(160, 174, 192, 0.2)';
        default: return 'rgba(226, 232, 240, 0.2)';
      }
    }};
    border-color: ${props => {
      switch(props.level) {
        case 'Expert': return 'rgba(102, 126, 234, 0.4)';
        case 'Advanced': return 'rgba(118, 75, 162, 0.4)';
        case 'Intermediate': return 'rgba(160, 174, 192, 0.4)';
        default: return 'rgba(226, 232, 240, 0.4)';
      }
    }};
    box-shadow: 
      0 12px 40px ${props => {
        switch(props.level) {
          case 'Expert': return 'rgba(102, 126, 234, 0.3)';
          case 'Advanced': return 'rgba(118, 75, 162, 0.3)';
          case 'Intermediate': return 'rgba(160, 174, 192, 0.25)';
          default: return 'rgba(226, 232, 240, 0.2)';
        }
      }},
      0 0 0 1px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.1),
      0 0 30px ${props => {
        switch(props.level) {
          case 'Expert': return 'rgba(102, 126, 234, 0.4)';
          case 'Advanced': return 'rgba(118, 75, 162, 0.4)';
          case 'Intermediate': return 'rgba(160, 174, 192, 0.3)';
          default: return 'rgba(226, 232, 240, 0.2)';
        }
      }};
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
      animation: rotate 2s linear infinite;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const FlatIcon = styled.div<{ iconType: string }>`
  width: 28px;
  height: 28px;
  margin: 0 auto 10px;
  position: relative;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  transform-style: preserve-3d;
  
  ${props => {
    switch(props.iconType) {
      case 'lifecycle':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          border: 3px solid rgba(102, 126, 234, 0.3);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
          }
          &::after {
            content: '';
            position: absolute;
            top: 2px;
            right: 2px;
            width: 8px;
            height: 8px;
            background: #ffd700;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(255, 215, 0, 0.6);
          }
        `;
      case 'growth':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            bottom: 3px;
            left: 50%;
            transform: translateX(-50%);
            width: 10px;
            height: 4px;
            background: #fff;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'api':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 6px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 4px;
            right: 4px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 8px;
            left: 4px;
            right: 4px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'intelligence':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 6px;
          transform: rotate(45deg);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            background: #fff;
            border-radius: 3px;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'roadmap':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 4px;
            width: 7px;
            height: 3px;
            background: #fff;
            box-shadow: 0 5px 0 #fff, 0 10px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
          &::after {
            content: '';
            position: absolute;
            top: 7px;
            right: 4px;
            width: 7px;
            height: 3px;
            background: #fff;
            box-shadow: 0 5px 0 #fff, 0 10px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'revenue':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 10px;
            height: 10px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
          }
        `;
      case 'prioritization':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            left: 5px;
            top: 5px;
            width: 5px;
            height: 18px;
            background: #fff;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
          &::after {
            content: '';
            position: absolute;
            right: 5px;
            top: 9px;
            width: 5px;
            height: 14px;
            background: #fff;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'ai':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 5px;
            height: 5px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 9px 0 0 #fff, 5px 9px 0 #fff, 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'automation':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 9px;
            left: 9px;
            width: 10px;
            height: 10px;
            background: conic-gradient(#fff, rgba(255,255,255,0.5), #fff);
            border-radius: 50%;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'insights':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 5px;
            width: 4px;
            height: 10px;
            background: #fff;
            box-shadow: 5px 0 0 #fff, 10px 0 0 #fff, 15px 0 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'testing':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50% 50% 0 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 7px;
            height: 7px;
            background: #fff;
            border-radius: 50% 0;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 7px;
            right: 7px;
            width: 7px;
            height: 7px;
            background: #fff;
            border-radius: 0 50%;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'measurement':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          clip-path: polygon(0 100%, 25% 75%, 50% 25%, 75% 50%, 100% 0, 100% 100%);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            inset: 5px;
            background: #fff;
            clip-path: polygon(0 100%, 25% 75%, 50% 25%, 75% 50%, 100% 0, 100% 100%);
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'process':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            height: 3px;
            background: #fff;
            box-shadow: 0 7px 0 #fff, 0 14px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'communication':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50% 50% 0 50%;
          transform: rotate(-45deg);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 10px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 5px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'project':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 18px;
            height: 3px;
            background: #fff;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
          &::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 5px;
            width: 14px;
            height: 3px;
            background: #fff;
            box-shadow: 0 5px 0 #fff, 0 10px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'risk':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '!';
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            line-height: 1;
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
          }
        `;
      case 'change':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 14px;
            height: 14px;
            border: 3px solid #fff;
            border-radius: 50%;
            border-left-color: transparent;
            border-bottom-color: transparent;
            transform: rotate(45deg);
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
        `;
      case 'reporting':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 4px;
            left: 4px;
            right: 4px;
            bottom: 10px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 4px;
            left: 4px;
            right: 4px;
            height: 4px;
            background: #333;
            border-radius: 2px;
          }
        `;
      case 'performance':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 9px;
            left: 5px;
            width: 0;
            height: 0;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 10px solid #10b981;
            transform: rotate(45deg);
            filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.5));
          }
        `;
      case 'seo':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 10px;
            height: 10px;
            border: 3px solid #fff;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 7px;
            height: 3px;
            background: #fff;
            transform: rotate(45deg);
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'media':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 0;
            height: 0;
            border-left: 10px solid #fff;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
          &::after {
            content: '';
            position: absolute;
            top: 5px;
            right: 5px;
            width: 5px;
            height: 5px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 10px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'marketing-auto':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 7px;
            height: 7px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 10px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 -5px 0 #fff, 0 -10px 0 #fff, 0 0 4px rgba(255, 255, 255, 0.3);
          }
        `;
      case 'journey':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 12px;
            left: 5px;
            width: 18px;
            height: 3px;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
          }
          &::after {
            content: '';
            position: absolute;
            top: 10px;
            right: 3px;
            width: 0;
            height: 0;
            border-left: 5px solid #fff;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
        `;
      case 'retention':
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
          &::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: 18px;
            height: 18px;
            border: 3px solid #fff;
            border-radius: 50%;
            border-right-color: transparent;
            box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
          }
          &::after {
            content: '';
            position: absolute;
            top: 9px;
            right: 7px;
            width: 0;
            height: 0;
            border-left: 5px solid #fff;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.4));
          }
        `;
      default:
        return `
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        `;
    }
  }}
`;

const BadgeTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.1;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const BadgeLevel = styled.div<{ level: 'Expert' | 'Advanced' | 'Intermediate' }>`
  font-size: 0.68rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
  background: ${props => {
    switch(props.level) {
      case 'Expert': return 'rgba(102, 126, 234, 0.15)';
      case 'Advanced': return 'rgba(118, 75, 162, 0.15)';
      case 'Intermediate': return 'rgba(160, 174, 192, 0.15)';
      default: return 'rgba(226, 232, 240, 0.15)';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'Expert': return '#667eea';
      case 'Advanced': return '#764ba2';
      case 'Intermediate': return '#a0aec0';
      default: return '#cbd5e0';
    }
  }};
  padding: 3px 8px;
  border-radius: 12px;
  display: inline-block;
  margin-top: 4px;
  transition: all 0.4s ease;
  z-index: 2;
  position: relative;
  border: 1px solid ${props => {
    switch(props.level) {
      case 'Expert': return 'rgba(102, 126, 234, 0.2)';
      case 'Advanced': return 'rgba(118, 75, 162, 0.2)';
      case 'Intermediate': return 'rgba(160, 174, 192, 0.2)';
      default: return 'rgba(226, 232, 240, 0.2)';
    }
  }};
`;

const CategoryIcon = styled.span`
  font-size: 1.1rem;
  margin-right: 5px;
`;

// Education Section
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
`;

const EducationCard = styled.div`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }
`;

const SubjectsContainer = styled.div`
  margin-top: 20px;
`;

const SubjectsLabel = styled.h4`
  color: #333;
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '📚';
    font-size: 1.1rem;
  }
`;

const SubjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SubjectTag = styled.span`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  color: #667eea;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
    border-color: #667eea;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
  }
`;

// Download Section
const DownloadSection = styled.div`
  text-align: center;
  padding: 40px 0;
  margin-top: 40px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

// Component
const Resume: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    revenue: 0,
    markets: 0
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            
            setAnimatedStats({
              experience: Math.floor(6 * progress),
              projects: Math.floor(50 * progress),
              revenue: Math.floor(2 * progress),
              markets: Math.floor(4 * progress)
            });
            
            if (step >= steps) {
              clearInterval(interval);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "RESULTA",
      title: "Digital Product Strategist - Solution Delivery",
      duration: "January 2024 - Present",
      location: "Bedford, Canada",
      achievements: [
        "Led strategic planning and execution of product roadmaps using SAFe Agile frameworks, aligning cross-functional roadmaps to accelerate time-to-market and drive $2M+ ARR across five digital brands.",
        "Co-developed an AI-powered prototyping framework leveraging Cursor AI (code automation) and Figma AI (design), cutting development cycles in half and reducing MVP launch timelines from 12 weeks to 6.",
        "Developed and launched a Loyalty Program using Open Loyalty's API-first engine, leveraging real-time data to map user events, personalize rewards, and drive engagement and retention.",
        "Facilitated Joint Application Design (JAD) sessions, collaborating with product, engineering, sales, and marketing to define requirements and streamline high-impact feature rollouts and campaigns."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Product Team Lead",
      duration: "September 2022 – January 2024",
      location: "Bedford, Canada",
      achievements: [
        "Launched two new digital brands and rebranded three post-acquisitions, expanding into global markets and positioning them as challengers.",
        "Collaborated with engineering to define API specs for 10+ integrations, resolving critical customer workflow gaps and driving retention post-launch.",
        "Redesigned product messaging using Jobs-to-be-Done (JTBD) methodology, boosting sales win rates and differentiation in crowded markets.",
        "Collaborated on the launch of A/B testing frameworks (Optimizely, Google Optimize, VWO) boosting user activation and free-to-paid conversion by 10% in 12 months.",
        "Leveraged Cursor AI to develop high-impact PR campaigns, creating user-centric tools that accelerated backlink acquisition, amplified brand visibility, and drove exponential traffic growth.",
        "Negotiated agency contracts and reallocated underperforming spend, achieving 20% YoY cost savings without sacrificing lead quality.",
        "Managed the complete product lifecycle from discovery to post-launch support, focusing on developing customer-centric features that addressed key market needs."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Product Manager",
      duration: "October 2021 - September 2022",
      location: "Bedford, Canada",
      achievements: [
        "Leveraged Matomo and CRM analytics to refine campaign ROI, identifying high-value segments that drove $1M+ in attributed revenue.",
        "Partnered with performance teams to optimize paid media (Programmatic Ads) and landing page A/B tests, achieving lower CAC and improving lead-to-MQL conversion.",
        "Built and maintained product marketing automation infrastructure, supporting the customer journey from acquisition to retention, and improving lead generation and nurturing efforts.",
        "Acted as a liaison for customer feedback, translating insights into actionable product requirements and maintaining alignment across teams to ensure successful product releases."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Marketing Specialist",
      duration: "January 2021 - September 2021",
      location: "Bedford, Canada",
      achievements: [
        "Maintained multi-channel campaigns (Meta, Programmatic, SEO) driving 200+ MQLs and reducing CPA through A/B testing and geo-targeted segmentation.",
        "Delivered monthly performance dashboards (Google Data Studio), uncovering underperforming campaigns and redirecting $50K+ budget to high-ROI initiatives.",
        "Set up and manage tracking pixels, UTM parameters, and tag management using Google Tag Manager."
      ]
    },
    {
      company: "SPRING LOADED TECHNOLOGY",
      title: "Digital Marketing Assistant",
      duration: "June 2020 – December 2020",
      location: "Dartmouth, Canada",
      achievements: [
        "Built and managed the targeted Healthcare Professionals website using WordPress, creating a comprehensive resource hub with educational content and infographics, resulting in an increase in healthcare professional engagement.",
        "Collaborated with healthcare professionals to update and refine content and research materials, ensuring they were presented in a more accessible and patient-friendly format.",
        "Partnered with agencies to produce video ads, video testimonials and landing pages, improving ad relevancy and reducing bounce rates."
      ]
    },
    {
      company: "SCOTIA HVAC",
      title: "Digital Marketing Assistant",
      duration: "September 2019 – December 2019",
      location: "Halifax, Canada",
      achievements: [
        "Spearheaded digital promotions for 3 tradeshows using Mailchimp campaigns and targeted LinkedIn Ads, boosting attendance and capturing 100+ high-intent leads.",
        "Automated post-event nurture workflows, improving lead-to-customer conversion by 20% within 30 days through personalized email sequences and follow-up triggers.",
        "Developed ABM-focused collateral (case studies, product demos) using Canva, enabling sales teams to accelerate deal progression, reduce friction in decision-making, and shorten sales cycles while increasing deal sizes."
      ]
    },
    {
      company: "BHIVE WORKSPACE",
      title: "Digital Marketing Intern",
      duration: "March 2017 – June 2017",
      location: "Bangalore, India",
      achievements: [
        "Nurtured both online and offline communities, engaging with audiences on social media platforms to build brand loyalty and enhance visibility.",
        "Supported the management of content on CMS platforms, ensuring timely updates, accuracy, and a seamless user experience for community members."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Product Strategy",
      icon: "🚀",
      skills: [
        { name: "Product Lifecycle Management", level: 95, iconType: "lifecycle" },
        { name: "Product-Led Growth", level: 90, iconType: "growth" },
        { name: "API-First Design", level: 85, iconType: "api" },
        { name: "Competitive Intelligence", level: 88, iconType: "intelligence" },
        { name: "Roadmap Planning", level: 92, iconType: "roadmap" },
        { name: "Revenue Model Strategy", level: 87, iconType: "revenue" },
        { name: "Feature Prioritization", level: 90, iconType: "prioritization" },
      ]
    },
    {
      title: "AI & Data",
      icon: "🤖",
      skills: [
        { name: "AI Prototyping", level: 88, iconType: "ai" },
        { name: "Automation", level: 85, iconType: "automation" },
        { name: "Customer Insights", level: 90, iconType: "insights" },
        { name: "A/B Testing", level: 92, iconType: "testing" },
        { name: "Performance Measurement", level: 95, iconType: "measurement" },
      ]
    },
    {
      title: "Strategic Leadership",
      icon: "👑",
      skills: [
        { name: "Process Standardization", level: 93, iconType: "process" },
        { name: "Stakeholder Communication", level: 95, iconType: "communication" },
        { name: "Project Management", level: 90, iconType: "project" },
        { name: "Risk Assessment", level: 85, iconType: "risk" },
        { name: "Change Management", level: 88, iconType: "change" },
        { name: "Executive Reporting", level: 92, iconType: "reporting" },
      ]
    },
    {
      title: "Growth Marketing",
      icon: "📈",
      skills: [
        { name: "Performance Optimization", level: 90, iconType: "performance" },
        { name: "SEO/SEM", level: 88, iconType: "seo" },
        { name: "Paid Media Optimization", level: 92, iconType: "media" },
        { name: "Marketing Automation", level: 87, iconType: "marketing-auto" },
        { name: "Customer Journey Mapping", level: 90, iconType: "journey" },
        { name: "Customer Retention", level: 85, iconType: "retention" },
      ]
    }
  ];

  const education = [
    {
      institution: "Dalhousie University",
      degree: "Master of Business Administration",
      duration: "Graduated September 2019",
      location: "Halifax, Canada",
      subjects: [
        "Advanced Marketing", "Quantitative Decision Making", "Global Markets & Institutions", 
        "International Business", "Risk Management in Financial Institutions", "Leveraging Technology", 
        "Managing People", "Advanced Corporate Finance", "Leading with Responsibility", 
        "Strategic Leadership & Change Management", "Business Accounting"
      ]
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelors of Technology - Energy Engineering",
      duration: "Graduated May 2017",
      location: "Vellore, India",
      subjects: [
        "Manufacturing Processes", "Operations Research", "Materials Engineering & Technology", 
        "Project Management", "Instrumentation & Control Engineering", "Applied Mechanics", 
        "Principles of Marketing", "Energy Conservation, Audit & Management", "Energy System Modeling", 
        "Renewable Energy Sources", "Modern Physics", "Thermal Engineering Systems", 
        "Power Plant Engineering", "Computational Fluid Dynamics"
      ]
    }
  ];

  return (
    <ResumeContainer>
      <ContentWrapper>
        <HeroContentWrapper>
          <HeroSection>
            <HeroGrid>
              <HeroLeftContent>
                <HeroTitle>Kushal HP</HeroTitle>
                <HeroSubtitle>Product Team Lead · Digital Marketing Specialist · Solution Delivery</HeroSubtitle>
                <ContactInfo>
                  <ContactItem href="tel:+19024033023">📞 (+1) 902-403-3023</ContactItem>
                  <ContactItem href="mailto:hp.kushal95@outlook.com">✉️ hp.kushal95@outlook.com</ContactItem>
                  <ContactItem href="https://linkedin.com/in/kushal-hp-09121995" target="_blank">
                    🔗 LinkedIn Profile
                  </ContactItem>
                </ContactInfo>
              </HeroLeftContent>
              <HeroRightContent>
                <OfficeHoursButtonComponent />
              </HeroRightContent>
            </HeroGrid>
            
            <StatsGrid ref={statsRef}>
              <StatCard>
                <StatNumber>{animatedStats.experience}+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{animatedStats.projects}+</StatNumber>
                <StatLabel>Projects Delivered</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>${animatedStats.revenue}M+</StatNumber>
                <StatLabel>Revenue Generated</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{animatedStats.markets}+</StatNumber>
                <StatLabel>Global Markets</StatLabel>
              </StatCard>
            </StatsGrid>

            <SummarySection>
              <SummaryText>
                Product Leader with 6+ years of expertise in successful digital product launches and optimizing global market presence. 
                My experience in leveraging AI, machine learning, and digital marketing strategies sets me apart as a trailblazer in product evolution. 
                Recognized for transforming market insights into high-impact growth strategies, I have successfully driven product lifecycle success 
                across global markets, including LATAM, Europe, Australia, and India.
              </SummaryText>
            </SummarySection>
          </HeroSection>
        </HeroContentWrapper>

        <MainContentWrapper>
          <SidebarNav>
            <TabsList>
              <SidebarTabButton onClick={() => scrollToSection('experience')}>
                <TabIcon>💼</TabIcon>
                <TabText>Work Experience</TabText>
              </SidebarTabButton>
              <SidebarTabButton onClick={() => scrollToSection('skills')}>
                <TabIcon>💡</TabIcon>
                <TabText>Skills & Expertise</TabText>
              </SidebarTabButton>
              <SidebarTabButton onClick={() => scrollToSection('education')}>
                <TabIcon>🎓</TabIcon>
                <TabText>Education</TabText>
              </SidebarTabButton>
            </TabsList>
          </SidebarNav>

          <MainContent>
            <Section id="experience">
              <SectionHeader>Work Experience</SectionHeader>
              <ExperienceGrid>
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} expanded={expandedCards.includes(index)}>
                    <CompanyHeader>
                      <div>
                        <CompanyName>{exp.company}</CompanyName>
                        <JobTitle>{exp.title}</JobTitle>
                        <JobDuration>{exp.duration} | {exp.location}</JobDuration>
                      </div>
                    </CompanyHeader>
                    <ExpandButton onClick={() => toggleCard(index)}>
                      {expandedCards.includes(index) ? 'Show Less' : 'Show Details'}
                    </ExpandButton>
                    <AchievementsList expanded={expandedCards.includes(index)}>
                      {exp.achievements.map((achievement, i) => (
                        <Achievement key={i}>{achievement}</Achievement>
                      ))}
                    </AchievementsList>
                  </ExperienceCard>
                ))}
              </ExperienceGrid>
            </Section>

            <Section id="skills">
              <SectionHeader>Skills & Expertise</SectionHeader>
              <SkillsGrid>
                {skillCategories.map((category, index) => (
                  <SkillCategory key={index}>
                    <SkillCategoryTitle>
                      <CategoryIcon>{category.icon}</CategoryIcon>
                      {category.title}
                    </SkillCategoryTitle>
                    <BadgeGrid>
                      {category.skills.map((skill, i) => (
                        <SkillBadge key={i} level={skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}>
                          <FlatIcon iconType={skill.iconType} />
                          <BadgeTitle>{skill.name}</BadgeTitle>
                          <BadgeLevel level={skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}>
                            {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                          </BadgeLevel>
                        </SkillBadge>
                      ))}
                    </BadgeGrid>
                  </SkillCategory>
                ))}
              </SkillsGrid>
            </Section>

            <Section id="education">
              <SectionHeader>Education</SectionHeader>
              <EducationGrid>
                {education.map((edu, index) => (
                  <EducationCard key={index}>
                    <CompanyName>{edu.institution}</CompanyName>
                    <JobTitle>{edu.degree}</JobTitle>
                    <JobDuration>{edu.duration} | {edu.location}</JobDuration>
                    <SubjectsContainer>
                      <SubjectsLabel>Key Subjects:</SubjectsLabel>
                      <SubjectTags>
                        {edu.subjects.map((subject, i) => (
                          <SubjectTag key={i}>{subject}</SubjectTag>
                        ))}
                      </SubjectTags>
                    </SubjectsContainer>
                  </EducationCard>
                ))}
              </EducationGrid>
            </Section>

            <DownloadSection>
              <DownloadButton href="/KushalHP_CV_Product.pdf" download>
                📄 Download PDF Resume
              </DownloadButton>
            </DownloadSection>
          </MainContent>
        </MainContentWrapper>
      </ContentWrapper>
    </ResumeContainer>
  );
};

export default Resume;
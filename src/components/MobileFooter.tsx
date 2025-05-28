import React from 'react';
import styled from 'styled-components';
import { media } from '../styles/GlobalStyles';

const MobileFooterContainer = styled.footer`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px 30px;
  position: relative;
  overflow: hidden;
  display: none;

  ${media.mobile} {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="mobileFooterGrain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23667eea" opacity="0.03"/><circle cx="75" cy="75" r="1" fill="%23764ba2" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23mobileFooterGrain)"/></svg>');
    pointer-events: none;
  }
`;

const MobileContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const MobileFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
`;

const MobileFooterLogo = styled.div`
  margin-bottom: 15px;
`;

const MobileFooterLogoLink = styled.a`
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover, &:active {
    color: #667eea;
    transform: scale(1.05);
  }
`;

const MobileFooterNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MobileFooterNavRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const MobileFooterLink = styled.a`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 12px;
  border-radius: 8px;
  touch-action: manipulation;

  &:hover, &:active {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
`;

const MobileFooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(102, 126, 234, 0.2) 20%, 
    rgba(118, 75, 162, 0.3) 50%, 
    rgba(102, 126, 234, 0.2) 80%, 
    transparent 100%);
  margin: 15px 0;
`;

const MobileFooterSocial = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const MobileSocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #555;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  touch-action: manipulation;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover, &:active {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    i {
      transform: scale(1.1);
    }
  }

  i {
    font-size: 16px;
    transition: transform 0.3s ease;
  }
`;

const MobileFooterMessage = styled.p`
  font-size: 14px;
  color: #666;
  font-style: italic;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  margin-top: 10px;
`;

const MobileFooter: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MobileFooterContainer>
      <MobileContainer>
        <MobileFooterContent>
          <MobileFooterLogo>
            <MobileFooterLogoLink 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Kushal
            </MobileFooterLogoLink>
          </MobileFooterLogo>

          <MobileFooterNav>
            <MobileFooterNavRow>
              <MobileFooterLink href="/about">About Me</MobileFooterLink>
              <MobileFooterLink 
                href="#writing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('writing');
                }}
              >
                Writing
              </MobileFooterLink>
              <MobileFooterLink 
                href="#get-help"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('get-in-touch');
                }}
              >
                Get Help
              </MobileFooterLink>
            </MobileFooterNavRow>
            <MobileFooterNavRow>
              <MobileFooterLink 
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('resume');
                }}
              >
                Resume
              </MobileFooterLink>
              <MobileFooterLink 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </MobileFooterLink>
              <MobileFooterLink 
                href="#downloads"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('downloads');
                }}
              >
                Downloads
              </MobileFooterLink>
            </MobileFooterNavRow>
          </MobileFooterNav>

          <MobileFooterDivider />

          <MobileFooterSocial>
            <MobileSocialLink href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </MobileSocialLink>
            <MobileSocialLink href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </MobileSocialLink>
            <MobileSocialLink href="#" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </MobileSocialLink>
            <MobileSocialLink href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </MobileSocialLink>
            <MobileSocialLink href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </MobileSocialLink>
          </MobileFooterSocial>

          <MobileFooterMessage>
            Cooked from scratch in the Vibe Coding kitchen. No instant noodles, just spicy product magic.
          </MobileFooterMessage>
        </MobileFooterContent>
      </MobileContainer>
    </MobileFooterContainer>
  );
};

export default MobileFooter; 
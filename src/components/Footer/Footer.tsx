import styled from 'styled-components';
import facebookIcon from '../../assets/secondPage/icon/facebookIcon.svg?react';
import instagramIcon from '../../assets/secondPage/icon/instagramIcon.svg?react';
import twitterIcon from '../../assets/secondPage/icon/twitterIcon.svg?react';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LegalSection>
          <CopyrightText>© 2023 nginep, Inc.</CopyrightText>
          <FooterList>
            <ListItem>
              <FooterLink href="#">Terms</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Sitemap</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Privacy</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Your Privacy Choices</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Destinations</FooterLink>
            </ListItem>
          </FooterList>
        </LegalSection>
        <InfoSection>
          <FooterButton>English (US)</FooterButton>
          <FooterButton>Rp IDR</FooterButton>
          <FooterButton>Support & resources</FooterButton>
        </InfoSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 0px var(--box-shadow);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  padding: 15px 45px;
`;
const LegalSection = styled.section`
  display: flex;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  color: var(--dark-gray);
`;

const CopyrightText = styled.span``;

const FooterList = styled.ol`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child)::after {
    content: '·';
    margin: 0 10px;
  }
  &:first-child::before {
    content: '·';
    margin: 0 10px;
  }
`;

const FooterLink = styled.a`
  color: var(--dark-gray);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const InfoSection = styled.section`
  display: flex;
  gap: 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;

const FooterButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

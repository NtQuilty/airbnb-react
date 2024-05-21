import styled from 'styled-components';

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
  box-shadow: 0px 0px 2px 0px #22222240;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 45px;
  padding: 15px 0;
`;
const LegalSection = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  color: #3e3e3e; //TODO: css-variables SMDMHCE
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
  color: #3e3e3e; //TODO: css-variables SMDMHCE
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const InfoSection = styled.div`
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

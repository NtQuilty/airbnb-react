import styled from 'styled-components';
import FacebookIcon from '../../assets/secondPage/icon/facebookIcon.svg?react';
import InstagramIcon from '../../assets/secondPage/icon/instagramIcon.svg?react';
import TwitterIcon from '../../assets/secondPage/icon/twitterIcon.svg?react';
import { Link } from 'react-router-dom';

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <Link to={'https://facebook.com/'} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </Link>
      <Link to={'https://instagram.com/'} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </Link>
      <Link to={'https://twitter.com/'} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </Link>
    </SocialLinksContainer>
  );
};

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

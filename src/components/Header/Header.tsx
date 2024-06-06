import styled from 'styled-components';
import FilterIcon from '../../assets/headerIcon/filterIcon.svg?react';
import SearchIcon from '../../assets/headerIcon/searchIcon.svg?react';
import GlobeIcon from '../../assets/headerIcon/globeIcon.svg?react';
import EllipsisIcon from '../../assets/headerIcon/ellipsisIcon.svg?react';
import UserIcon from '../../assets/headerIcon/userIcon.svg?react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <CompanyLink to={'/'}>
          <CompanyName>аирбнб</CompanyName>
        </CompanyLink>
        <SearchContainer>
          <FilterButton>
            <FilterIcon />
          </FilterButton>
          <SearchInput placeholder="Staycation to Bali" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchContainer>
        <InfromationContainer>
          <SiteName>donef site</SiteName>
          <LanguageButton>
            <GlobeIcon />
          </LanguageButton>
          <LoginButton>
            <EllipsisIcon />
            <UserIcon />
          </LoginButton>
        </InfromationContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  box-shadow: 0px 0px 2px 0px var(--box-shadow);
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  padding: 19px 45px;
  margin: 0 auto;
`;

const CompanyLink = styled(Link)``;

const CompanyName = styled.div`
  color: var(--pink);
  font-weight: bold;
  font-size: 25px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 332px;
  box-shadow: 0px 0px 12px -2px var(--box-shadow);
  border-radius: 30px;
  padding: 0;
`;

const FilterButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 22px 7px 19px 23px;
  &:hover {
    background: var(--gray);
    border-radius: 30px 10px 10px 30px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 20px 0 20px 7px;
  &:hover {
    background: var(--gray);
    border-radius: 10px 20px 20px 10px;
  }
  &::placeholder {
    color: #bbbbbb;
    font-weight: 300;
  }
`;

const SearchButton = styled.button`
  padding: 10px 11px;
  background: var(--pink);
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background: var(--dark-pink);
  }
  svg {
    margin-bottom: -2px;
  }
`;

const InfromationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SiteName = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 11px 12px;
  border: none;
  border-radius: 30px;
  background: none;
  cursor: pointer;
  &:hover {
    background: var(--gray);
  }
`;

const LanguageButton = styled.button`
  padding: 11px 12px;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  &:hover {
    background: var(--gray);
  }
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 11px 12px;
  border: 1px solid var(--light-gray);
  box-shadow: 0px 0px 2px 0px var(--box-shadow);
  border-radius: 30px;
  background: none;
  cursor: pointer;
  &:hover {
    background: var(--gray);
    box-shadow: 0px 0px 7px 0px var(--box-shadow);
  }
`;

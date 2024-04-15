import styled from 'styled-components';

const Button = styled.button`
  display: grid;
  justify-items: end;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0 25px 0 0;
`;

interface BunnerIconProps {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BunnerIconButton({ src, alt, onClick }: BunnerIconProps) {
  return (
    <Button type="button" onClick={onClick}>
      <img src={src} alt={alt} />
    </Button>
  );
}

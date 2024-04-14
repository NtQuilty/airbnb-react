import { HidingIconProps } from './HidingIconProps';
import { Button } from './syled';

export default function HidingButton({ src, alt, onClick }: HidingIconProps) {
  return (
    <>
      <Button type="button" onClick={onClick}>
        <img src={src} alt={alt} />
      </Button>
    </>
  );
}

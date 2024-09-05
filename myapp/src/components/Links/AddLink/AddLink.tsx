import Button from '../../@Shared/Buttons/Button/Button';
import linkIcon from '../../../assets/Icons/link.png';
import { AddLinkContainer, AddLinkInput, AddLinkInputContainer, LinkIcon } from './AddLinkStyle';
import { ChangeEvent, useState } from 'react';

const AddLink = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = () => {};
  const handleSearchKeyDown = () => {};

  return (
    <AddLinkContainer>
      <AddLinkInputContainer>
        <LinkIcon src={linkIcon} alt="linkIcon" />
        <AddLinkInput
          type="text"
          placeholder="링크를 추가해 보세요"
          value={value}
          onChange={handleChange}
          onKeyDown={handleSearchKeyDown}
        />
        <Button onClick={handleClick}>추가하기</Button>
      </AddLinkInputContainer>
    </AddLinkContainer>
  );
};

export default AddLink;

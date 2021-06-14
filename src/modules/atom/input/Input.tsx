import {memo, FC} from 'react'
import styled from 'styled-components';

export interface InputProps  {
  handleChange: (value: string) => void
  type: 'text' | 'email' | 'password',
  placeholder: string
}

const Input: FC<InputProps> = ({handleChange, type, placeholder}: InputProps) => {
  return (
      <StyledInput
        data-testid="main-input-cp"
        onChange={({ target }) => handleChange(target.value)}
        placeholder={placeholder}
        type={type}
      />
  )
}
export const InputComponent = memo(Input)


const StyledInput = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  border: none;
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.corner};
  &:focus {
    outline: 0 !important;
  }
  margin-top: 1.5em;
  padding: 1em 1.2em;
  color: ${({ theme }) => theme.accent};
`;

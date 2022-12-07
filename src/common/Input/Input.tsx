import * as S from './styles';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input = ({ value, onChange, maxLength = 250, placeholder, secureTextEntry }: InputProps) => (
  <S.Input
    value={value}
    onChangeText={onChange}
    maxLength={maxLength}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
  />
);

export default Input;

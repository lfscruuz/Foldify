import { TextInput, TextInputProps } from 'react-native';
import { forms } from '@/styles/forms';


export function Input({... rest}: TextInputProps) {
  return(
    <TextInput {...rest}/>
  )
}

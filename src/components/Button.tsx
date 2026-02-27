import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
    label: string
}
export function Button({label, ...rest}:ButtonProps) {
    return (
        <TouchableOpacity {...rest}>
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}
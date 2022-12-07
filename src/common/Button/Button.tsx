import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


interface ButtonProps {
    title: string;
    onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;

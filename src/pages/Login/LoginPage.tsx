import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { ScreenOptions } from 'src';

const LoginPage = ({ navigation }: ScreenOptions) => {
    
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Login screen</Text>
        <Button title="Home" onPress={() => navigation.push('Home')} />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

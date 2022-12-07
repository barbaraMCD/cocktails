import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './SignIn.style';
import {TextInput} from 'react-native-paper';
import React, {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });

  const validPassword = useMemo(() => {
    return form.Password.length >= 6;
  }, [form.Password]);

  const validateForm = useCallback(() => {
    if (validPassword) {
      navigation.navigate('Tabnav');
    }
  }, [validPassword, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Inscription </Text>
      <View style={styles.form}>
        <TextInput
          value={form.Email}
          onChangeText={value => setForm({...form, email: value})}
          style={styles.input}
        />
        <TextInput
          value={form.Password}
          onChangeText={value => setForm({...form, Password: value})}
          secureTextEntry={true}
          style={validPassword ? styles.input : styles.inputInvalid}
        />
        {!validPassword ? (
          <Text> Le mot de passe doit contenir au moins 6 charactères</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}> M'inscrire </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;

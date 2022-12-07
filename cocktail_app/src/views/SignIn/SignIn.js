import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './SignIn.style';
import {TextInput} from 'react-native-paper';
import React, {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addUsers} from '../../store/reducers/users';

const SignIn = () => {
  const navigation = useNavigation();
  const {users} = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    id: Math.random(),
    Email: '',
    Password: '',
  });

  const validPassword = useMemo(() => {
    return user.Password.length >= 6;
  }, [user.Password]);

  const validateForm = useCallback(() => {
    if (validPassword) {
      dispatch(addUsers(user));
      navigation.navigate('Tabnav');
    }
  }, [validPassword, navigation, dispatch, user]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Inscription </Text>
      <View style={styles.form}>
        <TextInput
          value={user.Email}
          onChangeText={value => setUser({...user, Email: value})}
          style={styles.input}
        />
        <TextInput
          value={user.Password}
          onChangeText={value => setUser({...user, Password: value})}
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

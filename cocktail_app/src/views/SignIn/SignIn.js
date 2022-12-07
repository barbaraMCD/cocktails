import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './SignIn.style';
import {TextInput} from 'react-native-paper';
import React, {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addUsers} from '../../store/reducers/users';

const SignIn = () => {
  const navigation = useNavigation();
  const [isAlreadyAnAccount, setIsAlreadyAnAccount] = useState(false);
  const {users} = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    Email: '',
    Password: '',
  });

  const [user, setUser] = useState({
    id: Math.random(),
    Email: '',
    Password: '',
  });

  const validateUser = useCallback(() => {
    users.map(u => {
      if (login.Email == u.Email && login.Password == u.Password) {
        navigation.navigate('Tabnav');
      }
    });
  }, [navigation, users, login.Email, login.Password]);

  const validPassword = useMemo(() => {
    return user.Password.length >= 6;
  }, [user.Password]);

  const validateForm = useCallback(() => {
    if (validPassword) {
      dispatch(addUsers(user));
      setIsAlreadyAnAccount(!isAlreadyAnAccount);
    }
  }, [validPassword, dispatch, user, isAlreadyAnAccount]);

  return (
    <SafeAreaView style={styles.container}>
      {isAlreadyAnAccount ? (
        <>
          <Text style={styles.text}> Connexion </Text>
          <View style={styles.form}>
            <Text style={styles.label}> Email </Text>
            <TextInput
              value={login.Email}
              onChangeText={value => setLogin({...login, Email: value})}
              style={styles.input}
            />
            <Text style={styles.label}> Mot de passe </Text>
            <TextInput
              value={login.Password}
              onChangeText={value => setLogin({...login, Password: value})}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={validateUser}>
            <Text style={styles.buttonText}> Me connecter </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAlreadyAnAccount(!isAlreadyAnAccount)}>
            <Text style={styles.link}> Je n'ai pas de compte </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}> Inscription </Text>
          <View style={styles.form}>
            <Text style={styles.label}> Email </Text>
            <TextInput
              value={user.Email}
              onChangeText={value => setUser({...user, Email: value})}
              style={styles.input}
            />
            <Text style={styles.label}> Mot de passe </Text>
            <TextInput
              value={user.Password}
              onChangeText={value => setUser({...user, Password: value})}
              secureTextEntry={true}
              style={validPassword ? styles.input : styles.inputInvalid}
            />
            {!validPassword && !user.Password == 0 ? (
              <Text> Au moins 6 charactères </Text>
            ) : null}
          </View>
          <TouchableOpacity style={styles.button} onPress={validateForm}>
            <Text style={styles.buttonText}> M'inscrire </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsAlreadyAnAccount(!isAlreadyAnAccount)}>
            <Text style={styles.link}> Je possède déjà un compte </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default SignIn;

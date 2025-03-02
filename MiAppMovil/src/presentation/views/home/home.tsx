import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity, KeyboardType } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel'
import { CustomTextInput } from '../../components/CusatomTextInput';

export const HomeScreen = () => {
    const { email, password, onChange } = useViewModel();

    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>Dazhy´s Food</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Ingresar</Text>


                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='Entrar' onPress={() => {
                        console.log('Email: ' + email);
                        console.log('Password: ' + password);
                    }
                    }
                    />

                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tienes cuenta ?</Text>
                    <TouchableOpacity onPress={() => navigation.
                    navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}
                        >Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    ImageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },

    form: {
        width: '100%',
        height: '45%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
    },
});




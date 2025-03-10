import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, Touchable, TouchableOpacity }
    from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import useViewModel from './viewModel';
import { CustomTextInput } from '../../components/CusatomTextInput';
import styles from './Styles';

export const RegisterScreen = () => {
    const { name, lastname, email, phone, password, confirmPassword, onChange, register } = useViewModel();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.ImageBackground}
            />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/user_image.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>


                <CustomTextInput
                    image={require('../../../../assets/user.png')}
                    placeholder='Nombres'
                    keyboardType='default'
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />

                <CustomTextInput
                    image={require('../../../../assets/my_user.png')}
                    placeholder='Apellios'
                    keyboardType='default'
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />


                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />



                <CustomTextInput
                    image={require('../../../../assets/phone.png')}
                    placeholder='Telefono'
                    keyboardType='numeric'
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
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


                <CustomTextInput
                    image={require('../../../../assets/confirm_password.png')}
                    placeholder='Confirmar contraseña'
                    keyboardType='default'
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={() =>
                        register()} />

                </View>
            </View>

        </View>

    );
}



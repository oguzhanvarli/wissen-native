import { Button, StyleSheet, Text, TextInput, View, ToastAndroid, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('User Name is required!')
        .min(3, 'User Name too Sort')
        .max(20, 'User Name too Long'),
    password: Yup.string()
        .required('Password is required')
        .min(4, 'Password too short')
})

export default function Login() {

    const [loading, setLoading] = useState(false)

    const handleLogin =async (values) => {
        setLoading(true)
        await axios.post('/auth/login', values)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    ToastAndroid.show('Welcome', ToastAndroid.SHORT)
                }
            }).catch(error => {
                Alert.alert('Error', 'Wrong Username or Password')
            })
        setLoading(false)
    }

    return (
        <Formik
            initialValues={{ username: 'kminchelle', password: '0lelplR' }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={LoginSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <TextInput
                        style={styles.inputContainer}
                        placeholder='User Name'
                        onChangeText={handleChange("username")}
                        onBlur={handleBlur("username")}
                        value={values.username}
                    />
                    {errors.username && touched.username ?
                        <Text style={styles.error}>{errors.username}</Text>
                        : null
                    }
                    <TextInput
                        style={styles.inputContainer}
                        placeholder='Password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {errors.password && touched.password ?
                        <Text style={styles.error}>{errors.password}</Text>
                        : null}
                    <View style={styles.button}>
                        {loading ? <ActivityIndicator color="aqua" size={'medium'} /> :
                            <Button
                                color={'#778899'}
                                title='Login'
                                onPress={handleSubmit}
                            />}
                    </View>
                </View>
            )}

        </Formik>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'gray',
        marginHorizontal: 15,
        color: 'white',
        fontSize: 20,
        marginTop: 30
    },
    button: {
        marginHorizontal: 100,
        marginTop: 50
    },
    error: {
        color: 'red',
        fontSize: 20,
        marginHorizontal: 25
    }
})
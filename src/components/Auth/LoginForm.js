import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue)
    }
  })
  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize={'none'}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        autoCapitalize='none'
        style={styles.input}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title='Join' onPress={formik.handleSubmit} style={styles.button} />

      <Text style={styles.error}>
        {formik.errors.username}
      </Text>

      <Text style={styles.error}>
        {formik.errors.password}
      </Text>
    </View>
  )
}

function initialValues() {
  return {
    username: "",
    password: ""
  }
}

function validationSchema() {
  return {
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  }
})

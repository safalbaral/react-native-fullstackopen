import { Pressable, TextInput, View } from 'react-native';
import Text from './Text';
import {useFormik} from 'formik'
import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10
    },
    formField : {
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    },
    button : {
        backgroundColor: theme.colors.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    }
})

const onSubmit = (values) => {
    console.log('Values', values)
}

const initialValues = {
    username: '',
    password: ''
}

const SignInForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        onSubmit
    })
  return (
    <View style={styles.container}>
        <TextInput 
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.formField}
        />
        <TextInput 
        secureTextEntry
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={styles.formField}
        />
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
            <Text fontWeight='bold' style={{color: 'white'}}>Sign In</Text>
        </Pressable>
    </View>
  )
}

const SignIn = () => {
    return <SignInForm onSubmit={onSubmit} />
};

export default SignIn;
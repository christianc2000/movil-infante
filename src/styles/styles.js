import { StyleSheet } from 'react-native';
import colors from './colors';

//Estilos para MainScreen
const mainStyles = StyleSheet.create({

    container: {
        //flex: 1,
        alignItems: 'center',
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 25,
    },

    titleText: {
        paddingTop: 10,
        padding: 10,
        fontSize: 23,
        marginTop: 20,
        color: colors.BLACKSECONDARY,
        fontFamily: "Poppins"
    },

    btnMain: {
        width: 280,
        //marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: colors.BLACK,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: colors.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: colors.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }

})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    contain_logo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contain_form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contain_footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        paddingTop: 50,
        alignItems: 'center',
        borderRadius: 26,
    },
    btnMain: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: colors.YELLOW2,
        borderRadius: 18
    },
    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: colors.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },
    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },
    txtTransparent: {
        color: colors.WHITE,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    }
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: colors.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: 'center',
        borderRadius: 60,
    },
})

export { mainStyles, splashStyles, loginStyles, registroStyles }
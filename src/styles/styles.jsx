import { StyleSheet } from 'react-native';

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
        paddingTop: 80,
        padding: 27,
        fontSize: 28,
        marginTop: 20,
        color: color.BLACKSECONDARY,
        fontFamily: "Poppins"
    },

    btnMain: {
        width: 280,
        //marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: color.BLACK,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
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
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
    stretch: {
        width: 350,
        resizeMode: 'cover',
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE,
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
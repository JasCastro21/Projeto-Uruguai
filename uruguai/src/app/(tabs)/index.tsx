import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { theme } from '@/theme';

export default function Home() {
    return (
        <ImageBackground 
            source={require('../../img/Fundo 1.png')} 
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../img/Logo-roxo 1.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Onde o movimento{'\n'}
                    <Text style={styles.boldText}>se encontra com a emoção</Text>
                </Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.registerText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 250, 
        height: 250, 
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start', 
        paddingLeft: 50, 
    },
    text: {
        fontSize: 20,
        color: theme.colors.white,
        textAlign: 'left', 
        fontFamily: theme.fontFamily.regular,
        marginBottom: 20,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    card: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30, 
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, 
        minHeight: 200, 
    },
    loginButton: {
        backgroundColor: theme.colors.purple[500],
        padding: 15,
        borderRadius: 25,
        width: '100%',
        marginBottom: 10,
    },
    loginText: {
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fontFamily.regular,
        fontSize: 15,
    },
    registerButton: {
        backgroundColor: theme.colors.purple[500],
        padding: 15,
        borderRadius: 25,
        width: '100%',
    },
    registerText: {
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: theme.fontFamily.regular,
        fontSize: 15,
    },
});

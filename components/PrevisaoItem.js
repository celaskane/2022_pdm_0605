import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const PrevisaoItem = ({previsao}) => {
    const dt = previsao.dt
    const temp_min = previsao.main.temp_min
    const temp_max = previsao.main.temp_max
    const humidity = previsao.main.humidity
    const description = previsao.weather[0].description
    const icon = previsao.weather[0].icon
    return (
    <Cartao estilos={styles.cartao}>
        <View style={styles.tela}>
            <Image 
                style={styles.imagem}
                source={{uri: "https://openweathermap.org/img/wn/"+ icon +".png"}}
            />
            <View>
                <View style={styles.primeiraLinha}>
                    <Text>data: {new Date(dt * 1000).toLocaleDateString()} </Text>
                    <Text>descrição: {description}</Text>
                </View>
                <View style={styles.segundaLinha}>
                    <Text style={styles.valor}>Temp min: {temp_min+"\u00BBC"}</Text>
                    <Text style={styles.valor}>Temp max: {temp_max+"\u00BBC"}</Text>
                    <Text style={styles.valor}>Hum: {humidity+"%"}</Text>
                </View>
            </View>
        </View>
    </Cartao>
    )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        color: '#DDD'
    },
    valor:{
        marginHorizontal: 2
    }
})
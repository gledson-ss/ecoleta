import React from 'react'

import Constants from 'expo-constants'
import {Feather as Icon} from '@expo/vector-icons'
import {View, StyleSheet, Image, TouchableOpacity, Text, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import MapView, {Marker} from 'react-native-maps'

import {SvgUri} from 'react-native-svg'
const Points = () =>{
    const navigation = useNavigation();
    function handleNavigateBack(){
        navigation.goBack();
    }

    function handleNavigateToDetail(){
        navigation.navigate('Detail')
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Icon name="arrow-left" size={20} color='#34cb79' />
                </TouchableOpacity>

                <Text style={styles.title}>
                    Bem vindo.
                </Text>

                <Text style={styles.description}>
                    Encontre no mapa um ponto de coleta.
                </Text>

                <View style={styles.mapContainer}>
                    <MapView 
                        style={styles.map} 
                        initialRegion={{
                            latitude: 57.2504631,
                            longitude: 90.6099908,
                            latitudeDelta: 0.014,
                            longitudeDelta: 0.014
                    }}
                    >
                        <Marker 
                            style={styles.mapMarker}
                            onPress={handleNavigateToDetail}
                            coordinate={{ 
                                latitude: 57.2504631,
                                longitude: 90.6099908, }}
                        >
                        <View style={styles.mapMarkerContainer}>
                            <Image 
                                source={{uri: "https://lh3.googleusercontent.com/proxy/Iq5ycB5t-HamTZgHJ3UFwpHwoY8PYU8VQ9MSC5ou7pfnZ1IR103EEy5X2yT-5czQU0WrYDOzaNkXmHjxxv-aa2CL2QgCL0vtLS4aXSZI6zYcSpQyGSg2mMr7aT6b2U3S7UEOgOT5LDXlhe5iYlbvU_0"}} 
                                style={styles.mapMarkerImage}
                            /> 
                            <Text style={styles.mapMarkerTitle}>
                                Mercado
                            </Text>
                        </View>
                        </Marker>
                    </MapView>
                </View>
             </View>

             <View style={styles.itemsContainer}>
                 <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:20}}
                 >
                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={24} height={42} uri="http://192.168.0.106:3333/uploads/lampadas.svg"/>
                        <Text style={styles.itemTitle}>
                            Lâmpdas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={24} height={42} uri="http://192.168.0.106:3333/uploads/lampadas.svg"/>
                        <Text style={styles.itemTitle}>
                            Lâmpdas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={24} height={42} uri="http://192.168.0.106:3333/uploads/lampadas.svg"/>
                        <Text style={styles.itemTitle}>
                            Lâmpdas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item} onPress={() => {}}>
                        <SvgUri width={24} height={42} uri="http://192.168.0.106:3333/uploads/lampadas.svg"/>
                        <Text style={styles.itemTitle}>
                            Lâmpdas
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
             </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });

export default Points
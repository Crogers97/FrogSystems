import React from 'react';
import {Text, View, Image, Pressable, Linking} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialMedia = () => {
    return (
        <View style={styles.container}>
            <Pressable 
        onPress={() =>{ Linking.openURL('https://www.facebook.com/frogsystems')
            ;
        }}>
            <Icon style={styles.social} name="facebook-f" size={30} color="#900" />
            </Pressable>

            <Pressable 
        onPress={() =>{ Linking.openURL('https://www.linkedin.com/company/frog-systems-ltd/')
            ;
        }}>
            <Icon style={styles.social} name="linkedin" size={30} color="#900" />
            </Pressable>

            <Pressable 
        onPress={() =>{ Linking.openURL('https://twitter.com/frogsystemsltd')
            ;
        }}>
            <Icon style={styles.social} name="twitter" size={30} color="#900" />
            </Pressable>

    
        </View>
    )
}

export default SocialMedia;
import React from 'react';
import {Text, View, Image} from 'react-native';
import Button from '../Button';
import styles from './styles';
import SocialMedia from '../SocialMedia';

const CardItem = (props) => {
    return (
        < View style={styles.frogContainer}>
            <Image
                source={require('../../assets/images/frog.png')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.name}>Calum Rogers</Text>
                <Text style={styles.job}>Junior Software Developer</Text>
                <Text style={styles.company}>Frog Systems</Text>
            </View>

            <SocialMedia/>

        <Button/>

        </View>
    );
};

export default CardItem;
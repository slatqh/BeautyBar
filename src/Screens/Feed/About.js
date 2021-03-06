import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TextCustom, Divider, Title } from '../../Components';
import Colors from '../../../constans/Colors';

const { width } = Dimensions.get('window');

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Title title="about" navigation={this.props.navigation} />

                <View style={{ flex: 2 }}>
                    <Image
                        source={require('../../../assets/images/map.jpg')}
                        style={{ width: '100%', flex: 1 }}
                    />
                </View>
                <View style={styles.mainInfo}>
                    <Text style={styles.title}>JUICE SPA SALON</Text>
                    <View style={styles.address}>
                        <TextCustom
                            black
                            size={10}
                            title="Shop No 8, Nashwan Building, Mankholl Road, Bur Dubai, Dubai UEA"
                        />
                    </View>
                </View>
                <Divider title="OPEN HOURS" />
                <View style={styles.Section}>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>Today</Text>
                        <Text style={styles.detailInfoValue}>10:00-21:00</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>Mon-Fri</Text>
                        <Text style={styles.detailInfoValue}>
                            10:00 - 21:00
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>
                            Religious Holidays
                        </Text>
                        <Text style={styles.detailInfoValue}>
                            Call to inquire
                        </Text>
                    </View>
                </View>
                <Divider title="CONTACT INFO" />
                <View style={styles.Section}>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>Telephone</Text>
                        <Text style={styles.detailInfoValue}>
                            +354 545 8544
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>Email</Text>
                        <Text style={styles.detailInfoValue}>
                            example@gmail.com
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.detailInfoKey}>Website</Text>
                        <Text style={styles.detailInfoValue}>
                            www.website.com
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.Phone}>
                        <Icon
                            name="phone"
                            size={20}
                            type="fontawesome"
                            color={Colors.purple}
                        />
                        <Text style={styles.buttonTitle}>CALL VENUE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
    },
    Section: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
    },
    mainInfo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
    },
    title: {
        color: 'black',
        letterSpacing: 2,
        fontFamily: 'montserrat-medium',
        fontSize: 20,
        marginLeft: 5,
    },
    address: {
        width: width / 1.6,
        alignItems: 'center',
        paddingBottom: 10,
        fontSize: 10,
        color: '#464646',
    },
    buttonContainer: {
        borderWidth: 2,
        borderRadius: 30,
        borderColor: Colors.purple,
        margin: 20,
    },
    buttonTitle: {
        color: Colors.purple,
        paddingVertical: 15,
        marginLeft: 10,
        fontFamily: 'montserrat-medium',
        fontSize: 15,
        letterSpacing: 1,
    },
    detailInfoKey: {
        flex: 1,
        fontSize: 13,
    },
    detailInfoValue: {
        fontSize: 13,
        color: Colors.purple,
    },
    Phone: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        flexDirection: 'row',
    },
});

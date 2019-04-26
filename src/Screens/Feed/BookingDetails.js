import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    FeedHeader,
    ServiceTitle,
    CardPrice,
    TextCustom,
    CustomButton,
} from '../../Components';
import Colors from '../../../constans/Colors';
import { italic } from 'ansi-colors';

export default class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <FeedHeader navigation={this.props.navigation} />
                <View style={styles.textWraper}>
                    <Text style={{ fontFamily: 'montserrat' }}>
                        Here are the details of your booking.
                    </Text>
                    <Text style={{ fontFamily: 'montserrat', padding: 10 }}>
                        If everything looks good, click the button
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontFamily: 'montserrat',
                        }}>
                        below to confirm!
                    </Text>
                </View>
                <View style={styles.mainView}>
                    <ServiceTitle title="Booking" size={14} black />
                </View>
                <View style={styles.view}>
                    <View style={styles.body}>
                        <View style={styles.confirmDetails}>
                            <View style={{ flex: 0.2 }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'montserrat',
                                    }}>
                                    1
                                </Text>
                            </View>
                            <View style={{ flex: 0.8 }}>
                                <TextCustom
                                    title="Blow Dry"
                                    size={12}
                                    styles={{
                                        color: 'black',
                                        fontWeight: '500',
                                    }}
                                />
                                <TextCustom title="45 minutes" black />
                                <TextCustom
                                    title="Thuesday February 1, 2019"
                                    black
                                />
                                <TextCustom title="11:00 - 11:45" black />
                                <TextCustom
                                    title="Special requirements: None"
                                    black
                                />
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <TextCustom title="$85" purple size={14} />
                            </View>
                        </View>
                        <View style={styles.total}>
                            <TextCustom title="Total" size={14} black />
                            <TextCustom
                                title="$85"
                                purple
                                size={14}
                                styles={{ marginRight: 30, fontWeight: '400' }}
                            />
                        </View>
                        <TextCustom
                            title="Payment required at the venue"
                            styles={{
                                color: Colors.darkBlue,
                                fontStyle: 'italic',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            marginTop: 20,
                            justifyContent: 'flex-end',
                            paddingVertical: 15,
                        }}>
                        <CustomButton
                            gradient
                            title="CONFIRM BOOKING"
                            onPress={() =>
                                this.props.navigation.navigate('ConfirmFinal')
                            }
                        />
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                marginTop: 24,
                            }}
                            onPress={() =>
                                this.props.navigation.navigate('FeedMain')
                            }>
                            <TextCustom
                                title="Or Cancel Booking"
                                color={Colors.purple}
                                size={14}
                                black
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    textWraper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    mainView: {
        paddingHorizontal: 15,
    },
    view: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    containerOr: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20,
    },
    line: {
        width: 50,
        borderTopWidth: 4,
        borderTopColor: '#cfd8dc',
    },
    or: {
        paddingHorizontal: 10,
        fontFamily: 'Montserrat',
        color: '#7f8184',
    },
    body: {
        flex: 1,
        marginLeft: 15,
    },
    confirmDetails: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
    },
    total: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmation: {
        flex: 0.5,
        color: Colors.darkBlue,
        fontSize: 12,
    },
    booking: {
        flex: 0.3,
        alignSelf: 'flex-start',
        marginLeft: 15,
    },
});

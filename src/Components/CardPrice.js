import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TextCustom from './TextCustom';
import Colors from '../../constans/Colors';
import Shadows from '../../constans/Styles';

export default class CardPrice extends Component {
    state = {
        checked: false,
    };
    render() {
        return (
            <TouchableOpacity
                style={[styles.container, Shadows]}
                onPress={this.props.onPress}
                disabled={this.props.disabled}>
                <View style={styles.inner}>
                    <TextCustom
                        size={14}
                        title="Women's Designer"
                        styles={{ color: '#464646' }}
                    />
                    <Text
                        style={{
                            color: '#464646',
                            fontSize: 13,
                        }}>
                        45 minutes
                    </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                    <CheckBox
                        left
                        titleProps={{
                            style: {
                                color: Colors.purple,
                                fontSize: 16,
                                marginRight: 15,
                            },
                        }}
                        title="$230"
                        textStyle={{ fontFamily: 'monserrat', fontSize: 14 }}
                        iconRight
                        containerStyle={{
                            backgroundColor: 'white',
                            borderColor: 'white',
                        }}
                        checkedIcon="check-circle"
                        uncheckedIcon="circle-thin"
                        uncheckedColor={Colors.purple}
                        checkedColor={Colors.purple}
                        checked={this.state.checked}
                        onPress={() =>
                            this.setState({ checked: !this.state.checked })
                        }
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: Colors.darkBlue,
        opacity: 0.8,
        borderLeftColor: Colors.purple,
        borderWidth: 0.5,
        borderLeftWidth: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    inner: {
        justifyContent: 'center',
        marginLeft: 10,
        flex: 2,
    },
});

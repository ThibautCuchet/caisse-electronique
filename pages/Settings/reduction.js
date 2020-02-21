import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'

class Reduction extends Component {


    getReductions = () => {
        return Object.keys(this.props.cart.reduction);
    }

    render() {
        const reductions = this.getReductions()
        return (
            <View>
                <ScrollView>
                    {reductions ?
                        reductions.map(reduction => (
                            <ListItem
                                title={reduction}
                                key={reduction}
                                chevron
                                bottomDivider
                                onPress={() => { }
                                }
                            />
                        ))
                        : <Text>Il n'y a pas de reduction</Text>}
                </ScrollView>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Ajouter"
                        buttonStyle={{
                            borderRadius: 25,
                            backgroundColor: COLORS_APP.PRIMARY_COLOR_ACCENT
                        }}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}

export default connect(mapStateToProps)(Reduction)
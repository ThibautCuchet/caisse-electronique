import React, { Component } from 'react';
import { ScrollView, Text, View } from "react-native"
import { connect } from "react-redux";

class Product extends Component {

    getProducts = (category) => {
        return Object.keys(this.props.products[category]);
    }

    render() {
        const category = "";
        const products = this.getProducts(category);
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    {products ?
                        products.map(product => (
                            <ListItem
                                title={product}
                                key={product}
                                chevron
                                bottomDivider
                                onPress={() => { }
                                }
                            />
                        ))
                        : <Text>Vous n'avez pas encore de produits dans {category}</Text>}
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

const mapStateToProps = ({ products }) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Product);
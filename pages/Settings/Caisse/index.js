import { createStackNavigator } from 'react-navigation-stack'
import category from './category'
import product from './product';

const CaisseSetttingsNavigator = createStackNavigator(
    {
        Category: {
            screen: category
        },
        Product: {
            screen: product
        }
    },
    {
        initialRoute: "Category"
    }
)

export default CaisseSetttingsNavigator;
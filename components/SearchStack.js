import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import CategoryList from "../screens/CategoryList";

const Stack = createStackNavigator();

const SearchStack = ({ route }) => {
  const { category } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{ title: { category } }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;

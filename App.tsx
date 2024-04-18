import React, {useState, useRef} from 'react';
import {ThemeProvider, createTheme, Header} from '@rneui/themed';
import {StatusBar, useColorScheme, Text, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Carousel from 'react-native-snap-carousel';
import {Icon} from 'react-native-elements';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'dark',
});

function Feed() {
  // Example data for carousel items
  const [carouselItems, setCarouselItems] = useState([
    {title: 'Item 1', text: 'Text 1'},
    {title: 'Item 2', text: 'Text 2'},
    {title: 'Item 3', text: 'Text 3'},
    {title: 'Item 4', text: 'Text 4'},
    {title: 'Item 5', text: 'Text 5'},
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  // Render function for carousel items
  const renderItem = ({item, index}) => (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 5,
        marginRight: 5,
      }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={carouselItems}
        sliderWidth={400}
        itemWidth={500}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="rowing" />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => <Icon name="rowing" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="rowing" />,
        }}
      />
    </Tab.Navigator>
  );
}
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <Header
          backgroundImageStyle={{}}
          barStyle="default"
          centerComponent={{
            text: 'MY NATIVE APP',
            style: {color: '#fff'},
          }}
          centerContainerStyle={{}}
          leftContainerStyle={{}}
          placement="center"
          rightContainerStyle={{}}
          statusBarProps={{}}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['blue', 'pink'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider, createTheme, Header} from '@rneui/themed';
import {StatusBar, useColorScheme, Text} from 'react-native';

import {Tab, TabView} from '@rneui/themed';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'dark',
});

function App(): React.JSX.Element {
  const [index, setIndex] = React.useState(0);
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

        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item>
            <Text>Recent</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Favorite</Text>
          </TabView.Item>
          <TabView.Item>
            <Text>Cart</Text>
          </TabView.Item>
        </TabView>

        <Tab
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={{}}
          variant="primary">
          <Tab.Item title="Recent" />
          <Tab.Item title="favourite" />
          <Tab.Item title="cart" />
        </Tab>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;

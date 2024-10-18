import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {useMemo} from 'react';
import {Platform} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import MainRouter from './MainRouter';
// import SignedOutRouter from './SignedOutRouter'
// import useGeneralStore from '../stores/general'
// import useUserStore from '../stores/user'
function Router(): React.JSX.Element {
  // const authToken = useUserStore(state => state.authToken)
  // const isLoading = useUserStore(state => state.isLoading)

  const navTheme = useMemo(() => {
    const defaultTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
      },
    };

    // if (authToken === null) defaultTheme.colors.background = 'transparent'

    return defaultTheme;
  }, [/* authToken */]);

  const activeRouter = useMemo(
    () => (
      <NavigationContainer
        theme={navTheme}
        /* key={authToken} */
        onReady={() => {
          if (Platform.OS === 'ios') {
            BootSplash.hide({fade: true}).catch(error => {
              console.log(error);
              throw error;
            });
          }
        }}>
        {/* authToken === null ? <SignedOutRouter /> : */ <MainRouter />}
      </NavigationContainer>
    ),
    [/* authToken, */ navTheme],
  );

/*   if (isLoading) return <View>Is loading.........</View>; */

  return activeRouter;
}

export default Router;

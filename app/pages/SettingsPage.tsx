import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Divider, makeStyles } from '@rneui/themed'
import { ScrollView } from 'react-native-gesture-handler'

import LightBoxContainer from '../components/LightBoxContainer'
import ListItemElement from '../components/ListItemElement'
import PageWrapper from '../components/PageWrapper'
import View from '../components/View'
import type { SettingsRouterParamList } from '../router/_routes'

type Props = NativeStackScreenProps<SettingsRouterParamList, 'Settings'>

const useStyles = makeStyles({
  parentContainer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 24
  },
  logo: {
    marginTop: 24,
    marginBottom: 27
  },
  accountCard: {
    marginTop: 8,
    marginBottom: 16
  },
  listElement: {
    marginVertical: 8
  },
  divider: {
    marginTop: 24,
    marginBottom: 32
  },
  logOutButton: {
    width: '100%',
    marginTop: 32,
    marginBottom: 5
  },
  empty: {
    flex: 1
  }
})

function SettingsPage({ navigation }: Props): React.JSX.Element {
  const styles = useStyles()
  const goToStyles = () => navigation.navigate('Styleguide')
  const goToNotifications = () => navigation.navigate('Notifications')

  // const doSignOut = useMutation({
  //   mutationFn: async () => {
  //     await loggedInAccount?.signOut();
  //   },
  // });

  return (
    <PageWrapper>
      <View style={styles.parentContainer} pb32>
        {/* {loggedInAccount && loggedInAccount.admin && ( */}
        <ListItemElement
          title="Go to style guide"
          onPress={goToStyles}
          icon={['fas', 'dragon']}
          rightIcon={['fas', 'paw']}
          style={styles.listElement}
        />
        {/* )} */}

        <ListItemElement
          title={'nav.notifications'}
          onPress={goToNotifications}
          icon={['fas', 'paw']}
          rightIcon={['fas', 'dragon']}
          style={styles.listElement}
        />
        <View style={styles.empty} />
        <Divider style={styles.divider} />
        {/* <ButtonElement
          color="primary"
          title="nav.logout"
          disabled={doSignOut.isPending}
          onPress={() => {
            doSignOut.mutate();
          }}
          style={{width: '100%'}}
        /> */}
      </View>
    </PageWrapper>
  )
}

export default SettingsPage
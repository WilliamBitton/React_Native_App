import { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Colors, Divider } from '@rneui/themed'
import { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

import AlertBox from '../components/AlertBox'
import BoxListItem from '../components/BoxListItem'
import LoadingState from '../components/LoadingState'
import PageWrapper from '../components/PageWrapper'
import SectionTitle from '../components/SectionTitle'
import View from '../components/View'
import type { HomeRouterParamList } from '../router/_routes'

type Props = NativeStackScreenProps<HomeRouterParamList, 'Home'>

interface Data {
  id: string
  title: string
  subtitle: string
  imageSrc?: string
  onPress?: () => undefined
  icon?: IconProp
  iconColor?: keyof Omit<Colors, 'platform'>
}

function HomePage({ navigation }: Props): React.JSX.Element {
  const goToSubstituteRequests = () => navigation.navigate('SubstituteRequests')
  const [refreshing, setRefreshing] = useState(false)

  // const { isPending, data, refetch } = useQuery({
  //   queryKey: ['listMySubstituteRequestsRecipients'],
  //   queryFn: () => Account.listMySubstituteRequestsRecipients()
  // })

  // TODO Some error message could be displayed to the user in a modal -> .catch
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true)
  //   refetch()
  //     .then(() => setRefreshing(false))
  //     .catch(error => console.log(error))
  //     .finally(() => setRefreshing(false))
  // }, [refetch])

  const data: Data[] = [
    {
      id: '1',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '2',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'dragon'],
      iconColor: 'green'
    },
    {
      id: '3',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '4',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'paw'],
      iconColor: 'primary'
    },
    {
      id: '5',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '6',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'dragon'],
      iconColor: 'primary'
    },
    {
      id: '7',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '8',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'paw'],
      iconColor: 'yellow'
    },
    {
      id: '9',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '10',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'dragon'],
      iconColor: 'primary'
    },
    {
      id: '11',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '12',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'paw'],
      iconColor: 'green'
    },
    {
      id: '13',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    {
      id: '14',
      title: 'Test content box',
      subtitle: 'content box',
      icon: ['fas', 'dragon'],
      iconColor: 'yellow'
    },
    {
      id: '15',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '16', title: 'Test content box', subtitle: 'content box' },
    {
      id: '17',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '18', title: 'Test content box', subtitle: 'content box' },
    {
      id: '19',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '20', title: 'Test content box', subtitle: 'content box' },
    {
      id: '21',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '22', title: 'Test content box', subtitle: 'content box' },
    {
      id: '23',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '24', title: 'Test content box', subtitle: 'content box' },
    {
      id: '25',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '26', title: 'Test content box', subtitle: 'content box' },
    {
      id: '27',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '28', title: 'Test content box', subtitle: 'content box' },
    {
      id: '29',
      title: 'Test content box',
      subtitle: 'content box',
      imageSrc: 'https://picsum.photos/200'
    },
    { id: '30', title: 'Test content box', subtitle: 'content box' }
  ]

  return (
    <PageWrapper>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} /* onRefresh={onRefresh} */ />}>
        <View ph24>
          <View mt24 mb32></View>
          <AlertBox
            title="Muvac Mobile Version 0.1"
            message={"Read what it's all about"}
            icon={['fas', 'dragon']}
            mb32
          />
        </View>
        <Divider mb32 />
        <View ph24 mb24>
          {data && data.length > 0 ? (
            <SectionTitle title="Requests" link="View all" onPress={goToSubstituteRequests} />
          ) : (
            <SectionTitle title="Requests" />
          )}
          {data == null /* || isPending */ ? (
            <LoadingState />
          ) : (
            data.slice(0, 3).map(substituteRequestRecipient => (
              <BoxListItem
                key={substituteRequestRecipient.id}
                title={substituteRequestRecipient.title ?? ''}
                subtitle={substituteRequestRecipient.subtitle ?? ''}
                imageSrc={substituteRequestRecipient.imageSrc ?? undefined}
                icon={substituteRequestRecipient.icon ?? undefined}
                iconColor={substituteRequestRecipient.iconColor ?? undefined}
                mb16
                onPress={() => {
                  /* navigation.navigate('SubstituteRequest', {
                    slug: substituteRequestRecipient.slug,
                  }); */
                }}
              />
            ))
          )}
        </View>
        <View ph24>
          <SectionTitle title="Applications" />
          <AlertBox message="Not yet !" color="gray400" title="test" />
        </View>
      </ScrollView>
    </PageWrapper>
  )
}

export default HomePage

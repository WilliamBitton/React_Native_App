import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { Colors } from '@rneui/themed'
import { makeStyles } from '@rneui/themed'

import BoxListItem from '../components/BoxListItem'
import SectionHeader from '../components/SectionHeader'
import View from '../components/View'

const useStyles = makeStyles(() => ({
  container: {
    paddingHorizontal: 24
  },
  sectionHeader: {
    marginVertical: 20
  }
}))

interface Data {
  id: string
  title: string
  subtitle: string
  imageSrc?: string
  onPress?: () => undefined
  icon?: IconProp
  iconColor?: keyof Omit<Colors, 'platform'>
}

function SubstituteRequestsScreen(): React.JSX.Element {
  const styles = useStyles()
  const data: Data[] = [
    { id: '1', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '2', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'dragon'], iconColor: 'green' },
    { id: '3', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '4', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'paw'], iconColor: 'primary' },
    { id: '5', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '6', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'dragon'], iconColor: 'primary' },
    { id: '7', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '8', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'paw'], iconColor: 'yellow' },
    { id: '9', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '10', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'dragon'], iconColor: 'primary' },
    { id: '11', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '12', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'paw'], iconColor: 'green' },
    { id: '13', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '14', title: 'Test content box', subtitle: 'content box', icon: ['fas', 'dragon'], iconColor: 'yellow' },
    { id: '15', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '16', title: 'Test content box', subtitle: 'content box' },
    { id: '17', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '18', title: 'Test content box', subtitle: 'content box' },
    { id: '19', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '20', title: 'Test content box', subtitle: 'content box' },
    { id: '21', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '22', title: 'Test content box', subtitle: 'content box' },
    { id: '23', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '24', title: 'Test content box', subtitle: 'content box' },
    { id: '25', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '26', title: 'Test content box', subtitle: 'content box' },
    { id: '27', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '28', title: 'Test content box', subtitle: 'content box' },
    { id: '29', title: 'Test content box', subtitle: 'content box', imageSrc: 'https://picsum.photos/200' },
    { id: '30', title: 'Test content box', subtitle: 'content box' }
  ]

  return (
    <View style={styles.container}>
      <SectionHeader title="Gewandhause" style={styles.sectionHeader} />
      {data.slice(0, 3).map(item => (
        <BoxListItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          onPress={item.onPress ? item.onPress : () => undefined}
          imageSrc={item.imageSrc}
          icon={item.icon ? item.icon : undefined}
          iconColor={item.iconColor ? item.iconColor : undefined}
        />
      ))}
    </View>
  )
}

export default SubstituteRequestsScreen

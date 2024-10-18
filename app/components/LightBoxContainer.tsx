import { Image, Text } from '@rneui/themed'

import { useLightBoxContext } from '../contexts/lightBoxContext'
import View from './View'

type Data = {
  source: string
  video?: boolean
  local?: boolean
  thumbnail?: string
  index: number
}

type Props = {
  data: Data[]
}

function LightBoxContainer(props: Props) {
  const { data } = props
  const { open: openLightBox } = useLightBoxContext()

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
      {data.map(item => (
        <View key={item.index}>
          <Image
            source={{ uri: item.thumbnail ? item.thumbnail : item.source }}
            style={{ width: 180, height: 200 }}
            resizeMode="contain"
            onPress={() => {
              openLightBox(data, item.index)
            }}
          />
          {item.video && <Text style={{ alignSelf: 'center' }}>This is a video</Text>}
        </View>
      ))}
    </View>
  )
}

export default LightBoxContainer

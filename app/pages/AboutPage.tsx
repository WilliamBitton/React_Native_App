import { makeStyles } from '@rneui/themed'

import LightBoxContainer from '../components/LightBoxContainer'
import PageWrapper from '../components/PageWrapper'
import ScrollView from '../components/ScrollView'

const useStyles = makeStyles({
  parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})

function AboutPage(): React.JSX.Element {
  const styles = useStyles()

  return (
    <PageWrapper>
      <ScrollView>
        <LightBoxContainer
          data={[
            { source: 'https://wallpapercave.com/wp/wp11316904.jpg', index: 0 },
            {
              source:
                'https://as01.epimg.net/tikitakas/imagenes/2017/12/28/portada/1514448082_557886_1514448185_noticia_normal.jpg',
              index: 1
            },
            { source: 'http://via.placeholder.com/640x360', index: 2 },
            {
              source: 'https://financialtribune.com/sites/default/files/field/image/17january/16_ronaldinho_1.jpg',
              index: 3
            },
            { source: 'https://picsum.photos/300/3000', index: 4 },
            { source: 'https://picsum.photos/1500/3000', index: 5 },
            { source: 'https://picsum.photos/2000/3000', index: 6 },
            { source: 'https://picsum.photos/2500/3000', index: 7 }
          ]}
        />
      </ScrollView>
    </PageWrapper>
  )
}

export default AboutPage

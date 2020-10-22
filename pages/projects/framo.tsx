
import React from  'react'
import { ProjectTemplate } from '../../composites'
import { Row, ImageCase, VideoCase, ComponentCase } from '../../components'
// import Animation from './components/Animation.js';

export default function Home() {
  return (
    <ProjectTemplate
      title="Framo"
      text="Für das Londoner Architekturbüro Framo wurde eine Website entwickelt und ein responsives Logo designt. Das Logo besteht aus sechs Buchstaben, die sich je nach Breite des Bildschirms an den verfügbaren Platz anpassen. Die Form der Buchstaben verändern sich dabei immer mit dessen Seitenverhältnis. Um das Logo auch in anderen Medien nutzbar zu machen, wurde ein Web-App entwickelt in dem die Buchstaben frei angeordnet und skaliert werden können. Das Ergebnis kann als Vektor-Datei gespeichert werden. Umgesetzt sind sowohl Website als auch App mit React. Gestaltung und Konzeption der Website sind von Mind Design."
    >
      <Row>
        {/* <ComponentCase 
          component={<Animation />}
          ratio={[520, 300]}
          template={{
            template: 'none'
          }}
        /> */}
      </Row>
      <Row>
        <ImageCase 
          publicId="framo/framo_mobil_qd9yci"
          ratio={[750, 1334]}
        />
        <ImageCase 
          publicId="framo/framo_card_lb42tc"
          ratio={[750, 1334]}
        />
      </Row>
      <Row>
        <VideoCase 
          videoId="framo/Website_1-large_ixxz8g"
          ratio={[2880, 1800]}
          size="full"
        />
      </Row>
    </ProjectTemplate>
  )
}

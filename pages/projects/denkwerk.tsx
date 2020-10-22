
import React from  'react'
import { ProjectTemplate } from '../../composites'
import { Row, ComponentCase, ImageCase } from '../../components'

import FlowerSkizze from '../../project/denkwerk/FlowerSkizze.js';
import Flower from '../../project/denkwerk/Flower.js';

export default function Home() {
  return (
    <ProjectTemplate
      title="Denkwerk"
      text="Für den Denkwerk Messestand auf der Dmexco 2017 wurde ein Infografik Poster designt und ein Pattern-Tool in Processing entwickelt. Die mit dem Tool generierten Muster wurden sowohl auf den Postern als auch in anderen Medien und Printprodukten benutzt. Das dem Muster zugrunde liegende System besteht aus mehreren Ebenen, die sich aneinanderfügen. Jede Ebene kann separat über Flächen und Verläufe gesteuert werden."
    >
      <Row>
        <ComponentCase 
          component={<FlowerSkizze />}
          ratio={[1,1]}
          template={{
            template: 'none'
          }}
        />
        <ComponentCase 
          component={<Flower />}
          ratio={[1,1]}
          template={{
            template: 'none',
          }}
        />
      </Row>
      <Row>
        <ImageCase 
          publicId="denkwerk/jutebeutel_dark_qrih7l"
          ratio={[2600,3460]}
          size="full"
          scheme="dark"
        />
        <ImageCase 
          publicId="denkwerk/rolled_dark_ssc2z7"
          ratio={[1560,2076]}
          size="full"
          scheme="dark"   
        />
      </Row>
      <Row>
        <ImageCase 
          publicId="denkwerk/FoldedCorner_o7gset"
          ratio={[2400,1600]}
          size="full"
        />
      </Row>
      <Row>
        <ImageCase 
          publicId="denkwerk/WallCurved_dark_avhayl"
          ratio={[800,700]}
          size="full"
          scheme="dark" 
        />
        <ImageCase
          publicId="denkwerk/dmexcoTeaser_zefzcu" 
          ratio={[800,700]}
          size="full" 
          scheme="dark" 
        />
      </Row>
    </ProjectTemplate>
  )
}

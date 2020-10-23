
import React from  'react'
import { ProjectTemplate } from '../../composites'
import { Row, CaseComponent, CaseImage } from '../../components'

export default function Home() {
  return (
    <ProjectTemplate
      title="Typescanner"
      text="TypeScanner ist eine Web-App, die Schriften auf Basis von 96 unterschiedlichen Grids generieren kann. Das Ergebnis lässt sich durch drei Eigenschaften modifizieren. Die Auswahl des Grids, dessen Postion und seine Skalierung. Die daraus entstehenden Formen der Glyphen reichen von lesbaren Zeichen bis hin zu abstrakten Formen. Dank der eingebunden Library opentype.js können die Schriften direkt im OTF-Format aus der App exportiert werden. Umgesetzt ist TypeScanner mit React. Die Grids stammen aus dem Buch “Grid Index” von Carsten Nicolai und sind mit Processing in mehreren Schritten aufbereitet."
    >
      <Row></Row>
    </ProjectTemplate>
  )
}

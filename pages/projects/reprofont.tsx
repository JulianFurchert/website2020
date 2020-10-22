
import React from  'react'
import { ProjectTemplate } from '../../composites'
import { Row, ComponentCase, ImageCase } from '../../components'

export default function Home() {
  return (
    <ProjectTemplate
      title="Reprofont"
      text="TexDie Idee zu der Schriftfamilie Repro entstand beim Arbeiten in Cinema4D. In Cinema4D werden Textpfade und Splines bei der Weiterverarbeitung in Geraden unterteilt. Zur Berechnung der Zwischenpunkte stehen dafür unterschiedliche Interpolationsmethoden zu Verfügung. Das heißt, die Form eines Buchstaben wird neben der Auswahl der Schrift auch von der Auswahl und Einstellungen der Interpolationsmethode bestimmt. Dieser Umstand inspirierte mich dazu eine eigene Methode zur Neuberechnung der Glyphen zu schreiben. Die Methode erzeugt Zwischenpunkte entlang der Pfade und verschiebt diese auf ein virtuelles orthogonales Raster. Als Ausgangsform dienen die Glyphen der Repro 100. Das Raster wird von Schriftschnitt zu Schriftschnitt (Repro 200-600) immer gröber, bis die daraus resultierenden Zeichen nicht mehr lesbar sind.t"
    >
      <Row></Row>
    </ProjectTemplate>
  )
}

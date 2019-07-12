---
title: "Das perfekte Typo Artboard"
author: "Severin Kilchhofer"
date: "2019-07-12"
layout: post
draft: false
hideInMenu: true
path: "/posts/typoartboard/"
category: "Responsive Gestaltung"
featuredImage: "img/header-image.png"
tags:
  - "Responsive Design"
  - "Typografie"
description: "Für Designer ist oft nicht klar, wie man dem Entwickler am Besten vermittelt was es alles für Schrifthierarchien gibt. Zudem muss ihm der Designer eine Struktxur der Schrifteigenschaften mitgeben und wie sich diese verhaltet."
---

## Probleme

1. Die Namensgebung wird nicht von allen Parteien gleich verstanden.
2. Die Fontgrössen H1 - zB. H6 verhalten sich nicht unbedingt Proportional zueinander.
3. Der Designer hat keine Ahnung von der Typo-Struktur im Code.

Das Beispiel unten finden wir ungenügend, um den Entwicklern weiterzuleiten. Die Proportionen sind überhaupt nicht klar und wenn eine Einheit wechselt, wird es schwierig diese schnell anzupassen.

<div class="wide-grid">
  <div class="col-1to12">
    <figure>
      <img src="https://i.imgur.com/q1KNTkp.png" alt="Design System Style Template">
      <figcaption>https://medium.com/sketch-app-sources/design-system-text-shared-style-template-67d13b83e417</figcaption>
    </figure>
  </div>
</div>


## Lösungen
### 1. Variable Benamsung
Individuelle Benamsung der einzelnen Absatzformate (zum Beispiel als T-Shirt Grössen: XS, S, M, L etc.) Diese werden dann den Klassen H1 - p zugeordnet.


### 2. Modularscale
Mit dem Tool Modularscale kann man sich beliebig die proportionalen Schriftgrössenabstufungen zusammenstellen: 

<div class="wide-grid">
  <div class="col-1to12">
    <figure>
      <img src="https://i.imgur.com/M0lpg1K.png" alt="test">
      <figcaption>modularscale.com</figcaption>
    </figure>
  </div>
</div>


Dazu ist wichtig, dass man die maximale und die minimale Grösse bestimmt, alles dazwischen wird dann berechnet.

### 3. Code Verständnis aufbauen

Um eine gute Zusammenarbeit zwischen dem Designer und dem Entwickler zu garantieren, braucht es ein Grundverständnis des jeweiligen Kerngebietes. Mit dem Technischen Know-how kann der Designer dann einem guten Artboard gerecht werden.

### Typo Artboard für den Entwickler
Auf den ersten drei Artboards links, findet man die definierten Variablen für die Schriftgrössen, Farben und Schriftschnitte. Diese sind jeweils als Variablen definiert.

Auf der rechten Seite sind die genauen Definitionen der Hierarchie. Das heisst auch einige Spezialitäten wie Zeilenabstand und Textstyle werden hier definiert.

<iframe style="border: none;" width="100%" height="600px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUA06525gRNuDmB2QWmAzrD4k%2FDas-perfekte-Typo-Artboard%3Fnode-id%3D0%253A1" allowfullscreen></iframe>

## Variablen
Aus Programmierungssicht werden die Schriftmerkmale dann einmal Global als Variablen definiert. (Wie er die Variablen benennt ist seine Sache und muss vom Designer nicht bis ins kleinste Detail bekannt gegeben werden.)
So muss man sich während der Entwicklung nie mehr um die Grössen und Farben etc. kümmern. Eine Beispielumsetzung könnte so aussehen:


<iframe height="600" style="width: 100%;" scrolling="no" title="Font Sizes" src="//codepen.io/severinkilchhofer/embed/zQjBba/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/zQjBba/'>Font Sizes</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

https://codepen.io/severinkilchhofer/pen/zQjBba

### Links
https://marvelapp.com/styleguide/

https://www.w3schools.com/css/css3_variables.asp

https://storybook.js.org

https://codepen.io/getflourish/pen/VMXdJv

https://www.catalog.style/try

https://www.carbondesignsystem.com

### Font
https://rsms.me/inter/

### Cover Photo
Photo by [Pankaj Patel](https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com)


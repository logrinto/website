---
title: "Test"
author: "Stefan Huber"
date: "2022-12-31"
layout: post
draft: false
hideInMenu: true
path: "/posts/em/"
category: "Responsive Gestaltung"
featuredImage: "img/header.png"
tags:
  - "Responsive Gestaltung"
  - "Typografie"
  - "em"
  - "rem"
  - "dynamisch"
  - "Masseinheit"


description: "TLDR – Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien."
---



# **Dynamische Masseinheit em**

![](https://www.netnode.ch/sites/default/files/typography_hero_img.png)

**Eine der besten Praktiken für die Typografie im Web ist die Verwendung relativer Einheiten wie em und rem. Relative Grössen werden in Abhängigkeit von anderen Masseinheiten angegeben und passen sich dadurch besser verschiedenen Ausgabemedien und Benutzereinstellungen an. Aber wann ist es sinnvoll em anzuwenden, wann besser rem?**

## Was ist der em-Wert?
Der em-Wert ist eine relative Masseinheit für die Angabe von Grössen. Diese ist in modernen Browsern standardmässig mit 16 Pixeln definiert. Das bedeutet, dass 1em = 16px, 2em = 32px, 1.5em = 24px, 0.75em = 12px ist. Diese Masseinheit kann auf jedes beliebige Element angewendet werden, und verhält sich demnach relativ zueinander. Da der em-Wert auch neu definiert werden kann, ist es möglich, alle mit em definierte Elemente zu verändern, ohne dass diese die Relation zueinander verlieren. Der em-Wert kann auf Schriftgrössen, Zeilenabstände, Breiten- und Höhenangaben etc. angewendet werden.

### Beispiel

<iframe height="400" style="width: 100%;" scrolling="no" title="Example of em" src="//codepen.io/mariusbecker/embed/YboLEb/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mariusbecker/pen/YboLEb/'>Example of em</a> by marius becker
  (<a href='https://codepen.io/mariusbecker'>@mariusbecker</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In diesem Beispiel wude im ersten Container (.parent) die Schriftgrösse auf 20px gesetzt. Da das Element (.outerChild) sich im Conteiner (.parent) befindet und im em-Wert angegeben ist, werden die Grössen von diesem geerbt.
* Schriftgrösse: 20px × 1.75 = 35px
* Zeilenabstand: 20px × 2 = 40px

Das Objekt (.innerChild) befindet sich im Container (.outerChild), und erbt somit diesen wert:
* Schriftgrösse: 35px × 1.75 = 61.25px
* Zeilenabstand: 40px × 2 = 80px


## Vorteile von EM-Wert
- Hilft uns modulare Komponente zu erstellen.
- Größen werden proportional korrekt dargestellt.
- Schnelle Anpassung der Schriftgrössen möglich mit wenig Aufwand.



## Wann wenden wir den em-Wert an?
Em ist eine sehr nützliche Einheit für Schriftgrössen, da es seine Länge automatisch relativ zur vom Leser gewählten Schrift anpasst.

Für den Zeilenabstand eignet sich em auch gut, damit gewährleistet man, dass der Zeilenabstand entsprechend zur Schriftgröße eine optimale Lesbarkeit ermöglicht.

Für konsistente Abstände wie margin oder padding skaliert sich der EM-Wert automatisch mit den Media Queries. Hingegen in Pixel Angaben würden sie bei jedem Breakpoint neu überschrieben werden. Em eignet sich daher sehr gut für responsives Design.



## Wann nutzen wir besser den rem-Wert?
Em (und Prozent) bezieht sich immer auf das Eltern-Element. Bei stark verschachtelten Elementen werden die Schriftgrössen schwerer berechenbar. Rem-Werte hingegen sind relativ zum html-Wurzelelement, nicht zum Elternelement. Mit anderen Worten ermöglicht es, eine Schriftgröße in einer relativen Weise zu spezifizieren ohne durch das Elternelement beeinflusst zu werden, was ein klarer Vorteil gegenüber dem EM-Wert ist.

![](https://i.imgur.com/93oUNl9.png)



<br>

**Quelle**
- https://developer.mozilla.org/de/docs/Web/CSS/font-size
- https://www.elmastudio.de/css-tipp-rem-als-einheit-fur-schriftgrose-nutzen/
- http://www.intensivstation.ch/css3/em-rem
- https://www.mediaevent.de/css/font-size-rem.html
- https://www.netnode.ch/blog/masseinheiten-und-kenngroessen-fuer-die-typographie-im-web-teil-1

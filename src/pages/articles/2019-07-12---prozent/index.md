---
title: "Mit Prozent zum flüssigen Design"
author: "Marc Hatt"
date: "2019-07-12"
layout: post
draft: false
hideInMenu: true
path: "/posts/responsive-design-iad2017-prozent/"
category: "Responsive Gestaltung"
featuredImage: "img/header.png"
tags:
  - "Responsive Gestaltung"
  - "Typografie"
  - "Bezugselemente"
description: "Im Responsive Design wird nur noch selten mit Pixelwerten gearbeitet. Pixelwerte sind zu starr, um auf veränderte Device- und Browser-Grössen zu reagieren. Elementweiten in Prozent sind deshalb unverzichtbar, allerdings muss der Designer auch Kontrolle aus der Hand geben. Wir beleuchten :bulb: den Umgang mit Prozentwerten, die Vorteile und die Nachteile, im Web in diesem Beitrag."
---


## Etwas Kontrolle abgeben (Design-Teil)
Es wurde im Einstiegstext schon erwähnt – die Arbeit mit Prozenten bedeutet für die Gestaltenden den Verlust von Kontrolle. Man kann nicht immer genau wissen, wie sich das Design auf bestimmte Viewports anpasst.

Eigentlich ein No-Go für eine Designerin oder einen Designer – alles bis in den letzten Pixel zu definieren ist doch unser Job. Aber nein, heute ist das nicht mehr so.


### Aber warum denn?
In der Zeit von flexiblem Development, Mobile-First und demnach auch Performance-First geht es nichtmehr darum mit 10000 Zeilen Code jeden möglichen Use-Case zu anitizieren und zu beheben. Das Ziel ist mit so wenig Definition wie möglich ein benutzbares und optisch ansprechendes Design zu kreieren, dass mit der richtigen Prise UX gewürzt ist, um den grösstmöglichen Teil an ROI zu generieren.

Es mag anfangs weither geholt wirken – aber mit Bezugselementen zu arbeiten, wie es Prozent garantiert und unmissverständlich ist, bedeutet auch, als Gestalterin oder als Gestalter unternehmerischer zu denken. Ein frei skalierbares Bezugselement wie es Prozent ist, steht für Effizienz. Genau diese Effizienz wird in der heutigen Development-Welt geschätzt. Selbst wenn man als Designer nicht mit Prozent denkt, im Designprozess – die Chance ist gross, dass es der Developer tut.


### Und was interessiert das uns, die Gestaltenden?
Genau aus diesem Grund ist es wichtig, sich auch als Gestalterin oder als Gestalter mit diesem Thema auseinander zu setzen. Ein Design welches auf Bezugselementen basiert ist ein anpassbares Design. Ein Design welches Lücken aufweisen kann, die maschinell (also der Browser) gefüllt werden können. Elemente die in Pixel definiert sind haben in den meisten Apps oder Webseiten nichts mehr zu suchen. Deshalb sollte man sich als Gestalter*in auch nicht darauf versteifen, sondern muss umdenken. Der ganze Designprozess ändert sich, wenn man sich nicht überlegt «Hmmm… wie gross mache ich jetzt diese Box?» sondern «Hmmm… Wieviel Prozent des ganzen ist diese Box jetzt gross?». Eine ähnliche Frage, durchaus, allerdings ist der Lösungsweg und die Lösung komplett anders.


### Fazit
Um in der heutigen Welt des agilen Development bestehen zu können, muss man als Gestalterin oder Gestalter die Denkweise eines Entwicklers adaptieren. Nur mit dieser Emphatie wird es in Zukunft noch möglich sein, zufriedenstellende Lösungen zu gestalten.


## Die Technik dahinter (Technik-Teil)
### Bezugselemente
Prozente brauchen immer ein Bezugs-Element; Prozente sind relative Werte und beziehen sich **immer** auf einen anderen Wert.

#### Prozente sind responsiv, feste Werte nicht
Wenn man ein Element in Pixel angibt, ist niemals garantiert, dass die Darstellung für die verschiedensten Ausgabegeräte passt. Ein Element mit 500 Pixel in der Breite kann auf einem Mobiltelefon mit einer Display-Breite von 400 Pixeln nicht richtig dargestellt werden.

Um genau diesem Problem Rechnung zu tragen kann die Weite eines Elements mit Prozenten angegeben werden.

Elemente, die mit Prozent-Weite angegeben sind beziehen sich immer auf den Container in dem sie sich befinden.

#### Hier ein Beispiel:
<iframe height="300" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Percentage Example 2" src="//codepen.io/marc-hatt/embed/JqKoMy/?height=288&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marc-hatt/pen/JqKoMy/'>Percentage Example 2</a> by Marc Hatt
  (<a href='https://codepen.io/marc-hatt'>@marc-hatt</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Wenn man sich das oben gezeigte Beispiel ansieht, fällt auf, dass der Aufbau der Spalten gleich ist, allerdings die Weiten sich unterscheiden.

Um den Grund dafür zu sehen, muss man sich das CSS des Beispiels ansehen. Der Parent des Containers in dem Fall ist HTML, welches den vollen Bildschirm ausfüllt.

```CSS
.container {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 100%;
    grid-column-gap: 5%;
    justify-items: stretch;
    align-items: stretch;
    background-color: #1abc9c;
    height: 100vh;
 }
```

Der Aufbau des Containers, im Beispiel in hellblau dargestellt, besteht aus den DIV's K1, K2 und K3. Wir haben eine Grid-Ansicht, mit einer Spaltenbreite von 30%. Der Abstand zwischen den Spalten ist 5% – wenn man die Elemente also zusammen rechnet, ergeben sie 100% – die volle Breite des Containers, was in diesem Fall das HTML ist... Also volle Bildschirmweite.

Nun schauen wir uns einen Teil des HTML an, in dem es spannend wird:

```HTML
<div class=column>
    <p>K 1</p>
    <div class=container-2>
      <div class=column-2>
        <p>K 1.1</p>
      </div>
      <div class=column-2>
        <p>K 1.2</p>
      </div>
      <div class=column-2>
        <p>K 1.3</p>
      </div>
    </div>
  </div>
```
Wir haben innerhalb dieser Spalte einen neuen Container gemacht, der wiederum in drei Teile geteilt ist. Wenn man das nun mit dem CSS kombiniert, wie zum Beispiel dem hier:


```CSS
.container-2 {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 100%;
    grid-column-gap: 5%;
    justify-items: stretch;
    align-items: stretch;
    background-color: #16a085;
    height: 100px;
 }
```
Erschafft man den oben gezeigten Effekt. Wir teilen die Spalte wieder in drei Teile auf. Unsere 100% die wir aufteilen beziehen sich jetzt auf die 30% der Spalte, die als Container funktioniert. Das kann man beliebig oft machen – man kann die Aufteilung der Prozentwerte auch ändern.

In unserem Beispiel sind also die Kolumnen 1.1, 1.2, 1.3 und die Kolumnen der Spalte 2 und 3, jeweils 30% von 30% breit und die Abstände sind 5% von 30% breit. Eine Skalierung, die sich je nach Bildschirmgrösse ändert. Die Pixelwerte der Spalten sind völlig flüssig.

Das funktioniert aber nicht nur mit Gestaltungsrastern – Bilder und andere grafische Elemente verhalten sich gleich und funktionieren immer nach dem gleichen Prinzip.

---


### Dynamische Werte
Prozente eignen sich für dynamische Inhalte, bei denen die Werte abhängig von einem «Parent» skaliert werden. Definiert man z.B. für ein Element eine Breite von 33,333% so wird dieses immer ein Drittel der Gesamtbreite des jeweiligen «Parent» beanspruchen.

Vorteil: Ein in Prozent angegebener Wert reagiert dynamisch. Alle Zahlen sind durch Prozente teilbar.

Im Gegensatz dazu reagiert eine fix in Pixel definierte Breite nicht auf den jeweiligen «Parent» und ist somit nicht skalierbar.

#### Hier ein Beispiel:
<iframe height="265" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Responsive Design: Prozent" src="//codepen.io/wschoeck/embed/yWJyzN/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wschoeck/pen/yWJyzN/'>Responsive Design: Prozent</a> by wschoeck
  (<a href='https://codepen.io/wschoeck'>@wschoeck</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ein Container mit einer fixen Breite in Pixel (hier width: 400px;) reagiert nicht auf die aktuelle Browserbreite.

```CSS
.fix400 {
  width: 400px;
  height: 60px;
  background-color: #1c75e4;
  margin-bottom: 20px;
  float: left;
}
```

Wohingegen ein Container mit einer in Prozent definierten Breite (hier width: 33,333%;) sich mit der aktuellen Browserbreite mit skaliert.

```CSS
.prozent33 {
  width: 33.333%;
  height: 60px;
  background-color: #1c75e4;
  float: left;
}
```


### Unterschied zwischen Prozentangaben und vh/vw
Auf den ersten Blick wirkt der Usecase von Prozenten und vh/vw (also Viewport-Width und Viewport-Height) ähnlich. Der Unterschied ist aber gross, denn Prozente beziehen sich immer auf den Container in dem sie stecken.
vh/vw bezieht sich immer auf die Grösse des Viewports. Dafür ein Beispiel:
<iframe height="300" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Unterschied zwischen vh/vw und Prozenten" src="//codepen.io/marc-hatt/embed/BezjWv/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/marc-hatt/pen/BezjWv/'>Unterschied zwischen vh/vw und Prozenten</a> by Marc Hatt
  (<a href='https://codepen.io/marc-hatt'>@marc-hatt</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Um darzustellen was wir damit meinen haben wir das Beispiel aus «Bezugselemente» nochmals angepasst. Wir haben, wie im CSS ersichtlich, der mitleren Teilspalte einen vw von 33 gegeben. Das heisst, dass jeweils 33% der Viewport-Breite als Mass genommen wird, um die Pixelweite des Objekt zu generieren.

Wie man sehen kann respektiert dieser Wert den Container nicht, da die Masseinheit, anders wie Prozent, den Container nicht in Betracht zieht.

---

### Vorteile von Prozentwerten

#### Prozente verhalten sich relativ zum Parentelement

Durch die Abhängigkeit zu dem jeweiligen Parentelement, eignen sich Prozentwerte optimal für den Aufbau von Gridsystemen.

#### Responsives Design

Prozentwerte sind dynamisch und passen sich an. So lassen sich gleiche Element auf verschiednenen Endgeräten gleich anzeigen.


### Nachteile von Prozentwerten

#### Browser ignorieren Standardweise Höhenangaben in Prozent

Sehen wir dies in einem praktischen Beispiel genauer an. Beide Boxen sind gleich definiert. Ausnahme bildet die CSS Farbdefinition `background-color` für eine bessere visuelle Unterscheidung, sowie die Masseinheit von `height` in Pixel und Prozent.

Die Höhe der blauen Box wird Prozentual `height: 100%;` definiert, die Höhenangabe wird vom Browser ignoriert und der Inhalt bestimmt die Boxhöhe. Die orange Box wird in Pixel `height: 200px;` definiert, der Browser erkennt die CSS-Definition und passt die Boxhöhe entsprechend an.  

<iframe height="265" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Ignoring Height" src="//codepen.io/larsmaeder/embed/pmboxG/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/larsmaeder/pen/pmboxG/'>Ignoring Height</a> by Lars Mäder
  (<a href='https://codepen.io/larsmaeder'>@larsmaeder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Wieso ist das so?
Die [W3C-Spezifikation für CSS 2](https://www.w3.org/TR/1998/REC-CSS2-19980512/) legt fest, dass sich eine prozentual angegebene Höhenangabe auf die Höhe des umschliessenden Blockes (Parent) bezieht. Wird also für diesen Parentblock keine Höhe definiert, wird der angegebene Prozentwert als `height: auto;` interpretiert. Trotz Höhenangabe wird das Element nur so hoch, wie der Inhalt es erfordert.
## Recherche

[carsten-protsch.de](http://carsten-protsch.de/zwischennetz/doctype/prozent.html)

[thestyleworks.de](http://www.thestyleworks.de/basics/percentage.shtml)

[lifewire.com](https://www.lifewire.com/width-calculations-responsive-site-4136178)

[impressivewebs.com](https://www.impressivewebs.com/vertical-percentages-css/)

[kulturbanause.de](https://blog.kulturbanause.de/2013/01/starre-layouts-in-flussige-layouts-umwandeln-responsive-webdesign-basics/)

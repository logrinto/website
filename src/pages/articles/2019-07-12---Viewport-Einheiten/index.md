---
title: "Viewport Einheiten"
author: "Nicole Watrinet, Pascale Anderegg, Severin Kilchhofer"
date: "2019-07-12"
layout: post
draft: false
hideInMenu: true
path: "/posts/Viewport-Einheiten/"
category: "Responsive Gestaltung"
featuredImage: "img/header.png"
tags:
  - "Responsive Gestaltung"
  - "Typografie"
  - "Viewport Einheiten"
description: "Der Viewport ist der Bereich wo der Browser die Seite rendert. Manchmal möchte man Elemente wie eine Sidebar oder ein Grid am Viewport ausrichten. Dies kann mit den neuen Viewport Units erreicht werden. Aber wo genau liegen Potenzial und Einschränkungen dieser Einheiten?"
---



# Wann lohnt sich der Einsatz von Viewport Einheiten?

**Der Viewport ist der Bereich wo der Browser die Seite rendert. Manchmal möchte man Elemente wie eine Sidebar oder ein Grid am Viewport ausrichten. Dies kann mit den neuen Viewport Units erreicht werden. Aber wo genau liegen Potenzial und Einschränkungen dieser Einheiten?**

*Ein Artikel von Severin Kilchhofer, Pascale Anderegg und Nicole Watrinet – HF IAD 2017*

## Viewport Einheiten kurz erklärt
Vw (viewport width) and vh (viewport height) sind Einheiten genau wie em, Pixel oder Prozent. Sie sind noch relativ neu und werden noch nicht von allen aktuellen Browsern unterstützt. Sie können für Anwendungen wie One-pagers, full-width grids, Typografie und anderen Elementen abhängig vom Viewport eingesetzt werden. Als Beispiel setzt [Wood-room](http://www.wood-room.ch/#wood-room) die Vw-Einheit in ihrem One Pager ein, um Bilder und Abschnitte immer auf die ganze Bildschirmhöhe und -breite zu skalieren.

Es gibt noch zwei weitere Einheiten, die jedoch weniger gebräuchlich sind im Vergleich zu vw und vh, dies sind vmin (minimum viewport) und vmax (maximum viewport). Vmin bezieht sich immer auf die kürzere Seite des Screens und vmax immer auf die grössere.

Eine der vier Einheiten ist jeweils 1% von der jeweiligen Viewport-Achse. 

* **1vw** = 1% der Viewport Breite
* **1vh** = 1% der Viewport Höhe
* **1vmin** = 1vw oder 1vh, dasjenige welches kleiner ist von beiden
* **1vmax** = 1vw oder 1vh, dasjenige welches grösser ist von beiden

![](https://i.imgur.com/RPPdhY6.png)
*Die Einheiten vmin und vmax im Vergleich bei einem quadratischen Bild auf einem Smartphone dargestellt. Bei vmin wird die schmale Seite verwendet und bei vmax die lange.* 

```css
.boxlinks {
  height: 100vmin;
  width: 100vmin;
}
```

```css
.boxrechts {
  height: 100vmax;
  width: 100vmax;
}
```
Grafik [www.constructs.stampede-design.com](http://constructs.stampede-design.com/2014/11/rarely-used-css-units/)

<iframe height="265" style="width: 100%;" scrolling="no" title="Fluid Header" src="//codepen.io/severinkilchhofer/embed/BeQvjd/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/BeQvjd/'>Fluid Header</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Als Beispiel haben wir einen Header mit einem `padding: vmin` erstellt. So kann eine Responsive Ansicht des Headers auf allen Screengrössen garantiert werden.*


## Prozent, em oder vw – was ist wann einzusetzen?
Werden Viewport Einheiten richtig eingesetzt, wird ein flüssiger Responsive-Effekt erreicht, der sich einiges von einer adaptiven Website unterscheidet. Ein responsives Design verändert sich mit Viewport Einheiten automatisch, sobald sich die Grösse vom Viewport verändert. Ein adaptives Design (Angabe mit Prozent oder em) hingegen verändert sich mithilfe von [Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp), sobald eine bestimmte Viewport Grösse erreicht wird. So gibt es einen abrupten Wechsel und keinen flüssigen wie bei den Viewport-Einheiten. Der Einsatz von Viewport Einheiten ist einfacher zu implementieren, da bei adaptiven Anwendungen meist mehrere Media Queries zum Einsatz kommen. 

## Wo werden Viewport Einheiten eingesetzt?
### Responsive Typografie
Viewport Einheiten werden gerade im Bereich der Typografie oft eingesetzt. Zum Beispiel bei einer Headline, die sich über die gesamte Breite des Viewports erstreckt und bei Veränderung des Viewports stufenlos skaliert wird. Der Vorteil ist hier, dass dies einfach implementiert werden kann und zu einem visuell spannenden Effekt beitragen kann. [In diesem Beispiel](https://css-tricks.com/examples/ViewportTypography/) wird stufenloser Text eingesetzt.


**Das Benutzen dieser einfachen Viewport Einheiten kann jedoch den unerwünschten Effekt haben, dass Schriftgrössen sehr schnell skaliert werden.** Auf grossen Desktop Screens werden diese zu gross und auf Smartphones viel zu klein dargestellt. Ausserdem stellt sich die Frage ob dieser «sich immer skalierende Effekt» bei Grundtext überhaupt erwünscht ist oder ob es mehr als Spielerei dient anstelle den Leser zu unterstützen. 

<iframe height="265" style="width: 100%;" scrolling="no" title="vw/vh font-sizes" src="//codepen.io/severinkilchhofer/embed/KLMpVN/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/KLMpVN/'>vw/vh font-sizes</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Dieses Beispiel enthält einen Titel auf 6vw sowie Copytext auf 4vw. Es wird offensichtlich, dass der Copytext auf Smartphones viel zu klein wird und auf grossen Screens viel zu gross.* 

**Deshalb ist es empfehlenswert auch hier noch mit Mediaqueries zu arbeiten um so die Mindest- und Maximumgrösse der Schrift bestimmen zu können.** So kann der Range der Schriftgrösse genau definiert werden. 


<iframe height="265" style="width: 100%;" scrolling="no" title="Media Queries Richtig" src="//codepen.io/severinkilchhofer/embed/rgLeLG/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/rgLeLG/'>Media Queries Richtig</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Dieses Beispiel zeigt den Einsatz von Viewport Einheiten kombiniert mit 3 Media Queries, jeweils für Landscape, Smartphones und grossen Screens.* 


```css
h2 { font-size: 8vw }
p { font-size: 5vw; }

@media ( orientation:landscape ) {
  h2 { font-size: 4vmax }
  p { font-size: 2.2vmax; }
}

@media ( min-width: 680px ) {
  h2 { font-size: 3vmax }
  p { font-size: 2vmax; }
}

@media screen and ( min-width: 1024px )  {
  h2 { font-size: 5em }
  p { font-size: 1.3em; }
}
```

*@media (orientation:landscape) hilft auch, wenn das iPhone im Landscape-Modus die Schriftgrösse unsinnig erhöht. Ansonsten unterbleibt der Schriftgrössenwechsel beim Wechsel von Landscape auf Portrait mit*


```css
html {
    -webkit-text-size-adjust: none;
}
```
So kann man sicher sein, dass sich der Text, bei einer Drehung des Mobiltelefons, nicht in der Grösse verändert.


### Full-height Elemente
Die Viewport Einheit vh eignet sich bei Bildern oder farbigen Hintergründen, die sich auf die ganze Höhe des Screens beschränken. Ohne Viewport Einheiten müssten alle Container Elemente von .image eine Grösse von 100% aufweisen. **Mit % kann man nur die gesamte Breite und nicht die Höhe ansprechen. Deshalb ist für die Höhe vh dem %-Wert vorzuziehen.**

```css
.image {
  height: 100vh;
  width: auto;
}
```
*Wir haben hier mithilfe von 100vh die ganze Höhe des Bildschirms gefüllt.*


<iframe height="265" style="width: 100%;" scrolling="no" title="vw/vh" src="//codepen.io/severinkilchhofer/embed/wbWBEL/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/wbWBEL/'>vw/vh</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Dieses Beispiel zeigt verschiedene Farbflächen, die sich bei Scroll verändern und automatisch auf die ganze Screenhöhe andocken.* 

### Paddings mit vw
Bei Abständen kann es wiederum von Vorteil sein mit vw zu arbeiten. So kann man sicher sein, dass es auf einem Gerät nicht plötzlich einen zu grossen oder zu kleinen Abstand generiert und so das Verhältnis zu den restlichen Elementen nicht mehr stimmt. Mit vw kann man den optischen Eindruck auf allen Geräten gleich halten.
<iframe height="265" style="width: 100%;" scrolling="no" title="Media Queries" src="//codepen.io/severinkilchhofer/embed/YbWwaL/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/YbWwaL/'>Media Queries</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Hier sieht man genau diesen Fall, wie mit vw die Abstände zwischen Text und Box definiert wurden.* 

Natürlich kann man die Viewport Einheiten auch in anderen Elementen als Typografie und Abständen verwenden. In [diesem Beispiel](https://codepen.io/tublitzed/pen/eNXEZQ/) passt sich eine Grafik stufenlos an die Bildschirmgrösse an.  


## Hier sollten Viewporteinheiten NICHT eingesetzt werden
### Verschachtelungen
Um einen Code strukturiert aufzubauen macht es Sinn gewisse Elemente ineinander zu verschachteln und so eine Abhängigkeit zu generieren. Hierfür ist ViewWidth und ViewHeight aber keine gute Lösung wie wir in diesem Codepen zeigen.
<iframe height="265" style="width: 100%;" scrolling="no" title="Complex vw/vh" src="//codepen.io/severinkilchhofer/embed/KLMpWW/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/severinkilchhofer/pen/KLMpWW/'>Complex vw/vh</a> by severinkilchhofer
  (<a href='https://codepen.io/severinkilchhofer'>@severinkilchhofer</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

*Bei diesem Codesnippet wird aufgezeigt, dass verschachteltet Element besser in % angegeben werden. So bleiben sie abhängig vom Parentelement und verhalten sich nicht anders. In unserem Beispiel bricht die hellste Box aus den anderen aus, da sie mit vw/vh definiert wurde.* 



## Browser Support
Aktuell werden die folgenden Browser von Viewport Einheiten unterstützt: IE 10+, Firefox 19+, Chrome 34+, Safari 7+, Android 4.4+, iOS 6+.

![](https://i.imgur.com/vZ4dlqn.png)

Grafik [www.caniuse.com](https://caniuse.com/#search=vw)

## Übergabe Design an Entwicklung
Was muss noch auf Designseite zum Thema der Viewport Einheiten überlegt bzw. geliefert werden? Nach unseren Recherchen und Gesprächen sind wir der Meinung, dass der Designer der Entwicklung keine Angaben über die Umsetzungsart mitgeben soll. **Es soll dem Entwickler frei sein, ob er mit Prozent, em's oder Viewport Units arbeiten möchte.** Zudem soll auch das Box-Modell Aufgabe des Programmierers sein, da dies zu weit in sein Themengebiet eingreift und sonst nur die Kosten im Design erhöht. 

**Der Designer soll ihm aber klar definieren welche Elemente sich wann im Viewport befinden müssen.** Es sollen Viewport Designs für alle Template-Seiten erstellt werden. Dies sind alle Seiten, die einen anderen Aufbau haben, sodass auch beim Design nicht zu viel Aufwand entsteht. Diese Designs sollen jeweils auf Desktop, Mobile und Tablet aufbereitet werden. Dies erspart allfällige Rückfragen oder Änderungen und somit Zeit und Budget.

![](https://i.imgur.com/v8t52Am.png)
Grafik [www.awwwards.com](https://www.awwwards.com/why-responsive-design-support-is-the-most-important-feature-you-can-add-to-your-website.html)


## Quellen
https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/

https://www.mediaevent.de/schriftgroessen-immer-ein-griff-ins-wespennest/

https://css-tricks.com/fun-viewport-units/

https://css-tricks.com/viewport-sized-typography/

https://css-tricks.com/simple-little-use-case-vmin/


<div>
  <figure class="float-right">
  	<img src="http://via.placeholder.com/550x700" alt="test">
  	<figcaption>Caption</figcaption>
  </figure>
</div>


<div class="wide-grid">
  <div class="col-1to12">
    <figure>
      <img src="http://via.placeholder.com/1800x700" alt="test">
      <figcaption>Caption</figcaption>
    </figure>
  </div>
</div>



<div class="wide-grid bg">
  <div class="col-1to12">
    <figure>
      <img src="http://via.placeholder.com/1800x700" alt="test">
      <figcaption>Caption</figcaption>
    </figure>
  </div>
</div>



<div>
  <figure class="float-left">
  	<img src="http://via.placeholder.com/550x700" alt="test">
  	<figcaption>Caption</figcaption>
  </figure>
</div>


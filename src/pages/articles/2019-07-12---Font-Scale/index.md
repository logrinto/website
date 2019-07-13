---
title: "WTF? What The Font(scale)"
author: "Matthias Koch"
date: "2019-07-12"
layout: post
draft: false
hideInMenu: true
path: "/posts/responsive-design-iad2017-fontscale/"
category: "Responsive Gestaltung"
featuredImage: "img/header.png"
tags:
  - "Responsive Gestaltung"
  - "Typografie"
  - "Font Scale"
description: "Wie verhalten sich Schrifgrössen auf verschiedenen Device grössen? dazu gibt es verschiedne Methoden die man anwenden kann, die am häufig verwendeten sind «Modular-Scales» und «Fluid Scale»."
---

**Typografische Systeme für das Web stellen Designer immer wieder vor Probleme. Insbesondere stellt sich die Frage wie sich Schrift Responsive verhält?
Modular Scale Type Systems bieten einen Ansatz und helfen dabei die richtigen Schriftgrössen und Abstufungen zu finden. Doch macht der Einsatz von mehreren Breakpoints Sinn, oder soll der Text Fluide skaliert werden und welche Einflüsse hat dies auf die Darstellung?**

## Modular-Scales
Ein Schriftgrössen Multiplikator der anhand einer Formel die Abstufungen verschiedener Titel errechnet. Das Problem dabei ist dass wenn zum Beispiel die Titel Abstufung des goldenen Schnitt verwendet werden der Unterschied zwischen Lauftextgrösse und Titel auf kleinen Devices zu Gross sind. Zur Verhinderung dieser Unterschiede in den Titelabstufungen wird bei kleineren Viewports mit Media Query’s ein anderer Multiplikator gewählt, zum Beispiel der Perfect Fourth Scale (x 1.333) hier ein Beispiel dieser Zwei Abstufungen im Vergleich:
<iframe height="265" style="width: 100%;" scrolling="no" title="Smaller Ratio" src="//codepen.io/larsmaeder/embed/zQjBMj/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/larsmaeder/pen/zQjBMj/'>Smaller Ratio</a> by Lars Mäder
  (<a href='https://codepen.io/larsmaeder'>@larsmaeder</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Vor allem in der Design Phase eines Projekts kann es sehr Hilfreich sein ein Modular Scale System zu verwenden, diese Seite berechnet einem aus einer Grund Schriftgrösse die Verschiedenen Titelabstufungen: https://type-scale.com/

## Fluid Scale
Modular Scales sind ein guter Ansatz für die Abstufungen von Überschriften und wird von den meisten Frameworks auch Standart mässig so verwendet. Ein Nachteil dieser Methode ist jedoch dass zwischen den Breakpoints genau die Schriftgrösse verwendet die der Designer in diesem Viewport definiert hat. Würde mann den Designer Fragen würde welche Schriftgrösse zu verwenden ist bei 760px Viewport breite so würde er wahrscheinlich nicht die selbe Schriftgrösse sagen wie bei 320px und um nicht hunderte von Breakpoints definieren zu müssen für jede Viewport-Zwischengrösse kann mann die Schrift auch «Fulid» Skalieren, so passt sich die Schrift Stufenlos an dem Viewport an.
*Beispiel für Fluid Fontscale:
<iframe height="265" style="width: 100%;" scrolling="no" title="Poly Fluid Sizing using linear equations, viewport units and calc()" src="//codepen.io/jakobud/embed/vmKLYb/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jakobud/pen/vmKLYb/'>Poly Fluid Sizing using linear equations, viewport units and calc()</a> by Jake Wilson
  (<a href='https://codepen.io/jakobud'>@jakobud</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
*Quelle: https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/


Zudem gibt es auch Mischformen, die zum Beispiel Grundschrift anhand eines Modular Scales abgestuft wird und die Schriftgrösse klassisch umbricht, die Titel hingegen skalieren stufenlos und passen sich der Viewportgrösse an. Wichtig ist dass sich eine minimal und maximal Schriftgrösse definieren lässt und dazwischen skaliert der Text stufenlos, dies ist macht besonders Sinn damit der Text immer in einer leserlichen Schriftgrösse dargestellt wird.

## Fazit
Auf jeden Fall macht es Sinn verschiedene Schrift Grössen auf verschiedenen Devices zu verwenden. Beim Verwenden den klassischen Ansatz mit einem Modular Scale und Breakpionts hat man meiner Meinung nach bessere Kontrolle über das design und die Darstellung, jedoch leidet die Leserlichkeit leicht darunter da nicht die Maximale Schriftgrösse verwendet wird, wie sie es in der Stufenlosen Skalierung machen würde. Weiter finde ich es als user ein Wenig verwirrend wenn der ununterbrochen bewegt beim Skalieren des Viewports (Seitenfenster) und da dass Umbrechen des Text schon lange so verwendet wird haben sich viele Nutzer daran gewöhnt und sorgt somit für keine Verwirrung mehr, jedoch kann es sehr gut sein dass dies in Zukunft durch häufigeres Verwenden auch mit dem stufenlosen Skalieren der Fall sein wird.


## Quellen

[Fluid Responsive Typography With CSS Poly Fluid Sizing, Jake Wilson](https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing)

[Modular Scale, Zurb](https://zurb.com/word/modular-scale)

[Responsive Modular Scale, Zellwk](https://zellwk.com/blog/responsive-modular-scale/)

[Exploring Responsive Type Scales, Stackswell.io](https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54)

[100% Responsive Typography System using a Modular Scale, Ricardo Zea](https://www.codementor.io/ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g)

Headerbild:
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@tranmautritam?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Tran Mau Tri Tam"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Tran Mau Tri Tam</span></a>
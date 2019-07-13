webpackJsonp([21384217431945],{447:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---Font-Scale/index.md absPath of file >>> MarkdownRemark",html:'<h1>WTF? What The Font(scale)</h1>\n<p><strong>Typografische Systeme für das Web stellen Designer immer wieder vor Probleme. Insbesondere stellt sich die Frage wie sich Schrift Responsive verhält?\nModular Scale Type Systems bieten einen Ansatz und helfen dabei die richtigen Schriftgrössen und Abstufungen zu finden. Doch macht der Einsatz von mehreren Breakpoints Sinn, oder soll der Text Fluide skaliert werden und welche Einflüsse hat dies auf die Darstellung?</strong></p>\n<h2>Modular-Scales:</h2>\n<p>Ein Schriftgrössen Multiplikator der anhand einer Formel die Abstufungen verschiedener Titel errechnet. Das Problem dabei ist dass wenn zum Beispiel die Titel Abstufung des goldenen Schnitt verwendet werden der Unterschied zwischen Lauftextgrösse und Titel auf kleinen Devices zu Gross sind. Zur Verhinderung dieser Unterschiede in den Titelabstufungen wird bei kleineren Viewports mit Media Query’s ein anderer Multiplikator gewählt, zum Beispiel der Perfect Fourth Scale (x 1.333) hier ein Beispiel dieser Zwei Abstufungen im Vergleich: </p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Smaller Ratio" src="//codepen.io/larsmaeder/embed/zQjBMj/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/larsmaeder/pen/zQjBMj/\'>Smaller Ratio</a> by Lars Mäder\n  (<a href=\'https://codepen.io/larsmaeder\'>@larsmaeder</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Vor allem in der Design Phase eines Projekts kann es sehr Hilfreich sein ein Modular Scale System zu verwenden, diese Seite berechnet einem aus einer Grund Schriftgrösse die Verschiedenen Titelabstufungen: <a href="https://type-scale.com/">https://type-scale.com/</a></p>\n<h2>Fluid Scale</h2>\n<p>Modular Scales sind ein guter Ansatz für die Abstufungen von Überschriften und wird von den meisten Frameworks auch Standart mässig so verwendet. Ein Nachteil dieser Methode ist jedoch dass zwischen den Breakpoints genau die Schriftgrösse verwendet die der Designer in diesem Viewport definiert hat. Würde mann den Designer Fragen würde welche Schriftgrösse zu verwenden ist bei 760px Viewport breite so würde er wahrscheinlich nicht die selbe Schriftgrösse sagen wie bei 320px und um nicht hunderte von Breakpoints definieren zu müssen für jede Viewport-Zwischengrösse kann mann die Schrift auch «Fulid» Skalieren, so passt sich die Schrift Stufenlos an dem Viewport an.\n*Beispiel für Fluid Fontscale: </p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Poly Fluid Sizing using linear equations, viewport units and calc()" src="//codepen.io/jakobud/embed/vmKLYb/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/jakobud/pen/vmKLYb/\'>Poly Fluid Sizing using linear equations, viewport units and calc()</a> by Jake Wilson\n  (<a href=\'https://codepen.io/jakobud\'>@jakobud</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n*Quelle: https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/\n<p>Zudem gibt es auch Mischformen, die zum Beispiel Grundschrift anhand eines Modular Scales abgestuft wird und die Schriftgrösse klassisch umbricht, die Titel hingegen skalieren stufenlos und passen sich der Viewportgrösse an. Wichtig ist dass sich eine minimal und maximal Schriftgrösse definieren lässt und dazwischen skaliert der Text stufenlos, dies ist macht besonders Sinn damit der Text immer in einer leserlichen Schriftgrösse dargestellt wird.</p>\n<h2>Fazit:</h2>\n<p>Auf jeden Fall macht es Sinn verschiedene Schrift Grössen auf verschiedenen Devices zu verwenden. Beim Verwenden den klassischen Ansatz mit einem Modular Scale und Breakpionts hat man meiner Meinung nach bessere Kontrolle über das design und die Darstellung, jedoch leidet die Leserlichkeit leicht darunter da nicht die Maximale Schriftgrösse verwendet wird, wie sie es in der Stufenlosen Skalierung machen würde. Weiter finde ich es als user ein Wenig verwirrend wenn der ununterbrochen bewegt beim Skalieren des Viewports (Seitenfenster) und da dass Umbrechen des Text schon lange so verwendet wird haben sich viele Nutzer daran gewöhnt und sorgt somit für keine Verwirrung mehr, jedoch kann es sehr gut sein dass dies in Zukunft durch häufigeres Verwenden auch mit dem stufenlosen Skalieren der Fall sein wird.</p>\n<h2>Quellen:</h2>\n<ul>\n<li><a href="https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/">https://www.smashingmagazine.com/2017/05/fluid-responsive-typography-css-poly-fluid-sizing/</a></li>\n<li><a href="https://zurb.com/word/modular-scale">https://zurb.com/word/modular-scale</a></li>\n<li><a href="https://zellwk.com/blog/responsive-modular-scale/">https://zellwk.com/blog/responsive-modular-scale/</a></li>\n<li><a href="https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54">https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54</a></li>\n<li><a href="https://www.codementor.io/ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g">https://www.codementor.io/ricardozea/100-responsive-typography-system-using-a-modular-scale-s5rhft58g</a></li>\n</ul>',fields:{tagSlugs:["/tags/responsive-gestaltung/","/tags/typografie/","/tags/font-scale/"]},frontmatter:{title:"Font Scale",author:"Matthias Koch",category:"Responsive Gestaltung",tags:["Responsive Gestaltung","Typografie","Font Scale"],date:"2019-07-12",description:"Wie verhalten sich Schrifgrössen auf verschiedenen Device grössen? dazu gibt es verschiedne Methoden die man anwenden kann, die am häufig verwendeten sind «Modular-Scales» und «Fluid Scale». ",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABtklEQVQY0wGrAVT+AIxuP0c1HDcfA4RaMlVALWhdP6iVcJl/NbWul8DP7I6n0sTW89Lc8+vw/77AzpiHWT87JigkEY2CSrKeZwDaoD/RoE6Te1exmnY9NSZ0alDjzqDKrm+2rJjH1/KXs9Wuxu3Z4vb2+f+4t7zBp3rIsoe4onW2nnajf1MAuoQrvpBLyLOOzLR+PDIhbVkxy6ppu5VLs6qW2e7/ztj9vdT95O769Pz/tK2qx59dupllqYhPt5BQtYQxALmBKal+Rpx9TdClV31eKX1oP6eUap+GVXRyaX2InIiTs6Cz2OHm7fD3/7StpLqNQZVlG4hZDcOTRuO0ZAC3fyyWcUdJOSd8WSKwgTetgUHJsY3JvKSDiZVOX4BOWHFLUGVgZnuFiZ2di2/ToEGykj+nj0HBnU3WsXAAwIY0g2NDRjkkKx0IX0Qpqn9H2qZez6d4pJSGubClu7vErLHFh4uYlIFpxZ9eubqQksK9jsK+obqlw6h1AMCFMmZMMXZgOZd0PLuTWciZUKl4MY9dJKh1M6N0NqR5NKyFSrmRV+vcxr+jecCXRLqeWI9/U35gMGpKGht55X18ocT1AAAAAElFTkSuQmCC",aspectRatio:3,src:"/static/header-2d420bf69fc8aaf93ef73fdf98c97f6a-ef3a8.png",srcSet:"/static/header-2d420bf69fc8aaf93ef73fdf98c97f6a-e0a0e.png 750w,\n/static/header-2d420bf69fc8aaf93ef73fdf98c97f6a-0bb6d.png 1500w,\n/static/header-2d420bf69fc8aaf93ef73fdf98c97f6a-ef3a8.png 3000w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:545}}},pathContext:{slug:"/posts/fontscale/"}}}});
//# sourceMappingURL=path---posts-fontscale-9394bf7f1a698c7083ad.js.map
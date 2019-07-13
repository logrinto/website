webpackJsonp([0xb1a269a43681],{449:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---prozent/index.md absPath of file >>> MarkdownRemark",html:'<h2>Etwas Kontrolle abgeben (Design-Teil)</h2>\n<p>Es wurde im Einstiegstext schon erwähnt – die Arbeit mit Prozenten bedeutet für die Gestaltenden den Verlust von Kontrolle. Man kann nicht immer genau wissen, wie sich das Design auf bestimmte Viewports anpasst.</p>\n<p>Eigentlich ein No-Go für eine Designerin oder einen Designer – alles bis in den letzten Pixel zu definieren ist doch unser Job. Aber nein, heute ist das nicht mehr so.</p>\n<h3>Aber warum denn?</h3>\n<p>In der Zeit von flexiblem Development, Mobile-First und demnach auch Performance-First geht es nichtmehr darum mit 10000 Zeilen Code jeden möglichen Use-Case zu anitizieren und zu beheben. Das Ziel ist mit so wenig Definition wie möglich ein benutzbares und optisch ansprechendes Design zu kreieren, dass mit der richtigen Prise UX gewürzt ist, um den grösstmöglichen Teil an ROI zu generieren.</p>\n<p>Es mag anfangs weither geholt wirken – aber mit Bezugselementen zu arbeiten, wie es Prozent garantiert und unmissverständlich ist, bedeutet auch, als Gestalterin oder als Gestalter unternehmerischer zu denken. Ein frei skalierbares Bezugselement wie es Prozent ist, steht für Effizienz. Genau diese Effizienz wird in der heutigen Development-Welt geschätzt. Selbst wenn man als Designer nicht mit Prozent denkt, im Designprozess – die Chance ist gross, dass es der Developer tut.</p>\n<h3>Und was interessiert das uns, die Gestaltenden?</h3>\n<p>Genau aus diesem Grund ist es wichtig, sich auch als Gestalterin oder als Gestalter mit diesem Thema auseinander zu setzen. Ein Design welches auf Bezugselementen basiert ist ein anpassbares Design. Ein Design welches Lücken aufweisen kann, die maschinell (also der Browser) gefüllt werden können. Elemente die in Pixel definiert sind haben in den meisten Apps oder Webseiten nichts mehr zu suchen. Deshalb sollte man sich als Gestalter*in auch nicht darauf versteifen, sondern muss umdenken. Der ganze Designprozess ändert sich, wenn man sich nicht überlegt «Hmmm… wie gross mache ich jetzt diese Box?» sondern «Hmmm… Wieviel Prozent des ganzen ist diese Box jetzt gross?». Eine ähnliche Frage, durchaus, allerdings ist der Lösungsweg und die Lösung komplett anders.</p>\n<h3>Fazit</h3>\n<p>Um in der heutigen Welt des agilen Development bestehen zu können, muss man als Gestalterin oder Gestalter die Denkweise eines Entwicklers adaptieren. Nur mit dieser Emphatie wird es in Zukunft noch möglich sein, zufriedenstellende Lösungen zu gestalten.</p>\n<h2>Die Technik dahinter (Technik-Teil)</h2>\n<h3>Bezugselemente</h3>\n<p>Prozente brauchen immer ein Bezugs-Element; Prozente sind relative Werte und beziehen sich <strong>immer</strong> auf einen anderen Wert.</p>\n<h4>Prozente sind responsiv, feste Werte nicht</h4>\n<p>Wenn man ein Element in Pixel angibt, ist niemals garantiert, dass die Darstellung für die verschiedensten Ausgabegeräte passt. Ein Element mit 500 Pixel in der Breite kann auf einem Mobiltelefon mit einer Display-Breite von 400 Pixeln nicht richtig dargestellt werden.</p>\n<p>Um genau diesem Problem Rechnung zu tragen kann die Weite eines Elements mit Prozenten angegeben werden.</p>\n<p>Elemente, die mit Prozent-Weite angegeben sind beziehen sich immer auf den Container in dem sie sich befinden.</p>\n<h4>Hier ein Beispiel:</h4>\n<iframe height="300" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Percentage Example 2" src="//codepen.io/marc-hatt/embed/JqKoMy/?height=288&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/marc-hatt/pen/JqKoMy/\'>Percentage Example 2</a> by Marc Hatt\n  (<a href=\'https://codepen.io/marc-hatt\'>@marc-hatt</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Wenn man sich das oben gezeigte Beispiel ansieht, fällt auf, dass der Aufbau der Spalten gleich ist, allerdings die Weiten sich unterscheiden.</p>\n<p>Um den Grund dafür zu sehen, muss man sich das CSS des Beispiels ansehen. Der Parent des Containers in dem Fall ist HTML, welches den vollen Bildschirm ausfüllt.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css">.container {\n    display: grid;\n    grid-template-columns: 30% 30% 30%;\n    grid-template-rows: 100%;\n    grid-column-gap: 5%;\n    justify-items: stretch;\n    align-items: stretch;\n    background-color: #1abc9c;\n    height: 100vh;\n }</code></pre>\n      </div>\n<p>Der Aufbau des Containers, im Beispiel in hellblau dargestellt, besteht aus den DIV’s K1, K2 und K3. Wir haben eine Grid-Ansicht, mit einer Spaltenbreite von 30%. Der Abstand zwischen den Spalten ist 5% – wenn man die Elemente also zusammen rechnet, ergeben sie 100% – die volle Breite des Containers, was in diesem Fall das HTML ist… Also volle Bildschirmweite.</p>\n<p>Nun schauen wir uns einen Teil des HTML an, in dem es spannend wird:</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html">&lt;div class=column&gt;\n    &lt;p&gt;K 1&lt;/p&gt;\n    &lt;div class=container-2&gt;\n      &lt;div class=column-2&gt;\n        &lt;p&gt;K 1.1&lt;/p&gt;\n      &lt;/div&gt;\n      &lt;div class=column-2&gt;\n        &lt;p&gt;K 1.2&lt;/p&gt;\n      &lt;/div&gt;\n      &lt;div class=column-2&gt;\n        &lt;p&gt;K 1.3&lt;/p&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;</code></pre>\n      </div>\n<p>Wir haben innerhalb dieser Spalte einen neuen Container gemacht, der wiederum in drei Teile geteilt ist. Wenn man das nun mit dem CSS kombiniert, wie zum Beispiel dem hier:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css">.container-2 {\n    display: grid;\n    grid-template-columns: 30% 30% 30%;\n    grid-template-rows: 100%;\n    grid-column-gap: 5%;\n    justify-items: stretch;\n    align-items: stretch;\n    background-color: #16a085;\n    height: 100px;\n }</code></pre>\n      </div>\n<p>Erschafft man den oben gezeigten Effekt. Wir teilen die Spalte wieder in drei Teile auf. Unsere 100% die wir aufteilen beziehen sich jetzt auf die 30% der Spalte, die als Container funktioniert. Das kann man beliebig oft machen – man kann die Aufteilung der Prozentwerte auch ändern.</p>\n<p>In unserem Beispiel sind also die Kolumnen 1.1, 1.2, 1.3 und die Kolumnen der Spalte 2 und 3, jeweils 30% von 30% breit und die Abstände sind 5% von 30% breit. Eine Skalierung, die sich je nach Bildschirmgrösse ändert. Die Pixelwerte der Spalten sind völlig flüssig.</p>\n<p>Das funktioniert aber nicht nur mit Gestaltungsrastern – Bilder und andere grafische Elemente verhalten sich gleich und funktionieren immer nach dem gleichen Prinzip.</p>\n<hr>\n<h3>Dynamische Werte</h3>\n<p>Prozente eignen sich für dynamische Inhalte, bei denen die Werte abhängig von einem «Parent» skaliert werden. Definiert man z.B. für ein Element eine Breite von 33,333% so wird dieses immer ein Drittel der Gesamtbreite des jeweiligen «Parent» beanspruchen.</p>\n<p>Vorteil: Ein in Prozent angegebener Wert reagiert dynamisch. Alle Zahlen sind durch Prozente teilbar.</p>\n<p>Im Gegensatz dazu reagiert eine fix in Pixel definierte Breite nicht auf den jeweiligen «Parent» und ist somit nicht skalierbar.</p>\n<h4>Hier ein Beispiel:</h4>\n<iframe height="265" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Responsive Design: Prozent" src="//codepen.io/wschoeck/embed/yWJyzN/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/wschoeck/pen/yWJyzN/\'>Responsive Design: Prozent</a> by wschoeck\n  (<a href=\'https://codepen.io/wschoeck\'>@wschoeck</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Ein Container mit einer fixen Breite in Pixel (hier width: 400px;) reagiert nicht auf die aktuelle Browserbreite.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css">.fix400 {\n  width: 400px;\n  height: 60px;\n  background-color: #1c75e4;\n  margin-bottom: 20px;\n  float: left;\n}</code></pre>\n      </div>\n<p>Wohingegen ein Container mit einer in Prozent definierten Breite (hier width: 33,333%;) sich mit der aktuellen Browserbreite mit skaliert.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css">.prozent33 {\n  width: 33.333%;\n  height: 60px;\n  background-color: #1c75e4;\n  float: left;\n}</code></pre>\n      </div>\n<h3>Unterschied zwischen Prozentangaben und vh/vw</h3>\n<p>Auf den ersten Blick wirkt der Usecase von Prozenten und vh/vw (also Viewport-Width und Viewport-Height) ähnlich. Der Unterschied ist aber gross, denn Prozente beziehen sich immer auf den Container in dem sie stecken.\nvh/vw bezieht sich immer auf die Grösse des Viewports. Dafür ein Beispiel:</p>\n<iframe height="300" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Unterschied zwischen vh/vw und Prozenten" src="//codepen.io/marc-hatt/embed/BezjWv/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/marc-hatt/pen/BezjWv/\'>Unterschied zwischen vh/vw und Prozenten</a> by Marc Hatt\n  (<a href=\'https://codepen.io/marc-hatt\'>@marc-hatt</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>Um darzustellen was wir damit meinen haben wir das Beispiel aus «Bezugselemente» nochmals angepasst. Wir haben, wie im CSS ersichtlich, der mitleren Teilspalte einen vw von 33 gegeben. Das heisst, dass jeweils 33% der Viewport-Breite als Mass genommen wird, um die Pixelweite des Objekt zu generieren.</p>\n<p>Wie man sehen kann respektiert dieser Wert den Container nicht, da die Masseinheit, anders wie Prozent, den Container nicht in Betracht zieht.</p>\n<hr>\n<h3>Vorteile von Prozentwerten</h3>\n<h4>Prozente verhalten sich relativ zum Parentelement</h4>\n<p>Durch die Abhängigkeit zu dem jeweiligen Parentelement, eignen sich Prozentwerte optimal für den Aufbau von Gridsystemen.</p>\n<h4>Responsives Design</h4>\n<p>Prozentwerte sind dynamisch und passen sich an. So lassen sich gleiche Element auf verschiednenen Endgeräten gleich anzeigen.</p>\n<h3>Nachteile von Prozentwerten</h3>\n<h4>Browser ignorieren Standardweise Höhenangaben in Prozent</h4>\n<p>Sehen wir dies in einem praktischen Beispiel genauer an. Beide Boxen sind gleich definiert. Ausnahme bildet die CSS Farbdefinition <code class="language-text">background-color</code> für eine bessere visuelle Unterscheidung, sowie die Masseinheit von <code class="language-text">height</code> in Pixel und Prozent.</p>\n<p>Die Höhe der blauen Box wird Prozentual <code class="language-text">height: 100%;</code> definiert, die Höhenangabe wird vom Browser ignoriert und der Inhalt bestimmt die Boxhöhe. Die orange Box wird in Pixel <code class="language-text">height: 200px;</code> definiert, der Browser erkennt die CSS-Definition und passt die Boxhöhe entsprechend an.  </p>\n<iframe height="265" style="width: 100%; padding-top:1rem; padding-bottom:2rem;" scrolling="no" title="Ignoring Height" src="//codepen.io/larsmaeder/embed/pmboxG/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/larsmaeder/pen/pmboxG/\'>Ignoring Height</a> by Lars Mäder\n  (<a href=\'https://codepen.io/larsmaeder\'>@larsmaeder</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h4>Wieso ist das so?</h4>\n<p>Die <a href="https://www.w3.org/TR/1998/REC-CSS2-19980512/">W3C-Spezifikation für CSS 2</a> legt fest, dass sich eine prozentual angegebene Höhenangabe auf die Höhe des umschliessenden Blockes (Parent) bezieht. Wird also für diesen Parentblock keine Höhe definiert, wird der angegebene Prozentwert als <code class="language-text">height: auto;</code> interpretiert. Trotz Höhenangabe wird das Element nur so hoch, wie der Inhalt es erfordert.</p>\n<h2>Recherche</h2>\n<p><a href="http://carsten-protsch.de/zwischennetz/doctype/prozent.html">carsten-protsch.de</a></p>\n<p><a href="http://www.thestyleworks.de/basics/percentage.shtml">thestyleworks.de</a></p>\n<p><a href="https://www.lifewire.com/width-calculations-responsive-site-4136178">lifewire.com</a></p>\n<p><a href="https://www.impressivewebs.com/vertical-percentages-css/">impressivewebs.com</a></p>\n<p><a href="https://blog.kulturbanause.de/2013/01/starre-layouts-in-flussige-layouts-umwandeln-responsive-webdesign-basics/">kulturbanause.de</a></p>',fields:{tagSlugs:["/tags/responsive-gestaltung/","/tags/typografie/","/tags/bezugselemente/"]},frontmatter:{title:"Mit Prozent zum flüssigen Design",author:"Marc Hatt",category:"Responsive Gestaltung",tags:["Responsive Gestaltung","Typografie","Bezugselemente"],date:"2019-07-12",description:"Im Responsive Design wird nur noch selten mit Pixelwerten gearbeitet. Pixelwerte sind zu starr, um auf veränderte Device- und Browser-Grössen zu reagieren. Elementweiten in Prozent sind deshalb unverzichtbar, allerdings muss der Designer auch Kontrolle aus der Hand geben. Wir beleuchten :bulb: den Umgang mit Prozentwerten, die Vorteile und die Nachteile, im Web in diesem Beitrag.",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVQY02O4RgFgGNVMR80A4UtfKIGkbsEAAAAASUVORK5CYII=",aspectRatio:3,src:"/static/header-745f8df0593536ace2c264afa5fc1af5-ef3a8.png",srcSet:"/static/header-745f8df0593536ace2c264afa5fc1af5-e0a0e.png 750w,\n/static/header-745f8df0593536ace2c264afa5fc1af5-0bb6d.png 1500w,\n/static/header-745f8df0593536ace2c264afa5fc1af5-ef3a8.png 3000w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:1228}}},pathContext:{slug:"/posts/responsive-design-iad2017-prozent/"}}}});
//# sourceMappingURL=path---posts-responsive-design-iad-2017-prozent-bca6ec7a513a22c66288.js.map
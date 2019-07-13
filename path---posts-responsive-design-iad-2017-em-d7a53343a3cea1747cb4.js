webpackJsonp([0xf7b56a53b948],{447:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---em/index.md absPath of file >>> MarkdownRemark",html:'<h2>Was ist der em-Wert?</h2>\n<p>Der em-Wert ist eine relative Masseinheit für die Angabe von Grössen. Diese ist in modernen Browsern standardmässig mit 16 Pixeln definiert. Das bedeutet, dass 1 em = 16 px, 2 em = 32 px, 1.5em = 24 px, 0.75em = 12px ist. Diese Masseinheit kann auf jedes beliebige Element angewendet werden, und verhält sich demnach relativ zueinander. Da der em-Wert auch neu definiert werden kann, ist es möglich, alle mit em definierte Elemente zu verändern, ohne dass diese die Relation zueinander verlieren. Der em-Wert kann auf Schriftgrössen, Zeilenabstände, Breiten- und Höhenangaben etc. angewendet werden.</p>\n<h3>Beispiel</h3>\n<iframe height="400" style="width: 100%;" scrolling="no" title="Example of em" src="//codepen.io/mariusbecker/embed/YboLEb/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/mariusbecker/pen/YboLEb/\'>Example of em</a> by marius becker\n  (<a href=\'https://codepen.io/mariusbecker\'>@mariusbecker</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p>In diesem Beispiel wude im ersten Container (<code class="language-text">.parent</code>) die Schriftgrösse auf 20 px gesetzt. Da das Element (<code class="language-text">.outerChild</code>) sich im Conteiner (<code class="language-text">.parent</code>) befindet und im em-Wert angegeben ist, werden die Grössen von diesem geerbt.</p>\n<ul>\n<li>Schriftgrösse: 20 px × 1.75 = 35 px</li>\n<li>Zeilenabstand: 20 px × 2 = 40 px</li>\n</ul>\n<p>Das Objekt (.innerChild) befindet sich im Container (.outerChild), und erbt somit diesen wert:</p>\n<ul>\n<li>Schriftgrösse: 35 px × 1.75 = 61.25 px</li>\n<li>Zeilenabstand: 40 px × 2 = 80 px</li>\n</ul>\n<h2>Vorteile von EM-Wert</h2>\n<ul>\n<li>Hilft uns modulare Komponente zu erstellen.</li>\n<li>Grössen werden proportional korrekt dargestellt.</li>\n<li>Schnelle Anpassung der Schriftgrössen möglich mit wenig Aufwand.</li>\n</ul>\n<h2>Wann wenden wir den em-Wert an?</h2>\n<p>Em ist eine sehr nützliche Einheit für Schriftgrössen, da es seine Länge automatisch relativ zur vom Leser gewählten Schrift anpasst.</p>\n<p>Für den Zeilenabstand eignet sich em auch gut, damit gewährleistet man, dass der Zeilenabstand entsprechend zur Schriftgrösse eine optimale Lesbarkeit ermöglicht.</p>\n<p>Für konsistente Abstände wie margin oder padding skaliert sich der EM-Wert automatisch mit den Media Queries. Hingegen in Pixel Angaben würden sie bei jedem Breakpoint neu überschrieben werden. Em eignet sich daher sehr gut für responsives Design.</p>\n<h2>Wann nutzen wir besser den rem-Wert?</h2>\n<p>Em (und Prozent) bezieht sich immer auf das Eltern-Element. Bei stark verschachtelten Elementen werden die Schriftgrössen schwerer berechenbar. Rem-Werte hingegen sind relativ zum html-Wurzelelement, nicht zum Elternelement. Mit anderen Worten ermöglicht es, eine Schriftgrösse in einer relativen Weise zu spezifizieren ohne durch das Elternelement beeinflusst zu werden, was ein klarer Vorteil gegenüber dem EM-Wert ist.</p>\n<p><img src="https://i.imgur.com/93oUNl9.png"></p>\n<br>\n<p><strong>Quelle</strong></p>\n<ul>\n<li><a href="https://developer.mozilla.org/de/docs/Web/CSS/font-size">https://developer.mozilla.org/de/docs/Web/CSS/font-size</a></li>\n<li><a href="https://www.elmastudio.de/css-tipp-rem-als-einheit-fur-schriftgrose-nutzen/">https://www.elmastudio.de/css-tipp-rem-als-einheit-fur-schriftgrose-nutzen/</a></li>\n<li><a href="http://www.intensivstation.ch/css3/em-rem">http://www.intensivstation.ch/css3/em-rem</a></li>\n<li><a href="https://www.mediaevent.de/css/font-size-rem.html">https://www.mediaevent.de/css/font-size-rem.html</a></li>\n<li><a href="https://www.netnode.ch/blog/masseinheiten-und-kenngroessen-fuer-die-typographie-im-web-teil-1">https://www.netnode.ch/blog/masseinheiten-und-kenngroessen-fuer-die-typographie-im-web-teil-1</a></li>\n</ul>',fields:{tagSlugs:["/tags/responsive-gestaltung/","/tags/typografie/","/tags/em/","/tags/rem/","/tags/dynamisch/","/tags/masseinheit/"]},frontmatter:{title:"Dynamische Masseinheit em",author:"Tieu Khe Mayer, Natasha Ruf, Marius Becker",category:"Responsive Gestaltung",tags:["Responsive Gestaltung","Typografie","em","rem","dynamisch","Masseinheit"],date:"2019-07-12",description:"Eine der besten Praktiken für die Typografie im Web ist die Verwendung relativer Einheiten wie em und rem. Relative Grössen werden in Abhängigkeit von anderen Masseinheiten angegeben und passen sich dadurch besser verschiedenen Ausgabemedien und Benutzereinstellungen an. Aber wann ist es sinnvoll em anzuwenden, wann besser rem?",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACAElEQVQozxWSyW7TYBhF8y5AERSpRI0z2q6dOB5/O46HOHGatCmdkg4qLVSItqpgU6HuWHTHCgkJXvLw9wXuPfd8XyUNBedRi227SVPZwLc0ag0Fz7HIYkE68EmTiHI8YntSMCsLRnnGXneD+/5LxspLNKWO/u41XmOdytDVyXyDxO+SORqHZcK8zLn9uOT+8pjr8yWLIia323y5OOH0YEHPUDkMuzzkKiuxhXAd1t+ssVmVgZnTZmjUsXUFXa2hNt8T2Abfr5dcnO6TjQoi15CBDaZ+k3G/SmpWmUiIWJb43SY9fROttkan+oLK71XJxSwhjgSO6+GJkIMy4s/TDz6fLbH0DqFrcbYoyRNBFvRY5iGnRYLZVmi3m5i6zn46IHFtKgvnebLF6uQI0TOlO4fDvYJ/P79yebzHbpaSBDZ5aOPL4DgKmYxy6TditT1kmkUk8ZAi9DHVFpUPQZepcLi5u5GBGqnnY/ctHu8uWZQps/kO+UBQpCGBtYWnKYhnaln+aTbgfHdCkuR0NZ16vUElDVwp1eZoPmE2DCSt4Goq+PV4y3Kes9U1mQWevPKQMs25Ojpm5Lr0LUMW95mPx4zjAUa9hWbKyb58D006GMjGeRpTdNp82/H4+/SAEB4ttUNf1/DNFp3aBgN5UdOQpJJSbXdwpKJhEKIoLV6tv+U/nPEzoTOlT+cAAAAASUVORK5CYII=",aspectRatio:2.6666666666666665,src:"/static/header-8150d5176f9c19af81b8721207e7e11b-66e45.png",srcSet:"/static/header-8150d5176f9c19af81b8721207e7e11b-3a6bb.png 750w,\n/static/header-8150d5176f9c19af81b8721207e7e11b-42b22.png 1500w,\n/static/header-8150d5176f9c19af81b8721207e7e11b-66e45.png 1600w",sizes:"(max-width: 1600px) 100vw, 1600px"}}}},wordCount:{words:438}}},pathContext:{slug:"/posts/responsive-design-iad2017-em/"}}}});
//# sourceMappingURL=path---posts-responsive-design-iad-2017-em-d7a53343a3cea1747cb4.js.map
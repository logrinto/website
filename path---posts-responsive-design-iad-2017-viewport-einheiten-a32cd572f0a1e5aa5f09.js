webpackJsonp([0x690a7fcd64ed],{453:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---Viewport-Einheiten/index.md absPath of file >>> MarkdownRemark",html:'<h2>Viewport Einheiten kurz erklärt</h2>\n<p>Vw (viewport width) and vh (viewport height) sind Einheiten genau wie em, Pixel oder Prozent. Sie sind noch relativ neu und werden noch nicht von allen aktuellen Browsern unterstützt. Sie können für Anwendungen wie One-pagers, full-width grids, Typografie und anderen Elementen abhängig vom Viewport eingesetzt werden. Als Beispiel setzt <a href="http://www.wood-room.ch/#wood-room">Wood-room</a> die Vw-Einheit in ihrem One Pager ein, um Bilder und Abschnitte immer auf die ganze Bildschirmhöhe und -breite zu skalieren.</p>\n<p>Es gibt noch zwei weitere Einheiten, die jedoch weniger gebräuchlich sind im Vergleich zu vw und vh, dies sind vmin (minimum viewport) und vmax (maximum viewport). Vmin bezieht sich immer auf die kürzere Seite des Screens und vmax immer auf die grössere.</p>\n<p>Eine der vier Einheiten ist jeweils 1% von der jeweiligen Viewport-Achse.</p>\n<ul>\n<li><strong>1vw</strong> = 1% der Viewport Breite</li>\n<li><strong>1vh</strong> = 1% der Viewport Höhe</li>\n<li><strong>1vmin</strong> = 1vw oder 1vh, dasjenige welches kleiner ist von beiden</li>\n<li><strong>1vmax</strong> = 1vw oder 1vh, dasjenige welches grösser ist von beiden</li>\n</ul>\n<div class="wide-grid">\n  <div class="col-1to12">\n  <figure>\n    <img src="https://i.imgur.com/RPPdhY6.png" alt="vmin vmax">\n    <figcaption>Die Einheiten vmin und vmax im Vergleich bei einem quadratischen Bild auf einem Smartphone dargestellt. Bei vmin wird die schmale Seite verwendet und bei vmax die lange.</figcaption>\n  </figure>\n</div></div>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.boxlinks</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100vmin<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100vmin<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.boxrechts</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100vmax<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100vmax<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Grafik <a href="http://constructs.stampede-design.com/2014/11/rarely-used-css-units/">www.constructs.stampede-design.com</a></p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Fluid Header" src="//codepen.io/severinkilchhofer/embed/BeQvjd/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/BeQvjd/\'>Fluid Header</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Als Beispiel haben wir einen Header mit einem <code class="language-text">padding: vmin</code> erstellt. So kann eine Responsive Ansicht des Headers auf allen Screengrössen garantiert werden.</em></p>\n<h2>Prozent, em oder vw – was ist wann einzusetzen?</h2>\n<p>Werden Viewport Einheiten richtig eingesetzt, wird ein flüssiger Responsive-Effekt erreicht, der sich einiges von einer adaptiven Website unterscheidet. Ein responsives Design verändert sich mit Viewport Einheiten automatisch, sobald sich die Grösse vom Viewport verändert. Ein adaptives Design (Angabe mit Prozent oder em) hingegen verändert sich mithilfe von <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp">Media Queries</a>, sobald eine bestimmte Viewport Grösse erreicht wird. So gibt es einen abrupten Wechsel und keinen flüssigen wie bei den Viewport-Einheiten. Der Einsatz von Viewport Einheiten ist einfacher zu implementieren, da bei adaptiven Anwendungen meist mehrere Media Queries zum Einsatz kommen.</p>\n<h2>Wo werden Viewport Einheiten eingesetzt?</h2>\n<h3>Responsive Typografie</h3>\n<p>Viewport Einheiten werden gerade im Bereich der Typografie oft eingesetzt. Zum Beispiel bei einer Headline, die sich über die gesamte Breite des Viewports erstreckt und bei Veränderung des Viewports stufenlos skaliert wird. Der Vorteil ist hier, dass dies einfach implementiert werden kann und zu einem visuell spannenden Effekt beitragen kann. <a href="https://css-tricks.com/examples/ViewportTypography/">In diesem Beispiel</a> wird stufenloser Text eingesetzt.</p>\n<p><strong>Das Benutzen dieser einfachen Viewport Einheiten kann jedoch den unerwünschten Effekt haben, dass Schriftgrössen sehr schnell skaliert werden.</strong> Auf grossen Desktop Screens werden diese zu gross und auf Smartphones viel zu klein dargestellt. Ausserdem stellt sich die Frage ob dieser «sich immer skalierende Effekt» bei Grundtext überhaupt erwünscht ist oder ob es mehr als Spielerei dient anstelle den Leser zu unterstützen.</p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="vw/vh font-sizes" src="//codepen.io/severinkilchhofer/embed/KLMpVN/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/KLMpVN/\'>vw/vh font-sizes</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Dieses Beispiel enthält einen Titel auf 6vw sowie Copytext auf 4vw. Es wird offensichtlich, dass der Copytext auf Smartphones viel zu klein wird und auf grossen Screens viel zu gross.</em></p>\n<p><strong>Deshalb ist es empfehlenswert auch hier noch mit Mediaqueries zu arbeiten um so die Mindest- und Maximumgrösse der Schrift bestimmen zu können.</strong> So kann der Range der Schriftgrösse genau definiert werden.</p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Media Queries Richtig" src="//codepen.io/severinkilchhofer/embed/rgLeLG/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/rgLeLG/\'>Media Queries Richtig</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Dieses Beispiel zeigt den Einsatz von Viewport Einheiten kombiniert mit 3 Media Queries, jeweils für Landscape, Smartphones und grossen Screens.</em></p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">h2</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 8vw <span class="token punctuation">}</span>\n<span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 5vw<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span> <span class="token property">orientation</span><span class="token punctuation">:</span>landscape <span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">h2</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 4vmax <span class="token punctuation">}</span>\n  <span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 2.2vmax<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 680px <span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">h2</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 3vmax <span class="token punctuation">}</span>\n  <span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 2vmax<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> screen and <span class="token punctuation">(</span> <span class="token property">min-width</span><span class="token punctuation">:</span> 1024px <span class="token punctuation">)</span></span>  <span class="token punctuation">{</span>\n  <span class="token selector">h2</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 5em <span class="token punctuation">}</span>\n  <span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 1.3em<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>@media (orientation:landscape) hilft auch, wenn das iPhone im Landscape-Modus die Schriftgrösse unsinnig erhöht. Ansonsten unterbleibt der Schriftgrössenwechsel beim Wechsel von Landscape auf Portrait mit</em></p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">html</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>So kann man sicher sein, dass sich der Text, bei einer Drehung des Mobiltelefons, nicht in der Grösse verändert.</p>\n<h3>Full-height Elemente</h3>\n<p>Die Viewport Einheit vh eignet sich bei Bildern oder farbigen Hintergründen, die sich auf die ganze Höhe des Screens beschränken. Ohne Viewport Einheiten müssten alle Container Elemente von .image eine Grösse von 100% aufweisen. <strong>Mit % kann man nur die gesamte Breite und nicht die Höhe ansprechen. Deshalb ist für die Höhe vh dem %-Wert vorzuziehen.</strong></p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.image</span> <span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>Wir haben hier mithilfe von 100vh die ganze Höhe des Bildschirms gefüllt.</em></p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="vw/vh" src="//codepen.io/severinkilchhofer/embed/wbWBEL/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/wbWBEL/\'>vw/vh</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Dieses Beispiel zeigt verschiedene Farbflächen, die sich bei Scroll verändern und automatisch auf die ganze Screenhöhe andocken.</em></p>\n<h3>Paddings mit vw</h3>\n<p>Bei Abständen kann es wiederum von Vorteil sein mit vw zu arbeiten. So kann man sicher sein, dass es auf einem Gerät nicht plötzlich einen zu grossen oder zu kleinen Abstand generiert und so das Verhältnis zu den restlichen Elementen nicht mehr stimmt. Mit vw kann man den optischen Eindruck auf allen Geräten gleich halten.</p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Media Queries" src="//codepen.io/severinkilchhofer/embed/YbWwaL/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/YbWwaL/\'>Media Queries</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Hier sieht man genau diesen Fall, wie mit vw die Abstände zwischen Text und Box definiert wurden.</em></p>\n<p>Natürlich kann man die Viewport Einheiten auch in anderen Elementen als Typografie und Abständen verwenden. In <a href="https://codepen.io/tublitzed/pen/eNXEZQ/">diesem Beispiel</a> passt sich eine Grafik stufenlos an die Bildschirmgrösse an.  </p>\n<h2>Hier sollten Viewporteinheiten NICHT eingesetzt werden</h2>\n<h3>Verschachtelungen</h3>\n<p>Um einen Code strukturiert aufzubauen macht es Sinn gewisse Elemente ineinander zu verschachteln und so eine Abhängigkeit zu generieren. Hierfür ist ViewWidth und ViewHeight aber keine gute Lösung wie wir in diesem Codepen zeigen.</p>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Complex vw/vh" src="//codepen.io/severinkilchhofer/embed/KLMpWW/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/KLMpWW/\'>Complex vw/vh</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><em>Bei diesem Codesnippet wird aufgezeigt, dass verschachteltet Element besser in % angegeben werden. So bleiben sie abhängig vom Parentelement und verhalten sich nicht anders. In unserem Beispiel bricht die hellste Box aus den anderen aus, da sie mit vw/vh definiert wurde.</em></p>\n<h2>Browser Support</h2>\n<p>Aktuell werden die folgenden Browser von Viewport Einheiten unterstützt: IE 10+, Firefox 19+, Chrome 34+, Safari 7+, Android 4.4+, iOS 6+.</p>\n<div class="wide-grid">\n  <div class="col-1to12">\n    <figure>\n      <img src="https://i.imgur.com/vZ4dlqn.png" alt="Browsersupport">\n      <figcaption> Grafik www.caniuse.com/#search=vw </figcaption>\n    </figure>\n  </div>\n</div>\n<h2>Übergabe Design an Entwicklung</h2>\n<p>Was muss noch auf Designseite zum Thema der Viewport Einheiten überlegt bzw. geliefert werden? Nach unseren Recherchen und Gesprächen sind wir der Meinung, dass der Designer der Entwicklung keine Angaben über die Umsetzungsart mitgeben soll. <strong>Es soll dem Entwickler frei sein, ob er mit Prozent, em’s oder Viewport Units arbeiten möchte.</strong> Zudem soll auch das Box-Modell Aufgabe des Programmierers sein, da dies zu weit in sein Themengebiet eingreift und sonst nur die Kosten im Design erhöht.</p>\n<p><strong>Der Designer soll ihm aber klar definieren welche Elemente sich wann im Viewport befinden müssen.</strong> Es sollen Viewport Designs für alle Template-Seiten erstellt werden. Dies sind alle Seiten, die einen anderen Aufbau haben, sodass auch beim Design nicht zu viel Aufwand entsteht. Diese Designs sollen jeweils auf Desktop, Mobile und Tablet aufbereitet werden. Dies erspart allfällige Rückfragen oder Änderungen und somit Zeit und Budget.</p>\n<div class="wide-grid bg">\n  <div class="col-1to12">\n    <figure>\n      <img src="https://i.imgur.com/v8t52Am.png" alt="Responsiveness">\n      <figcaption>Grafik www.awwwards.com/why-responsive-design-support-is-the-most-important-feature-you-can-add-to-your-website.html</figcaption>\n    </figure>\n  </div>\n</div>\n<h2>Quellen</h2>\n<p><a href="https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/">https://web-design-weekly.com/2014/11/18/viewport-units-vw-vh-vmin-vmax/</a></p>\n<p><a href="https://www.mediaevent.de/schriftgroessen-immer-ein-griff-ins-wespennest/">https://www.mediaevent.de/schriftgroessen-immer-ein-griff-ins-wespennest/</a></p>\n<p><a href="https://css-tricks.com/fun-viewport-units/">https://css-tricks.com/fun-viewport-units/</a></p>\n<p><a href="https://css-tricks.com/viewport-sized-typography/">https://css-tricks.com/viewport-sized-typography/</a></p>\n<p><a href="https://css-tricks.com/simple-little-use-case-vmin/">https://css-tricks.com/simple-little-use-case-vmin/</a></p>',fields:{tagSlugs:["/tags/responsive-gestaltung/","/tags/typografie/","/tags/viewport-einheiten/"]},frontmatter:{title:"Wann lohnt sich der Einsatz von Viewport Einheiten?",author:"Severin Kilchhofer, Pascale Anderegg, Nicole Watrinet",category:"Responsive Gestaltung",tags:["Responsive Gestaltung","Typografie","Viewport Einheiten"],date:"2019-07-12",description:"Der Viewport ist der Bereich wo der Browser die Seite rendert. Manchmal möchte man Elemente wie eine Sidebar oder ein Grid am Viewport ausrichten. Dies kann mit den neuen Viewport Units erreicht werden. Aber wo genau liegen Potenzial und Einschränkungen dieser Einheiten?",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAC4jAAAuIwF4pT92AAAB+klEQVQozy2R3UtTcRzG91cUFGw67YUiLfJlKRFUVAhdZRhEJBGtLKeEUZS92ZtQ2Itk6djcnDtjJHnRRWB2Eca6SHfTnUGRsFDnzmnn/M45O1vx6Tfr4oEHvg8Pz/d5XHr8GuZHBTE9jHgf/AfJ9Zk41qMjZHq9zPZvxx5toDjWSDHagDO+C1M5jiHvxuM2xN0DWJ1e7K5qXOaMghU7hni6G/F8H+bQfvQBH+rkJaxoDys3POTCPpyyURnhGuxXh8mm4mgPG8m9lHxqBKtrA1bAi0tMB9Ge7UXt24R6bxva/RpyN6tYirRjhbrQblVQSjTze0wmHG9G/9CPOpdEm5tEDx4lr5xDfTOAI9OVumVC/d0I9pNGxPX1mHeqsCT0q2vQwm1oIwF+XHGTDfnQXtSSix1ETfjJD7WwEvOzHNjCck8d2c7NLJ6t5PvpCvnypwn+fJ2mlE5gzyo46STFWdnftxRi9CJLvW6MWBN2aAdmsgU11EruQS35yAmEfy36+UoK8tX5Ux6+nHTjMt4OURACJ5vhV2YB/ecCxdwilraCGGxHu+2loDRRitbhKHswUsMY6QnMxBkKHeuwuzeujlFGYXUUWaZ5wUP+8k7E/Gf0qSBGhxuzLAhUk+nbihFpoCQXdqL10ugQxutW7MF6bLmsJXXWf0MrUMVfcWqSqhdJg4cAAAAASUVORK5CYII=",aspectRatio:2.9954954954954953,src:"/static/header-b3de8e63a4039b423ecb0173fd83eee2-ef3a8.png",srcSet:"/static/header-b3de8e63a4039b423ecb0173fd83eee2-e0a0e.png 750w,\n/static/header-b3de8e63a4039b423ecb0173fd83eee2-0bb6d.png 1500w,\n/static/header-b3de8e63a4039b423ecb0173fd83eee2-ef3a8.png 3000w,\n/static/header-b3de8e63a4039b423ecb0173fd83eee2-8b91a.png 3325w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:1062}}},pathContext:{slug:"/posts/responsive-design-iad2017-viewport-einheiten/"}}}});
//# sourceMappingURL=path---posts-responsive-design-iad-2017-viewport-einheiten-a32cd572f0a1e5aa5f09.js.map
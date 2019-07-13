webpackJsonp([0x6ad0fc7c39cd],{454:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---TypoArtboard/index.md absPath of file >>> MarkdownRemark",html:'<h2>Probleme</h2>\n<ol>\n<li>Die Namensgebung wird nicht von allen Parteien gleich verstanden.</li>\n<li>Die Fontgrössen H1 - zB. H6 verhalten sich nicht unbedingt Proportional zueinander.</li>\n<li>Der Designer hat keine Ahnung von der Typo-Struktur im Code.</li>\n</ol>\n<p>Das Beispiel unten finden wir ungenügend, um den Entwicklern weiterzuleiten. Die Proportionen sind überhaupt nicht klar und wenn eine Einheit wechselt, wird es schwierig diese schnell anzupassen.</p>\n<div class="wide-grid">\n  <div class="col-1to12">\n    <figure>\n      <img src="https://i.imgur.com/q1KNTkp.png" alt="Design System Style Template">\n      <figcaption>https://medium.com/sketch-app-sources/design-system-text-shared-style-template-67d13b83e417</figcaption>\n    </figure>\n  </div>\n</div>\n<h2>Lösungen</h2>\n<h3>1. Variable Benamsung</h3>\n<p>Individuelle Benamsung der einzelnen Absatzformate (zum Beispiel als T-Shirt Grössen: XS, S, M, L etc.) Diese werden dann den Klassen H1 - p zugeordnet.</p>\n<h3>2. Modularscale</h3>\n<p>Mit dem Tool Modularscale kann man sich beliebig die proportionalen Schriftgrössenabstufungen zusammenstellen: </p>\n<div class="wide-grid">\n  <div class="col-1to12">\n    <figure>\n      <img src="https://i.imgur.com/M0lpg1K.png" alt="test">\n      <figcaption>modularscale.com</figcaption>\n    </figure>\n  </div>\n</div>\n<p>Dazu ist wichtig, dass man die maximale und die minimale Grösse bestimmt, alles dazwischen wird dann berechnet.</p>\n<h3>3. Code Verständnis aufbauen</h3>\n<p>Um eine gute Zusammenarbeit zwischen dem Designer und dem Entwickler zu garantieren, braucht es ein Grundverständnis des jeweiligen Kerngebietes. Mit dem Technischen Know-how kann der Designer dann einem guten Artboard gerecht werden.</p>\n<h3>Typo Artboard für den Entwickler</h3>\n<p>Auf den ersten drei Artboards links, findet man die definierten Variablen für die Schriftgrössen, Farben und Schriftschnitte. Diese sind jeweils als Variablen definiert.</p>\n<p>Auf der rechten Seite sind die genauen Definitionen der Hierarchie. Das heisst auch einige Spezialitäten wie Zeilenabstand und Textstyle werden hier definiert.</p>\n<iframe style="border: none;" width="100%" height="600px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUA06525gRNuDmB2QWmAzrD4k%2FDas-perfekte-Typo-Artboard%3Fnode-id%3D0%253A1" allowfullscreen></iframe>\n<h2>Variablen</h2>\n<p>Aus Programmierungssicht werden die Schriftmerkmale dann einmal Global als Variablen definiert. (Wie er die Variablen benennt ist seine Sache und muss vom Designer nicht bis ins kleinste Detail bekannt gegeben werden.)\nSo muss man sich während der Entwicklung nie mehr um die Grössen und Farben etc. kümmern. Eine Beispielumsetzung könnte so aussehen:</p>\n<iframe height="600" style="width: 100%;" scrolling="no" title="Font Sizes" src="//codepen.io/severinkilchhofer/embed/zQjBba/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/severinkilchhofer/pen/zQjBba/\'>Font Sizes</a> by severinkilchhofer\n  (<a href=\'https://codepen.io/severinkilchhofer\'>@severinkilchhofer</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<p><a href="https://codepen.io/severinkilchhofer/pen/zQjBba">https://codepen.io/severinkilchhofer/pen/zQjBba</a></p>\n<h3>Links</h3>\n<p><a href="https://marvelapp.com/styleguide/">https://marvelapp.com/styleguide/</a></p>\n<p><a href="https://www.w3schools.com/css/css3_variables.asp">https://www.w3schools.com/css/css3_variables.asp</a></p>\n<p><a href="https://storybook.js.org">https://storybook.js.org</a></p>\n<p><a href="https://codepen.io/getflourish/pen/VMXdJv">https://codepen.io/getflourish/pen/VMXdJv</a></p>\n<p><a href="https://www.catalog.style/try">https://www.catalog.style/try</a></p>\n<p><a href="https://www.carbondesignsystem.com">https://www.carbondesignsystem.com</a></p>\n<h3>Font</h3>\n<p><a href="https://rsms.me/inter/">https://rsms.me/inter/</a></p>\n<h3>Cover Photo</h3>\n<p>Photo by <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&#x26;utm_medium=referral&#x26;utm_content=creditCopyText">Pankaj Patel</a> on <a href="https://unsplash.com">Unsplash</a></p>',fields:{tagSlugs:["/tags/responsive-design/","/tags/typografie/"]},frontmatter:{title:"Das perfekte Typo Artboard",author:"Severin Kilchhofer",category:"Responsive Gestaltung",tags:["Responsive Design","Typografie"],date:"2019-07-12",description:"Für Designer ist oft nicht klar, wie man dem Entwickler am Besten vermittelt was es alles für Schrifthierarchien gibt. Zudem muss ihm der Designer eine Struktxur der Schrifteigenschaften mitgeben und wie sich diese verhaltet.",featuredImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAEDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAByhpJyuTX/8QAGRAAAwADAAAAAAAAAAAAAAAAAQIQABEx/9oACAEBAAEFAohUDmbn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Bqv/EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAECAQE/AQi//8QAFhAAAwAAAAAAAAAAAAAAAAAAECAh/9oACAEBAAY/AhU//8QAFxABAQEBAAAAAAAAAAAAAAAAAQARIP/aAAgBAQABPyEmYjx3g//aAAwDAQACAAMAAAAQgw//xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAIAQMBAT8QA5CL/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EFamf//EABkQAQEBAQEBAAAAAAAAAAAAAAERACExQf/aAAgBAQABPxACNUcI8rnB/BLyGb4crXf/2Q==",aspectRatio:1.5,src:"/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-ef3a8.png",srcSet:"/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-e0a0e.png 750w,\n/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-0bb6d.png 1500w,\n/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-ef3a8.png 3000w,\n/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-29be0.png 4500w,\n/static/header-image-a7e30fd77997e948e9ffd43dcdca34dc-bc44a.png 6000w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:356}}},pathContext:{slug:"/posts/typoartboard/"}}}});
//# sourceMappingURL=path---posts-typoartboard-70b51b310bf36ae30887.js.map
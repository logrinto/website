webpackJsonp([0xce65294544a8],{454:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Logrinto Blog",subtitle:"Blog zum Interaction Designer an der Schule für Gestaltung Zürich",author:{name:"Logrinto",twitter:"https://twitter.com/logrinto"}}},markdownRemark:{id:"/home/travis/build/logrinto/website/src/pages/articles/2019-07-12---Tabellen-im-Web/index.md absPath of file >>> MarkdownRemark",html:'<style>\n    .img-special {\n        background: #FFFFFF; \n        box-shadow: 0 3px 15px 0 rgba(0,0,0,0.08), 0 15px 15px -15px rgba(0,0,0,0.30); \n        border-radius: 4px; \n        margin-bottom: 20px\n    }\n    .img-special.small{\n        width: 115px;\n    } \n</style>\n<p>Mit Tabellen und Datensätzen interagieren wurde fast schon zu einem Standard und gewöhnliche starre Tabellen gehören der Vergangenheit an. Funktionen wie «Sortieren», «Filtern» und «Löschen» sind keine aussergewöhnliche Features im Web, sondern gehören zum Alltäglichen Gebrauch. Dieser neue Umgang mit Tabellen, sowie die Entwicklung von Endgeräten und wie wir das Internet konsumieren, bringt zu den bereits bekannten älteren Schwierigkeiten, eine neue Herausforderung hervor. Wie gehe ich mit Tabellen im Responsive Design um?</p>\n<p>Nachfolgender Artikel geht auf die Grundstruktur von Tabellen ein, zeigt dabei einen kleinen Ausschnitt an Möglichkeiten von Interaktionen mit Tabellen und versucht Lösungen für Mobilgeräte aufzuzeigen.</p>\n<h2>Table-Based Layout Is The Next Big Thing</h2>\n<p>Tabellen als Grid von Webseiten? Bitte nicht! 🙅‍♀️</p>\n<p>Was im Jahr 2008 der Normalität angehörte, ist heute wahrscheinlich die Hölle für jeden Frontend-Entwickler. Flexbox, CSS-Grids oder die CSS-Float-Property war dazumals noch Zukunftsmusik.</p>\n<h3>The <del>good</del> ol’ Web</h3>\n<p>Wer das Vergnügen hatte das Web seit den Anfängen zu begleiten, wird sich gut an die visuellen Auftritte der Webseiten erinnern können. Aber auch für jene, welche die technische und visuelle Entwicklung von Webseiten nicht gängig sind, erkennen schnell die typischen Merkmale von Table-Based Layouts.</p>\n<h4>Ecken, Kanten und noch mehr Kästen.</h4>\n<p>Tabellen wurden grundsätzlich nicht nur für das Abbilden von Daten in vertikalen Spalten und horizontalen Zeilen gebraucht, sondern auch für den Aufbau eines Grids oder Grundgerüst der Webseite. Tabellen haben neben Vorteile auch einige Tücken und Macken, im Gebrauch als Grid sind sie gegenüber den heutigen Systeme in der Funktionalität und Möglichkeiten beträchtlich eingeschränkt.</p>\n<p>Ausserdem bietet die technisch erzwungene «Kasten»-Anordnung der verschiedenen Elemente, keine grossen flexibilität innerhalb des Layouts. So sahen Webseiten zueinander meist sehr ähnlich.</p>\n<h5>Das sah dann meistens so aus … 💩</h5>\n<iframe height="500" style="width: 100%;" scrolling="no" title="Table Based Website" src="//codepen.io/larsmaeder/embed/arwjqp/?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/larsmaeder/pen/arwjqp/\'>Table Based Website</a> by Lars Mäder\n  (<a href=\'https://codepen.io/larsmaeder\'>@larsmaeder</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h3>Aufbau und Attribute</h3>\n<p>Ich möchte nicht zu tief in die technische Merkmale der Tabellen eintauchen, sondern nur an der Oberfläche kratzen um ein gewisses Grundverständniss zu übermittel. Dies ist nötig um spätere Probleme schneller zu erkennen und dafür Lösungsansätze zu finden.</p>\n<p>Das <code class="language-text">&lt;table&gt;</code>-Element in HTML wird zum Anzeigen von Tabellendaten verwendet. Eine Kopfzeile wird mit <code class="language-text">&lt;thead&gt;</code> gekennzeichnet. Die gesamte erste Zeile enthält daher keine Daten, sondern lediglich die Titel der Spalten. <code class="language-text">tr</code> kennzeichnet Tabellenzeilen und <code class="language-text">td</code> Tabellendaten. Im Wesentlichen besteht eine Tabelle aus Spalten und Zeilen.</p>\n<h5>Aufbau einer einfache Tabelle:</h5>\n<iframe height="265" style="width: 100%;" scrolling="no" title="Simple Table" src="//codepen.io/larsmaeder/embed/YbQJYW/?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href=\'https://codepen.io/larsmaeder/pen/YbQJYW/\'>Simple Table</a> by Lars Mäder\n  (<a href=\'https://codepen.io/larsmaeder\'>@larsmaeder</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2>Responsive Design und Tabellen</h2>\n<p>Tabellen dienen im Web nicht nur der Visualisierung von Datensätzen, sie ermöglichen dem User auch das Arbeiten mit Informationen. Dies kann mittels diversen Interaktions-Möglichkeiten dem User vereinfacht werden. Folgende Methoden eignen sich besonders gut, um dem User Datensätze in einer Tabelle zugänglicher zu machen.</p>\n<p>Das Ziel ist Tabellen auf allen Engeräten gleich auszugeben, egal ob Desktop- oder Mobilbildschirm. Dabei versuchen wir unsere Gestaltung und Umgang mit Tabellen nach den Designprinzipien von Don Norman anzulehnen. Besonders drei davon sollten wir uns immer im Hinterkopf behalten. Sinngemäss zusammengefasst wären diese folgende:</p>\n<ol>\n<li>Spalten von links nachs rechts nach ihrer Wichtigkeit anordnen</li>\n<li>Wesentliches ersichtlich machen. Den Kontext bewahren auch wenn zusätzliche Details angezeigt werden</li>\n<li>Sprich menschlich, klar und für jedermann verständlich</li>\n</ol>\n<h3>Links innerhalb von Tabellen</h3>\n<p>Links innerhalb von Tabellen können schnell zusätzliche Hintergrundinformationen vermitteln.</p>\n<blockquote>\n<p><strong>Wichtig</strong><br>\nDem User muss jederzeit klar sein was der Link für eine Aktion ausführt.</p>\n</blockquote>\n<p>Unklare und verwirrende Links sollten vermieden werden. Zusätzlich ist es besser wenn Links immer in einem neuen Tab geöffnet werden, der User soll nicht aus der aktuellen Auseinandersetzung mit der Tabelle gerissen werden.</p>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1894px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 25.55438225976769%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAr0lEQVQY03VQTQ/CMAjd//9tHsyuejDxplm3uX6tQJ+lWc2Mk4RQ4PXxoMs5Q42IMAwGlBKaiQiMMYgx1lyhWhtHA+fsVstoHBq7lrCbsNwvWNbyZqlNZob3vsb2USTDvAJCTHWCDjgknIcnrv0ZloBE/AGr8qa2EhafvCAk2TB/FFrzwK0/VUIbqIJVWSonaOoa4egYNvJX/YeQ1gg7lxuWwWlbOe9W2rv2ieWQ8A3dd4mMEPQF5QAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Visualisierung von Links innerhalb einer Tabelle" title="Visualisierung von Links innerhalb einer Tabelle" src="/static/f4EFlVQ-7889b8cfbdb4df032b184e81300bd234-9a585.png" srcset="/static/f4EFlVQ-7889b8cfbdb4df032b184e81300bd234-56cf1.png 750w,\n/static/f4EFlVQ-7889b8cfbdb4df032b184e81300bd234-cd096.png 1500w,\n/static/f4EFlVQ-7889b8cfbdb4df032b184e81300bd234-9a585.png 1894w" sizes="(max-width: 1894px) 100vw, 1894px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<p>Hier sehen wir in der ersten Spalte verschiedene Benutzer. Dem User versteht aus dem Kontext, dass der Link sehr wahrscheinlich das jeweilige Benutzerprofil öffnet. Hingegen in der letzten Spalte wird dem User nicht klar sein, wohin der Link führt oder welche Aktion bei einem Klick ausgeführt wird.</p>\n<h3>Aktionen innerhalb von Tabellen</h3>\n<p>Dem User werden oftmals schon innerhalb der Tabellen diverse Möglichkeiten zur Interaktion geboten. «Teilen», «Drucken», «Löschen» und «Favorisieren» sind die gängigsten Aktionen die dem User zur Verfügung stehen. Diese Aktionen können innerhalb einer Zeile direkt untergebracht werden.</p>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 25.86062132661629%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQY022QzRKDMAiEff/368VTp4fWQ/9MjFIDbANq6oxlhpkN+bIEGlWFRRaBlNwi5wxmdm2EacvKs4BX3mpbvVkr6G8X9CGZ9MsQAoioNni+I/qYnLVIjzvGwvw1lHK4tieEgYo24PdbXTpgmhWUF+1PxwGYP64Phnbozi1ecfJHZmgjV7BkIsZAy8huEgOEpqOhrlsS25HvUSuwT6vz/k6KeeH3jMUX9VGKqvZztw0AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Visualisierung einer Aktion innerhalb einer Tabelle" title="Visualisierung einer Aktion innerhalb einer Tabelle" src="/static/nR2BOsN-991cdc8d4a89fbf3c85c1e06722e1d91-23544.png" srcset="/static/nR2BOsN-991cdc8d4a89fbf3c85c1e06722e1d91-c773c.png 750w,\n/static/nR2BOsN-991cdc8d4a89fbf3c85c1e06722e1d91-71d97.png 1500w,\n/static/nR2BOsN-991cdc8d4a89fbf3c85c1e06722e1d91-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<p>In diesem Beispiel wurde die Funktion «User löschen»/«delte user» direkt in die jeweilige Zeile eingebettet. Aktionen auf diese Art und Weise sind weit verbreitet und werden von Usern schnell verstanden.</p>\n<p>Jedoch gibt es hier auch einige Punkte die nicht ausser Acht gelassen werden sollten und für Mobilgeräte Probleme bereiten können:</p>\n<ul>\n<li>Wir fügen der Tabelle eine zusätzliche Spalte hinzu</li>\n<li>Die Aktion kann nicht über mehrere Zeilen angewendet werden</li>\n<li>Die Spalte wirkt für den User redundant</li>\n</ul>\n<p>Eine einfache Lösung für diese Probleme kann die Multi-Selection-Funktion sein.</p>\n<h3>Multi-Selection</h3>\n<p>Mittels Multi-Selection können Tabellen aufgeräumt werden, die Aktion wird von der Tabelle getrennt und es wird keine zusätzliche Spalte benötigt. Der User selber entscheidet, wann die Aktion sichtbar wird und wann nicht. Auch ein arbeiten über mehrere Zeilen gleichzeitig hinweg ist so gewährleistet.</p>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 26.532325776658272%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQY03VPyw4CIQzk/3/Pg4kn48WDh91ly6NQGCn7EE2cMCkNnelgaq1QaC1VQMsM7wMOEBFijGe/tp7InZpRrzD90k4pAhaP6X7DbH0z34bUTER2QYX1CS4kfTwNRxr84HG9YFkDpC9sqUv5ShBS7fwHk1KCkntlzK8nJutAnsHMCC2hVt7nVhdhGxNv74f+oMk5Y6S0RCKfXpeoWV4tsqP+ffnRjHwDUZ2JO/aHyEkAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle" src="/static/UzLNedo-5dd11c380df8b86f8d9fab304286500d-23544.png" srcset="/static/UzLNedo-5dd11c380df8b86f8d9fab304286500d-c773c.png 750w,\n/static/UzLNedo-5dd11c380df8b86f8d9fab304286500d-71d97.png 1500w,\n/static/UzLNedo-5dd11c380df8b86f8d9fab304286500d-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<h3>Filter Funktion</h3>\n<p>Filter ermöglichen es dem User gezielt Daten innerhalb eines grossen Datensatzes zu finden.</p>\n<blockquote>\n<p><strong>Wichtig</strong><br>\nHierbei ist zu beachten die Filterfunktion möglichst einfach zugänglich zu machen. Und noch wichtiger ist es, dem User zu ermöglichen, die Filterfunktion wieder einfach zu entfernen.</p>\n</blockquote>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 41.30982367758186%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABCklEQVQoz32Si2rDMAxF+/+/NxglYyxjpV1X6Ba/n7qT8rBbOmYwsRzr6CjxDjyICDlnpJSxxduQ9W2Mm1iepVTU2vd227nj6YTL5avlWWsRY2yxdw7e+/6eY6U1vicFpRSDSwcSVdjzB5xPIjBXCyHM1ktlgnERLqTFkHey0UgMFZFxHO+BlQ8d9k+4Tg65cEKtDVZ5LRATuChPKV4lSU+o3kEbi8Dmdy1L8Pk24Ko8ogCpA5thKPPcDEn9gBhIa4cbZzFki9dhwGQi2y4HpIUG5GljRUi1A60GxbAC6dHwZf88G/r0h+EKtHEtIjlG/Q88Ht6h+cOnQut16IbzT0qLYQNKuyk9AH8B7b91CV7NGnAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle" src="/static/IxnMEjd-06c0d1244cee9ec7f0a3f8c8213bdcc2-23544.png" srcset="/static/IxnMEjd-06c0d1244cee9ec7f0a3f8c8213bdcc2-c773c.png 750w,\n/static/IxnMEjd-06c0d1244cee9ec7f0a3f8c8213bdcc2-71d97.png 1500w,\n/static/IxnMEjd-06c0d1244cee9ec7f0a3f8c8213bdcc2-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<h3>Sticky Header oder Spalten</h3>\n<p>Sticky Elemente helfen bei einer guten Übersichtlichkeit und helfen dem User den Überblick zu bewahren. Die unterschiedlichen Zeilen können so optimal miteinander verglichen werden. Dies kann horizontal mittels einem fixierten Header (im Beispiel Blau eingefärbt), oder vertikal mit einer fixierten Spalte ermöglicht werden.</p>\n<h4>Beispiel Sticky Header:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 34.005037783375315%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABEElEQVQoz5WR607DMAyF+/6vh8QY0qaBNjZE2+XSZG1i++AkdGISf7BkyXHsz8dJBzVmAuWE/xqT9lGGCN9zXUyC/dsJ+/czwiKI6naaYdTDwnpm2JAw2IgwU733MaEfDAZ3w+hnuLjU2uLdLQOH7RbHTwsTFZAYg5mqh7kBezvjcLEKyggqwLmA4fiBSe8mHVLqCswrrCsyz7sNnI9IVblAeF1BqhMLbgrS3Vqa9Hmif6gpZq5jA75uXnB1EVR7BDlnfVcGa1zOS25KSsylJiWwtzVmbjXFxnEFPj+hLysu8gCshT9AG6k1Fz1pgTjTYvkD+HU5YYqzNrZLIroD6wAqn/UrpwMlhhavg9WSKv8GFtQkBH86ip4AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle" src="/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-23544.png" srcset="/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-c773c.png 750w,\n/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-71d97.png 1500w,\n/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<h4>Beispiel Sticky Spalte:</h4>\n<div class="img-special small">\n    <figure>\n        <img src="/aZuMl7B-8a14a50d27693148dbb71fab8df4c1c3.gif" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle">\n    </figure>\n</div>\n<p>Quelle: <a href="https://www.officeworks.com.au/">Officeworks</a></p>\n<blockquote>\n<p><strong>Wichtig</strong><br>\nIn diesem Beispiel schlecht umgsetzt ist die Spaltenbreite. Diese sollten nicht zu breit sein, da es sonst schnell unleserlich wird auf Mobilgeräten.</p>\n</blockquote>\n<h3>Mehr Zeilen oder Seiten</h3>\n<p>Manchmal hilft es dem User die Informationen häppchenweise zu präsentieren. Müssen nicht zwingend alle Zeilen miteinander verglichen werden, ist eine Unterteilung auf mehrere Seiten eine gute Lösung.</p>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 37.615449202350966%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQoz5WR63KEIAyFff8H3N1ene3Wmdq6uiioSMJpiBX9W2bOQA7hI4QCMpgJFBb8e8QIogAmSoFaxRyAj6rG27WCmxnTEmGngN55jJ4xLqxzN8zqaywyvUNrLFrxjd33ilHg7+cLys8Gd8dwcrh5OHw1D/RjgJVL0vxyu6PunMaD6PtWoZUc62POSypSmXV5hjEDPOk7EJm2N2WNUjnxHmOyQPCHvHUo8Ol0RtP2oJjaEhFCkN6wrpOYUxWEcPSGHjzPSHcwsyLTrMDXywk/Ahx8zEBN2g6LjAB9YP0I9QUYBaj1xrXCDLyWz+jkydJX3ST5tSMwyc4rMHujQ1y8XkZEO3Cjb73Y4iNszzl4f05qh/c++78h73OM8lw/PAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle" src="/static/nF71j79-36d928a6c57ca1959b09ead07b9f57eb-23544.png" srcset="/static/nF71j79-36d928a6c57ca1959b09ead07b9f57eb-c773c.png 750w,\n/static/nF71j79-36d928a6c57ca1959b09ead07b9f57eb-71d97.png 1500w,\n/static/nF71j79-36d928a6c57ca1959b09ead07b9f57eb-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<p>Eine weitere Möglichkeit wäre auch ein Infinite Scroll bzw. Lazy Loading des Inhalts. Diese Funktion kann unterstützend mit einem «Mehr» Button kombiniert werden.</p>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 40.218303946263646%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz5VS7UrEQAzs+7+T+AYiCCeWiuchynk92u5Hd9vuZkzSbjnQPwYCmXzMTtJW2CznjJwW/M8Iy7Jsc6SZysUM8bo54vX0BT+R4raz6ExQ7KeMS+fUpeZnQnsdcG57XM2E3kXYkLRWhTlj5IGPpsG5C7BRcEJvR7gwa016vvuIyxARGI8syLZXOOMQOC494lWR/vlWw/iIJQskPkHa1xKP8+plNYwOmKebntWqcr/mpUZnI1ImxXobuatiguGVAisn4pxQ2AE5Bo2lj1iEuBJKUB+eeGVek+VTIdyaxJZEeichVJ1DBwp+jTfCXaEAO/Q8lPaX1gb+iinj8d3j4eg1RqnnvBPRzcNVCX79EFt6ZmX3zwZ3B7MSbgL+niH8AJ0CcxuQO/73AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Infinite scroll und Mehr anzeigen innerhalb einer Tabelle" title="Infinite scroll und Mehr anzeigen innerhalb einer Tabelle" src="/static/iUfIcqO-95d1ebcfc70a46f2f1700ea88b721d61-23544.png" srcset="/static/iUfIcqO-95d1ebcfc70a46f2f1700ea88b721d61-c773c.png 750w,\n/static/iUfIcqO-95d1ebcfc70a46f2f1700ea88b721d61-71d97.png 1500w,\n/static/iUfIcqO-95d1ebcfc70a46f2f1700ea88b721d61-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<blockquote>\n<p><strong>Wichtig</strong><br>\nBei beiden Varianten sollte immer darauf geachtet werden, dass die wichtigen Informationen auf dem ersten Viewport ersichtlich sind. Dem User soll dabei die Möglichkeit immer selbst überlassen werden, sich fürs Anzeigen von mehr Informationen zu entscheidet.**</p>\n</blockquote>\n<h4>Horizontales &#x26; vertikales scrollen</h4>\n<p>Möchte man auf dem Desktop mehrere Produktespalten miteinander vergleichen und dabei aber eine endlose breite Tabelle verhindern, lässt sich diese über eine fixe Tabellenbreite und mittels vertikal scrollen umsetzen.</p>\n<p>Horizontales scrollen bleibt auf Desktop sowies Mobil gewährleistet. Eine zusätzliche Unterstützung der Übersichtlichkeit wird mittels einzelnen fixierten Tabellenzeilen ergänzt.</p>\n<div class="img-special small">\n    <figure>\n        <img src="/EzPZQ9W-ae306544e114aedacb2eaa0f86d7561c.gif" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle">\n    </figure>\n</div>\n<p>Quelle: <a href="https://www.bestbuy.com/site/compare?skus=1899151,5578531,5100207,2823760,4671800,7163669,7089386,1368051&#x26;url=%2Fsite%2Fsearchpage.jsp%3F_dyncharset%3DUTF-8%26ks%3D960%26sc%3DGlobal%26list%3Dy%26usc%3DAll%2BCategories%26type%3Dpage%26id%3Dpcat17071%26iht%3Dn%26seeAll%3D%26cp%3D1%26browsedCategory%3Dpcmcat171900050007%26st%3Dcategoryid%2524abcat0410018%26qp%3D%255Elensmountcompatibility_facet%253DLens%2520Mount%2520Compatibility~Canon%2520EF">Best Buy</a></p>\n<h3>Verschiedene Endgeräte – verschiedene Tabellen</h3>\n<p>Manchmal ist es jedoch nicht immer möglich eine Tabelle auf allen Endgeräten gleich darzustellen. Im unteren Beispiel sehen wir auf Desktop eine klassischen Tabelle, welche Informationene nebeneinander darstellt. Auf schmalen Mobilgeräten stossen wir mit breiten Tabellen schnell an unsere Grenzen.</p>\n<p>So wird auf Mobile ein anderes Layout gewählt. Die klassische Tabelle wird ausgeblendet und die Informationen werden in einer anderen Form wiedergegeben.</p>\n<blockquote>\n<p><strong>Wichtig</strong><br>\nAuch wenn auf Mobile ein anderes Layout gewählt wird. Es sollte auf keinen Fall unterschiedliche Inhalte auf den Endgeräten angezeigt werden. Beide Layout müssen die gleichen Funtionen abdecken.</p>\n</blockquote>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 2382px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 34.005037783375315%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABEElEQVQoz5WR607DMAyF+/6vh8QY0qaBNjZE2+XSZG1i++AkdGISf7BkyXHsz8dJBzVmAuWE/xqT9lGGCN9zXUyC/dsJ+/czwiKI6naaYdTDwnpm2JAw2IgwU733MaEfDAZ3w+hnuLjU2uLdLQOH7RbHTwsTFZAYg5mqh7kBezvjcLEKyggqwLmA4fiBSe8mHVLqCswrrCsyz7sNnI9IVblAeF1BqhMLbgrS3Vqa9Hmif6gpZq5jA75uXnB1EVR7BDlnfVcGa1zOS25KSsylJiWwtzVmbjXFxnEFPj+hLysu8gCshT9AG6k1Fz1pgTjTYvkD+HU5YYqzNrZLIroD6wAqn/UrpwMlhhavg9WSKv8GFtQkBH86ip4AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Multiples selektieren innerhalb einer Tabelle" title="Multiples selektieren innerhalb einer Tabelle" src="/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-23544.png" srcset="/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-c773c.png 750w,\n/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-71d97.png 1500w,\n/static/xMt2oi3-b0a515d7d81f97a5d705e6a0f8154e79-23544.png 2382w" sizes="(max-width: 2382px) 100vw, 2382px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<h4>Beispiel:</h4>\n<div class="img-special">\n    <figure>\n        \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 1894px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 67.8986272439282%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQ4y52Ty0oDMRSGfTp3PoQrn0lwNwjdCC5c6KJIF+JdtEqLdNGL1TbTaWeSuSSZ5MxvZkZBRcROIOR28uU/l2zgSyuKohqVkmDLCNe3D/A8r+rt0w5eZgskSfLN9mfb+A1ojMHl4xAHJ+fYP2yjddTB8dkT7gYMmVTrAy0VGM1DjBlH5O4nBogk4LuFzm0TIBCzCVggMI80wlhhFWuwMEXu1K8F/DQc97vgEQfVJyi3M5XDWtsMOOreIwhCGLcsiGANYbnikFI2A077NxCcQ9eCKqWBJqRZtn4MyyEKfORaVyASIWxrDytvF1kUNkiKi5P52CsFivEE2N4E7WzBBKy2JfonsHTbzbNxD5LHUFS9AHKK07dX2DxvFkM27CERAraocly5ntqypKgZ8PnqAr6/rLLs/HMiCXGqmpfNbNBFEgvkVGeJ3O/JlG4OXEyHEMLF0BHJQaQ24Ily4L9dfgc7DUSpw4V2QgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Alternative Gestaltung auf Mobile" title="Alternative Gestaltung auf Mobile" src="/static/6zJsVtj-5cee4ae1baf58f9d63a1c03830405290-9a585.png" srcset="/static/6zJsVtj-5cee4ae1baf58f9d63a1c03830405290-56cf1.png 750w,\n/static/6zJsVtj-5cee4ae1baf58f9d63a1c03830405290-cd096.png 1500w,\n/static/6zJsVtj-5cee4ae1baf58f9d63a1c03830405290-9a585.png 1894w" sizes="(max-width: 1894px) 100vw, 1894px">\n    </span>\n  </span>\n  \n    </figure>\n</div>\n<h2>Fazit</h2>\n<p>Tabellen bleiben im Responsiven Webdesign eine Herausforderung. Manchmal hilft es sich vom Gedanken, auf jedem Device 1:1 die gleiche Tabelle abzubilden, zu lösen. Oftmals ist eine Tabelle auf Mobilgeräten nicht die beste Lösung und eine Layoutvariante mit einer kurzen Zusammenfassung der Informationen eignen sich beispielsweise besser.</p>',fields:{tagSlugs:["/tags/responsive-gestaltung/","/tags/typografie/","/tags/tabellen/","/tags/best-use/","/tags/ux-ui/"]},frontmatter:{title:"Umgang mit Tabellen im Web",author:"Lars Mäder",category:"Responsive Gestaltung",tags:["Responsive Gestaltung","Typografie","Tabellen","Best Use","UX/UI"],date:"2019-07-12",description:"Tabellen im Web, schon lange im Einsatz und noch immer eine Knacknuss wenn es darum geht diese Userfreundlich auf allen Endgeräten darzustellen. Das Problem findet sich oftmals in komplexeren Tabellen wieder. Diese beinhalten meist eine grössere Anzahl an Spaltenreihen und Zeilen, die auf grösseren Displays gut lesbar sind, jedoch für Mobilgeräte ungeeignet sind.",featuredImage:{childImageSharp:{sizes:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgT/2gAMAwEAAhADEAAAAdGBOm0D/8QAGBABAQEBAQAAAAAAAAAAAAAAAQIDERL/2gAIAQEAAQUCuvJirTpPf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAkL/2gAIAQMBAT8ByKEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEQESL/2gAIAQEABj8CyO4//8QAFxABAQEBAAAAAAAAAAAAAAAAAREAMf/aAAgBAQABPyFBQXPEcxYbv//aAAwDAQACAAMAAAAQC8//xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQMBAT8QMUC//8QAFhEBAQEAAAAAAAAAAAAAAAAAABFB/9oACAECAQE/ENV//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAEhETFB/9oACAEBAAE/EN+RKuHjubirHKtSI//Z",aspectRatio:2.9971014492753625,src:"/static/header@2x-2440e56e72dfa12e113fdfbb7c18f6b7-fc1cc.jpg",srcSet:"/static/header@2x-2440e56e72dfa12e113fdfbb7c18f6b7-281b7.jpg 750w,\n/static/header@2x-2440e56e72dfa12e113fdfbb7c18f6b7-08fe8.jpg 1500w,\n/static/header@2x-2440e56e72dfa12e113fdfbb7c18f6b7-fc1cc.jpg 3000w,\n/static/header@2x-2440e56e72dfa12e113fdfbb7c18f6b7-da3b8.jpg 3102w",sizes:"(max-width: 3000px) 100vw, 3000px"}}}},wordCount:{words:1261}}},pathContext:{slug:"/posts/umgang-mit-tabellen-im-web/"}}}});
//# sourceMappingURL=path---posts-umgang-mit-tabellen-im-web-ee5b23cf2ecda01fb30d.js.map
# [NOVAGRAPHIX HTML5 RICHLOAD](http://novagraphix.de)

## DESCRIPTION

Es benötigt 2 Verzeichnisse, welche wie folgt aussehen:

        $ FIRMA_XX_HTML5_**TITEL**_**WIDTH**x**HEIGHT**
        $ FIRMA_XX_HTML5_**TITEL**_**WIDTH**x**HEIGHT**_BASE

### DAS BASE-VERZEICHNIS

Im ``BASE``-Verzeichnis befindet sich eine ``index.html`` und eine ``manifest.js``.
Die ``index.html`` beinhaltet CSS. Dort die Größe des WM eintragen. In der ``manifest.js`` muss nur der Name des Verzeichnisses mit der HTML5-Animation und die Größe des WM eingetragen werden.

Dann beides zippen und bei FT hochladen (Basefiles).

### DAS HTML5-ANIMATIONS-VERZEICHNIS

In der ``index.html``, welche noch so umbenannt werden muss nach dem Erstellen des WM mit ANIMATE, muss folgendes eingegeben werden.

Nach ``<!--Adobe Edge Runtime End-->``

    <style>
    #container {
        width: 300px;
        height: 250px;
        position: absolute;
        left: 0;
        top: 0;
    }

    ft-richload {
        width: 300px;
        height: 250px;
    }

    #sRichload {
        width: 300px;
        height: 250px;
    }
    </style>
    </head>

    <body>
        <div id="container">
            <div id="Stage" class="pp2-12844647"></div>
        </div>
        <script type="text/javascript">
        container = FT.query("#container");

        myFT.applyClickTag(container, 1);
        </script>
    </body>

    </html>

Die ``.an``-Datei löschen und den Rest zippen und bei FT hochladen (Richload-Files)

## USAGE

Beispieldateien und Verzeichnisse liegen hier im Ordner, sowie eine Vorlage für ein MR.

## CHANGELOG

* 20.10.2015:   Initial Upload
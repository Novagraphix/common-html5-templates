# [NOVAGRAPHIX HTML5 RICHLOAD](http://novagraphix.de)

## DESCRIPTION

Es benötigt 2 Verzeichnisse, welche wie folgt aussehen:

        $ FIRMA_XX_HTM_**TITEL**_**WIDTH**x**HEIGHT**
        $ FIRMA_XX_HTM_**TITEL**_**WIDTH**x**HEIGHT**_BASE

### DAS BASE-VERZEICHNIS

Im ``BASE``-Verzeichnis befindet sich eine ``index.html`` und eine ``manifest.js``.
Die ``index.html`` beinhaltet CSS. Dort die Größe des WM eintragen. In der ``manifest.js`` muss nur der Name des Verzeichnisses mit der HTML5-Animation und die Größe des WM eingetragen werden.

Dann beides zippen und bei FT hochladen (Basefiles).

### DAS HTML5-ANIMATIONS-VERZEICHNIS

In der ``index.html`` muss nichts geändert werden, wenn die Vorlage benutzt wird.

Clicktag ist in der ``.an``, sowie auch der CDN-Link zur FT JS.

Alles außer die ``.an``-Datei zippen und bei FT hochladen (Richload-Files)

## USAGE

Beispieldateien und Verzeichnisse liegen hier im Ordner, sowie eine Vorlage für ein MR.

ACHTUNG: Bei der Erstellung in Animate kann ein Javascriptfehler auftreten, da die FT JS in der BASE initialisiert wird. Eventuell temporär hinzufügen.

## CHANGELOG

* 20.10.2015:   Initial Upload
* 22.10.2015:   Vorlage verbessert, Clicktag im Projekt
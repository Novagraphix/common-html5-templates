# [NOVAGRAPHIX HTML5 RICHLOAD FIREPLACE](http://novagraphix.de)

ACHTUNG KÖNIGSKLASSE !!!

## DESCRIPTION

Benötigt wird ein Verzeichnis:

        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_BASE
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_LEFT
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_LEFT_BASE
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_RIGHT
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_RIGHT_BASE

### BASE FILES

Die ``indexen`` bearbeiten (Dimensionen). ``manifest.js`` bearbeiten (Verzeichnisname bei Richload). Im Falle eines Videos muss in der ``manifest.js`` muss die Referenz zum Video eingetragen werden. Diese bekommt man nach dem Encodieren per Mail zugesendet.

Alles in den jeweiligen BASE-Verzeichnissen zippen und bei FT hochladen (Base-Files)

### TOP BANNER

In der ``index.html`` muss nichts geändert werden, wenn die Vorlage benutzt wird.

Der Topbanner hat einen auskommentierten Broadcast bei einem ``Auslöser``, falls eine Kommunikation mit den Skys erfolgen soll.

Clicktag ist in der ``.an``, sowie auch der CDN-Link zur FT JS.

Alles außer die ``.an``-Datei zippen und bei FT hochladen (Richload-Files)

### SKYs

In der ``index.html`` muss nichts geändert werden, wenn die Vorlage benutzt wird.

In der ``manifest.js`` sind die Dimensionen des Skys anzugeben.

Der Sky hat einen ``on('talk'``-Event + Funktion in ``document.compositionReady``, falls eine Kommunikation mit dem Topbanner erfolgen soll. Der Sky ist der Listener.

Clicktag ist in der ``.an``, sowie auch der CDN-Link zur FT JS.

Alles außer die ``.an``-Datei zippen und bei FT hochladen (Richload-Files)

## USAGE

Beispieldateien und Verzeichnisse liegen hier im Ordner, sowie eine Vorlage für ein Topbanner und Sky.

## CHANGELOG

* 23.10.2015:   Initial Upload
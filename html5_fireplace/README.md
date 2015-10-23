# [NOVAGRAPHIX HTML5 FIREPLACE](http://novagraphix.de)

## DESCRIPTION

Benötigt wird ein Verzeichnis:

        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_LEFT
        $ FIRMA_WP_HTM_**TITEL**_**WIDTH**x**HEIGHT**_RIGHT


### TOP BANNER

In der ``index.html`` muss nichts geändert werden, wenn die Vorlage benutzt wird.

Im Falle eines Videos muss in der ``manifest.js`` muss die Referenz zum Video eingetragen werden. Diese bekommt man nach dem Encodieren per Mail zugesendet. Des Weiteren sind hier auch die Dimensionen des Topbanners anzugeben.

Der Topbanner hat einen auskommentierten Broadcast in ``document.compositionReady``, falls eine Kommunikation mit den Skys erfolgen soll.

Clicktag ist in der ``.an``, sowie auch der CDN-Link zur FT JS.

Alles außer die ``.an``-Datei zippen und bei FT hochladen (Base-Files)

### SKYs

In der ``index.html`` muss nichts geändert werden, wenn die Vorlage benutzt wird.

In der ``manifest.js`` sind die Dimensionen des Skys anzugeben.

Der Sky hat einen auskommentierten ``talk``-Event + Funktion in ``document.compositionReady``, falls eine Kommunikation mit dem Topbanner erfolgen soll. Der Sky ist der Listener.

Clicktag ist in der ``.an``, sowie auch der CDN-Link zur FT JS.

Alles außer die ``.an``-Datei zippen und bei FT hochladen (Base-Files)

## USAGE

Beispieldateien und Verzeichnisse liegen hier im Ordner, sowie eine Vorlage für ein Topbanner und Sky.

## CHANGELOG

* 22.10.2015:   Initial Upload
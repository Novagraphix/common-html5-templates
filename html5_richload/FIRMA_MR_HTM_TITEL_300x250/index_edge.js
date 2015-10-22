/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"TweenLite.min.js",
            js+"EasePack.min.js",
            js+"CSSPlugin.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'BG',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,255,55,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'clicktag',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btn_kaufen',
                            symbolName: 'btn_kaufen',
                            type: 'rect',
                            rect: ['186px', '70', '114', '105', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 6915,
                    autoPlay: true,
                    data: [
                        [
                            "eid764",
                            "opacity",
                            6500,
                            415,
                            "easeOutCirc",
                            "${btn_kaufen}",
                            '1',
                            '0'
                        ],
                        [
                            "eid765",
                            "left",
                            6155,
                            345,
                            "easeOutCirc",
                            "${btn_kaufen}",
                            '307px',
                            '186px'
                        ],
                        [
                            "eid763",
                            "display",
                            6155,
                            0,
                            "easeOutCirc",
                            "${btn_kaufen}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "btn_kaufen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '114px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/b_kaufen.png', '0px', '0px'],
                            id: 'b_kaufen',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114px', '105px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("pp2-12844647");

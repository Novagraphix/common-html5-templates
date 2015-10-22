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
            js+"CSSPlugin.min.js",
            "http://cdn.flashtalking.com/frameworks/js/api/2/9/html5API.js"
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
                            id: 'videoplaceholder',
                            type: 'rect',
                            rect: ['0px', '0px', '510px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'clicktag',
                            type: 'rect',
                            rect: ['0px', '0px', '970px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                            stroke: [0,"rgba(0,246,255,0.00)","none"]
                        },
                        {
                            id: 'snd',
                            type: 'rect',
                            rect: ['475px', '10px', '24px', '24px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_kaufen',
                            symbolName: 'btn_kaufen',
                            type: 'rect',
                            rect: ['774px', '16px', '114', '105', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '970px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
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
                            "eid1796",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${btn_kaufen}",
                            '16px',
                            '16px'
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
                        ],
                        [
                            "eid1799",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${clicktag}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid1807",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${clicktag}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid1805",
                            "width",
                            0,
                            0,
                            "linear",
                            "${clicktag}",
                            '970px',
                            '970px'
                        ],
                        [
                            "eid765",
                            "left",
                            6155,
                            345,
                            "easeOutCirc",
                            "${btn_kaufen}",
                            '307px',
                            '774px'
                        ],
                        [
                            "eid1804",
                            "height",
                            0,
                            0,
                            "linear",
                            "${clicktag}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid1806",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${clicktag}",
                            'rgba(0,246,255,0.00)',
                            'rgba(0,246,255,0.00)'
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

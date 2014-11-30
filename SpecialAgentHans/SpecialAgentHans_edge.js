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
            js+"jquery-1.11.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'title6',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px']
                        },
                        {
                            id: 'Hans',
                            display: 'block',
                            type: 'image',
                            rect: ['-13px', '7px', '596px', '842px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Hans.svg",'0px','0px']
                        },
                        {
                            id: 'game_over',
                            symbolName: 'game_over',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '800', '480', 'auto', 'auto']
                        },
                        {
                            id: 'finale_game',
                            symbolName: 'finale_game',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '800', '480', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '480px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 11000,
                    autoPlay: true,
                    labels: {
                        "intro_start": 0,
                        "menu": 3000,
                        "uitleg": 4000,
                        "highscores": 5000,
                        "game_over": 6000,
                        "minigame_1": 7000,
                        "minigame_2": 8000,
                        "minigame_3": 9000,
                        "finale_game": 10000,
                        "game_start": 11000
                    },
                    data: [
                        [
                            "eid28",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${finale_game}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            11000,
                            0,
                            "linear",
                            "${finale_game}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Hans}",
                            'block',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Hans}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${title6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${title6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${game_over}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${game_over}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "game_over": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '485px', '800px', '480px', 'auto', 'auto'],
                            id: 'game-over',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/game-over.png', '0px', '0px']
                        },
                        {
                            rect: ['800px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'sivev-wins',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sivev-wins.png', '0px', '0px']
                        },
                        {
                            rect: ['-242px', '98px', '201px', '284px', 'auto', 'auto'],
                            id: 'Sivev',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Sivev.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    labels: {
                        "end": 4000
                    },
                    data: [
                        [
                            "eid17",
                            "left",
                            2155,
                            345,
                            "easeInQuad",
                            "${Sivev}",
                            '-242px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "left",
                            3000,
                            500,
                            "easeInQuad",
                            "${Sivev}",
                            '0px',
                            '800px'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${game-over}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid20",
                            "left",
                            2000,
                            500,
                            "easeInQuad",
                            "${sivev-wins}",
                            '800px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            3000,
                            500,
                            "easeInQuad",
                            "${sivev-wins}",
                            '0px',
                            '-800px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            500,
                            "easeOutQuad",
                            "${game-over}",
                            '485px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "top",
                            1000,
                            500,
                            "easeInQuad",
                            "${game-over}",
                            '0px',
                            '-480px'
                        ]
                    ]
                }
            },
            "finale_game": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'scrolling_text',
                            text: 'Loading...<br><br>',
                            font: ['Lucida Console, Monaco, monospace', [12, 'px'], 'rgba(23,255,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "intro_endgame": 1000
                    },
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SpecialAgentHans_edgeActions.js");
})("EDGE-7842125");

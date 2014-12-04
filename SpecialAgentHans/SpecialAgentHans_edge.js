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
            js+"jquery-1.11.1.js"
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
                            id: 'highscores',
                            symbolName: 'highscores',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '800', '480', 'auto', 'auto']
                        },
                        {
                            id: 'post_score',
                            symbolName: 'post_score',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '800', '480', 'auto', 'auto']
                        },
                        {
                            id: 'menu',
                            symbolName: 'menu',
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
                        },
                        {
                            id: 'minigame_1',
                            symbolName: 'minigame_1',
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
                        "post_score": 5500,
                        "game_over": 6000,
                        "minigame_1": 7000,
                        "minigame_2": 8000,
                        "minigame_3": 9000,
                        "finale_game": 10000,
                        "game_start": 11000
                    },
                    data: [
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
                        ],
                        [
                            "eid50",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${highscores}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${highscores}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${post_score}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${post_score}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${minigame_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${minigame_1}",
                            'block',
                            'none'
                        ],
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
                            "eid60",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${menu}",
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
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'game-over',
                            rect: ['0px', '485px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game-over.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sivev-wins',
                            rect: ['800px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sivev-wins.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Sivev',
                            rect: ['-242px', '98px', '201px', '284px', 'auto', 'auto'],
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
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${game-over}",
                            '0px',
                            '0px'
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
                        },
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'terminal_container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
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
                    duration: 4000,
                    autoPlay: false,
                    labels: {
                        "intro_endgame": 1000,
                        "game_endgame": 2000,
                        "game_aftermath": 3000,
                        "go_postgame": 4000
                    },
                    data: [

                    ]
                }
            },
            "terminal": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'terminal',
                            type: 'image',
                            rect: ['0px', '0px', '363px', '237px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/terminal.png', '0px', '0px']
                        },
                        {
                            rect: ['5px', '17px', '344px', '214px', 'auto', 'auto'],
                            font: ['Lucida Console, Monaco, monospace', [14, 'px'], 'rgba(39,255,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            id: 'contents',
                            text: 'C:\\&gt;',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '363px', '237px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "highscores": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'terminal',
                            rect: ['128px', '55px', '543px', '355px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/terminal.png', '0px', '0px']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'contents',
                            text: 'Loading highscores...',
                            align: 'left',
                            rect: ['145px', '86px', '509px', '312px', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0.89474', '0.89474']],
                            id: 'back_button',
                            symbolName: 'back_button',
                            rect: ['-7px', '-4px', '129', '76', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "back_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '129px', '76px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2',
                            opacity: '0.17073170731707',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['22px', '9px', '86px', '57px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [58, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: '&lt;=',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '129px', '76px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "post_score": {
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
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'mission-complete',
                            rect: ['0px', '480px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mission-complete.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'post_score_button',
                            symbolName: 'post_score_button',
                            rect: ['800px', '334px', '204', '58', 'auto', 'auto']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [47, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'you_scored',
                            text: 'You scored',
                            align: 'center',
                            rect: ['0px', '-107px', '800px', '107px', 'auto', 'auto']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [122, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'score',
                            text: '{{score}}',
                            align: 'center',
                            rect: ['298px', '144px', '800px', '107px', 'auto', 'auto']
                        },
                        {
                            rect: ['-225px', '334px', '204px', '58px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'name_cont',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(39,255,0,1)']
                        },
                        {
                            type: 'rect',
                            id: 'back_button',
                            symbolName: 'back_button',
                            rect: ['0px', '-86px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid78",
                            "left",
                            0,
                            0,
                            "linear",
                            "${post_score_button}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid81",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${post_score_button}",
                            '800px',
                            '520px'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            750,
                            "easeOutQuad",
                            "${mission-complete}",
                            '480px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "top",
                            1000,
                            750,
                            "easeInQuad",
                            "${mission-complete}",
                            '0px',
                            '-480px'
                        ],
                        [
                            "eid70",
                            "width",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '204px',
                            '800px'
                        ],
                        [
                            "eid89",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${back_button}",
                            '-86px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${name_cont}",
                            '-225px',
                            '73px'
                        ],
                        [
                            "eid67",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${you_scored}",
                            '-107px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "font-size",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '22px',
                            '122px'
                        ],
                        [
                            "eid66",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '480px',
                            '144px'
                        ],
                        [
                            "eid69",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '298px',
                            '0px'
                        ]
                    ]
                }
            },
            "menu": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            id: 'menu_title_white',
                            type: 'image',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_title_white.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'menu_title',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu_title.png', '0px', '0px']
                        },
                        {
                            id: 'play_button',
                            symbolName: 'play_button',
                            rect: ['34', '166', '176', '44', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'instructions_button',
                            symbolName: 'instructions_button',
                            rect: ['34', '231', '176', '44', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'highscores_button',
                            symbolName: 'highscores_button',
                            rect: ['34', '294', '176', '44', 'auto', 'auto'],
                            type: 'rect'
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
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "minigame_1": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            id: 'grey_cable',
                            symbolName: 'grey_cable',
                            transform: [[], [], [], ['4.38866', '0.21118']],
                            rect: ['289px', '249px', '247', '161', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'wire_container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
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
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "generate_cables": 1000,
                        "start": 2000
                    },
                    data: [

                    ]
                }
            },
            "post_score_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '204px', '58px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(39,255,0,1)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text3',
                            text: 'Submit score',
                            align: 'center',
                            rect: ['0px', '18px', '204px', '22px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '204px', '58px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "play_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '176px', '44px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'play_button',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(58,58,58,1.00)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'play_text',
                            text: 'Play',
                            align: 'center',
                            rect: ['0px', '13px', '176px', '18px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "instructions_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '176px', '44px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'play_buttonCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(58,58,58,1.00)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'play_textCopy',
                            text: 'Instructions',
                            align: 'center',
                            rect: ['0px', '13px', '176px', '18px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "highscores_button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '176px', '44px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'play_buttonCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(58,58,58,1.00)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'play_textCopy2',
                            text: 'Highscores',
                            align: 'center',
                            rect: ['0px', '13px', '176px', '18px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '176px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "grey_cable": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '247px', '161px', 'auto', 'auto'],
                            id: 'cable_grey2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cable_grey.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '247px', '161px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("SpecialAgentHans_edgeActions.js");
})("EDGE-7842125");

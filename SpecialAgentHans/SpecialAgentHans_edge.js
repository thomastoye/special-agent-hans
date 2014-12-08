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
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px']
                        },
                        {
                            id: 'Hans',
                            display: 'block',
                            type: 'image',
                            rect: ['-13px', '5px', '596px', '842px', 'auto', 'auto'],
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
                            rect: ['0', '0px', '800', '480', 'auto', 'auto']
                        },
                        {
                            id: 'minigame_2',
                            symbolName: 'minigame_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '800', '480', 'auto', 'auto']
                        },
                        {
                            id: 'minigame_3',
                            symbolName: 'minigame_3',
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
                            "eid203",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${title6}",
                            '0',
                            '1'
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
                            "eid201",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Hans}",
                            '331px',
                            '5px'
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
                            "eid140",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${minigame_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${minigame_3}",
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
                            "eid112",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${minigame_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${minigame_2}",
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
                            type: 'rect',
                            id: 'bg',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'scrolling_text',
                            text: 'Loading...<br><br>',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            font: ['Lucida Console, Monaco, monospace', [12, 'px'], 'rgba(23,255,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'rect',
                            id: 'terminal_container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
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
                            font: ['Lucida Console, Monaco, monospace', [14, 'px'], 'rgba(39,255,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'contents',
                            text: 'C:\\&gt;',
                            align: 'left',
                            rect: ['5px', '17px', '344px', '214px', 'auto', 'auto']
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
                            type: 'rect',
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['128px', '55px', '543px', '355px', 'auto', 'auto'],
                            id: 'terminal',
                            type: 'image',
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
                            opacity: '0.17073170731707',
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [58, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text4',
                            text: '&lt;=',
                            align: 'left',
                            rect: ['22px', '9px', '86px', '57px', 'auto', 'auto']
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
                            type: 'text',
                            rect: ['0px', '-107px', '800px', '107px', 'auto', 'auto'],
                            id: 'you_scored',
                            text: 'You scored',
                            align: 'center',
                            font: ['\'Lucida Console\', Monaco, monospace', [47, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['298px', '144px', '800px', '107px', 'auto', 'auto'],
                            id: 'score',
                            text: '{{score}}',
                            align: 'center',
                            font: ['\'Lucida Console\', Monaco, monospace', [122, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'menu_title_white',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu_title_white.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'menu_title',
                            opacity: '1',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_title.png', '0px', '0px']
                        },
                        {
                            rect: ['34', '261px', '176', '44', 'auto', 'auto'],
                            id: 'play_button',
                            symbolName: 'play_button',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['0.99996']],
                            id: 'highscores_button',
                            symbolName: 'highscores_button',
                            rect: ['34', '350px', '176', '44', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['34px', '306px', '209px', '38px', 'auto', 'auto'],
                            id: 'single_server3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/single_server.svg', '0px', '0px']
                        },
                        {
                            rect: ['34px', '396px', '209px', '38px', 'auto', 'auto'],
                            id: 'single_server2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/single_server.svg', '0px', '0px']
                        },
                        {
                            rect: ['34px', '442px', '209px', '38px', 'auto', 'auto'],
                            id: 'single_server4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/single_server.svg', '0px', '0px']
                        },
                        {
                            rect: ['34px', '216px', '209px', '38px', 'auto', 'auto'],
                            id: 'single_server5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/single_server.svg', '0px', '0px']
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
                            type: 'rect',
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'bg_red',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(181,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'wire_container',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'text',
                            rect: ['219px', '129px', '564px', '179px', 'auto', 'auto'],
                            display: 'block',
                            id: 'briefing',
                            text: 'Sabotage the SIVEV network infrastructure by cutting as much CAT-5 cables as possible.<br><br>You don\'t have much time!<br><br>Click on a cable to cut it.',
                            align: 'left',
                            font: ['\'Lucida Console\', Monaco, monospace', [24, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['219px', '36px', '581px', '67px', 'auto', 'auto'],
                            id: 'title',
                            text: 'MISSION #SABOTAGE',
                            display: 'block',
                            font: ['Lucida Console, Monaco, monospace', [36, 'px'], 'rgba(39,255,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            transform: [[], ['270'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'rj45',
                            display: 'block',
                            rect: ['-209px', '-123px', '596px', '842px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rj45.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            id: 'continue',
                            display: 'block',
                            symbolName: 'back_button',
                            rect: ['620px', '364px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            display: 'block',
                            id: 'hide_cables',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'score',
                            text: 'You scored well!',
                            font: ['\'Lucida Console\', Monaco, monospace', [65, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            opacity: '0',
                            rect: ['0px', '101px', '800px', '185px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            rect: ['645px', '384px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'next_game',
                            display: 'none',
                            opacity: '0',
                            symbolName: 'back_button',
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]]
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
                        "generate_cables": 1000,
                        "wrapup": 2000
                    },
                    data: [
                        [
                            "eid182",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${score}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "opacity",
                            2000,
                            2000,
                            "linear",
                            "${next_game}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hide_cables}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "opacity",
                            2000,
                            2000,
                            "linear",
                            "${score}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${continue}",
                            'block',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            250,
                            0,
                            "linear",
                            "${continue}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${briefing}",
                            'block',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            250,
                            0,
                            "linear",
                            "${briefing}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${next_game}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${bg_red}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${bg_red}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "width",
                            0,
                            0,
                            "linear",
                            "${briefing}",
                            '564px',
                            '564px'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${title}",
                            'block',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            250,
                            0,
                            "linear",
                            "${title}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${rj45}",
                            'block',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            250,
                            0,
                            "linear",
                            "${rj45}",
                            'block',
                            'none'
                        ]
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
                            type: 'text',
                            rect: ['0px', '18px', '204px', '22px', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'Submit score',
                            align: 'center',
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
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
                            type: 'image',
                            id: 'server_front',
                            rect: ['0px', '0px', '210px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/server_front.svg', '0px', '0px']
                        },
                        {
                            rect: ['17px', '10px', '176px', '18px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            id: 'play_text',
                            text: 'Play',
                            align: 'center',
                            type: 'text'
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
                            type: 'text',
                            rect: ['0px', '13px', '176px', '18px', 'auto', 'auto'],
                            id: 'play_textCopy',
                            text: 'Instructions',
                            align: 'center',
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
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
                            rect: ['0px', '1px', '209px', '38px', 'auto', 'auto'],
                            id: 'server_front2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/server_front.svg', '0px', '0px']
                        },
                        {
                            font: ['\'Lucida Console\', Monaco, monospace', [22, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'play_textCopy2',
                            text: 'Highscores',
                            align: 'center',
                            rect: ['17px', '11px', '176px', '18px', 'auto', 'auto']
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
                            id: 'cable_grey2',
                            rect: ['0px', '0px', '247px', '161px', 'auto', 'auto'],
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
            },
            "minigame_2": {
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
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['219px', '129px', '564px', '179px', 'auto', 'auto'],
                            display: 'block',
                            id: 'briefing',
                            text: 'SIVEV agents have detected your intrusion, and they\'re not happy!<br><br>It\'s time for your secret weapon: your stack of Linux CDs.<br><br>Click on the screen to throw them.',
                            align: 'left',
                            font: ['\'Lucida Console\', Monaco, monospace', [24, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['219px', '36px', '581px', '67px', 'auto', 'auto'],
                            id: 'title',
                            text: '#DETECTED',
                            display: 'block',
                            font: ['Lucida Console, Monaco, monospace', [36, 'px'], 'rgba(39,255,0,1.00)', 'normal', 'none', '', 'break-word', 'normal']
                        },
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            id: 'back_button',
                            display: 'block',
                            symbolName: 'back_button',
                            rect: ['620px', '364px', null, null, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.41279', '1.23256']],
                            id: 'glow',
                            display: 'block',
                            symbolName: 'glow',
                            rect: ['12px', '86px', '172', '215', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['29px', '103px', '129px', '182px', 'auto', 'auto'],
                            id: 'Sivev',
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
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "start": 1000
                    },
                    data: [
                        [
                            "eid130",
                            "display",
                            500,
                            0,
                            "linear",
                            "${briefing}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            500,
                            0,
                            "linear",
                            "${glow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Sivev}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            500,
                            0,
                            "linear",
                            "${back_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            500,
                            0,
                            "linear",
                            "${title}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "glow": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '172px', '215px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'glow',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,0.00)', [50, 50, 'true', 'farthest-corner', [['rgba(255,0,0,1.00)', 45], ['rgba(255,220,220,0.14)', 68]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '172px', '215px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid117",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${glow}",
                            [50,50,true,'farthest-corner',[['rgba(255,0,0,1.00)',39],['rgba(255,255,255,0.00)',78]]],
                            [50,50,true,'farthest-corner',[['rgba(255,0,0,1.00)',0],['rgba(255,255,255,0.00)',27]]]
                        ],
                        [
                            "eid127",
                            "background-image",
                            1000,
                            1000,
                            "linear",
                            "${glow}",
                            [50,50,true,'farthest-corner',[['rgba(255,0,0,1.00)',0],['rgba(255,255,255,0.00)',27]]],
                            [50,50,true,'farthest-corner',[['rgba(255,0,0,1.00)',39],['rgba(255,255,255,0.00)',78]]]
                        ]
                    ]
                }
            },
            "minigame_3": {
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
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['219px', '129px', '564px', '179px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [24, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            display: 'block',
                            id: 'briefing',
                            text: 'Being a special agent is hard. Hans is hungry.<br><br>Help him to fill his cup with delicious Coyro soup!<br><br>Click on the stage to move the cup.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['219px', '36px', '581px', '67px', 'auto', 'auto'],
                            font: ['Lucida Console, Monaco, monospace', [36, 'px'], 'rgba(39,255,0,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'title',
                            text: '#HUNGRY',
                            display: 'block',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'startbutton',
                            display: 'block',
                            symbolName: 'back_button',
                            rect: ['620px', '364px', null, null, 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]]
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['-62px', '70px', '353px', '498px', 'auto', 'auto'],
                            id: 'spoon',
                            fill: ['rgba(0,0,0,0)', 'images/spoon.svg', '0px', '0px']
                        },
                        {
                            rect: ['-102px', '98px', '271px', '54px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [36, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            id: 'score',
                            text: '{{tmpscore}}',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'royco_cont',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['625px', '343px', '175px', '226px', 'auto', 'auto'],
                            id: 'mok',
                            fill: ['rgba(0,0,0,0)', 'images/mok.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '800px', '480px', 'auto', 'auto'],
                            id: 'click_intercept',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['0px', '-195px', '800px', '137px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [65, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text9',
                            text: 'Good work!',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['836px', '251px', '544px', '137px', 'auto', 'auto'],
                            font: ['\'Lucida Console\', Monaco, monospace', [24, 'px'], 'rgba(39,255,0,1)', '400', 'none solid rgb(39, 255, 0)', 'normal', 'break-word', 'normal'],
                            id: 'Text10',
                            text: 'You can now continue to the final stage. Be warned, it\'s dangerous out there!',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'back_button3',
                            symbolName: 'back_button',
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            rect: ['637px', '376px', null, null, 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '800px', '480px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: false,
                    labels: {
                        "start": 1000,
                        "wrapup": 2000,
                        "end": 6000
                    },
                    data: [
                        [
                            "eid138",
                            "display",
                            500,
                            0,
                            "linear",
                            "${title}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "top",
                            1106,
                            0,
                            "linear",
                            "${mok}",
                            '343px',
                            '343px'
                        ],
                        [
                            "eid144",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${mok}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${mok}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "font-size",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '36px',
                            '166px'
                        ],
                        [
                            "eid191",
                            "top",
                            6000,
                            1000,
                            "linear",
                            "${Text9}",
                            '-195px',
                            '44px'
                        ],
                        [
                            "eid151",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '16px',
                            '98px'
                        ],
                        [
                            "eid156",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${score}",
                            '98px',
                            '501px'
                        ],
                        [
                            "eid196",
                            "top",
                            6000,
                            1000,
                            "linear",
                            "${back_button3}",
                            '388px',
                            '376px'
                        ],
                        [
                            "eid152",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '529px',
                            '-102px'
                        ],
                        [
                            "eid146",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${score}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${score}",
                            'block',
                            'block'
                        ],
                        [
                            "eid154",
                            "width",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '271px',
                            '1004px'
                        ],
                        [
                            "eid142",
                            "display",
                            500,
                            0,
                            "linear",
                            "${spoon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "left",
                            6000,
                            1000,
                            "linear",
                            "${back_button3}",
                            '837px',
                            '637px'
                        ],
                        [
                            "eid139",
                            "display",
                            500,
                            0,
                            "linear",
                            "${briefing}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "height",
                            2000,
                            1000,
                            "linear",
                            "${score}",
                            '54px',
                            '200px'
                        ],
                        [
                            "eid137",
                            "display",
                            500,
                            0,
                            "linear",
                            "${startbutton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${click_intercept}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${click_intercept}",
                            'block',
                            'none'
                        ],
                        [
                            "eid190",
                            "left",
                            6000,
                            1000,
                            "linear",
                            "${Text10}",
                            '836px',
                            '224px'
                        ],
                        [
                            "eid145",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${royco_cont}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${royco_cont}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "royco": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'royco',
                            type: 'image',
                            rect: ['0px', '0px', '600px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/royco-1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600px', '600px']
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

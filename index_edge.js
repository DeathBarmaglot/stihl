/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Untitled-1',
                type: 'image',
                rect: ['8px', '9px','283px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-1.png",'0px','0px']
            },
            {
                id: 'Untitled-3',
                type: 'image',
                rect: ['21px', '78px','259px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-3.png",'0px','0px']
            },
            {
                id: 'Untitled-2',
                type: 'image',
                rect: ['-555px', '-79px','1406px','219px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-2.png",'0px','0px'],
                transform: [[],[],[],['0.2','0.2']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['80px', '9px','140px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: 'saw',
                type: 'image',
                rect: ['1px', '54px','280px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"saw.png",'0px','0px']
            },
            {
                id: 'f',
                type: 'image',
                rect: ['220px', '29px','78px','121px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '9px'],
                ["style", "height", '61px'],
                ["style", "opacity", '0'],
                ["style", "left", '80px'],
                ["style", "width", '140px']
            ],
            "${_f}": [
                ["style", "top", '29px'],
                ["style", "height", '121px'],
                ["style", "opacity", '0'],
                ["style", "left", '220px'],
                ["style", "width", '78px']
            ],
            "${_Untitled-2}": [
                ["style", "top", '-79px'],
                ["transform", "scaleY", '0.2'],
                ["style", "height", '219px'],
                ["transform", "scaleX", '0.2'],
                ["style", "opacity", '0'],
                ["style", "left", '-555px'],
                ["style", "width", '1406px']
            ],
            "${_saw}": [
                ["style", "top", '54px'],
                ["style", "height", '121px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "width", '280px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(237,117,0,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Untitled-3}": [
                ["style", "top", '78px'],
                ["style", "clip", [0,259,4.800048828125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '96px'],
                ["style", "opacity", '0'],
                ["style", "left", '21px'],
                ["style", "width", '259px']
            ],
            "${_Untitled-1}": [
                ["style", "top", '9px'],
                ["style", "height", '44px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px'],
                ["style", "width", '283px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13250,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "style", "${_Untitled-3}", "clip", [0,259,96,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,259,4.800048828125,0]}], position: 8000, duration: 2250 },
                { id: "eid36", tween: [ "style", "${_saw}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInCubic" },
                { id: "eid41", tween: [ "style", "${_saw}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeInCubic" },
                { id: "eid52", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 500, easing: "easeInCubic" },
                { id: "eid53", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 12750, duration: 500, easing: "easeInCubic" },
                { id: "eid48", tween: [ "style", "${_Untitled-1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInCubic" },
                { id: "eid45", tween: [ "style", "${_Untitled-1}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 500, easing: "easeOutCubic" },
                { id: "eid39", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInCubic" },
                { id: "eid40", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeInCubic" },
                { id: "eid43", tween: [ "style", "${_Untitled-2}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeInCubic" },
                { id: "eid44", tween: [ "style", "${_Untitled-2}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeInCubic" },
                { id: "eid56", tween: [ "color", "${_Stage}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(237,117,0,1)'}], position: 7500, duration: 500, easing: "easeInCubic" },
                { id: "eid54", tween: [ "style", "${_Untitled-3}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 500, easing: "easeInCubic" },
                { id: "eid55", tween: [ "style", "${_Untitled-3}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1035200");

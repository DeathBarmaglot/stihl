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
                id: 'Untitled-3',
                type: 'image',
                rect: ['21px', '80px','259px','96px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'./images/Untitled-3.png','0px','0px']
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['80px', '5px','140px','61px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'./images/logo.png','0px','0px'],
                transform: [[],[],[],['1.2','1.2']]
            },
            {
                id: 'f3',
                type: 'image',
                rect: ['155px', '14px','125px','125px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'./images/f.png','0px','0px']
            },
            {
                id: 'dr',
                type: 'image',
                rect: ['141px', '92px','180px','95px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'./images/dr.png','0px','0px'],
                transform: [[],['-1'],[],['0.89308']]
            },
            {
                id: 'saw3',
                type: 'image',
                rect: ['1px', '-59px','420px','227px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'./images/saw.png','0px','0px'],
                transform: [[],['-4'],[],['0.55','0.55']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_saw3}": [
                ["style", "top", '-63px'],
                ["transform", "scaleY", '0'],
                ["transform", "rotateZ", '-4deg'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '1px'],
                ["style", "-webkit-transform-origin", [1.54,92.53], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [1.54,92.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [1.54,92.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [1.54,92.53],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [1.54,92.53],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_logo}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1.2'],
                ["style", "height", '61px'],
                ["transform", "scaleX", '1.2'],
                ["style", "opacity", '0'],
                ["style", "left", '80px'],
                ["style", "width", '140px']
            ],
            "${_f3}": [
                ["style", "top", '14px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '125px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '155px'],
                ["style", "width", '125px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_dr}": [
                ["style", "top", '92px'],
                ["transform", "scaleX", '0.89308'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '95px'],
                ["style", "opacity", '0'],
                ["style", "left", '141px'],
                ["style", "width", '180px']
            ],
            "${_Untitled-3}": [
                ["style", "top", '80px'],
                ["style", "height", '96px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '21px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,259,4.800048828125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '259px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid113", tween: [ "style", "${_saw3}", "top", '-68px', { fromValue: '-63px'}], position: 604, duration: 304, easing: "easeInOutQuad" },
                { id: "eid92", tween: [ "transform", "${_saw3}", "rotateZ", '3deg', { fromValue: '-4deg'}], position: 532, duration: 468, easing: "easeInOutQuad" },
                { id: "eid120", tween: [ "transform", "${_f3}", "scaleY", '0', { fromValue: '1'}], position: 4936, duration: 351, easing: "easeInCubic" },
                { id: "eid70", tween: [ "style", "${_dr}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeInCubic" },
                { id: "eid71", tween: [ "style", "${_dr}", "opacity", '0', { fromValue: '1'}], position: 4829, duration: 500, easing: "easeOutCubic" },
                { id: "eid52", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 4936, duration: 1114, easing: "easeInCubic" },
                { id: "eid53", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500, easing: "easeInCubic" },
                { id: "eid54", tween: [ "style", "${_Untitled-3}", "opacity", '1', { fromValue: '0'}], position: 6050, duration: 500, easing: "easeInCubic" },
                { id: "eid55", tween: [ "style", "${_Untitled-3}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 500, easing: "easeInCubic" },
                { id: "eid63", tween: [ "style", "${_Untitled-3}", "clip", [0,259,96,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,259,4.800048828125,0]}], position: 6550, duration: 2250 },
                { id: "eid121", tween: [ "transform", "${_f3}", "scaleX", '0', { fromValue: '1'}], position: 4936, duration: 351, easing: "easeInCubic" },
                { id: "eid65", tween: [ "style", "${_saw3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid106", tween: [ "style", "${_saw3}", "opacity", '0', { fromValue: '1'}], position: 4793, duration: 500, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_f3}", "opacity", '1', { fromValue: '0'}], position: 408, duration: 500, easing: "easeInCubic" },
                { id: "eid69", tween: [ "style", "${_f3}", "opacity", '0', { fromValue: '1'}], position: 4793, duration: 537, easing: "easeInCubic" },
                { id: "eid77", tween: [ "transform", "${_saw3}", "scaleX", '0.55', { fromValue: '0'}], position: 250, duration: 750, easing: "easeInOutQuad" },
                { id: "eid78", tween: [ "transform", "${_saw3}", "scaleY", '0.55', { fromValue: '0'}], position: 250, duration: 750, easing: "easeInOutQuad" }            ]
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

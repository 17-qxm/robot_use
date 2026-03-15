Blockly.Blocks['1760695941602'] = {
  init: function() {
    this.jsonInit({
      "type": "1760695941602",
      "message0": "GrabCube42",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760695941602'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 90, 170, 55, 158, 140, 55, 60, 100, 110, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75, 15, 170, 55, 158, 140, 55, 60, 128, 183, 35, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 50, 138, 150, 55, 60, 128, 183, 35, 150, 62, 50, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 70, 128, 145, 75, 70, 128, 183, 35, 130, 72, 55, 125, 130, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(150)\nMOTOmove19(75, 15, 170, 98, 142, 145, 77, 98, 128, 183, 35, 102, 58, 55, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75, 15, 170, 100, 93, 55, 124, 100, 128, 183, 35, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 62, 185, 100, 93, 55, 124, 100, 190, 138, 18, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760695941602'] = function(block) {
  let code = "base_action.action('GrabCube42')\n";
  return code;
}


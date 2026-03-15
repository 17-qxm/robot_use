Blockly.Blocks['1760695824560'] = {
  init: function() {
    this.jsonInit({
      "type": "1760695824560",
      "message0": "GrabCube330",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760695824560'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(100, 90, 170, 55, 158, 140, 55, 60, 100, 110, 30, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62, 16, 161, 55, 158, 140, 55, 60, 141, 183, 42, 145, 42, 60, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(58, 20, 155, 50, 138, 150, 55, 60, 141, 183, 49, 150, 62, 50, 145, 140, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(62, 16, 189, 70, 128, 145, 75, 70, 143, 183, 15, 130, 72, 55, 125, 130, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30,0,0,0)\nMOTOsetspeed(150)\nMOTOmove19(62, 16, 189, 98, 142, 145, 77, 98, 143, 183, 15, 102, 58, 55, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(62, 16, 189, 100, 93, 55, 124, 100, 145, 178, 15, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 52, 190, 100, 93, 55, 124, 100, 190, 152, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760695824560'] = function(block) {
  let code = "base_action.action('GrabCube330')\n";
  return code;
}


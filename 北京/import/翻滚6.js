Blockly.Blocks['1761981205887'] = {
  init: function() {
    this.jsonInit({
      "type": "1761981205887",
      "message0": "翻滚6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761981205887'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(172, 153, 98, 104, 103, 145, 45, 98, 30, 45, 100, 108, 92, 50, 160, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(172, 153, 98, 99, 113, 115, 81, 60, 30, 45, 100, 107, 79, 50, 147, 79, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(172, 153, 98, 73, 115, 125, 71, 83, 30, 45, 100, 143, 81, 50, 147, 77, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(172, 153, 98, 20, 105, 130, 66, 121, 30, 45, 100, 180, 85, 82, 121, 82, 0, 0, 100)\nMOTOwait()\nDelayMs(700)\nMOTOsetspeed(30)\nMOTOmove19(110, 154, 97, 20, 116, 129, 68, 121, 72, 58, 99, 180, 85, 50, 151, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(109, 60, 97, 79, 114, 141, 53, 119, 72, 92, 98, 138, 85, 50, 151, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(109, 60, 97, 89, 113, 146, 52, 90, 72, 92, 98, 93, 84, 64, 134, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761981205887'] = function(block) {
  let code = "base_action.action('翻滚6')\n";
  return code;
}


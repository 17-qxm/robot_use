Blockly.Blocks['1756291935713'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291935713",
      "message0": "两块后退32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291935713'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 98, 118, 189, 28, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 108, 118, 189, 28, 111, 102, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 107, 118, 189, 28, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 92, 116, 55, 144, 85, 118, 189, 28, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 92, 75, 55, 106, 95, 118, 189, 28, 95, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 105, 93, 55, 124, 107, 118, 189, 28, 108, 84, 141, 56, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83, 10, 175, 105, 92, 55, 124, 107, 118, 189, 28, 111, 107, 136, 78, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 100, 93, 55, 124, 98, 118, 189, 28, 100, 107, 145, 76, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291935713'] = function(block) {
  let code = "base_action.action('两块后退32')\n";
  return code;
}


Blockly.Blocks['1759827259991'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827259991",
      "message0": "两块左滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827259991'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(83, 10, 175, 100, 110, 90, 109, 100, 118, 189, 28, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 51, 125, 150, 64, 68, 118, 189, 28, 133, 95, 92, 115, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 110, 90, 109, 100, 118, 189, 28, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827259991'] = function(block) {
  let code = "base_action.action('两块左滑A')\n";
  return code;
}


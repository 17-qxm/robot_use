Blockly.Blocks['1759827222170'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827222170",
      "message0": "一块左滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827222170'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(59, 12, 165, 100, 106, 90, 109, 100, 147, 182, 40, 100, 95, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 84, 115, 150, 58, 77, 147, 182, 40, 164, 90, 92, 110, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 100, 106, 90, 109, 100, 147, 182, 40, 100, 95, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827222170'] = function(block) {
  let code = "base_action.action('一块左滑A')\n";
  return code;
}


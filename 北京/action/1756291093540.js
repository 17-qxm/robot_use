Blockly.Blocks['1756291093540'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291093540",
      "message0": "一块左滑10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291093540'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(59, 12, 165, 84, 126, 150, 58, 77, 147, 182, 40, 164, 86, 92, 110, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291093540'] = function(block) {
  let code = "base_action.action('一块左滑10')\n";
  return code;
}


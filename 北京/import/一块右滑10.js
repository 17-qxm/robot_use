Blockly.Blocks['1756291142697'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291142697",
      "message0": "一块右滑10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291142697'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(59, 12, 165, 51, 101, 95, 87, 78, 147, 182, 40, 139, 79, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(40)\nMOTOmove19(59, 12, 165, 100, 113, 90, 109, 100, 147, 182, 40, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291142697'] = function(block) {
  let code = "base_action.action('一块右滑10')\n";
  return code;
}


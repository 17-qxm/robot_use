Blockly.Blocks['1756291758428'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291758428",
      "message0": "两块右滑6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291758428'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(70, 15, 190, 62, 112, 90, 105, 79, 131, 181, 15, 139, 73, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 100, 113, 90, 109, 100, 131, 181, 15, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291758428'] = function(block) {
  let code = "base_action.action('两块右滑6')\n";
  return code;
}


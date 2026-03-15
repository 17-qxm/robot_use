Blockly.Blocks['1756291731230'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291731230",
      "message0": "两块左滑6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291731230'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(35)\nMOTOmove19(83, 10, 175, 51, 126, 150, 58, 70, 118, 189, 28, 133, 86, 92, 110, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(83, 10, 175, 100, 113, 90, 109, 100, 118, 189, 28, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291731230'] = function(block) {
  let code = "base_action.action('两块左滑6')\n";
  return code;
}


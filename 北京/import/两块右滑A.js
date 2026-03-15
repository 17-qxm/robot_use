Blockly.Blocks['1759827196100'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827196100",
      "message0": "两块右滑A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827196100'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(70, 15, 190, 100, 110, 90, 109, 100, 131, 181, 15, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 62, 120, 90, 116, 77, 131, 181, 15, 139, 80, 50, 144, 133, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(70, 15, 190, 100, 110, 90, 109, 100, 131, 181, 15, 100, 90, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827196100'] = function(block) {
  let code = "base_action.action('两块右滑A')\n";
  return code;
}


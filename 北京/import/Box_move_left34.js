Blockly.Blocks['1760697140846'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697140846",
      "message0": "Box_move_left34",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697140846'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(14, 52, 190, 84, 122, 150, 58, 77, 190, 152, 14, 166, 90, 98, 109, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14, 52, 190, 100, 113, 90, 109, 100, 190, 152, 14, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697140846'] = function(block) {
  let code = "base_action.action('Box_move_left34')\n";
  return code;
}


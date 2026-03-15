Blockly.Blocks['1760427494865'] = {
  init: function() {
    this.jsonInit({
      "type": "1760427494865",
      "message0": "抱两个方块右移10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760427494865'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(75, 20, 170, 90, 92, 52, 127, 100, 125, 180, 30, 115, 88, 116, 88, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 20, 170, 100, 91, 55, 129, 100, 125, 180, 30, 100, 109, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760427494865'] = function(block) {
  let code = "base_action.action('抱两个方块右移10')\n";
  return code;
}


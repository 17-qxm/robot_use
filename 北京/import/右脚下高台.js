Blockly.Blocks['1756291589921'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291589921",
      "message0": "右脚下高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291589921'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(35)\nMOTOmove19(83, 108, 103, 62, 102, 95, 87, 79, 103, 91, 103, 139, 73, 50, 144, 133, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83, 108, 103, 20, 102, 95, 87, 79, 103, 91, 103, 155, 73, 50, 144, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 108, 103, 62, 102, 95, 87, 79, 103, 91, 103, 105, 73, 50, 144, 102, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(15)\nMOTOmove19(83, 108, 103, 100, 113, 90, 109, 100, 103, 91, 103, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291589921'] = function(block) {
  let code = "base_action.action('右脚下高台')\n";
  return code;
}


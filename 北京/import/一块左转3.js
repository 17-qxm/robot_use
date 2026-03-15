Blockly.Blocks['1756291343470'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291343470",
      "message0": "一块左转3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291343470'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(67, 10, 165, 95, 71, 55, 109, 95, 135, 190, 40, 105, 89, 145, 51, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(100)\nMOTOmove19(67, 10, 165, 95, 80, 55, 109, 92, 135, 190, 40, 105, 81, 145, 51, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(50)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291343470'] = function(block) {
  let code = "base_action.action('一块左转3')\n";
  return code;
}


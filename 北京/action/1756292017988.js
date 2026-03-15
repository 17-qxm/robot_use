Blockly.Blocks['1756292017988'] = {
  init: function() {
    this.jsonInit({
      "type": "1756292017988",
      "message0": "两块右转32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756292017988'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 90, 55, 129, 100, 118, 189, 28, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83, 10, 175, 95, 110, 55, 149, 95, 118, 189, 28, 105, 130, 145, 91, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(100)\nMOTOmove19(83, 10, 175, 95, 118, 55, 149, 92, 118, 189, 28, 105, 121, 145, 91, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(50)\nMOTOmove19(83, 10, 175, 100, 90, 55, 129, 100, 118, 189, 28, 100, 110, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756292017988'] = function(block) {
  let code = "base_action.action('两块右转32')\n";
  return code;
}


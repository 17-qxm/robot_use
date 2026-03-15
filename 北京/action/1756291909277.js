Blockly.Blocks['1756291909277'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291909277",
      "message0": "两块前进32",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291909277'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(83, 10, 175, 90, 91, 48, 134, 88, 118, 189, 28, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 123, 95, 115, 90, 118, 189, 28, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 121, 37, 161, 88, 118, 189, 28, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83, 10, 175, 107, 98, 56, 129, 111, 118, 189, 28, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 106, 93, 54, 128, 113, 118, 189, 28, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 106, 91, 54, 128, 111, 118, 189, 28, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83, 10, 175, 88, 69, 45, 112, 90, 118, 189, 28, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 86, 123, 95, 115, 90, 118, 189, 28, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(83, 10, 175, 100, 91, 55, 129, 100, 118, 189, 28, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291909277'] = function(block) {
  let code = "base_action.action('两块前进32')\n";
  return code;
}


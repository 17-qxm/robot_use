Blockly.Blocks['1756291048160'] = {
  init: function() {
    this.jsonInit({
      "type": "1756291048160",
      "message0": "抱1个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1756291048160'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 148, 100, 148, 150, 59, 99, 119, 169, 50, 99, 52, 50, 141, 99, 0, 0, 101)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(65, 12, 151, 100, 149, 150, 59, 100, 140, 188, 50, 100, 52, 50, 141, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 12, 151, 100, 119, 132, 70, 100, 140, 188, 50, 100, 77, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 12, 151, 100, 115, 97, 97, 100, 140, 188, 50, 100, 84, 105, 98, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65, 12, 165, 100, 98, 77, 115, 100, 140, 188, 40, 100, 101, 123, 86, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1756291048160'] = function(block) {
  let code = "base_action.action('抱1个')\n";
  return code;
}


Blockly.Blocks['1759719034329'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719034329",
      "message0": "1左移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719034329'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759719034329'] = function(block) {
  let code = "base_action.action('1左移动')\n";
  return code;
}


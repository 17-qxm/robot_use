Blockly.Blocks['1759827540264'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827540264",
      "message0": "一块右滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827540264'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(32,32,169,80,113,116,84,90,169,166,35,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(32,32,169,99,92,115,70,98,169,166,35,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759827540264'] = function(block) {
  let code = "base_action.action('一块右滑B')\n";
  return code;
}


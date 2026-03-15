Blockly.Blocks['1759555821741'] = {
  init: function() {
    this.jsonInit({
      "type": "1759555821741",
      "message0": "左11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759555821741'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,151,92,110,97,125,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,99,97,115,70,98,125,180,20,102,106,85,131,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759555821741'] = function(block) {
  let code = "base_action.action('左11')\n";
  return code;
}


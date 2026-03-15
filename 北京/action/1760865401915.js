Blockly.Blocks['1760865401915'] = {
  init: function() {
    this.jsonInit({
      "type": "1760865401915",
      "message0": "221",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760865401915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760865401915'] = function(block) {
  let code = "base_action.action('221')\n";
  return code;
}


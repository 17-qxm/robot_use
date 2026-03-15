Blockly.Blocks['1761045715274'] = {
  init: function() {
    this.jsonInit({
      "type": "1761045715274",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761045715274'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(180)\nMOTOsetspeed(100)\nMOTOmove19(14,52,190,92,106,150,40,85,190,152,14,137,95,85,123,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761045715274'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}


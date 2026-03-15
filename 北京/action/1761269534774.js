Blockly.Blocks['1761269534774'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269534774",
      "message0": "22左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269534774'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(10,62,185,88,104,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761269534774'] = function(block) {
  let code = "base_action.action('22左')\n";
  return code;
}


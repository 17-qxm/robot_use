Blockly.Blocks['1760754577591'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754577591",
      "message0": "左c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754577591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(10,62,185,84,122,150,58,77,190,138,18,166,90,98,109,140,0,0,100)\nMOTOwait()\nDelayMs(80)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(100)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754577591'] = function(block) {
  let code = "base_action.action('左c')\n";
  return code;
}


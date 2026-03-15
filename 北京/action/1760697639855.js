Blockly.Blocks['1760697639855'] = {
  init: function() {
    this.jsonInit({
      "type": "1760697639855",
      "message0": "左滑步A",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760697639855'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,84,122,150,58,77,190,152,14,166,90,98,109,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14,52,190,92,106,150,40,94,190,152,14,137,95,85,123,137,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760697639855'] = function(block) {
  let code = "base_action.action('左滑步A')\n";
  return code;
}


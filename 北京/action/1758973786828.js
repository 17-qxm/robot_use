Blockly.Blocks['1758973786828'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973786828",
      "message0": "右5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973786828'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973786828'] = function(block) {
  let code = "base_action.action('右5')\n";
  return code;
}


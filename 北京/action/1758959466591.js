Blockly.Blocks['1758959466591'] = {
  init: function() {
    this.jsonInit({
      "type": "1758959466591",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758959466591'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,122,94,91,115,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758959466591'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}


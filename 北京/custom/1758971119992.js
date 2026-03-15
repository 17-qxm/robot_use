Blockly.Blocks['1758971119992'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971119992",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971119992'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971119992'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}


Blockly.Blocks['1759556704195'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556704195",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556704195'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(60)\nMOTOmove19(75,20,180,98,121,99,107,98,125,180,20,102,77,102,90,101,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1759556704195'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}


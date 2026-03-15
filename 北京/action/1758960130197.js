Blockly.Blocks['1758960130197'] = {
  init: function() {
    this.jsonInit({
      "type": "1758960130197",
      "message0": "左4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758960130197'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,86,107,150,45,84,118,189,28,149,94,94,116,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758960130197'] = function(block) {
  let code = "base_action.action('左4')\n";
  return code;
}


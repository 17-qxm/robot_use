Blockly.Blocks['1758972294797'] = {
  init: function() {
    this.jsonInit({
      "type": "1758972294797",
      "message0": "左5",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758972294797'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,66,119,150,59,75,118,189,28,132,94,88,114,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(83,10,175,100,93,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758972294797'] = function(block) {
  let code = "base_action.action('左5')\n";
  return code;
}


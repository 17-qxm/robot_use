Blockly.Blocks['1759544640348'] = {
  init: function() {
    this.jsonInit({
      "type": "1759544640348",
      "message0": "左2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759544640348'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759544640348'] = function(block) {
  let code = "base_action.action('左2')\n";
  return code;
}


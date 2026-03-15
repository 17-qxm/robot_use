Blockly.Blocks['1759546431355'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546431355",
      "message0": "右2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546431355'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,99,96,102,81,99,118,189,28,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546431355'] = function(block) {
  let code = "base_action.action('右2个')\n";
  return code;
}


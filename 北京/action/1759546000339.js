Blockly.Blocks['1759546000339'] = {
  init: function() {
    this.jsonInit({
      "type": "1759546000339",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759546000339'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(69,13,189,79,118,98,109,84,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,97,117,97,111,96,118,189,28,102,79,100,86,97,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759546000339'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}


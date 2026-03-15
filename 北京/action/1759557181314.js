Blockly.Blocks['1759557181314'] = {
  init: function() {
    this.jsonInit({
      "type": "1759557181314",
      "message0": "右22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759557181314'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(40)\nMOTOmove19(70,15,190,80,113,116,84,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759557181314'] = function(block) {
  let code = "base_action.action('右22')\n";
  return code;
}


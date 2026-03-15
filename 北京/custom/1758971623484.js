Blockly.Blocks['1758971623484'] = {
  init: function() {
    this.jsonInit({
      "type": "1758971623484",
      "message0": "右3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758971623484'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(38)\nMOTOmove19(70,15,190,76,107,94,112,92,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(50)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758971623484'] = function(block) {
  let code = "base_action.action('右3')\n";
  return code;
}


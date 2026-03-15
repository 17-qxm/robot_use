Blockly.Blocks['1758879764709'] = {
  init: function() {
    this.jsonInit({
      "type": "1758879764709",
      "message0": "右11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758879764709'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,62,120,90,116,77,131,181,15,139,80,50,144,133,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1758879764709'] = function(block) {
  let code = "base_action.action('右11')\n";
  return code;
}


Blockly.Blocks['1758973698814'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973698814",
      "message0": "右4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973698814'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,76,109,94,112,90,130,181,15,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(45)\nMOTOmove19(70,15,190,100,110,90,109,100,131,181,15,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973698814'] = function(block) {
  let code = "base_action.action('右4')\n";
  return code;
}


Blockly.Blocks['1764129745203'] = {
  init: function() {
    this.jsonInit({
      "type": "1764129745203",
      "message0": "2右",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764129745203'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,60,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,62,185,100,93,55,124,100,190,138,18,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764129745203'] = function(block) {
  let code = "base_action.action('2右')\n";
  return code;
}


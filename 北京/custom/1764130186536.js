Blockly.Blocks['1764130186536'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130186536",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130186536'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130186536'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}


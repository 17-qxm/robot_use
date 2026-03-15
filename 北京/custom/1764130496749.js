Blockly.Blocks['1764130496749'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130496749",
      "message0": "1右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130496749'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(14,52,190,95,110,55,149,95,190,152,14,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,90,55,129,100,190,152,14,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130496749'] = function(block) {
  let code = "base_action.action('1右转')\n";
  return code;
}


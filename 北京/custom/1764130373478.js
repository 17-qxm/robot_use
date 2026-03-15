Blockly.Blocks['1764130373478'] = {
  init: function() {
    this.jsonInit({
      "type": "1764130373478",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764130373478'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(14,52,190,95,71,55,109,95,190,152,14,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(14,52,190,100,91,55,129,100,190,152,14,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764130373478'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}


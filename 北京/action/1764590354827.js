Blockly.Blocks['1764590354827'] = {
  init: function() {
    this.jsonInit({
      "type": "1764590354827",
      "message0": "22左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764590354827'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10,62,185,95,71,55,109,95,190,138,18,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764590354827'] = function(block) {
  let code = "base_action.action('22左转')\n";
  return code;
}


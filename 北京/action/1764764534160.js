Blockly.Blocks['1764764534160'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764534160",
      "message0": "ZUO1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764534160'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764534160'] = function(block) {
  let code = "base_action.action('ZUO1')\n";
  return code;
}


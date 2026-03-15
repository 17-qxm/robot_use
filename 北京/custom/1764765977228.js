Blockly.Blocks['1764765977228'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765977228",
      "message0": "ZUO22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765977228'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764765977228'] = function(block) {
  let code = "base_action.action('ZUO22')\n";
  return code;
}


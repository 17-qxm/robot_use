Blockly.Blocks['1764764659639'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764659639",
      "message0": "YOU1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764659639'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,60,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764764659639'] = function(block) {
  let code = "base_action.action('YOU1')\n";
  return code;
}


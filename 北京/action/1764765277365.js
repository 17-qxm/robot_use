Blockly.Blocks['1764765277365'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765277365",
      "message0": "YOUZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765277365'] = function(block) {
  let code = "MOTOrigid16(30,30,170,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(62,15,170,95,110,55,149,95,138,183,35,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,90,55,129,100,138,183,35,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765277365'] = function(block) {
  let code = "base_action.action('YOUZHUAN1')\n";
  return code;
}


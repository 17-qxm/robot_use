Blockly.Blocks['1764764017207'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764017207",
      "message0": "ZUOZHUAN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764017207'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(75,15,170,95,71,55,109,95,128,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764017207'] = function(block) {
  let code = "base_action.action('ZUOZHUAN2')\n";
  return code;
}


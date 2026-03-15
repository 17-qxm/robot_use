Blockly.Blocks['1764765208461'] = {
  init: function() {
    this.jsonInit({
      "type": "1764765208461",
      "message0": "ZUOZHUAN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764765208461'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,138,183,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,95,71,55,109,95,138,183,35,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(62,15,170,100,91,55,129,100,138,183,35,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764765208461'] = function(block) {
  let code = "base_action.action('ZUOZHUAN1')\n";
  return code;
}


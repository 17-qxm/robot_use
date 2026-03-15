Blockly.Blocks['1760415645999'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415645999",
      "message0": "16",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415645999'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415645999'] = function(block) {
  let code = "base_action.action('16')\n";
  return code;
}


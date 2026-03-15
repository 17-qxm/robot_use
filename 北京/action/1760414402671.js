Blockly.Blocks['1760414402671'] = {
  init: function() {
    this.jsonInit({
      "type": "1760414402671",
      "message0": "2888",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760414402671'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(10,60,190,77,93,55,124,60,190,140,12,113,107,145,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,77,93,55,124,81,190,140,12,113,107,145,76,88,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760414402671'] = function(block) {
  let code = "base_action.action('2888')\n";
  return code;
}


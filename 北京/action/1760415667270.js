Blockly.Blocks['1760415667270'] = {
  init: function() {
    this.jsonInit({
      "type": "1760415667270",
      "message0": "17",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760415667270'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,96,93,55,124,90,190,140,12,130,107,145,76,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10,60,190,81,93,55,124,60,190,140,12,104,107,145,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10,60,190,100,93,55,124,100,190,140,12,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760415667270'] = function(block) {
  let code = "base_action.action('17')\n";
  return code;
}


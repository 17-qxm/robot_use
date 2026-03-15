Blockly.Blocks['1758891280535'] = {
  init: function() {
    this.jsonInit({
      "type": "1758891280535",
      "message0": "小步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758891280535'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,125,70,135,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,80,133,60,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,90,73,100,100,190,152,14,101,93,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,96,115,65,135,100,190,152,14,102,110,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,100,97,127,84,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758891280535'] = function(block) {
  let code = "base_action.action('小步')\n";
  return code;
}


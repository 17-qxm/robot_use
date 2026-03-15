Blockly.Blocks['1758976990931'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976990931",
      "message0": "2前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976990931'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976990931'] = function(block) {
  let code = "base_action.action('2前进')\n";
  return code;
}


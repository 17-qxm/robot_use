Blockly.Blocks['1758884543101'] = {
  init: function() {
    this.jsonInit({
      "type": "1758884543101",
      "message0": "steady",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758884543101'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,90,91,48,129,88,118,189,28,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,125,95,110,90,118,189,28,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,86,113,37,156,88,118,189,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,107,100,56,124,111,118,189,28,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,95,54,123,113,118,189,28,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,106,93,54,123,111,118,189,28,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,88,71,45,107,90,118,189,28,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,91,98,48,132,93,118,189,28,94,107,145,76,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,100,93,55,124,100,118,189,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758884543101'] = function(block) {
  let code = "base_action.action('steady')\n";
  return code;
}


Blockly.Blocks['1764589692593'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589692593",
      "message0": "22前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589692593'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,90,91,48,134,88,190,145,19,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,60,183,86,121,37,161,88,190,145,19,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,107,98,56,129,111,190,145,19,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,106,93,54,128,113,190,145,19,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10,60,183,106,91,54,128,111,190,145,19,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(10,60,183,88,69,45,112,90,190,145,19,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,86,123,95,115,90,190,145,19,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589692593'] = function(block) {
  let code = "base_action.action('22前进')\n";
  return code;
}


Blockly.Blocks['1764763861973'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763861973",
      "message0": "QIANJIN2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763861973'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,90,91,48,134,88,128,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,86,123,95,115,90,128,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,170,86,121,37,161,88,128,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,107,98,56,129,111,128,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,15,170,106,93,54,128,113,128,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75,15,170,106,91,54,128,111,128,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,170,88,69,45,112,90,128,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(75,15,170,100,93,55,124,100,128,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763861973'] = function(block) {
  let code = "base_action.action('QIANJIN2')\n";
  return code;
}


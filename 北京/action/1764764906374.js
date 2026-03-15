Blockly.Blocks['1764764906374'] = {
  init: function() {
    this.jsonInit({
      "type": "1764764906374",
      "message0": "QIANJIN1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764764906374'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(5)\nMOTOmove19(62,15,170,90,91,48,134,88,138,183,35,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,121,37,161,88,138,183,35,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,107,98,56,129,111,138,183,35,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,93,54,128,113,138,183,35,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,106,91,54,128,111,138,183,35,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(62,15,170,88,69,45,112,90,138,183,35,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(62,15,170,86,123,95,115,90,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(62,15,170,86,123,75,129,100,138,183,35,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(150)\nMOTOmove19(62,15,170,100,93,55,124,100,138,183,35,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1764764906374'] = function(block) {
  let code = "base_action.action('QIANJIN1')\n";
  return code;
}


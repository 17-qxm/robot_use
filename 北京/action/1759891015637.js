Blockly.Blocks['1759891015637'] = {
  init: function() {
    this.jsonInit({
      "type": "1759891015637",
      "message0": "两块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759891015637'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(75,15,180,90,91,48,134,88,125,185,20,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,86,121,37,161,88,125,185,20,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,107,98,56,129,111,125,185,20,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,106,93,54,128,113,125,185,20,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(75,15,180,106,91,54,128,111,125,185,20,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(75,15,180,88,69,45,112,90,125,185,20,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(75,15,180,86,123,95,115,90,125,185,20,94,107,146,72,87,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,100,91,55,129,100,125,185,20,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759891015637'] = function(block) {
  let code = "base_action.action('两块前进22')\n";
  return code;
}


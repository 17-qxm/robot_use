Blockly.Blocks['1759890660499'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890660499",
      "message0": "一块前进22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890660499'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,100,91,55,129,100,140,188,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(65,12,162,90,91,48,134,88,140,190,40,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,121,37,161,88,140,190,40,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,107,98,56,129,111,140,190,40,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,93,54,128,113,140,190,40,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,106,91,54,128,111,140,190,40,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(65,12,162,88,69,45,112,90,140,190,40,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(65,12,162,86,123,95,115,90,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,86,123,75,129,100,140,190,40,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,91,55,129,100,140,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890660499'] = function(block) {
  let code = "base_action.action('一块前进22')\n";
  return code;
}


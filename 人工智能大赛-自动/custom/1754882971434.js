Blockly.Blocks['1754882971434'] = {
  init: function() {
    this.jsonInit({
      "type": "1754882971434",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1754882971434'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(68,10,188,100,91,55,129,100,132,189,17,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,123,95,115,90,132,189,17,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,134,13,190,87,132,189,17,88,74,94,99,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(68,10,188,107,98,56,129,111,132,189,17,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,106,93,54,128,113,132,189,17,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,106,91,54,128,111,132,189,17,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(68,10,188,88,69,45,112,90,132,189,17,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,123,95,115,90,132,189,17,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68,10,188,100,91,55,129,100,132,189,17,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1754882971434'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}


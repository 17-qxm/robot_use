Blockly.Blocks['1758951049237'] = {
  init: function() {
    this.jsonInit({
      "type": "1758951049237",
      "message0": "f11",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758951049237'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(130)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(83,10,175,90,91,48,134,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,123,95,115,90,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,86,121,37,161,88,118,189,28,93,108,149,65,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,107,98,56,129,111,118,189,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,93,54,128,113,118,189,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(83,10,175,106,91,54,128,111,118,189,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(15)\nMOTOmove19(83,10,175,88,69,45,112,90,118,189,28,94,80,141,62,97,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(83,10,175,99,150,133,86,107,118,189,28,100,90,140,70,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,95,90,50,120,95,118,189,28,96,107,145,71,98,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,91,55,129,100,118,189,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1758951049237'] = function(block) {
  let code = "base_action.action('f11')\n";
  return code;
}


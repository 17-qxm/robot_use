Blockly.Blocks['1764763957252'] = {
  init: function() {
    this.jsonInit({
      "type": "1764763957252",
      "message0": "HOUTUI2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764763957252'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(75,15,170,85,50,50,50,85,128,183,35,85,50,50,50,85)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(75,15,170,105,93,55,124,108,128,183,35,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,92,116,55,144,85,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,92,75,55,106,95,128,183,35,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,93,55,124,107,128,183,35,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,105,92,55,124,107,128,183,35,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(75,15,170,100,93,55,124,98,128,183,35,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764763957252'] = function(block) {
  let code = "base_action.action('HOUTUI2')\n";
  return code;
}


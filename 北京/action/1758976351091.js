Blockly.Blocks['1758976351091'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976351091",
      "message0": "ff",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976351091'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(150)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,12,165,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,165,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758976351091'] = function(block) {
  let code = "base_action.action('ff')\n";
  return code;
}


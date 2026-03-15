Blockly.Blocks['1760933212934'] = {
  init: function() {
    this.jsonInit({
      "type": "1760933212934",
      "message0": "后退步1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760933212934'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(50)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\nMOTOrigid16(65,12,165,85,50,50,50,85,140,188,40,85,50,50,50,85)\nMOTOrigid16(65,12,165,85,60,60,60,75,140,188,40,85,60,60,60,75)\n\n\n-- 右抬腿\nMOTOsetspeed(10)\nMOTOmove19(65,12,162,105,93,55,124,108,140,188,40,111,102,136,78,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,92,116,55,144,85,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,92,75,55,106,95,140,188,40,95,107,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,93,55,124,107,140,188,40,108,84,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,105,92,55,124,107,140,188,40,111,107,136,78,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,12,162,100,93,55,124,98,140,188,40,100,107,145,76,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760933212934'] = function(block) {
  let code = "base_action.action('后退步1')\n";
  return code;
}


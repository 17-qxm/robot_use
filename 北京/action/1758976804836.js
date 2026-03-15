Blockly.Blocks['1758976804836'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976804836",
      "message0": "1右1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976804836'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,76,109,94,112,90,140,188,40,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976804836'] = function(block) {
  let code = "base_action.action('1右1')\n";
  return code;
}


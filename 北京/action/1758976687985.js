Blockly.Blocks['1758976687985'] = {
  init: function() {
    this.jsonInit({
      "type": "1758976687985",
      "message0": "1左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758976687985'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(65,12,165,79,119,150,59,75,140,188,40,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(65,12,165,100,93,60,125,100,140,188,40,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758976687985'] = function(block) {
  let code = "base_action.action('1左1')\n";
  return code;
}


Blockly.Blocks['1758973224776'] = {
  init: function() {
    this.jsonInit({
      "type": "1758973224776",
      "message0": "左6",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758973224776'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,100,93,60,125,100,118,189,28,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1758973224776'] = function(block) {
  let code = "base_action.action('左6')\n";
  return code;
}


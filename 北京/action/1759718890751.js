Blockly.Blocks['1759718890751'] = {
  init: function() {
    this.jsonInit({
      "type": "1759718890751",
      "message0": "2左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759718890751'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,79,119,150,59,75,118,189,28,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,85,131,99)\nMOTOsetspeed(25)\nMOTOmove19(75,20,180,99,92,115,70,98,125,180,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759718890751'] = function(block) {
  let code = "base_action.action('2左移')\n";
  return code;
}


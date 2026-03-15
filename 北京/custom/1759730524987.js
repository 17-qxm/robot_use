Blockly.Blocks['1759730524987'] = {
  init: function() {
    this.jsonInit({
      "type": "1759730524987",
      "message0": "两块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759730524987'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,51,126,150,58,70,118,189,28,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(83,10,175,103,113,90,109,100,118,189,28,97,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759730524987'] = function(block) {
  let code = "base_action.action('两块左移')\n";
  return code;
}


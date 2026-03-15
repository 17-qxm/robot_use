Blockly.Blocks['1759731740281'] = {
  init: function() {
    this.jsonInit({
      "type": "1759731740281",
      "message0": "一块左移1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759731740281'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759731740281'] = function(block) {
  let code = "base_action.action('一块左移1')\n";
  return code;
}


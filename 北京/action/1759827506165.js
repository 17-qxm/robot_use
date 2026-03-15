Blockly.Blocks['1759827506165'] = {
  init: function() {
    this.jsonInit({
      "type": "1759827506165",
      "message0": "一块左滑B",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759827506165'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(59,17,173,51,126,150,58,70,134,185,29,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(59,17,173,100,113,90,109,100,134,185,29,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759827506165'] = function(block) {
  let code = "base_action.action('一块左滑B')\n";
  return code;
}


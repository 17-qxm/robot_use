Blockly.Blocks['1759890186979'] = {
  init: function() {
    this.jsonInit({
      "type": "1759890186979",
      "message0": "一块左移1111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759890186979'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(65,12,162,51,126,150,58,70,140,188,40,133,86,92,110,120,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(65,12,162,100,113,90,109,100,140,188,40,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759890186979'] = function(block) {
  let code = "base_action.action('一块左移1111')\n";
  return code;
}


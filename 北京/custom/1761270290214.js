Blockly.Blocks['1761270290214'] = {
  init: function() {
    this.jsonInit({
      "type": "1761270290214",
      "message0": "左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761270290214'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,12,151,72,125,150,62,82,140,188,50,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(65,12,151,100,110,90,109,100,140,188,50,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761270290214'] = function(block) {
  let code = "base_action.action('左移')\n";
  return code;
}


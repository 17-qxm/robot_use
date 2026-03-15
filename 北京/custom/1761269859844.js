Blockly.Blocks['1761269859844'] = {
  init: function() {
    this.jsonInit({
      "type": "1761269859844",
      "message0": "左移111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761269859844'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(83,10,175,72,125,150,62,82,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(45)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1761269859844'] = function(block) {
  let code = "base_action.action('左移111')\n";
  return code;
}


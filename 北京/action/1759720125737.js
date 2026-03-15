Blockly.Blocks['1759720125737'] = {
  init: function() {
    this.jsonInit({
      "type": "1759720125737",
      "message0": "2右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759720125737'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83,10,175,95,110,55,149,95,118,189,28,105,130,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(83,10,175,100,90,55,129,100,118,189,28,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759720125737'] = function(block) {
  let code = "base_action.action('2右转')\n";
  return code;
}


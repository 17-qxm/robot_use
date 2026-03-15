Blockly.Blocks['1759719881681'] = {
  init: function() {
    this.jsonInit({
      "type": "1759719881681",
      "message0": "1左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759719881681'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,95,71,55,109,95,135,190,40,105,89,145,51,105,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(25)\nMOTOmove19(67,10,165,100,91,55,129,100,135,190,40,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759719881681'] = function(block) {
  let code = "base_action.action('1左转')\n";
  return code;
}


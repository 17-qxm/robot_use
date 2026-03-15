Blockly.Blocks['1764589357642'] = {
  init: function() {
    this.jsonInit({
      "type": "1764589357642",
      "message0": "左22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1764589357642'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,140,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(150)\nMOTOmove19(10,60,183,100,93,55,124,100,190,145,19,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1764589357642'] = function(block) {
  let code = "base_action.action('左22')\n";
  return code;
}


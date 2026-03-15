Blockly.Blocks['1759556860619'] = {
  init: function() {
    this.jsonInit({
      "type": "1759556860619",
      "message0": "1左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759556860619'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,20,179,79,119,150,59,75,155,173,20,137,80,60,132,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(51,20,179,40,40,40,40,40,155,173,20,40,40,85,131,99)\nMOTOsetspeed(30)\nMOTOmove19(51,20,179,98,121,99,107,98,155,173,20,102,77,102,90,101,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759556860619'] = function(block) {
  let code = "base_action.action('1左')\n";
  return code;
}


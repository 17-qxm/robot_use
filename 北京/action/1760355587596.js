Blockly.Blocks['1760355587596'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355587596",
      "message0": "33",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355587596'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,127,119,92,98,125,185,20,102,71,74,107,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760355587596'] = function(block) {
  let code = "base_action.action('33')\n";
  return code;
}


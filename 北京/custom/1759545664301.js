Blockly.Blocks['1759545664301'] = {
  init: function() {
    this.jsonInit({
      "type": "1759545664301",
      "message0": "左1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759545664301'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(51,16,173,79,119,150,59,75,161,169,30,142,93,82,120,110,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(80)\nMOTOmove19(51,16,173,99,96,102,81,99,161,169,30,102,103,97,116,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1759545664301'] = function(block) {
  let code = "base_action.action('左1')\n";
  return code;
}


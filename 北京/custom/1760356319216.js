Blockly.Blocks['1760356319216'] = {
  init: function() {
    this.jsonInit({
      "type": "1760356319216",
      "message0": "288",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760356319216'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,93,119,150,59,94,125,185,20,143,86,83,117,111,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,98,96,121,69,97,125,185,20,101,103,76,133,99,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760356319216'] = function(block) {
  let code = "base_action.action('288')\n";
  return code;
}


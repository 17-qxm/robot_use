Blockly.Blocks['1760355077352'] = {
  init: function() {
    this.jsonInit({
      "type": "1760355077352",
      "message0": "000",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760355077352'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,142,93,82,120,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(75,15,180,79,119,150,59,75,125,185,20,116,92,50,155,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,100,93,60,125,100,125,185,20,100,106,137,76,100,0,0,100)\nMOTOwait()\nDelayMs(200)\n";
  return code;
}

Blockly.Python['1760355077352'] = function(block) {
  let code = "base_action.action('000')\n";
  return code;
}


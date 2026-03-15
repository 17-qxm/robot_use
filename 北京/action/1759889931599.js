Blockly.Blocks['1759889931599'] = {
  init: function() {
    this.jsonInit({
      "type": "1759889931599",
      "message0": "两块右滑111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1759889931599'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(40)\nMOTOmove19(75,15,180,80,113,116,84,90,125,185,20,132,91,50,153,121,0,0,100)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(75,15,180,99,92,115,70,98,125,185,20,102,109,85,131,99,0,0,100)\nMOTOwait()\nDelayMs(60)\n";
  return code;
}

Blockly.Python['1759889931599'] = function(block) {
  let code = "base_action.action('两块右滑111')\n";
  return code;
}


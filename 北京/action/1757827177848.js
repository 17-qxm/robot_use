Blockly.Blocks['1757827177848'] = {
  init: function() {
    this.jsonInit({
      "type": "1757827177848",
      "message0": "左",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757827177848'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,51,125,150,64,68,118,189,28,133,95,92,115,120,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,10,175,100,110,90,109,100,118,189,28,100,90,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757827177848'] = function(block) {
  let code = "base_action.action('左')\n";
  return code;
}


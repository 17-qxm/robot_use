Blockly.Blocks['1760696757340'] = {
  init: function() {
    this.jsonInit({
      "type": "1760696757340",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760696757340'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,51,112,96,103,76,190,152,14,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,62,112,96,95,61,190,152,14,111,89,50,162,103,0,0,100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,100,113,90,109,100,190,152,14,100,87,111,91,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760696757340'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}


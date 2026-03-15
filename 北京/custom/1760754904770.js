Blockly.Blocks['1760754904770'] = {
  init: function() {
    this.jsonInit({
      "type": "1760754904770",
      "message0": "右c",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1760754904770'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(10,62,185,51,112,96,103,76,190,138,18,135,91,57,149,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(10,62,185,62,112,96,95,61,190,138,18,111,89,50,162,103,0,0,100)\nMOTOwait()\nMOTOrigid16(10,62,185,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(35)\nMOTOmove19(10,62,185,92,106,150,40,94,190,138,18,100,94,50,157,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1760754904770'] = function(block) {
  let code = "base_action.action('右c')\n";
  return code;
}


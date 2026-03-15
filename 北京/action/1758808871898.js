Blockly.Blocks['1758808871898'] = {
  init: function() {
    this.jsonInit({
      "type": "1758808871898",
      "message0": "2201",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758808871898'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,155,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,150,95,95,120,170,99,99,141,190,70,92,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,150,150,40,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,99,89,150,38,99,120,170,99,99,130,170,70,93,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758808871898'] = function(block) {
  let code = "base_action.action('2201')\n";
  return code;
}


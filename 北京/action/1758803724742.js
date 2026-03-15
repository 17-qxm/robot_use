Blockly.Blocks['1758803724742'] = {
  init: function() {
    this.jsonInit({
      "type": "1758803724742",
      "message0": "102",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758803724742'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,110,120,170,99,105,106,144,75,117,0,0,99)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,156,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,98,150,45,107,120,170,99,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,100,125,128,107,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(79,29,100,102,112,150,50,114,120,170,98,100,168,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,102,113,150,49,110,120,156,98,100,154,133,57,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,93,55,122,100,120,170,99,100,106,144,75,100,0,0,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758803724742'] = function(block) {
  let code = "base_action.action('102')\n";
  return code;
}


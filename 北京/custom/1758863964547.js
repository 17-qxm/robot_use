Blockly.Blocks['1758863964547'] = {
  init: function() {
    this.jsonInit({
      "type": "1758863964547",
      "message0": "后退下台阶",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758863964547'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,112,110,25,156,110,120,170,99,113,80,161,47,109,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,100,93,55,122,109,120,170,99,100,98,50,142,98,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,102,117,144,53,109,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(79,29,100,102,117,150,45,110,120,170,99,100,179,154,56,97,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,112,100,100,150,46,110,120,170,99,101,190,155,55,99,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,100,100,160,132,128,95,120,170,99,102,158,175,85,100,0,0,99)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,100,160,132,128,95,120,160,65,102,158,175,85,100,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,29,55,96,140,150,41,95,120,160,65,94,160,190,70,90,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(79,29,55,77,112,150,41,96,120,160,65,94,160,190,70,87,0,0,99)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,29,55,87,89,150,38,99,120,160,65,90,140,172,71,88,0,0,99)\nMOTOwait()\nMOTOsetspeed(27)\nMOTOmove19(79,29,100,98,89,150,38,99,120,170,99,90,140,172,71,88,0,0,99)\nMOTOwait()\nDelayMs(70)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(79,29,100,95,93,55,122,95,120,170,99,100,106,144,75,95,0,0,99)\nMOTOwait()\nDelayMs(10)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758863964547'] = function(block) {
  let code = "base_action.action('后退下台阶')\n";
  return code;
}


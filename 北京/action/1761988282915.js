Blockly.Blocks['1761988282915'] = {
  init: function() {
    this.jsonInit({
      "type": "1761988282915",
      "message0": "反手抢高台",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761988282915'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(110,139,10,100,93,55,124,100,110,52,190,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,100,93,145,38,100,110,52,190,100,106,55,162,100,0,0,100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(10)\nMOTOmove19(110,139,10,57,150,150,48,60,110,52,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,154,10,57,150,150,48,60,60,36,190,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,57,150,150,48,60,60,36,99,153,48,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(150,153,107,63,119,150,49,64,60,36,99,139,55,50,127,136,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,190,64,109,150,50,62,59,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87,153,190,64,109,150,50,62,108,36,10,147,89,50,151,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(150,153,107,98,99,146,38,98,60,36,99,102,98,52,163,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761988282915'] = function(block) {
  let code = "base_action.action('反手抢高台')\n";
  return code;
}


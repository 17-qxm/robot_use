Blockly.Blocks['1757557294461'] = {
  init: function() {
    this.jsonInit({
      "type": "1757557294461",
      "message0": "2个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1757557294461'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,90,170,55,158,140,55,60,100,110,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(75,20,170,55,158,140,55,60,125,180,30,145,42,60,145,140,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,50,138,150,55,60,125,180,30,150,62,50,145,140,0,0,100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(150)\nMOTOmove19(75,20,170,70,128,145,75,70,125,180,30,130,72,55,125,130,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,100,80,80,80,30,100,100,100,100,80,80,80,30)\nMOTOsetspeed(150)\nMOTOmove19(75,15,170,98,142,145,77,98,125,185,35,102,58,55,123,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(75,15,170,100,93,55,124,100,125,185,35,100,106,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1757557294461'] = function(block) {
  let code = "base_action.action('2个')\n";
  return code;
}


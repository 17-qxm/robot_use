Blockly.Blocks['1723801156024'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801156024",
      "message0": "BoxRight12",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801156024'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,130,100,138,187,10,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,105,93,54,130,105,138,187,10,110,102,136,72,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,94,93,54,130,100,138,187,10,106,107,146,70,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(54,15,190,91,93,54,130,88,138,187,10,102,107,146,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,97,95,61,130,91,138,187,10,102,107,146,70,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,97,95,61,130,91,138,187,10,102,107,146,70,98,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,100,93,55,130,100,138,187,10,100,107,145,70,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801156024'] = function(block) {
  let code = "base_action.action('BoxRight12')\n";
  return code;
}


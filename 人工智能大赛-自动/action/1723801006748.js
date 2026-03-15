Blockly.Blocks['1723801006748'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801006748",
      "message0": "BoxTurnR12",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801006748'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(54,15,190,99,83,55,118,97,138,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,55,118,93,138,187,10,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,65,119,96,138,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,88,55,124,100,138,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801006748'] = function(block) {
  let code = "base_action.action('BoxTurnR12')\n";
  return code;
}


Blockly.Blocks['1723800950121'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800950121",
      "message0": "BoxTurnL12",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800950121'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(54,15,190,96,97,55,130,96,138,187,10,101,117,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,96,97,55,130,103,138,187,10,101,117,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,88,55,124,100,138,187,10,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800950121'] = function(block) {
  let code = "base_action.action('BoxTurnL12')\n";
  return code;
}


Blockly.Blocks['1723800363427'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800363427",
      "message0": "BoxRightTurn1s2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800363427'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(54,15,190,95,123,55,154,95,138,187,10,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,95,123,55,154,93,138,187,10,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1723800363427'] = function(block) {
  let code = "base_action.action('BoxRightTurn1s2')\n";
  return code;
}


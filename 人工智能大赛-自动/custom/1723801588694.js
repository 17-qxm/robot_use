Blockly.Blocks['1723801588694'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801588694",
      "message0": "LiftCubeUp2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801588694'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,98,102,77,115,100,138,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801588694'] = function(block) {
  let code = "base_action.action('LiftCubeUp2')\n";
  return code;
}


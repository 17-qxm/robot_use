Blockly.Blocks['1723800463123'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800463123",
      "message0": "BoxBack1Run2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800463123'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(54,15,190,85,91,50,128,88,138,187,10,95,117,168,62,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(54,15,190,88,91,48,129,88,138,187,10,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,86,90,95,84,90,138,187,10,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,88,84,53,115,85,138,187,10,93,104,144,78,91,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,106,93,53,124,113,138,187,10,114,102,154,55,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,106,93,53,129,113,138,187,10,114,95,105,100,110,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50)\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,104,83,32,140,111,138,187,10,115,111,150,77,112,0,0,100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800463123'] = function(block) {
  let code = "base_action.action('BoxBack1Run2')\n";
  return code;
}


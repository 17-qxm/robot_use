Blockly.Blocks['1680745722093'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745722093",
      "message0": "Left02move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745722093'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 96, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 50, 100, 85, 93, 54, 124, 85, 120, 170, 100, 94, 107, 146, 76, 94, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745722093'] = function(block) {
  let code = "base_action.action('Left02move')\n";
  return code;
}

Blockly.Blocks['1680753648499'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753648499",
      "message0": "Left3move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753648499'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753648499'] = function(block) {
  let code = "base_action.action('Left3move')\n";
  return code;
}

Blockly.Blocks['1680753447030'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753447030",
      "message0": "GrabCube",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753447030'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 56, 115, 65, 127, 150, 51, 66, 118, 141, 101, 142, 81, 50, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(88, 73, 116, 57, 142, 150, 48, 66, 119, 126, 83, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 49, 165, 47, 154, 142, 47, 62, 120, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69, 16, 163, 47, 154, 142, 47, 62, 122, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 17, 163, 47, 154, 142, 47, 62, 136, 186, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 57, 140, 150, 69, 62, 136, 186, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 95, 105, 150, 39, 99, 136, 186, 40, 98, 99, 50, 163, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 97, 96, 150, 39, 99, 136, 186, 40, 99, 107, 50, 163, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 17, 163, 98, 102, 77, 115, 100, 136, 186, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753447030'] = function(block) {
  let code = "base_action.action('GrabCube')\n";
  return code;
}

Blockly.Blocks['1723799902768'] = {
  init: function() {
    this.jsonInit({
      "type": "1723799902768",
      "message0": "GrabCube2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723799902768'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,56,115,65,127,150,51,66,118,141,101,142,81,50,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(88,73,116,57,142,150,48,66,119,126,83,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68,49,165,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(69,16,163,47,154,142,47,62,122,190,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,17,163,47,154,142,47,62,140,186,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,17,163,57,140,150,69,62,140,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,17,163,95,105,150,39,99,140,186,40,98,99,50,163,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,17,163,97,96,150,39,99,140,186,40,99,107,50,163,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,17,163,98,102,77,115,100,140,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723799902768'] = function(block) {
  let code = "base_action.action('GrabCube2')\n";
  return code;
}

Blockly.Blocks['1680745916303'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745916303",
      "message0": "BoxRightTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745916303'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745916303'] = function(block) {
  let code = "base_action.action('BoxRightTurn1s')\n";
  return code;
}

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

Blockly.Blocks['1680752171445'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752171445",
      "message0": "BoxBack1Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752171445'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 85, 91, 50, 128, 88, 132, 187, 10, 95, 117, 168, 62, 90, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 88, 91, 48, 129, 88, 132, 187, 10, 94, 107, 146, 76, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 86, 90, 95, 84, 90, 132, 187, 10, 94, 107, 146, 78, 87, 120, 40, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 88, 84, 53, 115, 85, 132, 187, 10, 93, 104, 144, 78, 91, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 53, 124, 113, 132, 187, 10, 114, 102, 154, 55, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 95, 105, 100, 110, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 104, 83, 32, 140, 111, 132, 187, 10, 115, 111, 150, 77, 112, 120, 40, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 120, 40, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752171445'] = function(block) {
  let code = "base_action.action('BoxBack1Run')\n";
  return code;
}

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

Blockly.Blocks['1680752248086'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752248086",
      "message0": "BoxForward02",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752248086'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 90, 91, 48, 134, 88, 140, 190, 25, 94, 109, 146, 71, 94, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 113, 85, 115, 90, 140, 190, 25, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 86, 121, 37, 161, 88, 140, 190, 25, 94, 109, 146, 72, 89, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55, 10, 179, 107, 98, 56, 129, 111, 140, 190, 25, 112, 131, 155, 88, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 106, 93, 54, 128, 113, 140, 190, 25, 114, 77, 105, 85, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55, 10, 179, 100, 93, 55, 124, 100, 140, 190, 25, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752248086'] = function(block) {
  let code = "base_action.action('BoxForward02')\n";
  return code;
}

Blockly.Blocks['1680745652860'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745652860",
      "message0": "Back1Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745652860'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 84, 53, 115, 85, 120, 165, 110, 93, 104, 144, 78, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 113, 120, 165, 110, 114, 102, 154, 55, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 93, 53, 124, 113, 120, 165, 90, 114, 95, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 104, 83, 32, 135, 111, 120, 165, 100, 115, 111, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745652860'] = function(block) {
  let code = "base_action.action('Back1Run')\n";
  return code;
}

Blockly.Blocks['1680745659863'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745659863",
      "message0": "Box_move_left",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745659863'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 85, 112, 90, 110, 90, 132, 187, 10, 110, 107, 146, 71, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 95, 93, 53, 126, 105, 132, 187, 10, 120, 116, 160, 63, 130, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 54, 129, 98, 132, 187, 10, 103, 107, 146, 71, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745659863'] = function(block) {
  let code = "base_action.action('Box_move_left')\n";
  return code;
}

Blockly.Blocks['1723800606389'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800606389",
      "message0": "Box_move_left2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800606389'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,85,112,90,110,90,138,187,10,110,107,146,71,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,95,93,53,126,105,138,187,10,120,116,160,63,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,54,129,98,138,187,10,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800606389'] = function(block) {
  let code = "base_action.action('Box_move_left2')\n";
  return code;
}

Blockly.Blocks['1680745663962'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745663962",
      "message0": "Box_move_right",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745663962'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(65)\nMOTOmove19(60, 15, 190, 90, 93, 54, 129, 100, 132, 187, 10, 115, 88, 110, 90, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(60, 15, 190, 80, 84, 40, 137, 70, 132, 187, 10, 105, 107, 147, 74, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 97, 93, 54, 129, 95, 132, 187, 10, 100, 107, 146, 71, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 95, 132, 187, 10, 100, 107, 145, 71, 105, 128, 71, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745663962'] = function(block) {
  let code = "base_action.action('Box_move_right')\n";
  return code;
}

Blockly.Blocks['1723800672737'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800672737",
      "message0": "Box_move_right2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800672737'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,90,93,54,129,100,138,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,80,84,40,137,70,138,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,97,93,54,129,95,138,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800672737'] = function(block) {
  let code = "base_action.action('Box_move_right2')\n";
  return code;
}

Blockly.Blocks['1680745673175'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745673175",
      "message0": "BoxBack2-1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745673175'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 92, 75, 55, 106, 95, 132, 187, 10, 95, 107, 145, 66, 93, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 105, 83, 55, 124, 107, 132, 187, 10, 108, 94, 141, 56, 115, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745673175'] = function(block) {
  let code = "base_action.action('BoxBack2-1')\n";
  return code;
}

Blockly.Blocks['1723800771260'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800771260",
      "message0": "BoxBack2-12",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800771260'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,93,55,130,100,138,187,10,100,107,145,70,100,0,0,100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,105,93,55,130,108,138,187,10,111,102,136,70,112,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,105,93,55,134,107,138,187,10,108,125,145,94,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(54,15,190,92,106,55,144,85,138,187,10,95,117,145,76,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,92,75,55,106,95,138,187,10,95,107,145,66,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(54,15,190,105,83,55,124,107,138,187,10,108,94,141,56,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,100,93,55,130,98,138,187,10,100,107,145,70,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800771260'] = function(block) {
  let code = "base_action.action('BoxBack2-12')\n";
  return code;
}

Blockly.Blocks['1680745682571'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745682571",
      "message0": "BoxLeft1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745682571'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745682571'] = function(block) {
  let code = "base_action.action('BoxLeft1')\n";
  return code;
}

Blockly.Blocks['1723800819829'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800819829",
      "message0": "BoxLeft12",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800819829'] = function(block) {
  let code = "MOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,128,100,138,187,10,100,107,145,72,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,90,98,64,128,90,138,187,10,95,107,146,72,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,95,93,54,128,90,138,187,10,105,107,146,72,100,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(54,15,190,98,93,54,128,102,138,187,10,109,107,146,72,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,98,94,54,128,102,138,187,10,103,105,139,77,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,98,93,54,128,102,138,187,10,103,105,139,77,109,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(54,15,190,100,93,55,128,100,138,187,10,100,107,145,72,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723800819829'] = function(block) {
  let code = "base_action.action('BoxLeft12')\n";
  return code;
}

Blockly.Blocks['1680745688797'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745688797",
      "message0": "BoxLeftTurn1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745688797'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 95, 132, 187, 10, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 93, 132, 187, 10, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1680745688797'] = function(block) {
  let code = "base_action.action('BoxLeftTurn1s')\n";
  return code;
}

Blockly.Blocks['1723800905762'] = {
  init: function() {
    this.jsonInit({
      "type": "1723800905762",
      "message0": "BoxLeftTurn1s2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723800905762'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(54,15,190,95,63,55,94,95,138,187,10,105,77,145,46,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,95,63,55,94,93,138,187,10,105,77,145,46,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1723800905762'] = function(block) {
  let code = "base_action.action('BoxLeftTurn1s2')\n";
  return code;
}

Blockly.Blocks['1680745704642'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745704642",
      "message0": "BoxTurnL1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745704642'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 101, 117, 145, 82, 103, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745704642'] = function(block) {
  let code = "base_action.action('BoxTurnL1')\n";
  return code;
}

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

Blockly.Blocks['1680745711207'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745711207",
      "message0": "BoxTurnR1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745711207'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 97, 132, 187, 10, 104, 103, 145, 70, 104, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 93, 132, 187, 10, 104, 103, 145, 70, 97, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 65, 119, 96, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 112, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745711207'] = function(block) {
  let code = "base_action.action('BoxTurnR1')\n";
  return code;
}

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

Blockly.Blocks['1680745718471'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745718471",
      "message0": "Forwalk01",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745718471'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70,0,0,0)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,60,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 90, 86, 99, 37, 147, 88, 120, 165, 90, 90, 121, 168, 63, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 80, 98, 99, 37, 147, 98, 120, 165, 80, 100, 121, 168, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 108, 88, 54, 124, 108, 120, 165, 100, 110, 135, 158, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 105, 83, 32, 135, 110, 120, 165, 100, 115, 109, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745718471'] = function(block) {
  let code = "base_action.action('Forwalk01')\n";
  return code;
}

Blockly.Blocks['1680745774187'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745774187",
      "message0": "PutCubeDown",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745774187'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 99, 90, 150, 38, 100, 132, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 14, 148, 99, 122, 150, 39, 100, 134, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 14, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745774187'] = function(block) {
  let code = "base_action.action('PutCubeDown')\n";
  return code;
}

Blockly.Blocks['1680745892513'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745892513",
      "message0": "BoxRight1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745892513'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745892513'] = function(block) {
  let code = "base_action.action('BoxRight1')\n";
  return code;
}

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

Blockly.Blocks['1680752259809'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752259809",
      "message0": "BoxForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752259809'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752259809'] = function(block) {
  let code = "base_action.action('BoxForward1s')\n";
  return code;
}

Blockly.Blocks['1723801266164'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801266164",
      "message0": "BoxForward1s2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801266164'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801266164'] = function(block) {
  let code = "base_action.action('BoxForward1s2')\n";
  return code;
}

Blockly.Blocks['1680752263368'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752263368",
      "message0": "BoxForward2s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752263368'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752263368'] = function(block) {
  let code = "base_action.action('BoxForward2s')\n";
  return code;
}

Blockly.Blocks['1723801379309'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801379309",
      "message0": "BoxForward2s2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801379309'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801379309'] = function(block) {
  let code = "base_action.action('BoxForward2s2')\n";
  return code;
}

Blockly.Blocks['1680752266437'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752266437",
      "message0": "BoxForward3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752266437'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 54, 122, 90, 132, 187, 10, 98, 117, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 105, 99, 103, 100, 132, 187, 10, 101, 119, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 74, 121, 100, 132, 187, 10, 101, 124, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 100, 61, 126, 104, 132, 187, 10, 101, 110, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(60, 15, 190, 99, 81, 66, 111, 102, 132, 187, 10, 101, 95, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 76, 63, 111, 100, 132, 187, 10, 101, 100, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(60, 15, 190, 99, 90, 73, 106, 100, 132, 187, 10, 101, 100, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 96, 85, 70, 110, 100, 132, 187, 10, 102, 119, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752266437'] = function(block) {
  let code = "base_action.action('BoxForward3s')\n";
  return code;
}

Blockly.Blocks['1723801496283'] = {
  init: function() {
    this.jsonInit({
      "type": "1723801496283",
      "message0": "BoxForward3s2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1723801496283'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1723801496283'] = function(block) {
  let code = "base_action.action('BoxForward3s2')\n";
  return code;
}

Blockly.Blocks['1680752269543'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752269543",
      "message0": "FastForward1s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752269543'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752269543'] = function(block) {
  let code = "base_action.action('FastForward1s')\n";
  return code;
}

Blockly.Blocks['1680752272439'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752272439",
      "message0": "FastForward2s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752272439'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752272439'] = function(block) {
  let code = "base_action.action('FastForward2s')\n";
  return code;
}

Blockly.Blocks['1680752275114'] = {
  init: function() {
    this.jsonInit({
      "type": "1680752275114",
      "message0": "FastForward3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680752275114'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80, 30, 80, 96, 95, 70, 110, 100, 120, 170, 80, 102, 109, 146, 75, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680752275114'] = function(block) {
  let code = "base_action.action('FastForward3s')\n";
  return code;
}

Blockly.Blocks['1680753423868'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753423868",
      "message0": "Right3move",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753423868'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOmove19(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753423868'] = function(block) {
  let code = "base_action.action('Right3move')\n";
  return code;
}

Blockly.Blocks['1680753457326'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753457326",
      "message0": "LiftCubeUp",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753457326'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 98, 102, 77, 115, 100, 132, 187, 10, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753457326'] = function(block) {
  let code = "base_action.action('LiftCubeUp')\n";
  return code;
}

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

Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_slow_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_forward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_quick_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_backward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_BACKWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,55,65,90,80,50,25,25,25,55,65,90,80,50)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 55, 124, 89, 120, 170, 100, 98, 107, 145, 78, 93)',
    'MOTOwait()',
    'MOTOsetspeed(58)',
    'MOTOmove16(80, 30, 120, 99, 113, 100, 99, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 120, 99, 95, 70, 109, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 120, 99, 90, 60, 117, 105, 120, 170, 120, 101, 95, 118, 91, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 87, 100, 101, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 105, 130, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 105, 82, 109, 101, 120, 170, 80, 101, 110, 140, 83, 95)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 120, 97, 113, 100, 99, 100, 120, 170, 120, 101, 103, 145, 78, 96)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 97, 120, 170, 100, 100, 107, 145, 76, 103)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_BACKWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_a_slow_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_backward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_BACKWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 90, 95, 84, 90, 120, 165, 90, 94, 107, 146, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 88, 71, 53, 105, 85, 120, 165, 110, 93, 100, 144, 79, 91)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 106, 93, 53, 124, 111, 120, 165, 110, 114, 87, 163, 42, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 106, 95, 53, 122, 113, 120, 165, 90, 114, 110, 105, 114, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 121, 109, 120, 165, 90, 112, 129, 147, 95, 115)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 158, 90, 120, 165, 90, 94, 107, 147, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_BACKWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1752758058436'] = {
  init: function() {
    this.jsonInit({
      "type": "1752758058436",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752758058436'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752758058436'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1680745801803'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745801803",
      "message0": "turn003R",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745801803'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 97, 120, 170, 115, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 93, 120, 170, 115, 104, 98, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 98, 65, 119, 96, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745801803'] = function(block) {
  let code = "base_action.action('turn003R')\n";
  return code;
}

Blockly.Blocks['1752758854232'] = {
  init: function() {
    this.jsonInit({
      "type": "1752758854232",
      "message0": "boxforword",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752758854232'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(80,15,190,99,93,54,122,90,120,187,10,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,115,99,103,100,120,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,74,121,100,120,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,61,126,104,120,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,91,66,111,102,120,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,86,63,111,100,120,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,100,73,106,100,120,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,115,99,103,100,120,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,74,121,100,120,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,61,126,104,120,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,91,66,111,102,120,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,86,63,111,100,120,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,100,73,106,100,120,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80,15,190,96,95,70,110,100,120,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80,15,190,100,93,55,124,100,120,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752758854232'] = function(block) {
  let code = "base_action.action('boxforword')\n";
  return code;
}

Blockly.Blocks['1752758882678'] = {
  init: function() {
    this.jsonInit({
      "type": "1752758882678",
      "message0": "BoxForword22s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752758882678'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(80,15,190,99,93,54,122,90,120,187,10,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,115,99,103,100,120,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,74,121,100,120,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,61,126,104,120,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,91,66,111,102,120,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,86,63,111,100,120,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,100,73,106,100,120,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,115,99,103,100,120,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,74,121,100,120,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,110,61,126,104,120,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(80,15,190,99,91,66,111,102,120,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,86,63,111,100,120,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(80,15,190,99,100,73,106,100,120,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(80,15,190,96,95,70,110,100,120,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(80,15,190,100,93,55,124,100,120,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752758882678'] = function(block) {
  let code = "base_action.action('BoxForword22s')\n";
  return code;
}

Blockly.Blocks['1752759286224'] = {
  init: function() {
    this.jsonInit({
      "type": "1752759286224",
      "message0": "2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752759286224'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,99,93,54,122,90,138,187,10,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,96,95,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752759286224'] = function(block) {
  let code = "base_action.action('2')\n";
  return code;
}

Blockly.Blocks['1752759652575'] = {
  init: function() {
    this.jsonInit({
      "type": "1752759652575",
      "message0": "3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752759652575'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,99,93,54,122,90,138,187,10,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,96,95,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752759652575'] = function(block) {
  let code = "base_action.action('3')\n";
  return code;
}

Blockly.Blocks['1752759869790'] = {
  init: function() {
    this.jsonInit({
      "type": "1752759869790",
      "message0": "22",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752759869790'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(54,15,190,90,93,54,129,100,138,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,80,84,40,137,70,138,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,97,93,54,129,95,138,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752759869790'] = function(block) {
  let code = "base_action.action('22')\n";
  return code;
}

Blockly.Blocks['1752760100038'] = {
  init: function() {
    this.jsonInit({
      "type": "1752760100038",
      "message0": "BoxForward1s3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752760100038'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752760100038'] = function(block) {
  let code = "base_action.action('BoxForward1s3')\n";
  return code;
}

Blockly.Blocks['1752760131517'] = {
  init: function() {
    this.jsonInit({
      "type": "1752760131517",
      "message0": "BoxForward2s3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752760131517'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,99,93,54,122,90,138,187,10,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,96,95,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752760131517'] = function(block) {
  let code = "base_action.action('BoxForward2s3')\n";
  return code;
}

Blockly.Blocks['1752760308205'] = {
  init: function() {
    this.jsonInit({
      "type": "1752760308205",
      "message0": "BoxForward3s3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752760308205'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752760308205'] = function(block) {
  let code = "base_action.action('BoxForward3s3')\n";
  return code;
}

Blockly.Blocks['1752760341939'] = {
  init: function() {
    this.jsonInit({
      "type": "1752760341939",
      "message0": "Box_move_right3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752760341939'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(50)\nMOTOmove19(54,15,190,90,93,54,129,100,138,187,10,115,88,110,90,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,80,84,40,137,70,138,187,10,105,107,147,74,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,97,93,54,129,95,138,187,10,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,95,138,187,10,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(54,15,190,100,93,55,129,100,138,187,10,100,107,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752760341939'] = function(block) {
  let code = "base_action.action('Box_move_right3')\n";
  return code;
}

Blockly.Blocks['1752761566469'] = {
  init: function() {
    this.jsonInit({
      "type": "1752761566469",
      "message0": "787",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752761566469'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,115,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,74,121,100,138,187,10,101,114,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,110,61,126,104,138,187,10,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,91,66,111,102,138,187,10,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,86,63,111,100,138,187,10,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,73,106,100,138,187,10,101,90,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,96,95,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752761566469'] = function(block) {
  let code = "base_action.action('787')\n";
  return code;
}

Blockly.Blocks['1752761742320'] = {
  init: function() {
    this.jsonInit({
      "type": "1752761742320",
      "message0": "223",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752761742320'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(75)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,100,83,55,124,100,138,187,10,100,117,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752761742320'] = function(block) {
  let code = "base_action.action('223')\n";
  return code;
}

Blockly.Blocks['1752762115495'] = {
  init: function() {
    this.jsonInit({
      "type": "1752762115495",
      "message0": "321",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752762115495'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,109,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,83,55,124,100,138,187,10,100,117,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752762115495'] = function(block) {
  let code = "base_action.action('321')\n";
  return code;
}

Blockly.Blocks['1752762481759'] = {
  init: function() {
    this.jsonInit({
      "type": "1752762481759",
      "message0": "123",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752762481759'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752762481759'] = function(block) {
  let code = "base_action.action('123')\n";
  return code;
}

Blockly.Blocks['1752810664406'] = {
  init: function() {
    this.jsonInit({
      "type": "1752810664406",
      "message0": "33",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752810664406'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,104,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,98,81,66,111,105,138,187,10,102,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752810664406'] = function(block) {
  let code = "base_action.action('33')\n";
  return code;
}

Blockly.Blocks['1752814228214'] = {
  init: function() {
    this.jsonInit({
      "type": "1752814228214",
      "message0": "BoxForwaard2s3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752814228214'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,105,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 21\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,103,100,61,126,108,138,187,10,105,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,102,81,66,111,105,138,187,10,105,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,83,73,106,100,138,187,10,101,117,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,105,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 21\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,103,100,61,126,108,138,187,10,105,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,102,81,66,111,105,138,187,10,105,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,83,73,106,100,138,187,10,101,117,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 21\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,103,100,61,126,108,138,187,10,105,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,102,81,66,111,105,138,187,10,105,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,83,73,106,100,138,187,10,101,117,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752814228214'] = function(block) {
  let code = "base_action.action('BoxForwaard2s3')\n";
  return code;
}

Blockly.Blocks['1752824216971'] = {
  init: function() {
    this.jsonInit({
      "type": "1752824216971",
      "message0": "BoxForward2s3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752824216971'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,105,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 21\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,103,100,61,126,108,138,187,10,105,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,102,81,66,111,105,138,187,10,105,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,83,73,106,100,138,187,10,101,117,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 11\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,94,105,99,103,100,138,187,10,96,119,134,89,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,105,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\n\n\n-- 21\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,103,100,61,126,108,138,187,10,105,110,127,94,100,0,0,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,102,81,66,111,105,138,187,10,105,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,83,73,106,100,138,187,10,101,117,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752824216971'] = function(block) {
  let code = "base_action.action('BoxForward2s3')\n";
  return code;
}

Blockly.Blocks['Take_three_quick_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_quick_steps_forward',
      message0: '%{BKY_TAKE_THREE_QUICK_STEPS_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_quick_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_quick_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_QUICK_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['Take_three_slow_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_slow_steps_forward',
      message0: '%{BKY_TAKE_THREE_SLOW_STEPS_FORWARD}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_slow_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_slow_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_SLOW_STEPS_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['1752825264663'] = {
  init: function() {
    this.jsonInit({
      "type": "1752825264663",
      "message0": "qwqwqw",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752825264663'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,100,90,91,48,129,88,120,165,100,94,107,146,76,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,125,95,110,90,120,165,90,94,107,146,76,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,113,37,156,88,120,165,90,94,107,146,77,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,90,107,100,56,124,111,120,165,90,112,129,155,93,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,95,54,123,113,120,165,110,114,75,105,90,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,93,54,123,111,120,165,110,114,87,163,44,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,88,71,45,107,90,120,165,110,93,100,144,76,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,125,95,110,90,120,165,90,94,107,146,76,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,113,37,156,88,120,165,90,94,107,146,77,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,90,107,100,56,124,111,120,165,90,112,129,155,93,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,95,54,123,113,120,165,110,114,75,105,90,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,93,54,123,111,120,165,110,114,87,163,44,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,88,71,45,107,90,120,165,110,93,100,144,76,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,125,95,110,90,120,165,90,94,107,146,76,87,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,113,37,156,88,120,165,90,94,107,146,77,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,90,107,100,56,124,111,120,165,90,112,129,155,93,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,95,54,123,113,120,165,110,114,75,105,90,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,110,106,93,54,123,111,120,165,110,114,87,163,44,112,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,110,88,71,45,107,90,120,165,110,93,100,144,76,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,90,86,110,95,100,90,120,165,90,94,107,146,77,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,35,100,90,91,48,129,88,120,165,100,94,107,146,76,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752825264663'] = function(block) {
  let code = "base_action.action('qwqwqw')\n";
  return code;
}

Blockly.Blocks['1752825891804'] = {
  init: function() {
    this.jsonInit({
      "type": "1752825891804",
      "message0": "qeqeeq",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752825891804'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,81,66,111,102,138,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752825891804'] = function(block) {
  let code = "base_action.action('qeqeeq')\n";
  return code;
}

Blockly.Blocks['1754879437319'] = {
  init: function() {
    this.jsonInit({
      "type": "1754879437319",
      "message0": "一块前进3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1754879437319'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(67, 10, 165, 90, 91, 48, 134, 88, 135, 190, 40, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 121, 37, 161, 88, 135, 190, 40, 94, 109, 146, 72, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 107, 98, 56, 129, 111, 135, 190, 40, 112, 131, 155, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 93, 54, 128, 113, 135, 190, 40, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 106, 91, 54, 128, 111, 135, 190, 40, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(67, 10, 165, 88, 69, 45, 112, 90, 135, 190, 40, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 86, 123, 95, 115, 90, 135, 190, 40, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(67, 10, 165, 100, 91, 55, 129, 100, 135, 190, 40, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1754879437319'] = function(block) {
  let code = "base_action.action('一块前进3')\n";
  return code;
}

Blockly.Blocks['1754882971434'] = {
  init: function() {
    this.jsonInit({
      "type": "1754882971434",
      "message0": "1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1754882971434'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(68,10,188,100,91,55,129,100,132,189,17,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,123,95,115,90,132,189,17,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,134,13,190,87,132,189,17,88,74,94,99,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(68,10,188,107,98,56,129,111,132,189,17,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,106,93,54,128,113,132,189,17,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,106,91,54,128,111,132,189,17,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(68,10,188,88,69,45,112,90,132,189,17,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(68,10,188,86,123,95,115,90,132,189,17,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68,10,188,100,91,55,129,100,132,189,17,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1754882971434'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

Blockly.Blocks['1758880004669'] = {
  init: function() {
    this.jsonInit({
      "type": "1758880004669",
      "message0": "321",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758880004669'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(14,52,190,99,120,80,120,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,105,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,76,63,111,100,190,152,14,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,85,70,110,100,190,152,14,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758880004669'] = function(block) {
  let code = "base_action.action('321')\n";
  return code;
}

Blockly.Blocks['1758880685714'] = {
  init: function() {
    this.jsonInit({
      "type": "1758880685714",
      "message0": "12",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758880685714'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(54,15,190,99,83,54,122,90,138,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(54,15,190,99,105,99,103,100,138,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,74,121,100,138,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,100,61,126,104,138,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,76,63,111,100,138,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(54,15,190,99,90,73,106,100,138,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(54,15,190,96,85,70,110,100,138,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(54,15,190,100,93,55,124,100,138,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758880685714'] = function(block) {
  let code = "base_action.action('12')\n";
  return code;
}

Blockly.Blocks['1758881547885'] = {
  init: function() {
    this.jsonInit({
      "type": "1758881547885",
      "message0": "1234",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758881547885'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(14,52,190,98,131,90,125,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,74,121,100,190,152,14,101,110,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,85,70,110,100,190,152,14,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758881547885'] = function(block) {
  let code = "base_action.action('1234')\n";
  return code;
}

Blockly.Blocks['1758882538978'] = {
  init: function() {
    this.jsonInit({
      "type": "1758882538978",
      "message0": "9",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758882538978'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(14,52,190,98,131,90,125,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,74,121,100,190,152,14,101,110,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,85,70,110,100,190,152,14,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758882538978'] = function(block) {
  let code = "base_action.action('9')\n";
  return code;
}

Blockly.Blocks['1758890262517'] = {
  init: function() {
    this.jsonInit({
      "type": "1758890262517",
      "message0": "快步前进多步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758890262517'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(14,52,190,99,115,70,130,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,85,63,111,100,190,152,14,101,80,133,60,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,115,65,135,100,190,152,14,102,110,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,85,63,111,100,190,152,14,101,80,133,60,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,115,65,135,100,190,152,14,102,110,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,85,63,111,100,190,152,14,101,80,133,60,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,90,73,106,100,190,152,14,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(14,52,190,96,115,65,135,100,190,152,14,102,110,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758890262517'] = function(block) {
  let code = "base_action.action('快步前进多步')\n";
  return code;
}

Blockly.Blocks['1758891280535'] = {
  init: function() {
    this.jsonInit({
      "type": "1758891280535",
      "message0": "小步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1758891280535'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,99,93,54,122,90,190,152,14,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,125,70,135,100,190,152,14,101,110,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,80,133,60,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,99,90,73,100,100,190,152,14,101,93,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(14,52,190,96,115,65,135,100,190,152,14,102,110,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(14,52,190,99,100,61,126,104,190,152,14,100,97,127,84,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(14,52,190,100,93,55,124,100,190,152,14,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1758891280535'] = function(block) {
  let code = "base_action.action('小步')\n";
  return code;
}


// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                           = require("bs-platform/lib/js/list.js");
var Block                          = require("bs-platform/lib/js/block.js");
var Pervasives                     = require("bs-platform/lib/js/pervasives.js");
var SwiftFormat$LonaCompilerCore   = require("../swiftFormat.bs.js");
var SwiftDocument$LonaCompilerCore = require("../swiftDocument.bs.js");

var trackingAreaVar = /* VariableDeclaration */Block.__(10, [{
      modifiers: /* :: */[
        /* AccessLevelModifier */Block.__(0, [/* PrivateModifier */0]),
        /* :: */[
          /* LazyModifier */5,
          /* [] */0
        ]
      ],
      pattern: /* IdentifierPattern */Block.__(0, [{
            identifier: /* SwiftIdentifier */Block.__(8, ["trackingArea"]),
            annotation: /* None */0
          }]),
      init: /* Some */[/* FunctionCallExpression */Block.__(19, [{
              name: /* SwiftIdentifier */Block.__(8, ["NSTrackingArea"]),
              arguments: /* :: */[
                /* FunctionCallArgument */Block.__(18, [{
                      name: /* Some */[/* SwiftIdentifier */Block.__(8, ["rect"])],
                      value: /* MemberExpression */Block.__(1, [/* :: */[
                            /* SwiftIdentifier */Block.__(8, ["self"]),
                            /* :: */[
                              /* SwiftIdentifier */Block.__(8, ["frame"]),
                              /* [] */0
                            ]
                          ]])
                    }]),
                /* :: */[
                  /* FunctionCallArgument */Block.__(18, [{
                        name: /* Some */[/* SwiftIdentifier */Block.__(8, ["options"])],
                        value: /* LiteralExpression */Block.__(0, [/* Array */Block.__(6, [/* :: */[
                                  /* SwiftIdentifier */Block.__(8, [".mouseEnteredAndExited"]),
                                  /* :: */[
                                    /* SwiftIdentifier */Block.__(8, [".activeAlways"]),
                                    /* :: */[
                                      /* SwiftIdentifier */Block.__(8, [".mouseMoved"]),
                                      /* :: */[
                                        /* SwiftIdentifier */Block.__(8, [".inVisibleRect"]),
                                        /* [] */0
                                      ]
                                    ]
                                  ]
                                ]])])
                      }]),
                  /* :: */[
                    /* FunctionCallArgument */Block.__(18, [{
                          name: /* Some */[/* SwiftIdentifier */Block.__(8, ["owner"])],
                          value: /* SwiftIdentifier */Block.__(8, ["self"])
                        }]),
                    /* [] */0
                  ]
                ]
              ]
            }])],
      block: /* None */0
    }]);

var addTrackingArea = /* FunctionCallExpression */Block.__(19, [{
      name: /* SwiftIdentifier */Block.__(8, ["addTrackingArea"]),
      arguments: /* :: */[
        /* FunctionCallArgument */Block.__(18, [{
              name: /* None */0,
              value: /* SwiftIdentifier */Block.__(8, ["trackingArea"])
            }]),
        /* [] */0
      ]
    }]);

var deinitTrackingArea = /* DeinitializerDeclaration */Block.__(12, [/* :: */[
      /* FunctionCallExpression */Block.__(19, [{
            name: /* SwiftIdentifier */Block.__(8, ["removeTrackingArea"]),
            arguments: /* :: */[
              /* FunctionCallArgument */Block.__(18, [{
                    name: /* None */0,
                    value: /* SwiftIdentifier */Block.__(8, ["trackingArea"])
                  }]),
              /* [] */0
            ]
          }]),
      /* [] */0
    ]]);

function mouseTrackingFunctions(rootLayer, pressableLayers) {
  var containsPoint = function (layer) {
    return SwiftDocument$LonaCompilerCore.layerMemberExpression(rootLayer, layer, /* :: */[
                /* SwiftIdentifier */Block.__(8, ["bounds"]),
                /* :: */[
                  /* FunctionCallExpression */Block.__(19, [{
                        name: /* SwiftIdentifier */Block.__(8, ["contains"]),
                        arguments: /* :: */[
                          /* FunctionCallExpression */Block.__(19, [{
                                name: SwiftDocument$LonaCompilerCore.layerMemberExpression(rootLayer, layer, /* :: */[
                                      /* SwiftIdentifier */Block.__(8, ["convert"]),
                                      /* [] */0
                                    ]),
                                arguments: /* :: */[
                                  /* FunctionCallArgument */Block.__(18, [{
                                        name: /* None */0,
                                        value: /* MemberExpression */Block.__(1, [/* :: */[
                                              /* SwiftIdentifier */Block.__(8, ["event"]),
                                              /* :: */[
                                                /* SwiftIdentifier */Block.__(8, ["locationInWindow"]),
                                                /* [] */0
                                              ]
                                            ]])
                                      }]),
                                  /* :: */[
                                    /* FunctionCallArgument */Block.__(18, [{
                                          name: /* Some */[/* SwiftIdentifier */Block.__(8, ["from"])],
                                          value: /* LiteralExpression */Block.__(0, [/* Nil */0])
                                        }]),
                                    /* [] */0
                                  ]
                                ]
                              }]),
                          /* [] */0
                        ]
                      }]),
                  /* [] */0
                ]
              ]);
  };
  var containsPointVariable = function (variableName, layer) {
    return /* ConstantDeclaration */Block.__(9, [{
                modifiers: /* [] */0,
                init: /* Some */[containsPoint(layer)],
                pattern: /* IdentifierPattern */Block.__(0, [{
                      identifier: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]),
                      annotation: /* None */0
                    }])
              }]);
  };
  var wasClicked = function (layer) {
    return /* ConstantDeclaration */Block.__(9, [{
                modifiers: /* [] */0,
                pattern: /* IdentifierPattern */Block.__(0, [{
                      identifier: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, "clicked")]),
                      annotation: /* None */0
                    }]),
                init: /* Some */[SwiftDocument$LonaCompilerCore.binaryExpressionList("&&", /* :: */[
                        /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, "pressed")]),
                        /* :: */[
                          containsPoint(layer),
                          /* [] */0
                        ]
                      ])]
              }]);
  };
  var ifChanged = function (variableName) {
    var condition = SwiftDocument$LonaCompilerCore.binaryExpressionList("||", List.map((function (layer) {
                return /* BinaryExpression */Block.__(2, [{
                            left: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]),
                            operator: "!=",
                            right: /* MemberExpression */Block.__(1, [/* :: */[
                                  /* SwiftIdentifier */Block.__(8, ["self"]),
                                  /* :: */[
                                    /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]),
                                    /* [] */0
                                  ]
                                ]])
                          }]);
              }), pressableLayers));
    var assignments = List.map((function (layer) {
            return /* BinaryExpression */Block.__(2, [{
                        left: /* MemberExpression */Block.__(1, [/* :: */[
                              /* SwiftIdentifier */Block.__(8, ["self"]),
                              /* :: */[
                                /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]),
                                /* [] */0
                              ]
                            ]]),
                        operator: "=",
                        right: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)])
                      }]);
          }), pressableLayers);
    return /* IfStatement */Block.__(15, [{
                condition: condition,
                block: SwiftDocument$LonaCompilerCore.joinGroups(/* Empty */0, /* :: */[
                      assignments,
                      /* :: */[
                        /* :: */[
                          /* FunctionCallExpression */Block.__(19, [{
                                name: /* SwiftIdentifier */Block.__(8, ["update"]),
                                arguments: /* [] */0
                              }]),
                          /* [] */0
                        ],
                        /* [] */0
                      ]
                    ])
              }]);
  };
  var ifTrueSetFalse = function (variableName) {
    var condition = SwiftDocument$LonaCompilerCore.binaryExpressionList("||", List.map((function (layer) {
                return /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]);
              }), pressableLayers));
    var assignments = List.map((function (layer) {
            return /* BinaryExpression */Block.__(2, [{
                        left: /* MemberExpression */Block.__(1, [/* :: */[
                              /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, variableName)]),
                              /* [] */0
                            ]]),
                        operator: "=",
                        right: /* LiteralExpression */Block.__(0, [/* Boolean */Block.__(0, [/* false */0])])
                      }]);
          }), pressableLayers);
    return /* IfStatement */Block.__(15, [{
                condition: condition,
                block: SwiftDocument$LonaCompilerCore.joinGroups(/* Empty */0, /* :: */[
                      assignments,
                      /* :: */[
                        /* :: */[
                          /* FunctionCallExpression */Block.__(19, [{
                                name: /* SwiftIdentifier */Block.__(8, ["update"]),
                                arguments: /* [] */0
                              }]),
                          /* [] */0
                        ],
                        /* [] */0
                      ]
                    ])
              }]);
  };
  var invokePressHandler = function (layer) {
    return /* IfStatement */Block.__(15, [{
                condition: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, "clicked")]),
                block: /* :: */[
                  /* FunctionCallExpression */Block.__(19, [{
                        name: /* SwiftIdentifier */Block.__(8, [SwiftFormat$LonaCompilerCore.layerVariableName(rootLayer, layer, "onPress?")]),
                        arguments: /* [] */0
                      }]),
                  /* [] */0
                ]
              }]);
  };
  var eventHandler = function (name, body) {
    return /* FunctionDeclaration */Block.__(13, [{
                name: name,
                modifiers: /* :: */[
                  /* AccessLevelModifier */Block.__(0, [/* PublicModifier */3]),
                  /* :: */[
                    /* OverrideModifier */7,
                    /* [] */0
                  ]
                ],
                parameters: /* :: */[
                  /* Parameter */Block.__(17, [{
                        externalName: /* Some */["with"],
                        localName: "event",
                        defaultValue: /* None */0,
                        annotation: /* TypeName */Block.__(0, ["NSEvent"])
                      }]),
                  /* [] */0
                ],
                throws: /* false */0,
                result: /* None */0,
                body: body
              }]);
  };
  var updateHoverState = /* FunctionDeclaration */Block.__(13, [{
        name: "updateHoverState",
        modifiers: /* :: */[
          /* AccessLevelModifier */Block.__(0, [/* PrivateModifier */0]),
          /* [] */0
        ],
        parameters: /* :: */[
          /* Parameter */Block.__(17, [{
                externalName: /* Some */["with"],
                localName: "event",
                defaultValue: /* None */0,
                annotation: /* TypeName */Block.__(0, ["NSEvent"])
              }]),
          /* [] */0
        ],
        throws: /* false */0,
        result: /* None */0,
        body: Pervasives.$at(List.map((function (param) {
                    return containsPointVariable("hovered", param);
                  }), pressableLayers), /* :: */[
              ifChanged("hovered"),
              /* [] */0
            ])
      }]);
  var invokeUpdateHoverState = /* FunctionCallExpression */Block.__(19, [{
        name: /* SwiftIdentifier */Block.__(8, ["updateHoverState"]),
        arguments: /* :: */[
          /* FunctionCallArgument */Block.__(18, [{
                name: /* Some */[/* SwiftIdentifier */Block.__(8, ["with"])],
                value: /* SwiftIdentifier */Block.__(8, ["event"])
              }]),
          /* [] */0
        ]
      }]);
  var mouseEntered = eventHandler("mouseEntered", /* :: */[
        invokeUpdateHoverState,
        /* [] */0
      ]);
  var mouseMoved = eventHandler("mouseMoved", /* :: */[
        invokeUpdateHoverState,
        /* [] */0
      ]);
  var mouseDragged = eventHandler("mouseDragged", /* :: */[
        invokeUpdateHoverState,
        /* [] */0
      ]);
  var mouseExited = eventHandler("mouseExited", /* :: */[
        invokeUpdateHoverState,
        /* [] */0
      ]);
  var mouseDown = eventHandler("mouseDown", Pervasives.$at(List.map((function (param) {
                  return containsPointVariable("pressed", param);
                }), pressableLayers), /* :: */[
            ifChanged("pressed"),
            /* [] */0
          ]));
  var mouseUp = eventHandler("mouseUp", Pervasives.$at(List.map(wasClicked, pressableLayers), Pervasives.$at(/* :: */[
                /* Empty */0,
                /* [] */0
              ], Pervasives.$at(/* :: */[
                    ifTrueSetFalse("pressed"),
                    /* [] */0
                  ], Pervasives.$at(/* :: */[
                        /* Empty */0,
                        /* [] */0
                      ], List.map(invokePressHandler, pressableLayers))))));
  return /* :: */[
          updateHoverState,
          /* :: */[
            /* Empty */0,
            /* :: */[
              mouseEntered,
              /* :: */[
                /* Empty */0,
                /* :: */[
                  mouseMoved,
                  /* :: */[
                    /* Empty */0,
                    /* :: */[
                      mouseDragged,
                      /* :: */[
                        /* Empty */0,
                        /* :: */[
                          mouseExited,
                          /* :: */[
                            /* Empty */0,
                            /* :: */[
                              mouseDown,
                              /* :: */[
                                /* Empty */0,
                                /* :: */[
                                  mouseUp,
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ];
}

exports.trackingAreaVar        = trackingAreaVar;
exports.addTrackingArea        = addTrackingArea;
exports.deinitTrackingArea     = deinitTrackingArea;
exports.mouseTrackingFunctions = mouseTrackingFunctions;
/* SwiftFormat-LonaCompilerCore Not a pure module */
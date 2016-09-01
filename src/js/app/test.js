"use strict";

define(["dojo/_base/declare", "dojo/json", "text!file.html"], function (declare, json, template) {
    return declare([], {
        constructor: function constructor(args) {
            console.log("constructor2");
            console.log(json.stringify("{}", null, 2));
        },
        render: function render() {
            var view = dom(
                "div",
                { "data-bind": "visible: isLoggedIn" },
                dom(
                    "div",
                    { id: "headerToolBar",
                        "class": "non-printable",
                        "data-dojo-type": "dijit/Toolbar",
                        "data-dojo-props": "region: 'top'" },
                    dom(
                        "ul",
                        { "data-role": "menu",
                            "data-bind": "events: { select: onSelect }, visible: isLoggedIn", style: "width: 100%;" },
                        dom(
                            "li",
                            null,
                            "View",
                            dom(
                                "ul",
                                null,
                                dom(
                                    "li",
                                    null,
                                    "Fabricators..."
                                ),
                                dom(
                                    "li",
                                    { "data-bind": "click: onOpenJobClicked" },
                                    "Jobs..."
                                )
                            )
                        ),
                        dom(
                            "li",
                            null,
                            "absCALC",
                            dom(
                                "ul",
                                null,
                                dom(
                                    "li",
                                    null,
                                    "Vertical Curve..."
                                ),
                                dom(
                                    "li",
                                    null,
                                    "Degree of Curvature..."
                                ),
                                dom(
                                    "li",
                                    null,
                                    "Extension Dimensions..."
                                )
                            )
                        ),
                        dom(
                            "li",
                            null,
                            "Help",
                            dom(
                                "ul",
                                null,
                                dom(
                                    "li",
                                    null,
                                    "Tutorial"
                                ),
                                dom(
                                    "li",
                                    null,
                                    "About Fulcrum"
                                )
                            )
                        )
                    )
                )
            );
            return view;
        }
    });
});

//# sourceMappingURL=test.js.map
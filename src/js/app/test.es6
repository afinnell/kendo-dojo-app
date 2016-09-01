/** @jsx dom */


import declare from "dojo/_base/declare";
import json from "dojo/json";
import template from "text!file.html";

export default declare([], {
    constructor: function (args) {
        console.log("constructor2");
        console.log(json.stringify("{}", null, 2));
    },
    render: function () {
        var view = <div data-bind="visible: isLoggedIn">
            <div id="headerToolBar"
                 class="non-printable"
                 data-dojo-type="dijit/Toolbar"
                 data-dojo-props="region: 'top'">
                <ul data-role="menu"
                    data-bind="events: { select: onSelect }, visible: isLoggedIn" style="width: 100%;">
                    <li>View
                        <ul>
                            <li>Fabricators...</li>
                            <li data-bind="click: onOpenJobClicked">Jobs...</li>
                        </ul>
                    </li>
                    <li>absCALC
                        <ul>
                            <li>Vertical Curve...</li>
                            <li>Degree of Curvature...</li>
                            <li>Extension Dimensions...</li>
                        </ul>
                    </li>
                    <li>Help
                        <ul>
                            <li>Tutorial</li>
                            <li>About Fulcrum</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        return view;
    }
});

// export default class {
//     constructor() {
//         var a = 1 + 1;
//     }
//
//     doSomething () {
//         var b = 1 + 1;
//     }
// }
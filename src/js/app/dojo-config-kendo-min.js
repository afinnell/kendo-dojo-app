window.dojoConfig = {
    has: {
        "dojo-firebug": true,
        "dojo-debug-messages": true,
        "dojo-guarantee-console": true
    },
    baseUrl: "js",
    async: true,
    tlmSiblingOfDojo: false,
    isDebug: true,
    debugAtAllCosts: true,
    parseOnLoad: false,
    waitSeconds: 5,
    packages: [
        {name: "dojo", location: "lib/dojo"},
        {name: "dojox", location: "lib/dojox"},
        {name: "dijit", location: "lib/dijit"},
        {name: "dojox", location: "lib/dojox"},
        {name: "kendo-ui", location: "lib/kendo-ui/js"},
        {name: "app", location: "app"}
    ],
    deps: [
        "jquery",
        "kendo.core.min",
        "kendo.popup.min",
        "kendo.datepicker.min",
        "kendo.view.min",
        "kendo.router.min",
        "kendo.culture.en-US.min",
        "kendo.messages.en-US.min"
    ],
    map: {
        "*": {
            "$": "kendo-ui/jquery.min",
            "jquery": "kendo-ui/jquery.min",
            "kendo.calendar.min": "kendo-ui/kendo.calendar.min",
            "kendo.datepicker.min": "kendo-ui/kendo.datepicker.min",
            "kendo.core.min": "kendo-ui/kendo.core.min",
            "kendo.popup.min": "kendo-ui/kendo.popup.min",
            "kendo.color.min": "kendo-ui/kendo.color.min",
            "kendo.data.min": "kendo-ui/kendo.data.min",
            "kendo.selectable.min": "kendo-ui/kendo.selectable.min",
            "kendo.userevents.min": "kendo-ui/kendo.userevents.min",
            "kendo.validator.min": "kendo-ui/kendo.validator.min",
            "kendo.window.min": "kendo-ui/kendo.window.min",
            "kendo.router.min": "kendo-ui/kendo.router.min",
            "kendo.slider.min": "kendo-ui/kendo.slider.min",
            "kendo.responsivepanel.min": "kendo-ui/kendo.responsivepanel.min",
            "kendo.sortable.min": "kendo-ui/kendo.sortable.min",
            "kendo.notification.min": "kendo-ui/kendo.notification.min",
            "kendo.numerictextbox.min": "kendo-ui/kendo.numerictextbox.min",
            "kendo.toolbar.min": "kendo-ui/kendo.toolbar.min",
            "kendo.ui.min": "kendo-ui/kendo.ui.min",
            "kendo.view.min": "kendo-ui/kendo.view.min",
            "kendo.binder.min": "kendo-ui/kendo.binder.min",
            "kendo.fx.min": "kendo-ui/kendo.fx.min",
            "kendo.data.odata.min": "kendo-ui/kendo.data.odata.min",
            "kendo.data.xml.min": "kendo-ui/kendo.data.xml.min",
            "kendo.culture.en-US.min": "kendo-ui/cultures/kendo.culture.en-US.min",
            "kendo.messages.en-US.min": "kendo-ui/messages/kendo.messages.en-US.min"
        }
    }
};
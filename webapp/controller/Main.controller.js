sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "dev2026/model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("dev2026.controller.Main", {
        formatter: formatter, 

        onInit() {
        }
    });
});
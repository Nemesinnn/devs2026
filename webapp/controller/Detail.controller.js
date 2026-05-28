sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "dev2026/model/formatter",
    "sap/ui/core/routing/History"
], (Controller, formatter, History) => {
    "use strict";

    return Controller.extend("dev2026.controller.Detail", {
        formatter: formatter,

        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched(oEvent) {
            const sPath = window.decodeURIComponent(
                oEvent.getParameter("arguments").itemPath
            );
            this.getView().bindElement({ path: "/" + sPath });
        },

        onNavBack() {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("RouteMain", {}, true);
            }
        }
    });
});
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "dev2026/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("dev2026.controller.Main", {
        formatter: formatter,

        onInit() {
        },

        onBuscar(oEvent) {
            const sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue") || "";
            const oBinding = this.byId("currencyTable").getBinding("items");
            const aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("Name", FilterOperator.Contains, sQuery),
                        new Filter("Region", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }
            oBinding.filter(aFilters);
        },

        onFiltrarPorMoneda(oEvent) {
            const sClave = oEvent.getSource().getSelectedKey();
            const oBinding = this.byId("currencyTable").getBinding("items");
            const aFilters = [];
            if (sClave) {
                aFilters.push(new Filter("Waers", FilterOperator.EQ, sClave));
            }
            oBinding.filter(aFilters);
        },

        onLoadData() {
            // 
        },

        onGetRateUSD() {
            // 
        },
         onNavToSmartView() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("smartView");
        },

      onFilaPulsada(oEvent) {
            const oItem = oEvent.getSource();
            const sPath = oItem.getBindingContext().getPath().substring(1);
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail", {
                itemPath: window.encodeURIComponent(sPath)
            });
        }
    });
});
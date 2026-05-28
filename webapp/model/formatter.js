sap.ui.define([], () => {
    "use strict";
    return {
        formatStatusIcon(sStatus) {
            switch (sStatus) {
                case "1": return "sap-icon://message-error";    // Negativo
                case "2": return "sap-icon://message-warning";  // Critico
                case "3": return "sap-icon://message-success";  // Positivo
                default:  return "sap-icon://question-mark";    
            }
        },
        formatStatusColor(sStatus) {
            switch (sStatus) {
                case "1": return "Negative";    // Negativo
                case "2": return "Critical";    // Critico
                case "3": return "Positive";    // Positivo
                default:  return "Neutral";   
            }
        }
    };
});
sap.ui.define([], () => {
    "use strict";
    return {
        formatStatusIcon(sStatus) {
            switch (sStatus) {
                case 1 : return "sap-icon://message-error";    // Negativo
                case 2: return "sap-icon://message-warning";  // Critico
                case 3: return "sap-icon://message-success";  // Positivo
                default:  return "sap-icon://question-mark";    
            }
        },
        formatStatusColor(sStatus) {
            switch (sStatus) {
                case 1: return "#ff000d";  // rojo
                case 2: return "#eee60d";  // amarillo
                case 3: return "#00ff3c";  // verde
                default:  return "#dddddd";   // 0 o vacio
            }
        }
        
    };
});
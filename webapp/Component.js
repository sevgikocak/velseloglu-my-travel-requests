jQuery.sap.declare("fin.travel.mytravelrequestsv2.ZFIN_TR_CRE_EXT.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "fin.travel.mytravelrequestsv2",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/FIN_TR_CRE_V2"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.fin.travel.mytravelrequestsv2.Component.extend("fin.travel.mytravelrequestsv2.ZFIN_TR_CRE_EXT.Component", {
	metadata: {
		manifest: "json"
	}
});
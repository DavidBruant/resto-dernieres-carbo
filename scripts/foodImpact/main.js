export function totalEqCO2SansConsommation(produit){
	return produit.agricultureEqCO2 + produit.emballageEqCO2 + produit.distributionEqCO2 + 
	produit.transformationEqCO2 + produit.transportEqCO2
}
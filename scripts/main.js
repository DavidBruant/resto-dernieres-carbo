//import App from './App.svelte';
import {csv} from 'd3-fetch'

function totalEqCO2SansConsommation(produit){
	return produit.agricultureEqCO2 + produit.emballageEqCO2 + produit.distributionEqCO2 + 
	produit.transformationEqCO2 + produit.transportEqCO2
}

csv('/data/Agribalyse_Detail etape.csv')
.then(data => {
	const usefulList = data.map(aliment => {
		const {
			"Code AGB": id,
			DQR,
			"Groupe d'aliment": groupe,
			"Sous-groupe d'aliment": sousGroupe,
			"Nom du Produit en Français": nom,
			"Changement climatique (kg CO2 eq/kg de produit) - Agriculture": agricultureEqCO2,
			"Changement climatique (kg CO2 eq/kg de produit) - Consommation": consommationEqCO2,
			"Changement climatique (kg CO2 eq/kg de produit) - Emballage": emballageEqCO2,
			"Changement climatique (kg CO2 eq/kg de produit) - Supermarché et distribution": distributionEqCO2,
			"Changement climatique (kg CO2 eq/kg de produit) - Transformation": transformationEqCO2,
			"Changement climatique (kg CO2 eq/kg de produit) - Transport": transportEqCO2
		} = aliment;

		return Object.freeze({
			id, DQR, nom, groupe, sousGroupe,
			agricultureEqCO2: Number(agricultureEqCO2), 
			consommationEqCO2: Number(consommationEqCO2),
			emballageEqCO2: Number(emballageEqCO2), 
			distributionEqCO2: Number(distributionEqCO2), 
			transformationEqCO2: Number(transformationEqCO2),
			transportEqCO2: Number(transportEqCO2)
		})

	}) 
	
	/*
		TODO
		- calculer le max de la somme de tout sauf consommation
		- trier en fonction du total kg eq CO2
	
	*/

	usefulList.sort((p1, p2) => totalEqCO2SansConsommation(p2) - totalEqCO2SansConsommation(p1))


	console.log(usefulList)

})


/*const app = new App({
	target: document.querySelector('.svelte-main'),
	props: {
		name: 'from Svelte'
	}
});*/
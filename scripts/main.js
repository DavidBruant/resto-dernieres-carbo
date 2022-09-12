import FoodProductClimateImpact from './FoodProductClimateImpact.svelte';
import {csv} from 'd3-fetch'

import {totalEqCO2SansConsommation} from './foodImpact/main.js'

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



	console.log(usefulList)


	const foodProductClimateImpact = new FoodProductClimateImpact({
		target: document.querySelector('.product-climat-impact-chart'),
		props: {
			productClimateImpactData: usefulList
		}
	});

})

<script>
    import {totalEqCO2SansConsommation} from './foodImpact/main.js'
	export let productClimateImpactData;

    const sortedProductClimateImpactData = productClimateImpactData.sort((p1, p2) => totalEqCO2SansConsommation(p2) - totalEqCO2SansConsommation(p1))

    const representedProducts = sortedProductClimateImpactData.filter((p, i) => i%30 === 0)

    const maxClimateImpact = totalEqCO2SansConsommation(representedProducts[0]);

    


</script>

<h2>{representedProducts.length} produits</h2>

<table>
    <thead>
        <tr>
            <th>nom</th>
            <th>kg eq co<sub>2</sub> total sans consommation</th>
        </tr>
    </thead>
    <tbody>
        {#each representedProducts as product}
		<tr>
            <td>{product.nom}</td>
            <td>
                <div style="width: { ( totalEqCO2SansConsommation(product)*100 / maxClimateImpact ).toFixed(1) }%"></div>
            </td> 
        </tr>
	    {/each}
    </tbody>
</table>


<style lang="scss">

table tbody tr{
    display: flex;
    width: 80vw;

    td{
        display: block;
    }

    td:nth-child(1){
        width: 10rem;
        font-weight: bold;
    }

    td:nth-child(2){
        width: 80%;
        display: block;

        div{
            height: 1rem;
            background-color: #ccc;

        }
    }

} 

</style>

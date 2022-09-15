<script>
    import {totalEqCO2SansConsommation} from './foodImpact/main.js'
	export let productClimateImpactData;

    const sortedProductClimateImpactData = productClimateImpactData.sort((p1, p2) => totalEqCO2SansConsommation(p2) - totalEqCO2SansConsommation(p1))

    const representedProducts = sortedProductClimateImpactData.filter((p, i) => i%30 === 0)

    const maxClimateImpact = totalEqCO2SansConsommation(representedProducts[0]);

    


</script>

<h2>{representedProducts.length} produits</h2>

<ol>
{#each representedProducts as product}
    <li>
        <div class="nom" title={product.nom}>{product.nom}</div>
        <div class="impact">
            <div class="total" style="width: { ( totalEqCO2SansConsommation(product)*100 / maxClimateImpact ).toFixed(1) }%"></div>
        </div> 
    </li>
{/each}
</ol>


<style lang="scss">

ol{
    display: flex;
    flex-direction: column;
    
    margin: 0;
    padding: 0;

    li{
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 70vw;

        height: 2rem;

        .nom{
            width: 12rem;
            font-weight: bold;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 1rem;
        }

        .impact{
            width: 60%;
            height: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            
            .total{
                height: 1rem;
                background-color: #ccc;
            }

        }

    }
}


</style>

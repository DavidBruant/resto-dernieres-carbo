<script>
    import {totalEqCO2SansConsommation} from './foodImpact/main.js'
	export let productClimateImpactData;

    const sortedProductClimateImpactData = productClimateImpactData.sort((p1, p2) => totalEqCO2SansConsommation(p2) - totalEqCO2SansConsommation(p1))

    const representedProducts = sortedProductClimateImpactData//.slice(1500)//.filter((p, i) => i%25 === 0)

    const maxClimateImpact = totalEqCO2SansConsommation(representedProducts[0]);

</script>

<h2>{representedProducts.length} produits</h2>

<ol>
{#each representedProducts as product}
    <li>
        <div class="nom" title={product.nom}>{product.nom}</div>
        <div class="impact">
            <div class="agriculture" style="width: { ( product.agricultureEqCO2*100 / maxClimateImpact ).toFixed(1) }%" title={product.agricultureEqCO2.toFixed(2)}></div>
            <div class="transformation" style="width: { ( product.transformationEqCO2*100 / maxClimateImpact ).toFixed(1) }%" title={product.transformationEqCO2.toFixed(2)}></div>
            <div class="transport" style="width: { ( product.transportEqCO2*100 / maxClimateImpact ).toFixed(1) }%" title={product.transportEqCO2.toFixed(2)}></div>
            <div class="distribution" style="width: { ( product.distributionEqCO2*100 / maxClimateImpact ).toFixed(1) }%" title={product.distributionEqCO2.toFixed(2)}></div>
            <div class="emballage" style="width: { ( product.emballageEqCO2*100 / maxClimateImpact ).toFixed(1) }%" title={product.emballageEqCO2.toFixed(2)}></div>
        </div> 
        <div class="total">{totalEqCO2SansConsommation(product).toFixed(0)}</div>
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

        height: 1.6rem;

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

            & > *{
                height: 1rem;
            }

            .agriculture{
                background-color: brown;
            }
            
            .transformation{
                background-color: blue;
            }
            
            .transport{
                background-color: red;
            }
            
            .distribution{
                background-color: yellow;
            }
            
            .emballage{
                background-color: grey;
            }

        }

        .total{
            padding: 0 1rem;
        }
    }
}


</style>

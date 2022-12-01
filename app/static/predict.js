 


// ladataan model
/* let model;
    (async function() {
        model = await tf.Sequential('models_js/model.json')
    })() */

function displayLoading() {
    document.getElementById('result').innerHTML = "Predicting price..."
    
}

// hiding loading 
function hideLoading() {
    document.getElementById('result').innerHTML = ""
}

    
document.getElementById('form').onsubmit = (event) => {
    event.preventDefault();
    year = parseFloat(event.target.year_field.value)
    systemSize = parseFloat(event.target.size_field.value)
    moduleQuantity = parseFloat(event.target.mq_field.value)
    inverterCapacity = parseFloat(event.target.inv_field.value)

    inverterLoadingRatio = Math.round((systemSize/inverterCapacity) * 100)/ 100
    

    /* ['installation_date', 'system_size_DC', 'rebate_or_grant', 'zip_code',
       'third_party_owned', 'installer_name', 'self_installed',
       'module_manufacturer_1', 'module_model_1', 'inverter_loading_ratio',
       'module_quantity', 'module_efficiency', 'nameplate_capacity',
       'inverter_quantity', 'inverter_total_capacity'] */

    
    values = [year, systemSize, 0, 92029, 0, 3433, 0, 131, 2116, inverterLoadingRatio, moduleQuantity, 0.2, 360, 25, inverterCapacity]
    
    displayLoading()
    let body = JSON.stringify(values)

    fetch('/', {
        method:"post", 
        body:body,
        headers: {
            'Content-Type': 'application/json'
          },
        
        })
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        hideLoading()
        document.getElementById('result').innerHTML = response.pred + '$'
        })

    
    .catch(error => {
        console.error('Error:', error)
    }) 
      
  
    

}






    




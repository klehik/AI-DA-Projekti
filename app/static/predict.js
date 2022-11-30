 


// ladataan model
let model;
    (async function() {
        model = await tf.loadLayersModel('models_js/model.json')
    })()

    
document.getElementById('form').onsubmit = async (event) => {
    event.preventDefault();
    systemSize = parseFloat(event.target.size_field.value)
    moduleQuantity = parseFloat(event.target.mq_field.value)
    inverterCapacity = parseFloat(event.target.inv_field.value)
    
      values = [[2009, systemSize, moduleQuantity,inverterCapacity]]


      data = tf.stack(values)
      console.log(data)
      pred = await model.predict(data).data()

      console.log(pred)
      document.getElementById('result').innerHTML = pred[0]

}






    




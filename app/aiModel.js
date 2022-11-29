//import * as tf from '@tensorflow/tfjs';

// h5-tiedoston muuttaminen javascriptille sopivaksi

//# bash
// pip install tensorflowjs
//tensorflowjs_converter --input_format keras \
//                       path/to/my_model.h5 \
//                       path/to/tfjs_target_dir




const predict =  (moduleQuantity, systemSize, inverterCapacity) => {
    //async

    
    //const model = await tf.loadLayersModel('tfjsmodel')
    //const prediction = model.predict(moduleQuantity, systemSize, inverterCapacity)

    return (moduleQuantity * systemSize * inverterCapacity)

}

module.exports = { predict }
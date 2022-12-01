from tensorflow import keras
import sys
from pickle import load
import numpy as np
import json
def predict(argv):
    input_str = sys.argv[1].split(',')
    input = np.array([input_str])

    input = input.astype(np.float)
    
    scaler = load(open('./scaler/scaler.pkl', 'rb'))
    input_scaled = scaler.transform(input)
    
    model = keras.models.load_model('../models/app_test_model.h5')
    pred = model.predict(input_scaled)
    print(str(pred[0][0]))



if __name__ == "__main__":
    predict(sys.argv)

from percistance import percistance 

def predict(data):
  return percistance.load_model('tree').predict(data)
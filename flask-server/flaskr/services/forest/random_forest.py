from random import randint 

def predict(data):
  return {
    'warn': randint(0, 3),
    'error': randint(0, 3),
  }
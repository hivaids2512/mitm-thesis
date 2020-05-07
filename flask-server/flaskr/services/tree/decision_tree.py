from random import randint 

def predict(data):
  return {
    'warn': randint(0, 4),
    'error': randint(0, 4),
  }
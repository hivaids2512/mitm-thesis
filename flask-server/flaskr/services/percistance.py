from sklearn.externals import joblib

def save_model(model_name):
  joblib.dump(clf, model_name + '.pkl')

def load_model(model_name):
  return clf = joblib.load(model_name + '.pkl') 
  
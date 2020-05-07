import pandas as pd
from sklearn.preprocessing import Imputer
from measure_performance import measure_performance
import numpy as np
import pyparsing
import csv
from sklearn import tree

class mean_imputation:
	
	performance = measure_performance()
	missing_rate = 0.5;
	dataset_path = '/media/Data/dataset/group-platform/eval/group-platform-all-extracted-30000.csv'
	clf = tree.DecisionTreeClassifier(criterion='entropy')
	rng = np.random.RandomState(0)	

	if __name__ == '__main__':

		df = pd.read_csv(dataset_path);
		header = list(df.columns)
		for feat in header:
			df[feat]=pd.factorize(df[feat])[0]

		feature = header[1:]
		X_full=df[feature].values
		y_full=df[header[0]].values

		n_samples = X_full.shape[0]
		n_features = X_full.shape[1]

		n_missing_samples = np.floor(n_samples * missing_rate)
		missing_samples = np.hstack((np.zeros(n_samples - n_missing_samples,dtype=np.bool),np.ones(n_missing_samples,dtype=np.bool)))
		
		rng.shuffle(missing_samples)
		missing_features = rng.randint(0, n_features, n_missing_samples)


		X_filtered = X_full[~missing_samples, :]
		y_filtered = y_full[~missing_samples]

		score = performance.cross_validation_score(X_filtered, y_filtered,clf).mean()
		print("Score without imputation = %.2f" % score)

		X_missing = X_full.copy()
		X_missing[np.where(missing_samples)[0], missing_features] = 0
		y_missing = y_full.copy()
		imp = Imputer(missing_values='NaN', strategy='mean', axis=0)
		imp.fit(X_missing)
		X_missing = imp.transform(X_missing)
		score = performance.cross_validation_score(X_missing, y_missing,clf).mean()
		print("Score within imputation = %.2f" % score)

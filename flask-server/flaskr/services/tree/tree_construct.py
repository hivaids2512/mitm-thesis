import IPython
import sklearn as sk
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import pydot
import csv
import pandas as pd
import time
from sklearn.preprocessing import Imputer
from measure_performance import measure_performance
import StringIO
from sklearn import tree
from sklearn.cross_validation import train_test_split

class tree_construct:

	performance 	= measure_performance()
	dataset_path 	= '/media/Data/dataset/group/group-100000.csv'                                     #path to dataset
	max_tree_depth 	= 3
	test_size      	= 0.25										#max depth of tree

	if __name__ == '__main__':

		df = pd.read_csv(dataset_path);                                                          #load dataset into pandas data frame
		df.drop('platform', axis=1, inplace=True)			                         #drop platform feature
		header = list(df.columns)
		for feat in header:
			df[feat]=pd.factorize(df[feat])[0]


		feature = header[1:]
		X=df[feature].values
		y=df[header[0]].values						                          #factorize features
		
		X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=33)

		imp = Imputer(missing_values='NaN', strategy='mean', axis=0)
		imp.fit(X_train)
		X_train = imp.transform(X_train)
		
		clf = tree.DecisionTreeClassifier(criterion='entropy', max_depth=max_tree_depth)

		t_start = time.time()
		clf = clf.fit(X_train,y_train)
		t_end = time.time()

		print 'Accuracy: '
		print performance.accuracy_score(X_test,y_test,clf)
		print 'Time: '
		print performance.time_consuming(t_start,t_end)
		draw_tree(clf,"mac.pdf")

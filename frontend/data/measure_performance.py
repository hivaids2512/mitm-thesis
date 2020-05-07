from sklearn import metrics
from sklearn import tree
from sklearn.cross_validation import cross_val_score
import math

class measure_performance:

	#clf = tree.DecisionTreeClassifier(criterion='entropy', max_depth=3);

	def accuracy_score(self,X,y,clf):
		y_pred=clf.predict(X);
		return metrics.accuracy_score(y,y_pred);

	def cross_validation_score(self,X,y,clf):
		return cross_val_score(clf,X,y).mean()
	
	def time_consuming(self,t_start,t_end):
		return math.pow((t_end - t_start),-3);


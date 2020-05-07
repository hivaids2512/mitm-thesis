CONTENTS OF THIS FILE
---------------------
  
* Source code content
* Requirements
* Installation
* Instruction

---------------------

################################## SOURCE CODE CONTENT #################################################

Source code for the thesis

	+ measure_performance.py : 	contents functions to measure performance of decision tree.
	+ tree_construct.py 	 : 	construct decision tree and draw it in pdf format. 
	+ mean_imputation.py 	 : 	experiment with mean imputation method.
	+ data_preprocess	 :      contents functions to pre-process dataset.

#########################################################################################################


################################## REQUIREMENTS #########################################################

This project was tested and run in:
	
	+ Python	: 	2.7
	+ Numpy 	:	1.9.2
	+ Scipy		:	0.15.1
	+ Scilit-learn 	:	0.16.1

#########################################################################################################

################################## INSTALLATION #########################################################

	+ Python	:	Python is installed bby default in Ubuntu
	+ Numpy 	:	Run this command to install Numpy : sudo apt-get install python-numpy
	+ Scipy		: 	Run this command to install Scipy : sudo apt-get install python-scipy
	+ Scikit-learn	: 
		1. Download source code from homepage:  http://sourceforge.net/projects/scikit-learn/files/
		2. Extract downloaded source code.
		3. Change directory to source code file.
		4. Run command to install Scikit-learn: python setup.py install
		5. For install Scikit-learn in other platform: http://scikit-learn.org/dev/install.html

#########################################################################################################

################################## INSTRUCTION #########################################################

	+ measure_performance.py: this file contents class that provides 3 methods to measure performance
				  of decision tree
		1. accuracy_score : measure accuracy score of decision tree, contents 3 parameters:
			*X : The input samples of test set.
			*y : The class label of test set.
			*clf: Decision tree classifier.
		2. time_consuming: measure time to cunstruct decision tree, contents 2 parameters:
			*t_start: the time when tree construction starts.
			*t_end  : the time when tree construction ends.
		3. cross_validation_score: measure cross validation score of imputation method, contents 2 parameters:
			*X : The input samples of test set
			*y : The class label of test set.
			*clf: Decision tree classifier. 

        --------------------------------------------------------------------------------------------------

	+ tree_contruct.py: this file contents class that used to construct decision tree. Contents: 
	  		    3 configurations variable:
		1. dataset_path   :    path to dataset used to construct decision tree (you can change it).
		2. max_tree_depth :    maximum depth of constructed decision tree (you can change it).
		3. test_size      :    size of test set used to test decision tree (you can change it).
			    1 method:
		1. Draw_tree:   used to draw decision tree, contents 2 parameter:
			*clf:  Decision tree classifier.
			*output_file: output file name of drawed decision tree.

	Run: change directory to this file then run: python tree_construct.py

	--------------------------------------------------------------------------------------------------
	
	+ mean_imputation.py: this file contents class that used to test performance of imputation method.
			      Content 2 configurations variable:
		1. dataset_path: path to dataset used to construct decision tree (you can change it).
		2. missing_rate: the rate of missing values (you can change it).

	Run: change directory to this file then run: python mean_imputation.py

	--------------------------------------------------------------------------------------------------

	+ data_preprocess.py: this file contents class that used to prepreocess dataset. Contents
			      2 configurations variable:
		1. input_dataset_path   : path to input dataset used to preprocess (you can change it).
		2. output_dataset_path  : path to output dataset (you can change it).
			      3 methods:
		1. extract_nomeaning_word: remove meaningless words, includes 2 parameters:
			*char_list  : list of special characters.
			*string     : list of words considered to filter.
		2. remove_memory_address : remove memory address, include 1 parameter:
			*string     : list of words considered to filter.	
		3. remove_redundant_word : remove duplicated words, include 1 parameter:
			*string     : list of words considered to filter.

	Run: change directory to this file then run: python data_preprocess.py

#########################################################################################################
		 

import csv
import re

class data_reprocess:
	
	input_dataset_path  = '/media/Data/dataset/group-platform/group-platform-win.csv'
	output_dataset_path = '/media/Data/dataset/group-platform/group-platform-win-extracted.csv'

	def extract_nomeaning_word(char_list, string):
		word_list = string.split();
		index_list=[]
		for word in word_list:
			for char in char_list:
				if word.find(char)!=-1:
					if word not in index_list:
						index_list.append(word)
	
		for index in index_list:
			word_list.remove(index)
			
		return ' '.join(word_list)

	def remove_memory_address(string):
		word_list = string.split()
		index_list=[]
		for word in word_list:
			match = re.findall(r'(^x([0-9]|[a-f])*)', word)
			if len(match)!=0: 
				if word not in index_list:
					index_list.append(word)

		for index in index_list:
			word_list.remove(index)

		return ' '.join(word_list)

	def remove_redundant_word(string):
		return ' '.join(set(string[6].split()))

	if __name__ == '__main__':

		with open(input_dataset_path, 'rb') as inputcsvfile:
			with open(output_dataset_path, 'wb') as outputcsvfile:
				reader = csv.reader(inputcsvfile, delimiter=',', quotechar='"')
				for row in reader:
					#if row[1]=='open':
						writer = csv.writer(outputcsvfile, delimiter=',',quotechar='"', quoting=csv.QUOTE_MINIMAL)
						row[6]= remove_redundant_word(remove_memory_address(extract_nomeaning_word(['/','-','_'], row[6])))
						writer.writerow(row)
			
		

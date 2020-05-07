
# 1) Import random forest and caret library;
library(randomForest)
library(caTools)
library(caret)
set.seed(222)


# 2. Load dataset into data-frame;
dataFrame <- read.csv("C:\\Users\\lthanh\\OneDrive - Mercon Corp\\Elasticity\\Code Random Forest\\Bug_Report_2\\Win\\Win_Platform_70k_extracted.csv",header = TRUE)
dataFrame <- dataFrame[, !colnames(dataFrame) %in% "Platform"]

# 3. Factorize the data-frame to numeric
dataFrame <- as.data.frame(lapply(dataFrame, as.numeric))

# 4. Parse factor for class label;
dataFrame$Category <- as.factor(dataFrame$Category)

  # check the numver of unique values
#apply(dataFrame, 2, function(x) length(unique(x)))


# 3. Data Partition with Y = target vairable

# ind <- sample(2, nrow(dataFrame), replace = TRUE, prob = c(0.75,0.25))
# train <- dataFrame[ind ==  1,]
# test <- dataFrame[ind == 2,]


ind <- sample.split(Y = dataFrame$Category, SplitRatio = 0.75)
train <- dataFrame[ind,]
test <- dataFrame[!ind,]




#dataFrame = rfImpute(train$Category,dataFrame, ntree = 500)

summary(dataFrame)
# 3.Construct Random Forest Model
start_time_train <- Sys.time()
print(start_time_train)
rf <- randomForest(Category~. , data = train, mtry = 3, ntree = 500) # mtry, ntree, importance = TRUE,proximity = TRUE
end_time_train <- Sys.time()
print(end_time_train)





# Category~. mean that Category is the function of all remaining variable feature showed by the ~.
print(rf)

# View random forest attributes as confustion matrix, oob,...
attributes(rf)




print("Time consuming: ")
#print((start_time_train - end_time_train) ^ -3)

print((end_time_train - start_time_train), digits.secs=6)

#diff.difftime(start_time_train, end_time_train, options(digits.secs = 3))


# and put rf$attributes at console to view the attribute

# 5. Prediction with Confustion Matrix with train data

p1 <- predict(rf, train, type = "class")
confusionMatrix(p1,train$Category)  

# 6. Prediction and Confustion Matrix with test data
p2 <- predict(rf, test, type = "class")
confusionMatrix(p2,test$Category) 

# Or prediction 
# PredictClass <- predict(rf, test , type = "class")
# t <- table(prediction = PredictClass, actual = test$Category)
# 
# 
# 
# hist(treesize(rf), main = "No. of Nodes for the Trees",col = "green")
# 
# # Accuracy Matric
# sum(diag(t))/sum(t)
# 
# 
# 
# # view predict value of p1 use in console
# head(p1)
# # view train value to compare with predict p1
# head(train$Category)
# 
# 
# 
# # 7. Error rate of Random Forest
# plot(rf)
# 
# # 8. Tune mtry Random forest model to view the best mtry and re-apply to random forest
# tu <- tuneRF(train[,-5], train[,5],
#             stepFactor = 0.5,
#             plot = TRUE,
#             ntreeTry = 500,
#             trace = TRUE,
#             improve = 0.05) # remove 22 features
# print("tuneRF")
# tu
# 
# # 9. No. of nodes for the tree
# hist(treesize(rf), main = "No. of Nodes for the Trees",col = "green")
# 
# # 10. View Importance vairable in the Random Forest Model
# varImpPlot(rf, sort = TRUE)
# # find the detail value of importance of each variables
# importance(rf)
# # find variable used in the model
# varUsed(rf)
# 
# # 11. Multi-dimensional Scaling Plit of Proximity Matrix
# MDSplot(rf, train$Category)

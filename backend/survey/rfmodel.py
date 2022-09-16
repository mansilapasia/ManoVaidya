#!/usr/bin/env python
# coding: utf-8
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)

# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory
import pickle
import os

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session


import matplotlib.pyplot as plt

from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split



data = pd.read_csv('detection-final.csv')


data


data.isna().sum()


data = data.drop('timestamp', axis=1)



data


{column: len(data[column].unique()) for column in data.select_dtypes('object').columns}


{column: list(data[column].unique()) for column in data.select_dtypes('object').columns}


cleanup_nums = {"age": {"15-25": 1, "26-35":2, "36-45": 3, "46-55":4, "55+": 5},
               "gender": {"Male":1 , "Female":2 },
                "occupation": {"Student": 1, "Service": 2, "Other": 6, "Businessman": 3, 
                                                      "Freelancer": 4, "Retired": 5 },
                "interest_pleasure": {"Some of the days": 2,
                "Nearly Everyday": 4,
                "Several days": 3,
                "Not at all": 1 }, 
                "depressed": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_tired": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_bad": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_trouble": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_restless": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_sad": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "feel_angry": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "confusion": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "thoughts": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "poor_appetite": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "sleep_cycle": {"Some of the days" : 2,
                "Nearly Everyday": 4,
                "Not at all": 1, 
                "Several days": 3 },
                "previously_diagnosed": {"No": 0, "Yes": 1}}



data = data.replace(cleanup_nums)
data

print("Remaining non-numeric columns:", len(data.select_dtypes('object').columns))


print("Remaining missing values:", data.isna().sum().sum())



feature_cols = ['age', 'gender', 'occupation', 'interest_pleasure', 'feel_tired', 'feel_bad', 'feel_trouble', 'feel_restless', 'feel_sad', 'feel_angry', 'confusion', 'thoughts', 'poor_appetite', 'sleep_cycle', 'previously_diagnosed']
X = data[feature_cols]
y = data.depressed


#import tensorflow as tf
import argparse
import tensorflow.compat.v1 as tf 
#tf.disable_v2_behavior()
#tf.compat.v1.disable_resource_variables()



batch_size = 10
train_steps = 1000
import pandas as panda
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=0)
#print(X_test)
mytest = {'age':[3], 'gender':[2], 'occupation':[3], 'interest_pleasure':[1], 'feel_tired':[4], 'feel_bad':[1],'feel_trouble':[1], 'feel_restless':[2], 'feel_sad':[3], 'feel_angry':[1], 'confusion':[1],'thoughts':[1], 'poor_appetite':[3], 'sleep_cycle':[1], 'previously_diagnosed':[0]}
my_test = panda.DataFrame(mytest)
#print(my_test)



def train_input_fn(features, labels, batch_size):
    """An input function for training"""
    # Convert the inputs to a Dataset.
    dataset = tf.data.Dataset.from_tensor_slices((dict(features), labels))

    # Shuffle, repeat, and batch the examples.
    return dataset.shuffle(1000).repeat().batch(batch_size)

def eval_input_fn(features, labels, batch_size):
    """An input function for evaluation or prediction"""
    features=dict(features)
    if labels is None:
        # No labels, use only features.
        inputs = features
    else:
        inputs = (features, labels)

    # Convert the inputs to a Dataset.
    dataset = tf.data.Dataset.from_tensor_slices(inputs)

    # Batch the examples
    assert batch_size is not None, "batch_size must not be None"
    dataset = dataset.batch(batch_size)

    # Return the dataset.
    return dataset


age = tf.feature_column.numeric_column("age")
gender = tf.feature_column.numeric_column("gender")
occup = tf.feature_column.numeric_column("occupation")
ip = tf.feature_column.numeric_column("interest_pleasure")
ft = tf.feature_column.numeric_column("feel_tired")
fb = tf.feature_column.numeric_column("feel_bad")
ftr = tf.feature_column.numeric_column("feel_trouble")
fr = tf.feature_column.numeric_column("feel_restless")
fs = tf.feature_column.numeric_column("feel_sad")
fa = tf.feature_column.numeric_column("feel_angry")
c = tf.feature_column.numeric_column("confusion")
th = tf.feature_column.numeric_column("thoughts")
pa = tf.feature_column.numeric_column("poor_appetite")
sc = tf.feature_column.numeric_column("sleep_cycle")
pd = tf.feature_column.numeric_column("previously_diagnosed")
feature_columns = [age, gender, occup, ip, ft, fb, ftr, fr, fs, fa, c, th, pa, sc, pd]



model = tf.estimator.DNNClassifier(feature_columns=feature_columns,
                                     hidden_units=[10, 10],
                                     optimizer=tf.train.ProximalAdagradOptimizer(
                                      learning_rate=0.1,
                                      l1_regularization_strength=0.001
                                    ))


from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint
def tuningRandomizedSearchCV(model, param_dist):
    #Searching multiple parameters simultaneously
    # n_iter controls the number of searches
    rand = RandomizedSearchCV(model, param_dist, cv=10, scoring='accuracy', n_iter=10, random_state=5)
    rand.fit(X, y)
    rand.cv_results_
    
    # examine the best model
    print('Rand. Best Score: ', rand.best_score_)
    print('Rand. Best Params: ', rand.best_params_)
    
    # run RandomizedSearchCV 20 times (with n_iter=10) and record the best score
    best_scores = []
    for _ in range(20):
        rand = RandomizedSearchCV(model, param_dist, cv=10, scoring='accuracy', n_iter=10)
        rand.fit(X, y)
        best_scores.append(round(rand.best_score_, 3))
    print(best_scores)


from sklearn import metrics
from sklearn.metrics import accuracy_score, mean_squared_error, precision_recall_curve
def evalClassModel(model, y_test, y_pred_class, plot=False):
    #Classification accuracy: percentage of correct predictions
    # calculate accuracy
    print('Accuracy:', metrics.accuracy_score(y_test, y_pred_class))
    
    #Null accuracy: accuracy that could be achieved by always predicting the most frequent class
    # examine the class distribution of the testing set (using a Pandas Series method)
    print('Null accuracy:\n', y_test.value_counts())
    
    # calculate the percentage of ones
    print('Percentage of ones:', y_test.mean())
    
    # calculate the percentage of zeros
    print('Percentage of zeros:',1 - y_test.mean())
    
    #Comparing the true and predicted response values
    print('True:', y_test.values[0:25])
    print('Pred:', y_pred_class[0:25])
    
    #Conclusion:
    #Classification accuracy is the easiest classification metric to understand
    #But, it does not tell you the underlying distribution of response values
    #And, it does not tell you what "types" of errors your classifier is making
    
    #Confusion matrix
    # save confusion matrix and slice into four pieces
    confusion = metrics.confusion_matrix(y_test, y_pred_class)
    #[row, column]
    TP = confusion[1, 1]
    TN = confusion[0, 0]
    FP = confusion[0, 1]
    FN = confusion[1, 0]
    
    # visualize Confusion Matrix
    #sns.heatmap(confusion,annot=True,fmt="d") 
    #plt.title('Confusion Matrix')
    #plt.xlabel('Predicted')
    #plt.ylabel('Actual')
    #plt.show()
    
    #Metrics computed from a confusion matrix
    #Classification Accuracy: Overall, how often is the classifier correct?
    accuracy = metrics.accuracy_score(y_test, y_pred_class)
    print('Classification Accuracy:', accuracy)
    
    #Classification Error: Overall, how often is the classifier incorrect?
    print('Classification Error:', 1 - metrics.accuracy_score(y_test, y_pred_class))
    
    #False Positive Rate: When the actual value is negative, how often is the prediction incorrect?
    false_positive_rate = FP / float(TN + FP)
    print('False Positive Rate:', false_positive_rate)
    
    
    ##########################################
    #Adjusting the classification threshold
    ##########################################
    # print the first 10 predicted responses
    # 1D array (vector) of binary values (0, 1)
    print('First 10 predicted responses:\n', model.predict(X_test)[0:10])

     
    return accuracy


#model.train(input_fn=lambda:train_input_fn(X_train, y_train, batch_size), steps=train_steps)

def randomForest():
    # Calculating the best parameters
    forest = RandomForestClassifier(n_estimators = 20)

    featuresSize = feature_cols.__len__()
    param_dist = {"max_depth": [3, None],
              "max_features": randint(1, featuresSize),
              "min_samples_split": randint(2, 9),
              "min_samples_leaf": randint(1, 9),
              "criterion": ["gini", "entropy"]}
    tuningRandomizedSearchCV(forest, param_dist)
    
    # Building and fitting my_forest
    forest = RandomForestClassifier(max_depth = None, min_samples_leaf=8, min_samples_split=2, n_estimators = 20, random_state = 1)
    my_forest = forest.fit(X_train, y_train)
    
    # make class predictions for the testing set
    y_pred_class = my_forest.predict(X_test)
    
    #print('###*********My prediction*******######')
    #my_pred = my_forest.predict(my_test)
    #print(my_pred)
    print('########### Random Forests ###############')
    
    accuracy_score = evalClassModel(my_forest, y_test, y_pred_class, True)

    #filename = 'finalized_model.sav'
    #pickle.dump(my_forest, open(filename, 'wb'))
    #loaded_model = pickle.load(open(filename, 'rb'))
    #result = loaded_model.predict(my_test)
    #print(result)
    #Data for final graph
    print("Accuracy: ",accuracy_score * 100)


randomForest()
#filename = 'finalized_model.sav'
#loaded_model = pickle.load(open(filename, 'rb'))
#result = loaded_model.predict(my_test)
#print(result)
    
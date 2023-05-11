import joblib
import sys
import torch
import numpy as np
import pandas as pd
sys.path.append(r'Model')
from LSTM import LSTM
from MLP import MLP



temp_model = joblib.load(r"pretrain\temp.joblib")
humid_model = joblib.load(r"pretrain\humid.joblib")
on_off_model = joblib.load(r"pretrain\command.joblib")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def make_pred_temp():
    data = pd.read_csv('data.csv')
    temp = data['temp'].values[0:10]
    temp = temp - 29.082653735948863 /  1.7888300379821227
    data = []
    for idx in temp:
        data.append([idx])
    X_ = [data]
    X_ = np.array(X_)
    X_ = torch.from_numpy(X_).type(torch.Tensor).to(device)
    yhat = temp_model(X_)
    yhat = yhat.cpu().detach().numpy()
    return yhat[0] * 1.7888300379821227 + 29.082653735948863

def make_pred_humid():
    data = pd.read_csv('data.csv')
    humid = data['humid'].values[0:10]
    humid = humid - 73.92373815296452 / 10.389840214286526
    data = []
    for idx in humid:
        data.append([idx])
    X_ = [data]
    X_ = np.array(X_)
    X_ = torch.from_numpy(X_).type(torch.Tensor).to(device)
    yhat = humid_model(X_)
    yhat = yhat.cpu().detach().numpy()
    return int(yhat[0] * 10.389840214286526  + 73.92373815296452)
    
def on_off(temp, humid):
    threshold = 0.5
    #print(temp, humid, 1111111111111111111)
    input_ = [temp, humid]
    input_ = np.array(input_)
    input_ = torch.from_numpy(input_).type(torch.Tensor).to(device)
    output = (on_off_model(input_) > threshold).float()
    output = output.cpu().detach().numpy()
    return int(output[0])


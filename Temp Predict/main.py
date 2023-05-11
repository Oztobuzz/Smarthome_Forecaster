from fastapi import FastAPI, File, UploadFile, Request
import uvicorn
import requests
import sys
import pandas as pd
sys.path.append(r'Model')
from LSTM import LSTM
from MLP import MLP
from inference import make_pred_temp, make_pred_humid, on_off
from pydantic import BaseModel
import random
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define allowed origins
origins = [
    "http://localhost",
    "http://localhost:5173",  # Add your frontend domain(s) here
]

# Add the CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = pd.read_csv('data.csv')
    
class OutputDataTemp(BaseModel):
    prediction_temp: float
    
class OutputDataHumid(BaseModel):
    prediction_humid: int
 

@app.get("/")
def get_root():
    return {"message": "This is the end-to-end prediction models"}



@app.post("/analyze_temp", response_model=OutputDataTemp)
async def get_pred_temp():
    prediction_temp = make_pred_temp()
    # global global_temp  
    # global_temp = prediction_temp
    f = open("temperature.txt", "a")
    f.write(str(prediction_temp[0]))
    f.write('\n')
    f.close()
    return {"prediction_temp": prediction_temp}

@app.post("/analyze_humid", response_model=OutputDataHumid)
async def get_pred_humid():
    prediction_humid = make_pred_humid()
    # global global_humid 
    # global_humid = prediction_humid
    f = open("humid.txt", "a")
    f.write(str(prediction_humid))
    f.write('\n')
    f.close()
    return {"prediction_humid": prediction_humid}



def on_off_command():
    prediction_temp = make_pred_temp()
    # global global_temp  
    # global_temp = prediction_temp
    f = open("temperature.txt", "a")
    f.write(str(prediction_temp[0]))
    f.write('\n')
    f.close()
    prediction_humid = make_pred_humid()
    # global global_humid 
    # global_humid = prediction_humid
    f = open("humid.txt", "a")
    f.write(str(prediction_humid))
    f.write('\n')
    f.close()
    with open('temperature.txt', "r") as f1:
        global_temp = float(f1.readlines()[-1])
    with open('humid.txt', "r") as f1:
        global_humid = int(f1.readlines()[-1])
   
    on_off_out = on_off(global_temp, global_humid)
    print(f"Fan run signal: {on_off_out}")
    return on_off_out



if __name__ == "__main__":
    uvicorn.run(app, host = 'localhost', port = 8000)
    #on_off_command()
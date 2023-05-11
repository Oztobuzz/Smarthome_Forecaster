print("Hello Sensors")
import serial.tools.list_ports
import time
import sys
import pandas as pd
sys.path.append(r'Model')
from LSTM import LSTM
from MLP import MLP
from main import *

from  Adafruit_IO import  MQTTClient
AIO_FEED_ID = ["motion", "light","temp","humid","fan"]
AIO_USERNAME = "meimei_doan"
AIO_KEY = "aio_DSPg61Yj2l0WmcXhnrmC6BnfMaTG"

df = pd.DataFrame(columns=["humid", "temp", "light", "human"])
def connected(client):
    print("Ket noi thanh cong ...")
    for id in AIO_FEED_ID:
        client.subscribe(id)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")

    sys.exit (1)

human = 0
temp = 0
humid = 0
light = 0
fan = 0
def message(client , feed_id , payload):

    global human,light,temp,humid,fan

    if feed_id == "motion":
        # if payload == '0':
        #     uart_write(payload)
        # elif payload == '1':
        #     uart_write(payload)
        print("Data is from " + feed_id + "sensor: " + payload)

        human = payload
    elif feed_id == "light":
        print("Data is from " + feed_id + "sensor: " + payload)
        light = payload
    elif feed_id == "temp":
        print("Data is from " + feed_id + "sensor: " + payload)
        temp = payload
    elif feed_id == "humid":
        print("Data is from " + feed_id + "sensor: " + payload)
        humid = payload
    elif feed_id == "fan":
        print("Data is from " + feed_id + " is target: " + payload)
        fan = payload
    else:
        pass

    # print("Data is from: " + feed_id + ", Payload: " + payload)

client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()
def getPort():
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB Serial" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return "COM4"
# mess = ""
# def processData(data):
#     data = data.replace("!", "")
#     data = data.replace("#", "")
#     splitData = data.split(":")
#     for split in splitData:
#         if split[0] == 'H':
#             print("CapnhatH:",split[1:])
#             client.publish("humid",int(split[1:]))
#         if split[0] == 'T':
#             print("CapnhatT:",split[1:])
#             client.publish("temp",int(split[1:]))
#         if split[0] == 'L':
#             print("CapnhatL:",split[1:])
#             client.publish("led",int(split[1:]))
#         if split[0] == 'P':
#             print("CapnhatP:", split[1:])
#             client.publish("pump", int(split[1:]))
#     print(splitData)

def publishfan(data):
    client.publish("fan",data);
# def readSerial():
#     bytesToRead = ser.inWaiting()
#     if (bytesToRead > 0):
#         global mess
#         mess = mess + ser.read(bytesToRead).decode("UTF-8")
#         while ("#" in mess) and ("!" in mess):
#             start = mess.find("!")
#             end = mess.find("#")
#             processData(mess[start:end + 1])
#             if (end == len(mess)):
#                 mess = ""
#             else:
#                 mess = mess[end+1:]
# def uart_write(data):
#     ser.write((str(data) + '#' ).encode())
#     return


var = 0
index = 0
#portName = getPort()

#if portName != "None":
#    ser = serial.Serial(port=portName, baudrate=115200)

#print(ser)
while True:
    if var == 20:
        # readSerial()
        index += var
        new_row = { "index" : var,"humid": humid, "temp": temp, "light": light, "human": human, "fan": fan}
        df = df.append(new_row, ignore_index=True)
        df.to_csv("data.csv", index=False)
        var = 0
        on_off = on_off_command()
        publishfan(on_off)
        
    var += 1
    time.sleep(1)
    

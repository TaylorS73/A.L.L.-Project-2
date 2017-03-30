import sqlite3
import time, datetime, random
import json
    
def connect_db():
    conn = sqlite3.connect("database.db")
    c = conn.cursor()

def create_table():
    c.execute('CREATE TABLE IF NOT EXISTS "Buildings"(atmid INT, name TEXT, Coordinates REAL)')

def data_entry():
    c.execute("INSERT INTO buildings VALUES(1, 'Alan Berry', '52.4080437,-1.5078962,17z'")
    conn.commit()
    c.close()
    conn.close()

def read_from_db():
    buildingid = 5
    conn = sqlite3.connect("database.db")
    c = conn.cursor()
    c.execute("SELECT lat,long FROM Buildings WHERE buildingid= '%s'" % buildingid)
    print(c.fetchall())
    
##connect_db()
##create_table()
##data_entry()
read_from_db()

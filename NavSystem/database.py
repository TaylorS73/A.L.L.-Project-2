import sqlite3
import time
import datetime
import random

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
    c.execute("SELECT * FROM
    
create_table()
data_entry()

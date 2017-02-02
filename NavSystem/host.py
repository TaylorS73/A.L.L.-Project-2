import sqlite3, os, os.path, cherrypy


class host():
    conn = sqlite3.connect('navsys.db')
    @cherrypy.expose
    def index(self):
        return open('index.html')

if __name__ == '__main__':
    cherrypy.quickstart(host(),config={

        '/css':
        { 'tools.staticdir.on':True,
          'tools.staticdir.dir': "/css"
        },
    })

from flask import Flask, request
from flask_cors import CORS
from db import database
import json
import pymysql

db=database()
#from flask_cors import CORS
app = Flask(__name__)
CORS(app)

#login
@app.route('/',methods=["GET"])
def Index():
    log=request.args.get('log')
    pas=request.args.get('pass')
    res = db.verificar(log,pas)
    js= json.dumps(res)
    return res

    
#en esta seccion vienen las interacciones con habitaciones //....\\   {
@app.route('/habit',methods=["GET"])
def Habitaciones():
    res = db.habitaciones()
    return res

@app.route('/habitDel',methods=["DELETE"])
def HabitDel():
    num=request.data
    res = db.habitacionDel(eval(num))
    return res


@app.route('/habitEdit',methods=["POST"])
def habitEdit():
    res=request.data
    iden=eval(res)['idi']
    res=eval(res)['data']
    num=res['numero']
    pis=res['piso']
    des=res['descripcion']
    car=res['caracteristicas']
    pre=res['precio']
    est=res['estado']
    tip=res['tipo']
    r = db.habitacionEd(iden,num,pis,des,car,pre,est,tip)
    return r


@app.route('/habitAdd',methods=["GET","POST"])
def HabitacionesAdd():
    res=request.args.get('data')
    num=eval(res)['numero']
    pis=eval(res)['piso']
    des=eval(res)['descripcion']
    car=eval(res)['caracteristicas']
    pre=eval(res)['precio']
    est=eval(res)['estado']
    tip=eval(res)['tipo']
    r=db.habitacionAg(num,pis,des,car,pre,est,tip)
    return r

#   }



#en esta seccion vienen las interacciones con de Trabajador //....\\   {
@app.route('/worker',methods=["GET"])
def worker():
    res = db.trabajadores()
    return res

@app.route('/workerDel',methods=["DELETE"])
def workertDel():
    num=request.data
    res = db.trabajadoresDel(eval(num))
    return res


@app.route('/workerEdit',methods=["POST"])
def workerEdit():
    res=request.data
    iden=eval(res)['idi']
    res=eval(res)['data']

    nombre=res['nombre']
    apellidoP=res['apellidoP']
    apellidoM=res['apellidoM']
    tipo=res['tipo']
    documento=res['documento']
    direccion=res['direccion']
    telefono=res['telefono']
    mail=res['mail']
    acceso=res['acceso']
    usuario=res['usuario']
    password=res['password']
    estado=res['estado']
    r = db.trabajadoresEd(iden,nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado)
    return r


@app.route('/workerAdd',methods=["POST"])
def workerAdd():
    res=request.data
    res=eval(res)['data']
    nombre=res['nombre']
    apellidoP=res['apellidoP']
    apellidoM=res['apellidoM']
    tipo=res['tipo']
    documento=res['documento']
    direccion=res['direccion']
    telefono=res['telefono']
    mail=res['mail']
    acceso=res['acceso']
    usuario=res['usuario']
    password=res['password']
    estado=res['estado']
    r=db.trabajadoresAg(nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado)
    return r
    
#   }


@app.route('/prueva',methods=["POST"])
def prueva():
    res=request.data
    #r = json.dump(res)
    print(eval(res)['data'])
    return res





if __name__ == '__main__':
    app.run(port =3000, debug= True)
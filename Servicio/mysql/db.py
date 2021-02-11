import pymysql
import json

class database():

    def __init__(self):
        print("se inicio correctamente")
        self.db = pymysql.connect("bgxis7kwzhrlsmskr6vs-mysql.services.clever-cloud.com","ujciiquvqurxk7da","lLRyKN4cFzt7dhVe7AVi","bgxis7kwzhrlsmskr6vs")
        self.cursor = self.db.cursor()
    #Login
    def verificar(self,log,pas):
        self.cursor.execute("SELECT  `nombre`,`mail`,`estado` FROM `trabajador`  WHERE `login`='{}' and `pass`='{}'".format(log,pas))
        data = self.cursor.fetchall()
        if data:
            js={ 
                "nombre": data[0][0], 
                "mail": data[0][1],
                "estado": data[0][2],
            }
            res = json.dumps(js)
            return res
        else :
            js={ 
                "error":"ocurrio un error" 
            }
            res = json.dumps(js)
            return res

    #Habitaciones{
    def habitaciones(self):
        try:
            cursor = self.db.cursor()
            habis=[]
            cursor.execute("SELECT * FROM `habitacion`")
            data = cursor.fetchall()
            for hab in data :
                habis.append({"numero":hab[0],"piso":hab[1],"descripcion":hab[2],"caracteristicas":hab[3],"precio":hab[4],"estado":hab[5],"tipo":hab[6]})
            res = json.dumps(habis)
            return(res)
        except:
            return "Ocurrio Un Error"

    def habitacionAg(self,num,pis,des,car,pre,est,tip):
        try:
            sql="INSERT INTO `habitacion`(`numero`, `piso`, `des`, `car`, `precio`, `estado`, `tipo`) VALUES ({0},'{1}','{2}','{3}',{4},'{5}','{6}')".format(str(num),str(pis),str(des),str(car),str(pre),str(est),str(tip))
            self.cursor.execute(sql)
            self.db.commit()
            return "Agregado"
        except:
            return "Ocurrio un error"

    def habitacionDel(self,num):
        try:
            sql="DELETE FROM `habitacion` WHERE `numero`={0}".format(str(num))
            self.cursor.execute(sql)
            self.db.commit()
            return "Eliminado"
        except:
            return "Ocurrio un error"

    def habitacionEd(self,iden,num,pis,des,car,pre,est,tip):
        try:
            cursor = self.db.cursor()
            sql="UPDATE `habitacion` SET `numero`={0},`piso`='{1}',`des`='{2}',`car`='{3}',`precio`={4},`estado`='{5}',`tipo`='{6}' WHERE `numero`={7}".format(num,pis,des,car,pre,est,tip,iden)
            cursor.execute(sql)
            self.db.commit()
            return "Actualizado"
        except:
            return "Ocurrio un error"
    #}
    #trabakadores{
    def trabajadores(self):
        try:
            cursor = self.db.cursor()

            habis=[]
            cursor.execute("SELECT * FROM `trabajador`")
            data = cursor.fetchall()
            for hab in data :
                habis.append({"nombre":hab[0],"apellidoP":hab[1],"apellidoM":hab[2],"tipo":hab[3],"documento":hab[4],"direccion":hab[5],"telefono":hab[6],"mail":hab[7],"acceso":hab[8],"usuario":hab[9],"password":hab[10],"estado":hab[11]})
            res = json.dumps(habis)
            return(res)
        except:
            return "Ocurrio Un Error"

    def trabajadoresAg(self,nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado):
        try:
            sql="INSERT INTO `trabajador`(`nombre`, `ap1`, `ap2`, `tipo`, `doc`, `dir`, `tel`, `mail`, `acceso`, `login`, `pass`, `estado`) VALUES ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}')".format(nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado)
            self.cursor.execute(sql)
            self.db.commit()
            return "Agregado"
        except:
            return "Ocurrio un error"

    def trabajadoresDel(self,num):
        try:
            sql="DELETE FROM `trabajador` WHERE `doc`='{0}'".format(str(num))
            self.cursor.execute(sql)
            self.db.commit()
            return "Eliminado"
        except:
            return "Ocurrio un error"

    def trabajadoresEd(self,iden,nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado):
        try:
            cursor = self.db.cursor()
            sql="UPDATE `trabajador` SET `nombre`='{0}',`ap1`='{1}',`ap2`='{2}',`tipo`='{3}',`doc`='{4}',`dir`='{5}',`tel`='{6}',`mail`='{7}',`acceso`='{8}',`login`='{9}',`pass`='{10}',`estado`='{11}' WHERE `doc`='{12}'".format(nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado,iden)
            cursor.execute(sql)
            self.db.commit()
            return "Actualizado"
        except:
            return "Ocurrio un error"
    #}


#db=database()
#r=db.habitacionAg(4,"4","4","4",4,"Disponible","Matrimonial")
#print(r)

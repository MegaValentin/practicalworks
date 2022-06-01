# %%
import random
import numpy as np
import csv             
#Procedimiento
contenido = np.zeros(shape=(3,9),dtype=int)
valores_norepetidos = []
cartones = []

def contenidoCarton(carton,insertados):
    #Es funcion genera numeros aletorias ordenados por decenas
    f= 0
    c= 0
    desde=1
    hasta= 10

    while not(c >= 9):
        f= 0
        while not(f >= 3):
            numero = random.randrange(desde,hasta)
            
            if numero not in insertados:
                carton[f,c] = numero 
                insertados.append(numero)
                f = f+1
        c=c+1
        desde=desde+10
        hasta=hasta+10

def detectorDeCeros(posicion):
    #verifico que no tenga 3 espacios vacios por columna
    c = posicion
    f = 0
    contador = 0
    while not(f >= 3):
        if (contenido[f, c] == 0):
            contador += 1
        f = f +1
    if (contador < 2):
        return True
    else:
        False    
       
def insertarVacios(variable):
    #Ingreso 4 espacios vacios por fila, caracterizados por ceros
    f = 0
    inserciones = 0
    vacio = 0
    while not(f >=3):
        
        while not(inserciones >= 4):
            posicion = random.randrange(0,9)
            detector_cero = detectorDeCeros(posicion)
            if (variable[f, posicion] != vacio and detector_cero):
                variable[f, posicion] = vacio
                inserciones += 1
        inserciones = 0        
        f += 1

def generadorDeCartones(numero):
    contador = 0
    contenedor_cartones = []
    
    for i in range(numero):
        if contador == 3:
            valores_norepetidos.clear()
            contador= 0

        contenidoCarton(contenido,valores_norepetidos)
        insertarVacios(contenido)
        for i in contenido:
            contenedor_cartones.append(i)
        contador += 1
        # contenedor_cartones.append(contenido)
        with open('bingo.csv', 'w') as f:
            writer = csv.writer(f)
            # writer.writerows(contenido)
            writer.writerows(contenedor_cartones)
            print("--------------------------------")
            print(contenido)
        
generadorDeCartones(10)
# %%

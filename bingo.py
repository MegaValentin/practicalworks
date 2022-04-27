
# %%
from pprint import pprint as pp
import random
import numpy as np
import random

    
               
#Procedimiento
contenido = np.zeros(shape=(3,9),dtype=int)

def contenidoCarton(x):
    #Es funcion genera numeros aletorias ordenados por decenas
    f= 0
    c= 0
    desde=1
    hasta= 9

    while not(c >= 9):
        f= 0
        while not(f >= 3):
            numero = random.randrange(desde,hasta)
            x[f,c] = numero
            f = f+1
        c=c+1
        desde=desde+10
        hasta=hasta+10
        
    #Salida


contenidoCarton(contenido)
print(contenido)

# %%
from pprint import pprint as pp
import random

def numerosAleatorios():
    import pprint as pp
    import random
    #Esta funcion genera una matriz de 3x9 en la que se completan con numeros aleatorios

    mis_numeros = [ x for x in range(1,101)]
    cartones = {}
    fila= []

    for i in range(3):
        a = random.sample(mis_numeros, 9)
        fila.append(a)
        
    
    cartones[i] = fila
    
    return fila
pp(numerosAleatorios())



# %%
from pprint import pprint as pp
def generadorDeCartones(numero):
    #Esta funcion genera la cantidad de cartones que el usuario quiera#
    #-El numero pasado por parametro va a ser la cantidad de cartones que se van a imprimir.

    cartones = {}
    fila =[]

    fila = [0 for x in range(9)]
    for i in range(1, numero+1):
        cartones[i]=[fila for x in range(3)]
    return(cartones)
pp(generadorDeCartones(10))
# %%

#%%
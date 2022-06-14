import random
from datetime import datetime

from flask import redirect, render_template

def horaDeLaPartida():
    
    hora = datetime.now() 

    horaactual=datetime.strftime(hora,'%d/%m/%Y %H:%M:%S')

    print(horaactual)

def nombreUsuario():
    nombre = ""
    nombre = input("ingrese un nombre de usuario: ")

    print(f'Hola {nombre}. ¡Bienvenido a Guess The Number!')

def randomDe5Numeros(valorMaximo):
    
    """Genera una lista de 5 elementos aleatorios.
    Estos 5 elementos seran los que el usuario debera adivinar"""

    numerosAAdivinar = []
    rango=0
    cantidadDeElemen = 5
    
    while rango < cantidadDeElemen:

        numerosRandom = (random.randint(0, valorMaximo))
        
        if numerosRandom not in numerosAAdivinar:
            numerosAAdivinar.append(numerosRandom)
            rango+=1
    
    return numerosAAdivinar

def numerosIngresadosPorElUsuario():
    
    """Pide al usuario que ingrese los valores que queria en un rango de 0 
    a 10 desde la posicion 1 a la posicion 5"""

    numerosIngresados = []
    rango = 0
    cantidadDeElemen = 5
    
    while rango < cantidadDeElemen:

        numerosDelUsuario = int(input("ingrese un numero entre 0 al 10 : "))

        
        if numerosDelUsuario < 11:
            if numerosDelUsuario not in numerosIngresados:
                numerosIngresados.append(numerosDelUsuario)
                rango +=1
            else:
                print("No es valido ingresar numeros iguales")
            
        else:
            print("Debes colocar una cifra en el rango solicitado")
        
    
    return numerosIngresados






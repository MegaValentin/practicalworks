#%%
import os
from asyncore import write


texto1 = "textos/germana.txt"
texto2 = "textos/los_raros.txt"
texto3 = "textos/pan_y_cebolla.txt"

#funcion para abrir el archivo txt
def abrirArchivoTxt(archivo):
    with open(archivo, 'r', encoding="utf-8") as f:
        contenido = f.read().lower()

    return contenido

def contenedorPalabras(lista=[]):
    diccPalabras = {}

    #palabras desestimadas 
    desestimarVocalesSolas = ['a','e','i','o','u',]
    desestimasPreposiciones = ['ante', 'bajo', 'cabe', 'con', 
    'contra', 'de', 'desde', 'durante', 'en', 'entre',
    'hacia', 'hasta', 'mediante', 'para', 'por', 'según', 
    'sin', 'so', 'sobre', 'tras', 'versus', 'vía']
    desestimarNumeros = ['0','1','2','3','4','5','6','7','8','9']
    desestemiarPronombres = ['yo', 'tú', 'él', 'usted', 'ustedes', 'nosotros',
     'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'me', 'te', 'nos', 
     'se','mi', 'mis', 'mío', 'mía', 'míos', 'mías', 'tu', 'tus', 'tuyo', 'tuya',
      'tuyos', 'tuyas', 'su','sus', 'suyo', 'suya', 'suyos', 'suyas', 'nuestro', 
      'nuestra', 'nuestros', 'nuestras', 'vuestro', 'vuestra', 'vuestros', 
      'vuestras', 'este', 'ese', 'aquél', 'esta', 'esa', 'aquella', 'estos', 'esos', 'aquellos',
       'estas', 'esas', 'aquellas', 'esto', 'eso', 'aquello', 'qué', 'quién', 
       'quiénes', 'cuál', 'cuáles', 'cuánto', 'cuántos', 'cuánta', 'cuántas', 'dónde', 'cómo',
       'mucho', 'muchos', 'mucha', 'muchas', 'poco', 'pocos', 'poca', 'pocas', 'tanto', 'tantos',
        'tanta', 'tantas', 'bastante', 'bastantes', 'demasiado', 'demasiados', 'demasiada',
        'demasiadas', 'alguno', 'algunos', 'alguna', 'algunas', 'ninguno', 'ninguna', 'algo', 'nada']
    

    #junto las desestimaciones en una lista
    desestimarTodo = map(lambda x: x.lower(), desestimarVocalesSolas, desestimasPreposiciones , desestimarNumeros, desestemiarPronombres)
    palabrasDesestimadasArchivo = [desestimarTodo]

    archivos = [abrirArchivoTxt(texto1), abrirArchivoTxt(texto2), abrirArchivoTxt(texto3)]
    palabrasEnArchivo = ''.join(archivos).lower()
    separarPalabras = palabrasEnArchivo.split()

    for palabra in palabrasDesestimadasArchivo:
        #si las palabras desestimadas se encuentran en la lista las remuevo
        if palabra in separarPalabras:
            separarPalabras.remove(palabra)
    
    for i in lista:
        if i in separarPalabras:
            separarPalabras.remove(i)

    #cantidad de veces que se muestra la palabra
    for index in separarPalabras:
        diccPalabras[index] = diccPalabras.get(index, 0) + 1

    return diccPalabras

    #genero un csv
def generadorCsv():
    import csv
    with open("contadorPalabras.csv", "w") as f:
        x = csv.writer(f)
        for clave, valor in contenedorPalabras().items():
            x.writerow([clave,valor])

generadorCsv()

# %%

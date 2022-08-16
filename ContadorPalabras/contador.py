#%%
def reading_words():
    import os
    
    #alamacena pares clave/valor, palabra/cantidad
    dic_words = {}

    #almacena pares palabra/cantidad pero ordenados por cantidad
    dic_word_sort = {}
    
    try:
        
        #carpeta donde estan los archivos
        path = "C:\Users\MEGA\Documents\GitHub\python-practicalworks\ContadorPalabras"
        pathInput = input("Selecione la ruta del archivo: ")

        #se usa para cambiar el directorio de trabajo actual a la ruta especificada
        os.chdir(path) 
        os.chdir(pathInput)

        #Itero los archivos txt en el directorio
        for file in os.listdir(): 
    
            if file.endswith(".txt"): 

                with open(file, 'r', encoding="utf8") as f: 
                    dictionary_words(f, dic_words)

        #Ordeno las palabra/cantidad por cantidad, de mayor a menor
        for x in sorted(dic_words.items(), key=lambda x: x[1], reverse=True):
            dic_word_sort[x[0]] = x[1]

        return dic_word_sort
        
    except Exception as e:
        print(f"Error al abrir los archivo: {e}")


def dictionary_words(file, dic_words):
    import re

    try:

        #itero lineas del archivo txt
        for linea in file.readlines():

            #separo lineas por espacio
            for x in linea.split():

                #filtro links
                if re.search('(?:http://)?\w+\.\S*[^.\s]', x) == None:

                    #creo palabra nueva iterando cada split y solo añadiendo las que sean letra
                    new_word = "".join(y for y in x if y.isalpha())

                    if len(new_word) > 3:

                        #no repetir palabras que ya esten y añadir las nuevas al diccionario
                        if new_word.lower() not in dic_words.keys():
                            dic_words[new_word.lower()] = linea.count(new_word)
                        else:
                            dic_words[new_word.lower()] += linea.count(new_word)

    except Exception as e:
        print(f"Error al clasficar y ordenar los archivo: {e}")


def write_csv(dic_word_sort):
    import csv

    try:
        #creo archivo csv y escribo en el
        with open('count_words.csv', "w", newline='', encoding="utf8") as File:  
            spamwriter = csv.writer(File)

            #escribo los diccionarios en el csv
            for k, v in dic_word_sort.items():
                spamwriter.writerow([k, v])

    except Exception as e:
        print(f'Error al escribir en el csv: {e}')


if __name__ == '__main__':
    #almacena en una variable el retorno de reading_words
    output_dic = reading_words()

    #le paso la variable a la funcion para que lo escriba en el csv
    write_csv(output_dic)

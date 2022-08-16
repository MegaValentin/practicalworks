#%%
import math
stringList= "64,1 66,4 64 66,7 65,3 64,4 63,9 63 65,4 64,3 68,8 66,6 65,1 64,2 68,5 65,7 65,8 63,1 64,6 63,5 65 66,4 67,3 65,7 64 61,5 64,1 65 63 63,2 66,9 66,3 67 66,1 66,8 65,3 64,4 64,5 63,1 65,5"

# Cuenta y ordena los valores
x = [float(i.replace(",",".")) for i in stringList.split()]
x.sort()


#rangos
cantidadDeRangos = 1+3.322 * math.log10(len(x))
cantidadDeRangos= math.trunc(cantidadDeRangos)+1
print(cantidadDeRangos)
min = x[0]
max = x[-1]
rango= (max - min)/ cantidadDeRangos
print(rango)


#genera una lista de tuplas (intervalos)
cont =0
aux = min
listaRangos=[]
dicRangos={}
while cont<cantidadDeRangos -1 :
    aux2=aux + rango
    listaRangos.append((aux,aux2))
    dicRangos[str(aux)+";"+str(aux2)]=0
    aux= aux +rango
    cont+=1
listaRangos.append((aux,max))
dicRangos[str(aux)+";"+str(max)]=0



for item in x:
    for j in listaRangos:
        if j[0] <= item and item <= j[1]:
            dicRangos[str(j[0])+";"+str(j[1])]+=1
print(dicRangos)


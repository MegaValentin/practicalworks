#%%
import pprint as pp

mis_numeros = [ x for x in range(1,101)]
numero_de_cartones = int(input("Cuantos cartones queres generar: "))
cartones = {}
fila=[0 for x in range(9)]


for i in range(1,numero_de_cartones+1):
    cartones[i] =  [fila for x in range(3)]


pp.pprint(cartones)
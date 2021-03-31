#bithack showcase lul

import timeit
comp=int(input('enter an int:      '))

bithack='''
def bithack(comp):
    calc=comp&1
    if calc<1: det='even'
    elif calc==1: det='odd'
    return det
'''
simpbithack='''
def simpbithack(comp):
    calc=comp&1
    if calc==0: det='even'
    else: det='odd'
    return det
'''
mod2='''
def mod2(comp):
    calc=comp%2
    if calc>1: det='odd'
    elif calc==0: det='even'
    return det
'''
simpmod2='''
def simpmod2(comp):
    calc=comp%2
    if calc>1: det='odd'
    else: det='even'
    return det
'''
import numpy
npand='''
def npand(comp):
    calc=np.logical_and(comp,1)
    if calc==1: det='odd'
    else: det='even'
    return det    
'''

import matplotlib.pyplot as plt
x=numpy.array(['bithack','mod2','npand'])
y=numpy.array([timeit.timeit(stmt=simpbithack),timeit.timeit(stmt=simpmod2),timeit.timeit(stmt=npand)])

plt.yscale('log')
plt.bar(x,y)
plt.show()

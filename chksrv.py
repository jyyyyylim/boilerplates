#############################################
#  NICE CODE ZEACH, BUT PYTHON IS STRONGER  #
#                   -j                      #
#############################################

import requests
import json
import base64

# husk: regex'es first 8 digits of link
# spli: divides husked string into groups of 2

def husk(lk):
    return lk[slice(len(lk)-18, len(lk)-10)]
def spli(buf):
    return [buf[index:index+2]for index in range(0,len(buf),2)] 
def regpick(reg):
    return load['servers'][whilereg]['id']

api='https://api.n.m28.io/endpoint/diepio-4teams/findEach/'
link=str(input('enter the CSL link: '))
buf=spli(husk(link))
buf2=''.join((x[::-1]for x in buf))
decode=(base64.b16decode(buf2)).decode('utf-8')
response=requests.get(api)
load=json.loads(response.text)

whilereg='nul'
while whilereg=='nul':
    region=str(input('enter the CSL region (r1: la | r2: mi | r3: sy | r4: am | r5: sg ):  '))
    if region=='r1' or region=='la': whilereg='vultr-la'
    elif region=='r2' or region=='mi': whilereg='vultr-miami'
    elif region=='r3' or region=='sy': whilereg='vultr-sydney'
    elif region=='r4' or region=='am': whilereg='vultr-amsterdam'
    elif region=='r5' or region=='sg': whilereg='vultr-singapore'
    else: print('enter a valid region code.')

apiretregion=regpick(whilereg)

if apiretregion==decode:
    print('region matches')
elif apiretregion!=decode:
    print('region does not match')















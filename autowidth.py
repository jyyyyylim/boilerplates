#circa may 2021 (c) jy
#prints a neat table of data in a monowidth setting
#only accepts an array object for both inputs

def print_table(column_name,list):
     column_length = [len(column) for column in column_name]
     for item in list:
          for i in range(len(column_name)):
               if len(item[i]) > column_length[i]:
                    column_length[i] = len(item[i])  
     for i in range(len(column_name)):
          print(f'| {column_name[i]+" "*(column_length[i]-len(column_name[i]))} ',end="")
     print("|")
     for item in list:
          for i in range(len(column_length)):
               print(f'| {item[i]+" "*(column_length[i]-len(item[i]))} ',end="")
          print("|")   

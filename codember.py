

entrada = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

count=0

salida = ''

for sign in entrada:
    if sign == '&':
        salida += str(count)
    
    elif sign == '#':
        count += 1
    
    elif sign == '@':
        count -= 1
    
    elif sign == '*':
        count *= count
    
    else:
        continue


print(salida)
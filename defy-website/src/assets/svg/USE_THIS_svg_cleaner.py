import sys

'''
arg 1 = target file
arg 2 = name of output file, and for simplicity name of exported svg function
'''
if len(sys.argv)!=3:
    print('error, not running: need to give both name of target file and name for output file')
else:
    #   read dirty svg file (from command line)
    svg_filename = sys.argv[1]
    with open(svg_filename,'r') as svg_dirty:
        # print(svg_dirty.read())
        lines = svg_dirty.read().split('\n')
        newcontent = ''
        for line in lines:
            # input('\n')
            print(line)
            if '<?xml ' in line: 
                continue
            if '<svg ' in line:
                tmp = line.split('>')[0] + ' width={"20vw"}>'
            if 'style="' in line or "style='" in line:
                # print('caught style=')
                if 'style="' in line:
                    tmp = line.split('style="')[0] + 'style={{' + line.split('style="')[1].split('"')[0] + '}}' + line.split('style="')[1].split('"')[1] + '\n'
                if "style='" in line:
                    tmp = line.split("style='")[0] + 'style={{' + line.split("style='")[1].split("'")[0] + '}}' + line.split("style='")[1].split("'")[1] + '\n'
                # tmp = tmp.replace(':',":'")
                tmp = tmp.replace(': ',": '")
                tmp = tmp.replace(';',"',")
                tmp = tmp.replace('stroke-miterlimit','strokeMiterlimit')
                tmp = tmp.replace('stroke-linecap','strokeLinecap')
                tmp = tmp.replace('stroke-linejoin','strokeLinejoin')
                tmp = tmp.replace('stroke-width','strokeWidth')
                tmp = tmp.replace('font-size','fontSize')
                tmp = tmp.replace('font-family','fontFamily')
                tmp = tmp.replace('text-anchor','textAnchor')
                tmp = tmp.replace('fill-rule','fillRule')
                tmp = tmp.replace('clip-rule','clipRule')
                print(tmp)
                    

            else:
                tmp = line + '\n'
            newcontent += tmp
        # print(lines)
        # print(type(lines))
        #   mend svg file

    # print(newcontent)

    contentToSave = '''
    export function '''+sys.argv[2][0].upper()+sys.argv[2][1:]+'''() {
        return (
            <>

    ''' + newcontent + '''
            </>
        );
    }
    '''
    #   export cleaned svg file with new name
    with open(sys.argv[2]+'.jsx','w') as file:
        file.write(contentToSave)



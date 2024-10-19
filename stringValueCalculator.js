function add(params){
    return params.split(',')
    .map(num => +num.trim())
    .reduce((sum,num)=>sum+num,0)
    }
    const inputValue = '0';
    const result = add(inputValue)
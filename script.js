let data = []



for(let i = 0; i < Infinity; i++){
    let command = prompt('Введите команду');

    if(command == 'add'){
       let dataName = prompt('Введите имя которое хотите добавть');
      console.log(data.push(dataName));
    }else if(command == 'del'){
        let dataName = prompt('Введите имя которое хотите удалить');
        console.log(data.splice(dataName, 1));
    }else if(command == 'stop'){
     break;
    }
}
console.log(data);






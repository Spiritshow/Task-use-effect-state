const names = ["Игорь","Степан","Валахея","Агрона","Сильвия","Мерилл","Агатия"];

const RandomName = () => {
    let name;
    let randId = Math.floor(Math.random()*names.length) 
    name = names[randId];
    console.log(name);
    return(name)
}

export default RandomName;
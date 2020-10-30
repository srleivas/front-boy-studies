myfunction = function([min = 0, max = 5000])
{
    if (max < min) [max, min] = [min, max];
    const ramdom_number = Math.random() * (max - min) + min;
    return Math.floor(ramdom_number);
}

console.log(myfunction([250, 500]));
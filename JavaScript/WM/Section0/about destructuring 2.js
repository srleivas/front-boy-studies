let array = ["a", "b", "c", "d", "e"];

const [ , ...n4] = array;
console.log(n4, "\n");

/* Read next comment first;
 * The function then gets the input and extract using destruct, in this case it
 * extract min and max, which then will be used as parameters;
 * If there's not input, the default value gonna be used;
 */


ramdom = function({min = 0, max = 5000})
{
    ramdom_number = Math.random() * (max - min) + min;
    return Math.floor(ramdom_number);
}

/* Here you pass the object containing max and min, which could be written as:
 *     
 *      const obj = {
 *          max: number;
 *          min: number;
 *      }
 * And passed normally to console: console.log(ramdom(obj);
 * 
 * Although it can be declared dinamically as:
 */
console.log(ramdom({max: 130, min: 500}));
error_treatment = function(error)
{
    throw new Error('Deu ruim negão!!!');
}

name_to_upper = function(person)
{
    try{
        console.log(person.name.toUpperCase() + "!!!");
        console.log("Rapaiz tu n tá ligado...");
    }
    catch(e)
    {
        error_treatment(e);
    }
    // finally
    // {
    //     console.log("Finally!");
    // }
}

const person = {nome: "Julião"}
name_to_upper(person);
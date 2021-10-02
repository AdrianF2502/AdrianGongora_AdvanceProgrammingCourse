var module = "Este es mi modulo";

export default function validateWord(variable, word)
{
    if(variable.includes(word))
    {
        console.log("Validated");
        return true;
    }
    else
    {
        console.log("Validated");
        return false;
    }
}


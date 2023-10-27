// Start Function Calculate
function Calculate(value,type)
{
    // Check the action if it is a number or operator

    if(type === 'number')
    {
        // Screem
        document.getElementById('screem').value +=value;
    }
    else 
    if(type === 'operation')
    {
        if(value === '/')
        {
            document.getElementById('screem').value +=value;
        }
        if(value === '*')
        {
            document.getElementById('screem').value +=value;
        }
        if(value === '-')
        {
            document.getElementById('screem').value +=value;
        }
        if(value === '+')
        {
            document.getElementById('screem').value +=value;
        }
        if(value === '.')
        {
            document.getElementById('screem').value +=value;
        }
        if(value === '=')
        {
           var n = eval(document.getElementById('screem').value)
            document.getElementById('screem').value =n
            
        }
    }

}
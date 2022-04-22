class Helper
{
    static capitalize(str)
    {
        try {
            if (str) {
                // Mettre le premier mot en lettre capitale
                return str.charAt(0).toUpperCase() + str.slice(1);
            }   
        } catch (error) {
            return str;
        }
        return str;
    }
}

export { Helper }
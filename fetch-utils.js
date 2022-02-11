const SUPABASE_URL = 'https://oulietmefshvjsdknixn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91bGlldG1lZnNodmpzZGtuaXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTAyNzcsImV4cCI6MTk2MDAyNjI3N30.xLaRALCsmulIZooLc5FTZDT0SLfAZjEKegSSVtKRgFI';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCharacters() {
    const resp = await client.from('characters').select('*');
    console.log(resp);

    return checkError(resp);
}

export async function getCharacter(id) {
    const resp = await client.from('characters').select('*').eq('id', id).single();

    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

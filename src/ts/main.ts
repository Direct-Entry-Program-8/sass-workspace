const sthTheme = document.querySelector<HTMLInputElement>('#sth-theme input')!;

sthTheme.addEventListener('input', ()=>{
    document.body.classList.remove('dark', 'white');
    if (sthTheme.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.add('white');
    }
});
const sthTheme = document.querySelector<HTMLInputElement>('#sth-theme input')!;

sthTheme.addEventListener('input', ()=>{
    document.body.classList.remove('dark', 'white');
    if (sthTheme.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.add('white');
    }
});

const sltColor = document.querySelector<HTMLSelectElement>('select')!;
const divStage = document.querySelector<HTMLDivElement>('#stage')!;

divStage.classList.add(sltColor.value);

sltColor.addEventListener('input', ()=> {
    for(const styleClass of divStage.classList){
        divStage.classList.remove(styleClass);
    }
    divStage.classList.add(sltColor.value);
});
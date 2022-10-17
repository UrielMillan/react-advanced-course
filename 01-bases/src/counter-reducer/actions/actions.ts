//Ttype es identico a interface, la diferencia es que con type puedes declarar typos de objetos especificos
export type CounterAction = 
    | {type: 'increaseBy', payload:{ value: number }}
    | {type: 'reset'}

//Actions creators
export const doReset = ():CounterAction => ({
    type: 'reset'
});

export const doIncreaseBy = (value: number):CounterAction =>({
    type:'increaseBy',
    payload:{value}
})


